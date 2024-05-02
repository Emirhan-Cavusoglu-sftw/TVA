// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

import "./TSD.sol";
contract TsdFactory {
    address[] public tsds;
    TSD public tsd;
    uint256 public tsdCounter;
    
    function createTSD(
        string memory _userName,
        string memory _projectName,
        string memory _projectDescription,
        string memory _dataURI
    ) public {
        tsd = new TSD(_userName, _projectName, _projectDescription, _dataURI);
        tsds.push(address(tsd));
        tsdCounter++;
    }
    
   // function getTsds() public  returns(address[] memory){
   //     return tsds;
   // }
}