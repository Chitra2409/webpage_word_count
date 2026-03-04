# Word & Reading Time Estimator

A Chrome Extension that counts the words on any webpage and shows an estimated reading time in a popup.

---

## What It Does

- Click the extension icon on any webpage
- Instantly see the **word count** and **estimated reading time**
- Works on articles, Wikipedia pages, documentation, blogs — any page with text
- Uses an average reading speed of **200 words per minute**

---

## How It's Built

The extension has 4 files:

| File | Role |
|---|---|
| `manifest.json` | Tells Chrome what the extension does, what permissions it needs, and which files to load |
| `content.js` | Injected into every webpage — reads the visible text, counts words, and responds to the popup |
| `popup.html` | The small UI that appears when you click the extension icon |
| `popup.js` | Sends a message to `content.js`, receives the word count, and updates the popup UI |

**Flow:**
```
User clicks icon → popup.js asks content.js for data
                 → content.js reads the page, counts words
                 → popup.js receives the data and displays it
```

**Word count logic:**
```js
const words = document.body.innerText.trim().split(/\s+/).filter(w => w.length > 0);
const readingTime = Math.ceil(words.length / 200); // 200 wpm average
```

---

## Getting Started

### 1. Clone the repo
```bash
git clone <your-repo-url>
cd chrome_ext
```

### 2. Load in Chrome
1. Open Chrome and go to `chrome://extensions`
2. Enable **Developer Mode** (toggle in the top right)
3. Click **Load unpacked**
4. Select the `chrome_ext/` folder

### 3. Use it
1. Open any webpage (try a Wikipedia article or a news page)
2. Click the extension icon in the Chrome toolbar
3. See the word count and reading time instantly

---

## Debugging

| What to debug | How |
|---|---|
| Popup UI / popup.js | Right-click the popup → **Inspect** → Console |
| content.js | Open DevTools on the page (F12) → Console |
| Reload after changes | Go to `chrome://extensions` → click the refresh icon on the card |
