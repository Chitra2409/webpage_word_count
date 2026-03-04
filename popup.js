// popup.js — runs when the popup opens

document.addEventListener("DOMContentLoaded", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tabId = tabs[0]?.id;
    if (!tabId) return showError();

    chrome.tabs.sendMessage(tabId, { action: "getWordCount" }, (response) => {
      if (chrome.runtime.lastError || !response) {
        return showError();
      }

      document.getElementById("wordCount").textContent =
        response.wordCount.toLocaleString();

      const mins = response.readingTime;
      document.getElementById("readingTime").textContent =
        mins === 1 ? "1 min" : `${mins} mins`;
    });
  });
});

function showError() {
  document.getElementById("error").style.display = "block";
}
