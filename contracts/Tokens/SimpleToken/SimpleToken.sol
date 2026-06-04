// SPDX-License-Identifier: MIT

/**
 * DAppCrypto
 * GitHub Website: https://dappcrypto.github.io/
 * GitHub: https://github.com/dappcrypto
 */

/**
 * SimpleToken is a simple token contract without cheating
 * This contract contains the minimum functions required for the token to operate.
 * Read Contract: _decimals, decimals, _name, name, _symbol, symbol, allowance, balanceOf, getOwner, totalSupply, owner.
 * Write Contract: transfer, transferFrom, approve, decreaseAllowance, increaseAllowance, burn.
 * Write Contract, only for owner: renounceOwnership, transferOwnership.
 * Token created using DAppCrypto https://dappcrypto.github.io/
 */

 /**
 * Important! Always check liquidity lock before investing
 * Important! Always check if the token address is available in DAppCrypto https://dappcrypto.github.io/
 */

pragma solidity >=0.8.0;

import "./IERC20.sol";
import "./Token.sol";

contract SimpleToken is IERC20, Token {
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

        //string memory t_name = sArr[1];
        //string memory t_symbol = sArr[2];
        //uint8 t_decimals = uint8(nArr[1]);
        //uint256 t_totalSupply = nArr[2];
        //address addressOwner = aArr[1];

        setName(sArr[1]);
        setSymbol(sArr[2]);
        setDecimals(uint8(nArr[1]));
        setTotalSupply(nArr[2]);
        setBalance(aArr[1], nArr[2]);

        transferOwnership(aArr[1]);

        emit Transfer(address(0), aArr[1], nArr[2]);

        return true;
    }
}

interface iToken {
    function initToken(uint256[] memory nArr, address[] memory aArr, string[] memory sArr) external returns (bool);
}

contract DeployContract {

    function deploy (uint256[] memory nArr, address[] memory aArr, string[] memory sArr) external returns (address) {
        require(nArr[0] == 0, "type SimpleToken");
        SimpleToken SimpleToken1 = new SimpleToken();
        address aToken = address(SimpleToken1);
        iToken(aToken).initToken(nArr, aArr, sArr);
        return aToken;
    }

}