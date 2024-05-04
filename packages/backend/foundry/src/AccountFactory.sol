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
    // function that gets all accounts and in all accounts it calls getTsds function and pushes the result to an array
    function getAllTsds() public view returns (address[] memory) {
    // Calculate the total number of TSDs
    uint totalTsdCount = 0;
    for (uint256 i = 0; i < accounts.length; i++) {
        Account account = Account(accounts[i]);
        totalTsdCount += account.getTsds().length;
    }

    // Initialize a single array to store all TSD addresses
    address[] memory allTsds = new address[](totalTsdCount);

    // Copy TSD addresses from all accounts into the single array
    uint256 currentIndex = 0;
    for (uint256 i = 0; i < accounts.length; i++) {
        Account account = Account(accounts[i]);
        address[] memory tsds = account.getTsds();

        for (uint256 j = 0; j < tsds.length; j++) {
            allTsds[currentIndex] = tsds[j];
            currentIndex++;
        }
    }

    return allTsds;
}

}