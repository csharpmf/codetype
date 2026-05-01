const codeSnippets = {
    javascript: [
        `function fibonacci(n) {\n  if (n <= 1) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n}`,
        `const fetchData = async (url) => {\n  const response = await fetch(url);\n  return response.json();\n};`,
        `const debounce = (func, delay) => {\n  let timeoutId;\n  return (...args) => {\n    clearTimeout(timeoutId);\n    timeoutId = setTimeout(() => func(...args), delay);\n  };\n};`,
        `class Stack {\n  constructor() {\n    this.items = [];\n  }\n  push(element) {\n    this.items.push(element);\n  }\n  pop() {\n    return this.items.pop();\n  }\n}`,
        `const quickSort = (arr) => {\n  if (arr.length <= 1) return arr;\n  const pivot = arr[0];\n  const left = arr.slice(1).filter(x => x < pivot);\n  const right = arr.slice(1).filter(x => x >= pivot);\n  return [...quickSort(left), pivot, ...quickSort(right)];\n};`
    ],
    python: [
        `def binary_search(arr, target):\n    left, right = 0, len(arr) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1`,
        `class Node:\n    def __init__(self, data):\n        self.data = data\n        self.next = None\n\nclass LinkedList:\n    def __init__(self):\n        self.head = None`,
        `def merge_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    return merge(left, right)`,
        `@decorator\ndef timer(func):\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        end = time.time()\n        print(f"Time: {end - start}")\n        return result\n    return wrapper`
    ],
    typescript: [
        `interface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\nconst getUser = async (id: number): Promise<User> => {\n  const response = await fetch(\`/api/users/\${id}\`);\n  return response.json();\n};`,
        `type Result<T, E> = { ok: true; value: T } | { ok: false; error: E };\n\nfunction divide(a: number, b: number): Result<number, string> {\n  if (b === 0) return { ok: false, error: "Division by zero" };\n  return { ok: true, value: a / b };\n}`
    ],
    java: [
        `public class BinaryTree {\n    private Node root;\n    \n    private class Node {\n        int data;\n        Node left, right;\n        \n        Node(int data) {\n            this.data = data;\n        }\n    }\n}`,
        `public interface Repository<T> {\n    T findById(Long id);\n    List<T> findAll();\n    T save(T entity);\n    void delete(T entity);\n}`
    ],
    html: [
        `<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n</head>\n<body>\n    <h1>Hello World</h1>\n</body>\n</html>`,
        `<nav class="navbar">\n    <div class="container">\n        <a href="#" class="logo">Brand</a>\n        <ul class="nav-links">\n            <li><a href="#home">Home</a></li>\n            <li><a href="#about">About</a></li>\n        </ul>\n    </div>\n</nav>`
    ],
    css: [
        `.container {\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 0 20px;\n}\n\n.flex {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}`,
        `* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: Arial, sans-serif;\n    line-height: 1.6;\n    color: #333;\n}`
    ],
    cpp: [
        `template<typename T>\nclass Stack {\nprivate:\n    std::vector<T> items;\npublic:\n    void push(T item) {\n        items.push_back(item);\n    }\n    T pop() {\n        T item = items.back();\n        items.pop_back();\n        return item;\n    }\n};`
    ],
    go: [
        `func fibonacci(n int) int {\n    if n <= 1 {\n        return n\n    }\n    return fibonacci(n-1) + fibonacci(n-2)\n}`
    ],
    rust: [
        `fn fibonacci(n: u32) -> u32 {\n    match n {\n        0 => 0,\n        1 => 1,\n        _ => fibonacci(n - 1) + fibonacci(n - 2),\n    }\n}`
    ],
    csharp: [
        `public class Stack<T> {\n    private List<T> items = new List<T>();\n    \n    public void Push(T item) {\n        items.Add(item);\n    }\n    \n    public T Pop() {\n        T item = items[items.Count - 1];\n        items.RemoveAt(items.Count - 1);\n        return item;\n    }\n}`
    ],
    php: [
        `<?php\nclass Database {\n    private $host = "localhost";\n    private $user = "root";\n    private $pass = "";\n    private $dbname = "mydb";\n    private $conn;\n    \n    public function connect() {\n        $this->conn = new mysqli($this->host, $this->user, $this->pass, $this->dbname);\n        return $this->conn;\n    }\n}`
    ],
    sql: [
        `SELECT users.name, orders.total\nFROM users\nINNER JOIN orders ON users.id = orders.user_id\nWHERE orders.status = 'completed'\nORDER BY orders.total DESC\nLIMIT 10;`,
        `CREATE TABLE users (\n    id INT PRIMARY KEY AUTO_INCREMENT,\n    username VARCHAR(50) NOT NULL UNIQUE,\n    email VARCHAR(100) NOT NULL UNIQUE,\n    password VARCHAR(255) NOT NULL,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);`
    ]
};

