import { getUserIds, getData, setData, clearData } from './storage.js';
import { populateUserDropdown, userDropdownListener } from './modules/userDropdown.js';
import { submitForm } from './modules/formSubmit.js';

// Startup
window.onload = () => {
    populateUserDropdown();
    userDropdownListener();
    submitForm()
}

