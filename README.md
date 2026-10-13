# 🏁 MARATHON — Pratyush Tiwari's CS & ML Mastery Tracker

> **A minimalistically professional, premium obsidian dark tracker designed to guide Pratyush Tiwari through Phase 1 (Striver's A2Z DSA Sheet) and Phase 2 (Python Engineering, Machine Learning & Continuous DSA Practice).**

---

## ⚡ Quick Start

You can use the tracker in either of two instant ways:

### Method 1: Instant Browser Launch (Double Click)
Simply double-click [`index.html`](./index.html) in Windows File Explorer. It opens instantly in your default web browser (Chrome, Edge, Brave, etc.) with full offline support and instant `localStorage` saving.

### Method 2: Local HTTP Server (Already Live on Port 3000)
```powershell
python -m http.server 3000
```
Then visit: **`http://localhost:3000`** in your browser.

---

## 🧭 Roadmap Structure

### 🔷 Phase 1: Striver's A2Z DSA Sheet (19 Complete Steps)
1. **Step 1: Learn the Basics** (Syntax, I/O, 22 Star Patterns, C++/Java/Python collections, Basic Maths, Recursion, Hashing)
2. **Step 2: Learn Important Sorting Techniques** (Selection, Bubble, Insertion, Merge Sort, Quick Sort, Recursive Sorts)
3. **Step 3: Solve Problems on Arrays**
   - **Easy:** Second Largest, Duplicates, Rotations, Zeros, Union, Missing Number, Max Consecutive Ones, Subarrays
   - **Medium:** 2-Sum, Dutch National Flag (0s, 1s, 2s), Kadane's Algorithm, Moore's Voting, Stock Buy/Sell, Next Permutation, Spiral Matrix
   - **Hard:** Pascal's Triangle, 3-Sum, 4-Sum, Overlapping Subintervals, Missing & Repeating, Count Inversions, Reverse Pairs
4. **Step 4: Binary Search** (1D Arrays, BS on Answers / Search Space, 2D Arrays, Median)
5. **Step 5: Strings** (Basic & Medium, Palindromes, Roman to Int, Atoi, Longest Palindromic Substring)
6. **Step 6: Learn LinkedList** (1D LL, Doubly LL, Medium problems, K-Group Reverse, Flattening, Random Pointer Clone)
7. **Step 7: Recursion & Backtracking** (Subsequences, Combinations, N-Queens, Rat in a Maze, Sudoku Solver)
8. **Step 8: Bit Manipulation** (Bitwise ops, Set bits, Power of 2, XOR tricks, Single numbers, Sieve of Eratosthenes)
9. **Step 9: Stack and Queues** (Infix/Postfix conversions, Monotonic Stack, Trapping Rain Water, Histogram, LRU/LFU Cache)
10. **Step 10: Sliding Window & Two Pointer** (Longest Substrings, K distinct characters, Minimum Window Substring)
11. **Step 11: Heaps / Priority Queue** (Min/Max Heap, Kth Largest, Merge K Lists, Median from Data Stream, Twitter design)
12. **Step 12: Greedy Algorithms** (Activity Selection, Railway Platforms, Job Sequencing, Jump Game, Candy)
13. **Step 13: Binary Trees** (Traversals, Views, LCA, Diameter, Max Path Sum, Morris Traversal)
14. **Step 14: Binary Search Trees** (Search, Insert, Delete, Validate BST, BST Iterator, Recover BST)
15. **Step 15: Graphs** (BFS/DFS, Cycle detection, Topo Sort, Kahn's, Dijkstra, Bellman-Ford, Floyd-Warshall, Prim's, Kruskal's, DSU)
16. **Step 16: Dynamic Programming** (1D DP, 2D Grids, Subsequences, Strings LCS/Edit Distance, Stocks, LIS, MCM Partition DP, Squares)
17. **Step 17: Tries** (Prefix tree, Count Words, Longest Word with all Prefixes, Bitwise Max XOR)
18. **Step 18: Advanced Strings** (Rabin-Karp, Z-Algorithm, KMP LPS Table)
19. **Step 19: Advanced Graphs** (Kosaraju's SCC, Tarjan's SCC, Eulerian Path & Circuit, Max Flow)

---

### 🔶 Phase 2: Python, Machine Learning & Continuous Practice
- **Track A: Python Engineering & Scientific Stack**
  - Python Memory Model, Mutability & Global Interpreter Lock (GIL)
  - Advanced OOP & Python Data Model (Dunder methods, MRO, Metaclasses, ABCs)
  - Functional Python, Parameterized Decorators & Custom Generators
  - Systems Concurrency & AsyncIO (Coroutines, Event Loop, `aiohttp`)
  - High-Performance NumPy (Strides, Vectorization, Broadcasting, `np.einsum`)
  - Pandas & Polars for Data Engineering & Wrangling
  - Modern Python Standards (Type annotations, Pydantic V2, Pytest, UV/Poetry)
- **Track B: Machine Learning & Deep Learning Roadmap**
  - Linear Algebra & Vector Calculus Foundations (SVD, Eigenvalues, Gradients)
  - Probability Distributions, Bayes Theorem, MLE & MAP
  - Classical Supervised Learning (Linear Regression, Ridge/Lasso, Logistic, Decision Trees, Random Forests, XGBoost, LightGBM, SVM)
  - Unsupervised Learning & Dimensionality Reduction (K-Means, DBSCAN, PCA, t-SNE)
  - Model Validation & Feature Engineering (Stratified K-Fold, ROC-AUC, PR Curves)
  - Deep Learning Foundations (Perceptrons, MLPs, Backprop derivation, Optimizers AdamW, Regularization)
  - PyTorch Deep Dive (`torch.nn.Module`, Autograd graph, Custom DataLoaders, Training loops)
  - Computer Vision with CNNs (Convolution arithmetic, ResNet skip connections, Transfer learning)
  - NLP, Attention Mechanism & Transformers (Self-Attention, BERT vs GPT, Hugging Face `transformers`)
  - Production MLOps (ONNX export, FastAPI serving, Dockerization, MLflow experiment tracking)
  - 4 Capstone Portfolio Projects (Tabular Kaggle, PyTorch Vision App, RAG System, End-to-End MLOps Pipeline)
- **Track C: Continuous DSA & Contest Grinding**
  - LeetCode Weekly/Bi-Weekly Contest tracking (Rating goals, post-mortems)
  - NeetCode 150 & High-Yield pattern speed runs
  - Spaced Repetition Hard Problem Drills & System Design mocks

---

## 💎 Features & Keyboard Shortcuts

- **Instant Status Toggle**: Click the status button on any question to mark it `Solved` (🟢), `In Progress` (🟡), or `Needs Revision` (🟣).
- **Notes & Intuition Drawer**: Click 📝 on any problem to document Time Complexity, Space Complexity, intuition, and solution links.
- **Revision Deck**: Automatically collects problems marked as *Needs Revision* or *Starred* for spaced repetition.
- **Deep Focus Pomodoro Timer**: Built-in 25m work / 5m break timer with chime notifications.
- **Annual Activity Heatmap**: 365-day commit velocity grid logging your problem-solving frequency.
- **Search Shortcut**: Press **`Ctrl + K`** anywhere to instantly search across all 400+ problems and topics.
- **Audio Feedback**: Subtle, futuristic synthetic chimes on problem completion (can be toggled on/off in the header).
- **Backup & Sync**: 1-click **Export JSON** to safely backup your data or transfer between laptops.
