var Lecture = artifacts.require("./Lecture.sol");

module.exports = function(deployer){
    deployer.deploy(Lecture, "NameOfLecture", web3.utils.toWei((0.005).toString(), "ether"));
};