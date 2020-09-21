pragma solidity ^0.6.0;

contract Lecture {
    string public title;
    uint public pledgePerLecture;
    
    //mapping adresses to balances
    mapping(address=>uint) public pledges;
    //list of pledgers 
    address[] pledgers;

    mapping (address => uint) balance;

    
    constructor(string memory _title, uint _pledgePerEpisode) public {
        title = _title;
        pledgePerLecture = _pledgePerEpisode;
    }
    
    
    //msg.value = ether value associated with the transaction used to call this fucntion
    //msg.sender = address of the person interacting with the contract/function
    function pledge () public payable {
        require(pledges[msg.sender] + msg.value >= pledgePerLecture, "Pledge must be greater than minimum pledge per lecture.");
        
        //making sure the fucntion caller isn't already in the pledgers array
        bool oldPledger = false;
        for(uint i = 0; i<pledgers.length; i++){
            if(pledgers[i] == msg.sender){
                oldPledger = true;
                break;
            }
        }
        if(!oldPledger){
            //adding the new pledger to the pledgers array
            pledgers.push(msg.sender);
        }
        //increase the pledge for this pledger
        //sum of the existing pledge + value associated with the transaction
        pledges[msg.sender]= pledges[msg.sender] + msg.value;
        //emit DataChanged(msg.value, now);
    }
    
    function payLecturer (address payable recipient) public {
        
        //subtract pledgePerLecture from every pledge and add it to lecturePay
        uint lecturePay=0;
        //go over all the pledges
        for(uint i=0; i < pledgers.length; i++){
            //check if pledgePerLecture is less than the pledge
            if(pledges[pledgers[i]] >= pledgePerLecture){
            pledges[pledgers[i]] = pledges[pledgers[i]] - pledgePerLecture;
            lecturePay = lecturePay + pledgePerLecture;
            }
        }
        //pay
        recipient.transfer(lecturePay);
    }
    
    
    //testiranje
    function totalPledgers() public view returns (uint) {
        return pledgers.length;
    }
    function totalPledgesPrice() public view returns (uint) {
        return pledges[msg.sender];
    }
       
  
}