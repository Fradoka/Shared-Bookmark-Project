import { getUserIds } from "../storage.js";
import { getDomElements } from "./domElements.js";
import { displayUserBookmarks } from "./userBookmarks.js";

const { userDropdown } = getDomElements();

export function populateUserDropdown () {
    const userIds = getUserIds();
    
    for (let i = 0; i < userIds.length; i++) {
        const user = document.createElement("option");
        user.value = userIds[i];
        user.textContent = userIds[i];
        userDropdown.appendChild(user);
    }
}

export function userDropdownListener (){
    userDropdown.addEventListener("change", function() {
        const user = this.value;
        displayUserBookmarks(user);
    })
}