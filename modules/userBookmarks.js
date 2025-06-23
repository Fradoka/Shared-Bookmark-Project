import { getData } from "../storage.js";
import { getDomElements } from "./domElements.js";

const { bookmarksList, noBookmarksMsg, ulBookmarks } = getDomElements();

export function displayUserBookmarks (userId) {
    const bookmarksData = getData(userId);
    
    if (!bookmarksData || bookmarksData.length === 0) {
        bookmarksList.style.display = "none";
        noBookmarksMsg.style.display = "block";
    } else {
        ulBookmarks.innerHTML = "";

        bookmarksData.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
        bookmarksData.forEach(({title, url, description, createdAt}) => {
            const item = document.createElement("li");
            const formattedDate = new Date(createdAt).toLocaleString(); //formatting createdAt for better readability
            item.innerHTML = `<a href="${url}">${title}</a> created at ${formattedDate}<p>${description}</p>`;
            ulBookmarks.appendChild(item);
        });
        bookmarksList.style.display = "block";
        noBookmarksMsg.style.display = "none";
    }
}