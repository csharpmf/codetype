# { } codetype

A minimalist **code typing speed test** for developers. Practice typing real code snippets across 12 programming languages — right in your browser.

---

## Features

- **12 languages** — JavaScript, Python, TypeScript, Java, HTML, CSS, C++, Go, Rust, C#, PHP, SQL
- **Two modes** — timed (15 / 30 / 60 / 120s) or snippet-based (5 / 10 / 15 lines)
- **Real code snippets** — actual algorithms, data structures, and patterns
- **Live stats** — CPM, accuracy, errors, and time tracked as you type
- **Smart Tab skip** — press Tab to jump over whitespace after punctuation
- **Dark / Light theme** — toggleable, persisted in localStorage
- **No dependencies** — pure HTML, CSS, and vanilla JavaScript

---

## Demo

> Clone and open `index.html` in your browser — no build step required.

---

## Getting Started

```bash
git clone https://github.com/csharpmf/codetype.git
cd codetype
open index.html
```

That's it. No npm install, no bundler, no server needed.

---

## How to Play

1. **Pick a mode** — `time` to race the clock, `code` to finish a full snippet
2. **Choose a duration or line count** and a **language**
3. **Click the code area** (or just start typing) to begin
4. Type the displayed code as fast and accurately as possible
5. Press **Tab** after punctuation (`;`, `,`, `)`, `}`) to auto-skip leading whitespace on the next line
6. Results appear instantly when time runs out or the snippet is completed
7. Press **restart** (or change any setting) to go again

---

## Results Breakdown

| Stat | Description |
|------|-------------|
| **CPM** | Net characters per minute (correct chars only) |
| **Accuracy** | Percentage of correct keystrokes |
| **Errors** | Peak number of simultaneous wrong characters |
| **Time** | Total elapsed time in seconds |

---

## Project Structure

```
codetype/
├── index.html   # Markup & layout
├── styles.css   # Theming, animations, responsive styles
└── script.js    # Game logic, snippets, stats engine
```

---

## Adding Snippets

Open `script.js` and find the `codeSnippets` object. Add a new string to any language array:

```js
javascript: [
  `function yourNewSnippet() {\n  // code\n}`
]
```

To add a **new language**, add a new key with at least one snippet, then add a matching `<button>` in `index.html` inside the language config group.

---

## Theming

Colors are defined as CSS variables in `:root` (dark) and `body.light-theme` (light):

```css
--bg-color:      #323437;
--sub-color:     #646669;
--text-color:    #d1d0c5;
--main-color:    #e2b714;  
--error-color:   #ca4754;
```

Change these to create your own color scheme.

---

## License

MIT — use it for what you want.

---


**Preview: [codetype](https://codetype.kodexglobal.cc/)**
