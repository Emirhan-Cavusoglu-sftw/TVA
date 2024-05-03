-include .env

deploy:
	forge create --rpc-url $(RPC_URL) --private-key $(PRIVATE_KEY) --etherscan-api-key $(API_KEY) --verify src/EventContract.sol:Event
deploy-AF:
	forge create --rpc-url $(RPC_URL) --private-key $(PRIVATE_KEY) --etherscan-api-key $(API_KEY) --verify src/AccountFactory.sol:AccountFactory
deploy-LF:
	forge create --rpc-url $(RPC_URL) --private-key $(PRIVATE_KEY) --etherscan-api-key $(API_KEY) --verify src/LobbyFactory.sol:LobbyFactory	
	
    