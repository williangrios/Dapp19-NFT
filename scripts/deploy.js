
const hre = require("hardhat");

async function main() {


  const SMW = await hre.ethers.getContractFactory("SuperMarioWorldOZ");
  const smw = await SMW.deploy("Super_Mario_World", "SPMW");

  await smw.deployed();

  console.log(
    `Deployed to ${smw.address}`
  );

  await smw.mint("https://ipfs.io/ipfs/QmR7YxBTrVQCwW6B4wJVgP3KaRrjjZARquL7eJnDkkZM85/1.json");
  console.log("Sucessfully minted");
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
