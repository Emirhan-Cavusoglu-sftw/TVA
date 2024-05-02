// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@account-abstraction/contracts/core/EntryPoint.sol";
import "@account-abstraction/contracts/interfaces/IAccount.sol";
import "./TSD.sol";
import {ISP} from "@ethsign/sign-protocol-evm/src/interfaces/ISP.sol";
import {Attestation} from "@ethsign/sign-protocol-evm/src/models/Attestation.sol";
import {DataLocation} from "@ethsign/sign-protocol-evm/src/models/DataLocation.sol";

contract Account is IAccount {
    ISP public spInstance = ISP(0x4e4af2a21ebf62850fD99Eb6253E1eFBb56098cD);
    uint64 public schemaId;
    uint256 public tsdCounter;
    address public owner;
    string public userName = "Emojan";
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

   
}

contract AccountFactory {
    event AccountCreated(address account, address owner);
    address[] public accounts;
    mapping(address => address) public ownerToAccount;
    mapping(address => bool) public hasAccount;

    function createAccount(
        address owner,
        string memory userName
    ) public returns (address) {
        require(!hasAccount[owner], "Account already exists");
        Account account = new Account(owner, userName);
        emit AccountCreated(address(account), owner);
        accounts.push(address(account));
        ownerToAccount[owner] = address(account);
        hasAccount[owner] = true;

        return address(account);
    }
}
