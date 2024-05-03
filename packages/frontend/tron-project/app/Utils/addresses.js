export const testAddress = "TB7T4yaLzYD1mhDp3FgbuzLFmhZdCy1QDH";
export const tsdFactoryAddress = "TQDm4BhgfkiJHo5pSXzad3uspMP2vACA12";
// TCR7Haj8axUtxaWQq8V8hFuEySHmRHnHK9  Shasta
// TB7T4yaLzYD1mhDp3FgbuzLFmhZdCy1QDH  Nile
// https://nile.trongrid.io/
// https://api.shasta.trongrid.io

export const testABI = [
	{
		"inputs": [],
		"name": "retrieve",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "store",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
