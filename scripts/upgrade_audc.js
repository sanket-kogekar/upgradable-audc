const { ethers, upgrades } = require("hardhat");

const PROXY = "0xe8017db251565d47dbde6856c59a1c5235726c30"; // ADD PROXY ADDRESS HERE !!

async function main() {
  const AUDC_V2 = await ethers.getContractFactory("AUDC_V2");
  console.log("Upgrading to AUDC_V2...");
  await upgrades.upgradeProxy(PROXY, AUDC_V2);
  console.log("AUDC_V2 upgraded successfully");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
