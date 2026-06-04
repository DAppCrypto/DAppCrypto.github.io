// SPDX-License-Identifier: MIT

/**
 * TaxSwap - Token Tax Management
 * Read Contract: getTaxData, checkTaxIgn, getFunNum, isActiveLP.
 * Write Contract, only for owner: setTax, setTaxIgn.
 * Token created using DAppCrypto https://dappcrypto.github.io/
 * GitHub: https://github.com/DAppCrypto
 */

pragma solidity >=0.8.0;

import "./Ownable.sol";

contract TaxSwap is Ownable {

    uint256[] maxsTaxSum = [0,0]; // maxs Tax Sum in basis points [Sell,Buy] 
    uint256[] maxsTaxAcc = [0,0]; // maxs Tax Acc [Sell,Buy]

    mapping(uint => uint256[]) public mBPTax;
    mapping(uint => address[]) public mAddrTax;

    mapping(address=>bool) mIgnTax;

    function initTax(uint256[] memory maxsTax) internal returns (bool) {

        maxsTaxSum[0] = maxsTax[0];
        maxsTaxSum[1] = maxsTax[1];

        TaxSwap.maxsTaxAcc[0] = maxsTax[2];
        TaxSwap.maxsTaxAcc[1] = maxsTax[3];
        return true;
    }

    function getTaxSum(uint256[] memory _psTax) internal pure returns (uint256) {
        uint256 TaxSum = 0;
        for (uint i; i < _psTax.length; i++) {
            TaxSum = TaxSum+_psTax[i];
        }
        return TaxSum;
    }

    // typeTax, 0 -> Tax Sell; 1 -> Tax Buy;
    // _BPsTax - Tax Arr in basis points
    // _addresses - Tax Arr addresses
    function setTax(uint typeTax, uint256[] memory _BPsTax, address[] memory _addresses) public onlyOwner {
        require(
            typeTax < 2 && 
            _BPsTax.length == _addresses.length && 
            _BPsTax.length <= maxsTaxAcc[typeTax] && 
            getTaxSum(_BPsTax) <= maxsTaxSum[typeTax] 
            , "err");

        mBPTax[typeTax] = _BPsTax;
        mAddrTax[typeTax] = _addresses;
    }
    
    function getTaxData(address aIgn) external view returns (bool[] memory, uint256[] memory, uint256[] memory, uint256[] memory, uint256[] memory, address[] memory, address[] memory) {
        bool[] memory _bArr = new bool[](2);
        //_bArr[0] = mLP[aLP];
        _bArr[0] = mIgnTax[aIgn];
        return (_bArr, maxsTaxSum, maxsTaxAcc, mBPTax[0], mBPTax[1], mAddrTax[0], mAddrTax[1]);
    }

    function checkTaxIgn(address _address) external view returns (bool) {
        return mIgnTax[_address];
    }

    // _bool:true -> ignore tax for address
    function setTaxIgn(address[] memory _addresses, bool[] memory _bool) public onlyOwner {
        require(_addresses.length == _bool.length, "err");
        for (uint i; i < _addresses.length; i++) {
            mIgnTax[_addresses[i]] = _bool[i];
        }
    }

    function getFunNum(address _address, string memory nameFun) public view returns (uint256) {
        (bool success, bytes memory result) = address(_address).staticcall(abi.encodeWithSignature(nameFun));

        if (success && result.length > 0) {
            return abi.decode(result, (uint256));
        } else {
            return 0;
        }
    }

    function isActiveLP(address _address) public view returns (bool) {
        if(getFunNum(_address, "price0CumulativeLast()") > 0){
            return true;
        } else {
            return false;
        }
    }
}