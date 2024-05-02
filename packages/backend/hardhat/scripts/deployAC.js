const hre = require("hardhat");
async function main() {
    const ac = await hre.ethers.deployContract("Account", ["0x986649720B37F6434b2C65836410eA2b1Bb15d4c","emojan"]);

    await ac.waitForDeployment();

    

    console.log("Account deployed to ", ac.target);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
}); 

