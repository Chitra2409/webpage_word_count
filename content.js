// content.js — runs on every page

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getWordCount") {
    const text = document.body.innerText || "";

    // Split on whitespace and filter out empty strings
    const words = text.trim().split(/\s+/).filter(w => w.length > 0);
    const wordCount = words.length;

    // Average adult reading speed: 200 wpm
    const WPM = 200;
    const minutes = Math.ceil(wordCount / WPM);

    sendResponse({ wordCount, readingTime: minutes });
  }
  // Return true to allow async sendResponse (required by Chrome)
  return true;
});
