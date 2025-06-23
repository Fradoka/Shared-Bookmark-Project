import { getUserIds, getData, setData, clearData } from './storage.js';
import { populateUserDropdown, userDropdownListener } from './modules/userDropdown.js';

// Startup
window.onload = () => {
    populateUserDropdown();
    userDropdownListener();

}

