# Presale contract

<p>Upgradeable presale contract to create presales with different rounds/tiers and allows users to claim.</p>

## External Dependencies

Please double check the addresses below on mainnet.

1. Chainlink Oracle for BNB price in USD - `0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE`
2. USDT token address - `0x55d398326f99059ff775485246999027b3197955`

## Required Parameters

The following parameters must be set according to the presale.

1. `startTime` - (unix epoch time in sec.) Time at which sale will start.
2. `endTime` - (unix epoch time in sec.) Time at which sale will end.
3. `token_amount` - Array of cummulative tokens to be sold in each round. For example if 10 million tokens are to be sold in 3 rounds each the array should be populated as - token_amount = [10_000_000, 20_000_000, 30_000_000]
4. `token_price` - Array of token prices to be sold at in each round. For example if there is 25% increase in price for 3 rounds starting from 0.0125 then the array should be populated as - token_price = [12500000000000000, 15625000000000000, 19531250000000000]

Make sure that token_amount and token_price arrays are of same length and also maxTokensToBuy should not allow the users to skip more than 1 tier.

<h3>IMP!!</h3>
   The current contract assumes that all the sale tokens have 18 decimals, if that is not the case for any presale - please change the value in the "claim" functions accordingly.

## Deployment and Upgrade steps.

1. Create a new `.env` file with private key of a wallet and Infura API key for the selected network.

2. Update the deploy script `deploy` with correct Chainlink oracle and USDT token address of the network.

3. Run the script to deploy an upgradeable sale contract(deploys - ProxyAdmin, Proxy and Sale contract).

```
npx hardhat run scripts/deploy.js
```

4. Deployment details can be found under the `.openzeppelin` folder for the deployed network.

5. To upgrade the sale contract, either create a new version or update the existing code and run the upgrade by making necessary changes.

```
npx hardhat run scripts/upgrade.js
```
