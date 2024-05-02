const hre = require("hardhat");
const FACTORY_NONCE = 1;
const AF_ADDRESS = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
const EP_ADDRESS = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512";

async function main() {
  const ep = await ethers.getContractAt("EntryPoint", EP_ADDRESS);

  await ep.waitForDeployment();
  const sender = await ethers.getCreateAddress({
    from: AF_ADDRESS,
    nonce: FACTORY_NONCE,
  });
  const [signer0] = await ethers.getSigners();
  const addres0 = await signer0.getAddress();
  const AccountFactory = await hre.ethers.getContractFactory("AccountFactory");
  const initCode = AF_ADDRESS + AccountFactory.interface.encodeFunctionData("createAccount", [addres0]).slice(2);
  const Account = await hre.ethers.getContractFactory("Account");
  // bu userop bundlera gönderilecek 
  const userOp = {
     sender,
     nonce:await ep.getNonce(sender,0),
     initCode,
     callData:Account.interface.encodeFunctionData("increment"),
     accountGasLimits: 100_000,
     preVerificationGas:100_000,
     gasFees: hre.ethers.parseUnits("5","gwei"),
     paymasterAndData:"0x",
     signature:"0x",
  };

  const tx = await ep.handleOps([userOp],addres0);
  const receipt = await tx.wait();
  console.log("Transaction receipt: ", receipt);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
}); // Add closing parenthesis here