let currentMode = 'time';
let currentLanguage = 'javascript';
let currentDuration = 15;
let currentLines = 10;
let currentSnippet = '';
let isTestActive = false;
let isTestFinished = false;
let startTime = null;
let lastInputTime = null;
let timerInterval = null;
let correctChars = 0;
let incorrectChars = 0;
let currentCharIndex = 0;
let totalErrors = 0;
let keypressTimestamps = [];
let afkTime = 0;
let lastAfkCheck = null;

const codeDisplay = document.getElementById('codeDisplay');
const hiddenInput = document.getElementById('hiddenInput');
const langIndicator = document.getElementById('langIndicator');
const resultsEl = document.getElementById('results');
const restartBtn = document.getElementById('restartBtn');
const restartPrompt = document.getElementById('restartPrompt');
const timeGroup = document.getElementById('timeGroup');
const codeGroup = document.getElementById('codeGroup');
const timerDisplay = document.getElementById('timerDisplay');
const themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
});

if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
}

document.querySelectorAll('.config-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if (isTestActive) return;
        
        const type = btn.dataset.type;
        const value = btn.dataset.value;
        
        if (type === 'mode') {
            currentMode = value;
            document.querySelectorAll('[data-type="mode"]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            if (value === 'time') {
                timeGroup.classList.remove('hidden');
                codeGroup.classList.add('hidden');
            } else {
                timeGroup.classList.add('hidden');
                codeGroup.classList.remove('hidden');
            }
        } else if (type === 'time') {
            currentDuration = parseInt(value);
            document.querySelectorAll('[data-type="time"]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        } else if (type === 'lines') {
            currentLines = parseInt(value);
            document.querySelectorAll('[data-type="lines"]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        } else if (type === 'lang') {
            currentLanguage = value;
            document.querySelectorAll('[data-type="lang"]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            langIndicator.textContent = value;
        }
        
        resetTest();
    });
});

codeDisplay.addEventListener('click', () => {
    hiddenInput.focus();
});

hiddenInput.addEventListener('input', handleInput);
hiddenInput.addEventListener('keydown', handleKeydown);

document.addEventListener('click', () => {
    if (!isTestFinished) {
        hiddenInput.focus();
    }
});

restartBtn.addEventListener('click', resetTest);

resetTest();

function loadNewSnippet() {
    const snippets = codeSnippets[currentLanguage];
    if (currentMode === 'code') {
        let snippet = '';
        const numSnippets = Math.ceil(currentLines / 5);
        for (let i = 0; i < numSnippets; i++) {
            const randomSnippet = snippets[Math.floor(Math.random() * snippets.length)];
            snippet += randomSnippet + '\n\n';
        }
        currentSnippet = snippet.trim();
    } else {
        currentSnippet = snippets[Math.floor(Math.random() * snippets.length)];
    }
    renderCodeDisplay();
}

function renderCodeDisplay() {
    let html = '';
    
    for (let i = 0; i < currentSnippet.length; i++) {
        const char = currentSnippet[i];
        let className = 'char';
        
        if (i < currentCharIndex) {
            if (hiddenInput.value[i] === char) {
                className += ' correct';
            } else {
                className += ' incorrect';
            }
        } else if (i === currentCharIndex) {
            className += ' current';
        }
        
        const displayChar = char === ' ' ? ' ' : char;
        html += `<span class="${className}">${displayChar}</span>`;
    }
    
    codeDisplay.innerHTML = html;
}

function handleKeydown(e) {
    if (e.key === 'Tab') {
        e.preventDefault();
        
        const currentPos = hiddenInput.value.length;
        
        if (currentPos === 0) return;
        
        const lastChar = hiddenInput.value[currentPos - 1];
        const nextChar = currentSnippet[currentPos];
        
        if (lastChar && /[\s\n;,.\)\}\]]/.test(lastChar) && nextChar && /[\s\n]/.test(nextChar)) {
            const remainingText = currentSnippet.substring(currentPos);
            const nextWordMatch = remainingText.match(/^[\s\n]+/);
            
            if (nextWordMatch) {
                hiddenInput.value += nextWordMatch[0];
                handleInput();
            }
        }
    }
}

