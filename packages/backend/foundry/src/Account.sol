// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@account-abstraction/core/EntryPoint.sol";
import "@account-abstraction/interfaces/IAccount.sol";

import "./TSD.sol";

contract Account is IAccount {
    uint256 public tsdCounter;
    address public owner;
    string public userName;
    TSD public tsd;
    address[] public tsds;

    event Log(string message);

    constructor(address _owner, string memory _userName) {
        owner = _owner;
        userName = _userName;
    }

    function validateUserOp(
        PackedUserOperation calldata,
        bytes32,
        uint256
    ) external virtual override returns (uint256 validationData) {
        return 0;
    }

    function createTSD(
        string memory _projectName,
        string memory _projectDescription,
        string memory _dataURI
    ) public {
        tsd = new TSD(userName, _projectName, _projectDescription, _dataURI);
        tsds.push(address(tsd));
        tsdCounter++;
    }

    function getTsds() public view returns (address[] memory) {
        return tsds;
    }
}


