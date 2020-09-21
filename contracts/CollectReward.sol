pragma solidity ^0.6.0;

contract CollectReward {
    uint public storedData;

    function set() public {
        storedData = storedData + 250;
    }
}
