import { getUserIds, getData, setData, clearData } from './storage.js';
import { populateUserDropdown } from './modules/userDropdown.js';

// Startup
window.onload = () => {
    populateUserDropdown();

}

