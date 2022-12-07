const { ethers, upgrades } = require("hardhat");

async function main() {
  const time = Math.round(new Date().getTime() / 1000);
  console.log("Time is ", time);
  const Presale = await ethers.getContractFactory("Presale");
  const presale = await upgrades.deployProxy(Presale, [
    "0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE",
    "0x55d398326f99059ff775485246999027b3197955",
    time + 360,
    time + 3600000,
  ]);

  await presale.deployed();
  console.log(`Presale address is ${presale.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
