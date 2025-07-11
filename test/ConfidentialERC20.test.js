// test/ConfidentialERC20.test.js
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyERC20", function () {
    it("Should mint tokens to deployer", async function () {
        const [owner] = await ethers.getSigners();
        const MyERC20 = await ethers.getContractFactory("MyERC20");
        const myERC20 = await MyERC20.deploy();
        await myERC20.deployed();

        const balance = await myERC20.balanceOf(owner.address);
        expect(balance.toString()).to.equal("1000000000000000000000000");
    });
});
