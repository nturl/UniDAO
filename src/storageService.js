// To save user data to local storage:
function saveUserDataToLocalStorage(user) {
    localStorage.setItem('userName', user.google.name);
    localStorage.setItem('userEmail', user.google.email);
    localStorage.setItem('userWalletAddress', user.wallet.address);
}

// To retrieve user data from local storage:
function getUserDataFromLocalStorage() {
    return {
        google: {
            name: localStorage.getItem('userName'),
            email: localStorage.getItem('userEmail')
        },
        wallet: {
            address: localStorage.getItem('userWalletAddress')
        }
    };
}
