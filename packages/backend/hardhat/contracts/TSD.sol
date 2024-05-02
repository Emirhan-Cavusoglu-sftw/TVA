// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;


contract TSD {
    string public userName;
    string public projectName;
    string public projectDescription;
    string public dataURI;
    // ISP public spInstance=ISP(0x4e4af2a21ebf62850fD99Eb6253E1eFBb56098cD);
    bool public isAttested;

    constructor(
        string memory _name,
        string memory _projectName,
        string memory _projectDescription,
        string memory _dataURI
    ) {
        userName = _name;
        projectName = _projectName;
        projectDescription = _projectDescription;
        dataURI = _dataURI;
        
    }

   
}

