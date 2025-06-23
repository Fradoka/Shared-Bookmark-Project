import { getUserIds } from "../storage.js";
import { getDomElements } from "./domElements.js";
import { displayUserBookmarks } from "./userBookmarks.js";

const { userDropdown, submitBtn } = getDomElements();

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
    submitBtn.disabled = !userDropdown.value;
    
    userDropdown.addEventListener("change", function() {
        submitBtn.disabled = !this.value;
        const user = this.value;
        displayUserBookmarks(user);
    })
}