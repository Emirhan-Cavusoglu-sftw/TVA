// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "./ConvertLib.sol";

// This is just a simple example of a coin-like contract.
// It is not standards compatible and cannot be expected to talk to other
// coin/token contracts.

contract MetaCoin {
  mapping(address => uint) balances;

  event Transfer(address _from, address _to, uint256 _value);

  address owner;

  constructor(uint initialBalance)  {
    owner = msg.sender;
    balances[msg.sender] = initialBalance;
  }

  function sendCoin(address receiver, uint amount) public returns (bool sufficient) {
    if (balances[msg.sender] < amount) return false;
    balances[msg.sender] -= amount;
    balances[receiver] += amount;
    emit Transfer(msg.sender, receiver, amount);
    return true;
  }

  function getConvertedBalance(address addr) public view returns (uint){
    return ConvertLib.convert(getBalance(addr), 2);
  }

  function getBalance(address addr) public view returns (uint) {
    return balances[addr];
  }

  function getOwner() public view returns (address) {
    return owner;
  }
}
