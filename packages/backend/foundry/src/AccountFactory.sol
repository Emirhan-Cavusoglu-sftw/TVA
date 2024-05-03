// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;
import "./Account.sol";
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