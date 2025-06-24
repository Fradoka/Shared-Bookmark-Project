# Shared Bookmarks Project
The "Shared Bookmarks" application addresses the common developer need to save and revisit useful web links. It provides a simple, single-page interface where users can manage their own collection of bookmarks and also view bookmarks shared by others. Users can select from a predefined list, view bookmarks in reverse chronological order, and add new bookmarks through an accessible form. The application is built using only HTML and JavaScript, with a strong focus on accessibility and unit testing.

## Features
1. User Selection: A dropdown allows switching between five predefined users to view their respective bookmark collections.

2. Bookmark Display: Bookmarks are displayed in reverse chronological order. Each bookmark shows its title (as a clickable hyperlink), a short description, and the exact timestamp of its creation.
A clear message is shown if the selected user has no bookmarks.

3. Bookmark Addition: An accessible form enables users to add new bookmarks by providing a URL, title, and description.

4. Dynamic Updates: The bookmark list automatically updates after a new bookmark is added.

5. No CSS: The application deliberately avoids custom CSS, focusing purely on functional HTML structure and JavaScript logic.

## Live Demo: 
https://shared-bookmark-project.netlify.app/

## Testing
To run the unit tests locally:

1. Install dependencies (if you haven't already):

```npm install```

2. Run the tests:

```npm test```

Note: This project uses Jest for unit testing. Ensure Node.js ≥ 18 is installed.

## Credits
Inspired by personal bookmarking sites like [Jason Kottke](https://kottke.org/), [Jeremy Keith](https://adactio.com/links), [Andy Baio](https://waxy.org/category/links/), and [Ali Smith](https://bookmarks.alasdairsmith.co.uk/).

Uses a provided storage.js utility for data persistence.

## Project Contributors

Franklin D Kamela - https://github.com/Fradoka

**A special thanks to our mentors and the Code Your Future community for their guidance and support.**