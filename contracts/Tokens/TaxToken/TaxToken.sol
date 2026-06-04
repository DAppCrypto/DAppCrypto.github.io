// SPDX-License-Identifier: MIT

/**
 * DAppCrypto
 * GitHub Website: https://dappcrypto.github.io/
 * GitHub: https://github.com/dappcrypto
 */

/**
 * TaxToken - the token supports tax on purchases and sales within a specified percentage range.
 * Read Contract: _decimals, decimals, _name, name, _symbol, symbol, allowance, balanceOf, getOwner, totalSupply, owner, getTaxData, checkTaxIgn, getFunNum, isActiveLP.
 * Write Contract: transfer, transferFrom, approve, decreaseAllowance, increaseAllowance, burn.
 * Write Contract, only for owner: renounceOwnership, transferOwnership, setTax, setTaxIgn.
 * Token created using DAppCrypto https://dappcrypto.github.io/
 */

 /**
 * Important! Always check liquidity lock before investing
 * Important! Always check if the token address is available in DAppCrypto https://dappcrypto.github.io/
 */

pragma solidity >=0.8.0;

import "./IERC20.sol";
import "./Ownable.sol";
import "./Token.sol";
import "./TaxSwap.sol";

contract TaxToken is Ownable, IERC20, TaxSwap, Token {
    bool private inToken = false;
    uint256 public version=3;

    function getVersion() public view returns (uint256) {
        return version;
    }

    constructor() {}

    // Token initialization is only available once
    function initToken(uint256[] memory nArr, address[] memory aArr, string[] memory sArr) public onlyOwner returns (bool) {
        require(inToken == false, "err");
        inToken = true;

        uint256[] memory maxsTax = new uint256[](4);
        maxsTax[0] = nArr[3];
        maxsTax[1] = nArr[4];
        maxsTax[2] = nArr[5];
        maxsTax[3] = nArr[6];
        require(
            maxsTax[0] <= 10000 && 
            maxsTax[1] <= 10000 && 
            maxsTax[2] <= 10 && 
            maxsTax[3] <= 10
            , "err");
        initTax(maxsTax);

        setName(sArr[1]);
        setSymbol(sArr[2]);
        setDecimals(uint8(nArr[1]));
        setTotalSupply(nArr[2]);
        setBalance(aArr[1], nArr[2]);

        transferOwnership(aArr[1]);

        emit Transfer(address(0), aArr[1], nArr[2]);

        return true;
    }

    function _transfer(address sender, address recipient, uint256 amount) internal override {
        require(sender != address(0), "Transfer from the zero address");
        require(recipient != address(0), "Transfer to the zero address");
        require(amount <= _balances[sender], "Transfer amount exceeds balance");

        setBalance(sender, _balances[sender]-amount);

            uint256 amountRecipient = amount;
            uint256 amountTax = 0;
            uint256 t = 2;

            if (isActiveLP(recipient)) {
                t = 0;
            } else if (isActiveLP(sender)) {
                t = 1;
            }

            if ( 
                t < 2 && 
                mBPTax[t].length > 0 && 
                !mIgnTax[sender] && 
                !mIgnTax[recipient] 
                ) {
                for (uint i; i < mBPTax[t].length; i++) {
                    amountTax = amount/10000*mBPTax[t][i];
                    amountRecipient = amountRecipient-amountTax;
                    if(mAddrTax[t][i] == address(0)){ // burn
                        setTotalSupply(_totalSupply-amountTax);
                    } else {
                        setBalance(mAddrTax[t][i], _balances[mAddrTax[t][i]]+amountTax);
                    }
                    emit Transfer(sender, mAddrTax[t][i], amountTax);
                }
            }

        setBalance(recipient, _balances[recipient]+amountRecipient);
        emit Transfer(sender, recipient, amountRecipient);
    }

}


interface iToken {
    function initToken(uint256[] memory nArr, address[] memory aArr, string[] memory sArr) external returns (bool);
}

contract DeployContract {

    function deploy (uint256[] memory nArr, address[] memory aArr, string[] memory sArr) external returns (address) {
        require(nArr[0] == 1, "type TaxToken");
        TaxToken TaxToken1 = new TaxToken();
        address aToken = address(TaxToken1);
        iToken(aToken).initToken(nArr, aArr, sArr);
        return aToken;
    }

}