// scripts/deploy_upgradeable_box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const AUDC_V1 = await ethers.getContractFactory("AUDC_V1");
  console.log("Deploying AUDC_V1..");
  const audc_v1 = await upgrades.deployProxy(AUDC_V1, [], {
    initializer: "initialize",
  });
  await audc_v1.deployed();
  console.log("UpgradableToken deployed to:", audc_v1.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
