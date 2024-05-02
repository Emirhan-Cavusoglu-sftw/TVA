// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;


contract TSD {
    string public userName;
    string public projectName;
    string public projectDescription;
    string public dataURI;
    
    

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