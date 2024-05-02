const hre = require("hardhat");

async function main() {
    const ep = await hre.ethers.deployContract("EntryPoint");

    await ep.waitForDeployment();

    

    console.log("EntryPoint deployed to ", ep.target);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
}); // Add closing parenthesis here

