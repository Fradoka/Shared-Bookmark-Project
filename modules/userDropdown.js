import { getUserIds } from "../storage.js";
import { getDomElements } from "./domElements.js";

export function populateUserDropdown () {
    const userIds = getUserIds();
    const { userDropdown } = getDomElements();
    
    for (let i = 0; i < userIds.length; i++) {
        const user = document.createElement("option");
        user.value = userIds[i];
        user.textContent = userIds[i];
        userDropdown.appendChild(user);
    }
}