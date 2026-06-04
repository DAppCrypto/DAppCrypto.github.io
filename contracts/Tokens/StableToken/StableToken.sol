// SPDX-License-Identifier: MIT

/**
 * DAppCrypto
 * GitHub Website: https://dappcrypto.github.io/
 * GitHub: https://github.com/dappcrypto
 */

/**
 * StableToken - has a fixed price in the parent token.
 * The smart contract has the function of swap parent tokens and stable tokens.
 * Parent tokens are held in a smart contract.
 * Read Contract: _decimals, decimals, _name, name, _symbol, symbol, allowance, balanceOf, getOwner, totalSupply, owner, getTaxData, checkTaxIgn, getFunNum, isActiveLP.
 * Write Contract: transfer, transferFrom, approve, decreaseAllowance, increaseAllowance, burn.
 * Write Contract, only for owner: renounceOwnership, transferOwnership, setTax, setTaxIgn, setTaxLP.
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

contract StableToken is Ownable, IERC20, TaxSwap, Token {
    bool private inToken = false;
    address public aPT; // address Parent Token
    uint256 public priceST = 0; // price Stable Token
    bool public taxLP = false;

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

        transferOwnership(aArr[1]);

        aPT = aArr[2];
        priceST = nArr[7];

        require(getAmountST(10**IERC20(aPT).decimals()) > 0 && getAmountPT(10**IERC20(address(this)).decimals()) > 0, "price0");

        return true;
    }

    function setTaxLP(bool _status) public onlyOwner {
        taxLP = _status;
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
                !mIgnTax[recipient] && 
                taxLP
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

    function _mint(address account, uint256 amount) internal {
        require(account != address(0), "Mint to the zero address");

        setTotalSupply(_totalSupply+amount);
        setBalance(account, _balances[account]+amount);
        emit Transfer(address(0), account, amount);
    }

    function getSTData() external view returns (address, uint256, uint256, uint256, uint256, bool) {
        uint256 pricePT = getAmountST(10**IERC20(aPT).decimals());
        return (aPT, priceST, pricePT, getTaxSum(mBPTax[0]), getTaxSum(mBPTax[1]), taxLP);
    }

    function getAmountST(uint256 _amountPT) public view returns (uint256) {
        return (10**IERC20(aPT).decimals())*_amountPT/priceST;
    }

    function getAmountPT(uint256 _amountST) public view returns (uint256) {
        return priceST*_amountST/(10**IERC20(address(this)).decimals());
    }

    // t: 0 - swap ST to PT(sell); 1 - swap PT to ST (buy);
    function getAmount(uint256 t, uint256 _amountIn) public view returns (uint256) {
        if(t==0){ return getAmountPT(_amountIn); }
        if(t==1){ return getAmountST(_amountIn); }
        return 0;
    }

    // t: 0 - swap ST to PT(sell); 1 - swap PT to ST (buy);
    function swap(uint256 t, uint256 _amountIn) external returns (bool) {
        require(t < 2, "err");
        if(t==0){
            return swapST(_amountIn);
        } else {
            return swapPT(_amountIn);
        }
    }

    // 1 - swap PT to ST (buy)
    function swapPT(uint256 _amountIn) public returns (bool) {
        uint256 t = 1;

        // Get PT
        require(IERC20(aPT).transferFrom(_msgSender(), address(this), _amountIn), "err");

        // Calculate ST
        uint256 amountST = getAmount(t, _amountIn);
        uint256 amountRST = amountST;

        // Send Tax in ST
        uint256 amountTax = 0;
         if (mBPTax[t].length > 0 && !mIgnTax[_msgSender()]) {
                for (uint i; i < mBPTax[t].length; i++) {
                    amountTax = amountST/10000*mBPTax[t][i];
                    amountRST = amountRST-amountTax;
                    if(mAddrTax[t][i] == address(0)){ // burn
                        //setTotalSupply(_totalSupply-amountTax);
                        emit Transfer(address(0), address(0), amountTax);
                    } else {
                        _mint(mAddrTax[t][i], amountTax);
                    }
                }
            }

        // Send ST user
        _mint(_msgSender(), amountRST);

        return true;
    }

    // t: 0 - swap ST to PT(sell); 1 - swap PT to ST (buy);
    function swapST(uint256 _amountIn) public returns (bool) {
        uint256 t = 0;

        uint256 amountST = _amountIn;
        uint256 amountRST = amountST;

        // Send Tax in ST
        uint256 amountTax = 0;
         if (mBPTax[t].length > 0 && !mIgnTax[_msgSender()]) {
                for (uint i; i < mBPTax[t].length; i++) {
                    amountTax = amountST/10000*mBPTax[t][i];
                    amountRST = amountRST-amountTax;
                    if(mAddrTax[t][i] == address(0)){ // burn
                        _burn(_msgSender(), amountTax);
                    } else {
                        require(IERC20(address(this)).transferFrom(_msgSender(), mAddrTax[t][i], amountTax), "err");
                    }
                }
            }

        // Burn ST
         _burn(_msgSender(), amountRST);
        
        // Calculate PT
        uint256 amountPT = getAmount(t, amountRST);

        // Send PT
        require(IERC20(aPT).transfer(_msgSender(), amountPT), "err");

        return true;
    }

}

interface iToken {
    function initToken(uint256[] memory nArr, address[] memory aArr, string[] memory sArr) external returns (bool);
}

contract DeployContract {

    function deploy (uint256[] memory nArr, address[] memory aArr, string[] memory sArr) external returns (address) {
        require(nArr[0] == 2, "type StableToken");
        StableToken StableToken1 = new StableToken();
        address aToken = address(StableToken1);
        iToken(aToken).initToken(nArr, aArr, sArr);
        return aToken;
    }

}