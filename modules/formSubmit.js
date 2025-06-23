import { getDomElements } from "./domElements.js";
import { setData, getData } from "../storage.js";
import { displayUserBookmarks } from "./userBookmarks.js";

const { userDropdown, addBookmarkForm, urlInput, titleInput, descriptionText } = getDomElements();

export function submitForm() {
    addBookmarkForm.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!formValidation()){
            return;
        }

        const newBookmark = {
            url : urlInput.value,
            title : titleInput.value,
            description : descriptionText.value,
            createdAt : new Date().toISOString(),
        }

        const existingBookmarks = getData(userDropdown.value) || [];
        existingBookmarks.push(newBookmark);
        setData(userDropdown.value, existingBookmarks);

        urlInput.value = "";
        titleInput.value = "";
        descriptionText.value= "";

        displayUserBookmarks(userDropdown.value)
    })
}

function formValidation (){
  const urlValue = urlInput.value.trim();
  const titleValue = titleInput.value.trim();

  if (!urlValue) {
    alert('URL is required.');
    return false;
  }

  try {
    new URL(urlValue);
  } catch {
    alert('Please enter a valid URL.');
    return false;
  }

  if (titleValue.length < 3) {
    alert('Title must be at least 3 characters long.');
    return false;
  }

  return true;
}