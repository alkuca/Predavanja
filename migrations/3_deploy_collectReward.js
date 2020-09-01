const CollectReward = artifacts.require("CollectReward");

module.exports = function (deployer) {
    deployer.deploy(CollectReward);
};
