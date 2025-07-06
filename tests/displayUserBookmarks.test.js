import { jest } from '@jest/globals';

jest.mock("../storage.js", () => ({
    getData: jest.fn((userId) => {
        if (userId === "emptyUser") return [];
        if (userId === "User-1") {
            return [
                {
                    title: "Code Your Future",
                    url: "https://codeyourfuture.io/",
                    description: "Free training for refugees & disadvantaged people",
                    createdAt: "2025-07-05T10:00:00Z",
                }
            ];
        }
        if (userId === "User-2") {
            return [
                {
                    title: "Code Your Future",
                    url: "https://codeyourfuture.io/",
                    description: "Free training for refugees & disadvantaged people",
                    createdAt: "2025-07-05T10:00:00Z",
                },
                {
                    title: "Google",
                    url: "https://google.com/",
                    description: "The world's most popular search engine.",
                    createdAt: "2025-07-01T09:00:00Z",
                },
                 {
                    title: "MDN Web Docs",
                    url: "https://developer.mozilla.org/",
                    description: "Comprehensive resource for web developers.",
                    createdAt: "2025-07-06T11:00:00Z",
                }
            ];
        }
        return [];
    }),
    getUserIds: jest.fn(),
    setData: jest.fn(),
    clearData: jest.fn(),
}));

beforeEach(() => {
    jest.resetModules();

    document.body.innerHTML = `
        <div id="bookmarks-list" style="display:block;"></div>
        <div id="no-bookmarks-msg" style="display:none;"></div>
        <ul id="ul-bookmarks"></ul>
        <select id="user-select"></select>
        <form id="add-bookmark-form">
            <input id="url-input" />
            <input id="title-input" />
            <textarea id="description-textarea"></textarea>
            <button id="submit-btn"></button>
        </form>
    `;

    jest.doMock("../modules/domElements.js", () => ({
        getDomElements: jest.fn(() => {
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
        }),
    }));
});

afterEach(() => {
    document.body.innerHTML = '';
    jest.clearAllMocks();
});

test("should display 'no bookmarks' message when user has no bookmarks", async () => {
    const { displayUserBookmarks } = await import("../modules/userBookmarks.js");
    displayUserBookmarks("emptyUser");

    expect(document.getElementById("bookmarks-list").style.display).toBe("none");
    expect(document.getElementById("no-bookmarks-msg").style.display).toBe("block");
    expect(document.getElementById("ul-bookmarks").children.length).toBe(0);
});

test("should display a single bookmark when user has one bookmark", async () => {
    const { displayUserBookmarks } = await import("../modules/userBookmarks.js");
    displayUserBookmarks("User-1");

    const ulBookmarks = document.getElementById("ul-bookmarks");
    expect(ulBookmarks.children.length).toBe(1);
    expect(ulBookmarks.innerHTML).toContain("Code Your Future");
    expect(ulBookmarks.innerHTML).toContain("https://codeyourfuture.io/");
    expect(document.getElementById("bookmarks-list").style.display).toBe("block");
    expect(document.getElementById("no-bookmarks-msg").style.display).toBe("none");
});

test("should display multiple bookmarks sorted by creation date (newest first)", async () => {
    const { displayUserBookmarks } = await import("../modules/userBookmarks.js");
    displayUserBookmarks("User-2");

    const ulBookmarks = document.getElementById("ul-bookmarks");
    expect(ulBookmarks.children.length).toBe(3);
    expect(document.getElementById("bookmarks-list").style.display).toBe("block");
    expect(document.getElementById("no-bookmarks-msg").style.display).toBe("none");

    const listItems = Array.from(ulBookmarks.children);

    expect(listItems[0].innerHTML).toContain("MDN Web Docs");
    expect(listItems[1].innerHTML).toContain("Code Your Future");
    expect(listItems[2].innerHTML).toContain("Google");
});