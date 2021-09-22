const Exchange = artifacts.require('Exchange');

const Zenith = artifacts.require('Zenith');

contract("Test Normal Functionality!!",async (accounts)=>{
    this.token = await Zenith.deployed();
    this.instance = await Exchange.deployed();

    it("should put 100,000,000 MetaCoin in the first account", async () => {
        console.log(await this.token.balanceOf.call(accounts[0]))
        assert.equal(await this.token.balanceOf.call(accounts[0]), 100000000000000000000000000);
        // assert.equal()
      })
})