function handleInput() {
    if (!isTestActive && !isTestFinished) {
        startTest();
    }
    
    if (isTestFinished) return;
    
    const now = Date.now();
    const inputValue = hiddenInput.value;
    const previousIndex = currentCharIndex;
    currentCharIndex = inputValue.length;
    
    if (currentCharIndex > previousIndex) {
        keypressTimestamps.push(now);
        lastInputTime = now;
    }
    
    if (lastAfkCheck && (now - lastAfkCheck) > 2000) {
        afkTime += (now - lastAfkCheck);
    }
    lastAfkCheck = now;
    
    correctChars = 0;
    incorrectChars = 0;
    let currentErrors = 0;
    
    for (let i = 0; i < inputValue.length && i < currentSnippet.length; i++) {
        if (inputValue[i] === currentSnippet[i]) {
            correctChars++;
        } else {
            incorrectChars++;
            currentErrors++;
        }
    }
    
    if (currentErrors > totalErrors) {
        totalErrors = currentErrors;
    }
    
    renderCodeDisplay();
    
    if (currentCharIndex >= currentSnippet.length) {
        endTest();
    }
}

function startTest() {
    isTestActive = true;
    isTestFinished = false;
    startTime = Date.now();
    lastInputTime = Date.now();
    lastAfkCheck = Date.now();
    keypressTimestamps = [];
    afkTime = 0;
    totalErrors = incorrectChars;
    
    if (currentMode === 'time') {
        updateTimer();
        timerInterval = setInterval(() => {
            updateTimer();
            const elapsed = Math.floor((Date.now() - startTime) / 1000);
            const remaining = currentDuration - elapsed;
            
            if (remaining <= 0) {
                endTest();
            }
        }, 100);
    }
}

function updateTimer() {
    if (currentMode === 'time') {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const remaining = Math.max(0, currentDuration - elapsed);
        timerDisplay.textContent = remaining + 's';
        
        if (remaining <= 5 && remaining > 0) {
            timerDisplay.classList.add('warning');
        } else {
            timerDisplay.classList.remove('warning');
        }
    } else {
        timerDisplay.textContent = '--';
    }
}

function endTest() {
    isTestActive = false;
    isTestFinished = true;
    clearInterval(timerInterval);
    
    showResults();
}

function showResults() {
    const endTime = Date.now();
    const totalElapsed = (endTime - startTime) / 1000;
    
    const activeTime = Math.max(1, totalElapsed - (afkTime / 1000));
    
    const totalCharsTyped = correctChars + incorrectChars;
    const rawCPM = Math.round((totalCharsTyped / activeTime) * 60);
    
    const netCPM = Math.round((correctChars / activeTime) * 60);
    
    const wpm = Math.round(netCPM / 5);
    
    const accuracy = totalCharsTyped > 0 ? Math.round((correctChars / totalCharsTyped) * 100) : 100;
    
    const consistency = calculateConsistency();
    
    document.getElementById('finalCpm').textContent = netCPM;
    document.getElementById('finalAccuracy').textContent = accuracy + '%';
    document.getElementById('finalErrors').textContent = totalErrors;
    document.getElementById('finalTime').textContent = totalElapsed.toFixed(1) + 's';
    
    console.log('Typing Stats:', {
        rawCPM,
        netCPM,
        wpm,
        accuracy,
        consistency: consistency + '%',
        activeTime: activeTime.toFixed(1) + 's',
        afkTime: (afkTime / 1000).toFixed(1) + 's',
        totalErrors,
        correctChars,
        totalCharsTyped
    });
    
    resultsEl.classList.remove('hidden');
    restartPrompt.classList.remove('hidden');
    codeDisplay.style.opacity = '0.3';
}

function calculateConsistency() {
    if (keypressTimestamps.length < 10) return 100;
    
    const intervals = [];
    for (let i = 1; i < keypressTimestamps.length; i++) {
        const interval = keypressTimestamps[i] - keypressTimestamps[i - 1];
        if (interval < 2000) {
            intervals.push(interval);
        }
    }
    
    if (intervals.length < 5) return 100;
    
    const mean = intervals.reduce((a, b) => a + b, 0) / intervals.length;
    
    const variance = intervals.reduce((sum, interval) => {
        return sum + Math.pow(interval - mean, 2);
    }, 0) / intervals.length;
    const stdDev = Math.sqrt(variance);
    
    const cv = (stdDev / mean) * 100;
    
    const consistency = Math.max(0, Math.min(100, 100 - cv));
    
    return Math.round(consistency);
}

function resetTest() {
    isTestActive = false;
    isTestFinished = false;
    clearInterval(timerInterval);
    
    hiddenInput.value = '';
    correctChars = 0;
    incorrectChars = 0;
    currentCharIndex = 0;
    totalErrors = 0;
    keypressTimestamps = [];
    afkTime = 0;
    lastAfkCheck = null;
    lastInputTime = null;
    
    resultsEl.classList.add('hidden');
    restartPrompt.classList.add('hidden');
    codeDisplay.style.opacity = '1';
    
    if (currentMode === 'time') {
        timerDisplay.textContent = currentDuration + 's';
        timerDisplay.classList.remove('warning');
    } else {
        timerDisplay.textContent = '--';
    }
    
    loadNewSnippet();
    hiddenInput.focus();
}
