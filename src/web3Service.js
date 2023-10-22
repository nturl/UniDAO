export async function saveAddressToBlockchain(userAddress) {
    const web3 = new Web3(Web3.givenProvider || "https://sepolia-rpc.scroll.io/" );
    const contract = new web3.eth.Contract(contractABI, contractAddress);

    // Assuming you have a function in your contract named "saveAddress"
    await contract.methods.saveAddress(userAddress).send({ from: userAddress });
}
return (
    <div className="user-profile">
        <h2>User Profile</h2>
        {/* ... other user details ... */}
        <button onClick={handleSave}>Save Address to Blockchain</button>
    </div>
);

export async function getAllUserAddressesFromBlockchain() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const contract = new web3.eth.Contract(contractABI, contractAddress);

    return await contract.methods.getAllAddresses().call();
}

