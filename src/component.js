import { saveProfileToBlockchain } from './web3Service';
import { saveProfileToBlockchain } from '../services/web3Service';
import { saveUserDataToLocalStorage, getUserDataFromLocalStorage } from '../utils/storageService';


function UserProfile({ user }) {
    // ... rest of your component

    async function handleSave() {
        try {
            await saveProfileToBlockchain(user);
            alert('Profile saved successfully!');
        } catch (error) {
            console.error('Error saving profile:', error);
            alert('Error saving profile. Please try again.');
        }
    }

    // ... rest of your component
}

import { saveProfileToBlockchain } from './web3Service';

async function handleSaveToBlockchain(user) {
    try {
        await saveProfileToBlockchain(user);
        alert('Profile saved successfully to the blockchain!');
    } catch (error) {
        console.error('Error saving profile to the blockchain:', error);
        alert('Error saving profile to the blockchain. Please try again.');
    }
}
