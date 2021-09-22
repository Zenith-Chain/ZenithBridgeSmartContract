const Exchange = artifacts.require("Exchange");
const Zenith = artifacts.require("Zenith");

module.exports = async function (deployer, network, accounts) {
    // let x = await Zenith.at('');
    // BSC
    await deployer.deploy(Exchange,'0x57c81885faad67fc4de892102f6fead3b9215f6b');
    // ETH 
    // await deployer.deploy(Exchange,'0x0343131c0257ac21ea5a8dc83841f071efd9285c');
    // let x  = await Zenith.deployed();
};
