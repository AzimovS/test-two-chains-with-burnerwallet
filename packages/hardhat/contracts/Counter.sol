//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

// Use openzeppelin to inherit battle-tested implementations (ERC20, ERC721, etc)
// import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * A smart contract that allows changing a state variable of the contract and tracking the changes
 * It also allows the owner to withdraw the Ether in the contract
 * @author BuidlGuidl
 */
contract Counter {
    // State variable to store the counter value
    int256 private counter;

    // Event to emit when counter value changes
    event CounterUpdated(int256 newCounterValue);

    // Constructor to initialize the counter value
    constructor(int256 _initialValue) {
        counter = _initialValue;
    }

    // Function to get the current counter value
    function getCounter() public view returns (int256) {
        return counter;
    }

    // Function to increment the counter by 1
    function increment() public {
        counter += 1;
        emit CounterUpdated(counter);
    }
}
