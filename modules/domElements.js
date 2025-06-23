// DOM elements
export function getDomElements () {
    return {
        userDropdown : document.getElementById("user-select"),
        bookmarksList : document.getElementById("bookmarks-list"),
        noBookmarksMsg : document.getElementById("no-bookmarks-msg"),
        ulBookmarks : document.getElementById("ul-bookmarks"),
        addBookmarkForm : document.getElementById("add-bookmark-form"),
        urlInput : document.getElementById("url-input"),
        titleInput : document.getElementById("title-input"),
        descriptionText : document.getElementById("description-textarea"),
        submitBtn : document.getElementById("submit-btn"),
    }
}
