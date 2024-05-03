-include .env

deploy:
	forge create --rpc-url $(RPC_URL) --private-key $(PRIVATE_KEY) --etherscan-api-key $(API_KEY) --verify src/EventContract.sol:Event
deploy-AF:
	forge create --rpc-url $(RPC_URL) --private-key $(PRIVATE_KEY) --etherscan-api-key $(API_KEY) --verify src/AccountFactory.sol:AccountFactory
deploy-LF:
	forge create --rpc-url $(RPC_URL) --private-key $(PRIVATE_KEY) --etherscan-api-key $(API_KEY) --verify src/LobbyFactory.sol:LobbyFactory	
verify-A:
	forge verify-contract --rpc-url $(RPC_URL) --etherscan-api-key $(API_KEY) 0x652CCfa6571d279F626bB0Ae0aDbad275F8AceAd src/TSD.sol:TSD
    