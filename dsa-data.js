// Striver's A2Z DSA Sheet - Complete Structured Dataset
// Curated for Pratyush Tiwari's CS Marathon Phase 1

const DSA_SHEET_DATA = [
  {
    stepId: 1,
    title: "Step 1: Learn the Basics",
    desc: "Syntax, patterns, maths, recursion, hashing & language collections",
    modules: [
      {
        moduleId: "1.1",
        title: "Things to Know in C++/Java/Python or any language",
        problems: [
          { id: "dsa-1-1-1", title: "User Input / Output & Data Types", diff: "Easy", topic: "Basics", tuf: "https://takeuforward.org/c/c-basics-syntax-data-types/" },
          { id: "dsa-1-1-2", title: "If Else Statements & Conditionals", diff: "Easy", topic: "Basics", tuf: "https://takeuforward.org/data-structure/if-else-statements/" },
          { id: "dsa-1-1-3", title: "Switch Case Statement", diff: "Easy", topic: "Basics", tuf: "https://takeuforward.org/data-structure/switch-case-statement/" },
          { id: "dsa-1-1-4", title: "What are Arrays & Strings?", diff: "Easy", topic: "Basics", tuf: "https://takeuforward.org/data-structure/arrays-in-c/" },
          { id: "dsa-1-1-5", title: "For Loops, While Loops & Do While", diff: "Easy", topic: "Basics", tuf: "https://takeuforward.org/data-structure/loops-in-c/" },
          { id: "dsa-1-1-6", title: "Functions (Pass by Value and Pass by Reference)", diff: "Easy", topic: "Basics", tuf: "https://takeuforward.org/data-structure/functions-pass-by-value-and-reference/" },
          { id: "dsa-1-1-7", title: "Time and Space Complexity Analysis", diff: "Easy", topic: "Basics", tuf: "https://takeuforward.org/data-structure/time-and-space-complexity/" }
        ]
      },
      {
        moduleId: "1.2",
        title: "Build-up Logical Thinking (Pattern Problems)",
        problems: [
          { id: "dsa-1-2-1", title: "Pattern 1: Rectangular Star Pattern", diff: "Easy", topic: "Patterns", tuf: "https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-using-c-java-python/" },
          { id: "dsa-1-2-2", title: "Pattern 2: Right-Angled Triangle Pattern", diff: "Easy", topic: "Patterns", tuf: "https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-using-c-java-python/" },
          { id: "dsa-1-2-3", title: "Pattern 3: Right-Angled Number Triangle", diff: "Easy", topic: "Patterns", tuf: "https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-using-c-java-python/" },
          { id: "dsa-1-2-4", title: "Pattern 4: Right-Angled Number Triangle II", diff: "Easy", topic: "Patterns", tuf: "https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-using-c-java-python/" },
          { id: "dsa-1-2-5", title: "Pattern 5: Inverted Right Triangle", diff: "Easy", topic: "Patterns", tuf: "https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-using-c-java-python/" },
          { id: "dsa-1-2-6", title: "Pattern 6: Inverted Number Triangle", diff: "Easy", topic: "Patterns", tuf: "https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-using-c-java-python/" },
          { id: "dsa-1-2-7", title: "Pattern 7: Star Pyramid Pattern", diff: "Easy", topic: "Patterns", tuf: "https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-using-c-java-python/" },
          { id: "dsa-1-2-8", title: "Pattern 8: Inverted Star Pyramid", diff: "Easy", topic: "Patterns", tuf: "https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-using-c-java-python/" },
          { id: "dsa-1-2-9", title: "Pattern 9: Diamond Star Pattern", diff: "Easy", topic: "Patterns", tuf: "https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-using-c-java-python/" },
          { id: "dsa-1-2-10", title: "Pattern 10: Half Diamond Star Pattern", diff: "Easy", topic: "Patterns", tuf: "https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-using-c-java-python/" },
          { id: "dsa-1-2-11", title: "Pattern 11: Binary Number Triangle Pattern", diff: "Easy", topic: "Patterns", tuf: "https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-using-c-java-python/" },
          { id: "dsa-1-2-12", title: "Pattern 12: Number Crown Pattern", diff: "Medium", topic: "Patterns", tuf: "https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-using-c-java-python/" },
          { id: "dsa-1-2-13", title: "Pattern 13: Increasing Number Triangle", diff: "Easy", topic: "Patterns", tuf: "https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-using-c-java-python/" },
          { id: "dsa-1-2-14", title: "Pattern 14: Increasing Letter Triangle", diff: "Easy", topic: "Patterns", tuf: "https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-using-c-java-python/" },
          { id: "dsa-1-2-15", title: "Pattern 15: Reverse Letter Triangle", diff: "Easy", topic: "Patterns", tuf: "https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-using-c-java-python/" },
          { id: "dsa-1-2-16", title: "Pattern 16: Alpha-Ramp Pattern", diff: "Easy", topic: "Patterns", tuf: "https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-using-c-java-python/" },
          { id: "dsa-1-2-17", title: "Pattern 17: Alpha-Hill Pattern", diff: "Medium", topic: "Patterns", tuf: "https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-using-c-java-python/" },
          { id: "dsa-1-2-18", title: "Pattern 18: Alpha-Triangle Pattern", diff: "Medium", topic: "Patterns", tuf: "https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-using-c-java-python/" },
          { id: "dsa-1-2-19", title: "Pattern 19: Symmetric Void Pattern", diff: "Medium", topic: "Patterns", tuf: "https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-using-c-java-python/" },
          { id: "dsa-1-2-20", title: "Pattern 20: Symmetric Butterfly Pattern", diff: "Medium", topic: "Patterns", tuf: "https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-using-c-java-python/" },
          { id: "dsa-1-2-21", title: "Pattern 21: Hollow Rectangle Pattern", diff: "Easy", topic: "Patterns", tuf: "https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-using-c-java-python/" },
          { id: "dsa-1-2-22", title: "Pattern 22: The Number Pattern Matrix", diff: "Hard", topic: "Patterns", tuf: "https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-using-c-java-python/" }
        ]
      },
      {
        moduleId: "1.3",
        title: "Standard Template Library (STL) / Collections",
        problems: [
          { id: "dsa-1-3-1", title: "C++ STL / Java Collections / Python Collections Guide", diff: "Easy", topic: "Standard Lib", tuf: "https://takeuforward.org/c/c-stl-tutorial-most-frequent-used-stl-containers/" },
          { id: "dsa-1-3-2", title: "Vectors, Lists & Deque Internals", diff: "Easy", topic: "Standard Lib", tuf: "https://takeuforward.org/c/c-stl-tutorial-most-frequent-used-stl-containers/" },
          { id: "dsa-1-3-3", title: "Stack, Queue & Priority Queue", diff: "Easy", topic: "Standard Lib", tuf: "https://takeuforward.org/c/c-stl-tutorial-most-frequent-used-stl-containers/" },
          { id: "dsa-1-3-4", title: "Set, Multiset & Unordered Set", diff: "Easy", topic: "Standard Lib", tuf: "https://takeuforward.org/c/c-stl-tutorial-most-frequent-used-stl-containers/" },
          { id: "dsa-1-3-5", title: "Map & Unordered Map (Hash Tables)", diff: "Easy", topic: "Standard Lib", tuf: "https://takeuforward.org/c/c-stl-tutorial-most-frequent-used-stl-containers/" },
          { id: "dsa-1-3-6", title: "Important STL Algorithms: Sort, Accumulate, Next Permutation", diff: "Easy", topic: "Standard Lib", tuf: "https://takeuforward.org/c/c-stl-tutorial-most-frequent-used-stl-containers/" }
        ]
      },
      {
        moduleId: "1.4",
        title: "Know Basic Maths",
        problems: [
          { id: "dsa-1-4-1", title: "Count Digits in a Number", diff: "Easy", topic: "Basic Maths", tuf: "https://takeuforward.org/data-structure/count-digits-in-a-number/" },
          { id: "dsa-1-4-2", title: "Reverse a Number", diff: "Easy", topic: "Basic Maths", tuf: "https://takeuforward.org/data-structure/reverse-digits-of-a-number/" },
          { id: "dsa-1-4-3", title: "Check if a Number is Palindrome", diff: "Easy", topic: "Basic Maths", tuf: "https://takeuforward.org/data-structure/check-if-a-number-is-palindrome-or-not/" },
          { id: "dsa-1-4-4", title: "GCD Or HCF (Euclidean Algorithm)", diff: "Easy", topic: "Basic Maths", tuf: "https://takeuforward.org/data-structure/find-gcd-of-two-numbers/" },
          { id: "dsa-1-4-5", title: "Armstrong Numbers Check", diff: "Easy", topic: "Basic Maths", tuf: "https://takeuforward.org/data-structure/check-if-a-number-is-armstrong-number-or-not/" },
          { id: "dsa-1-4-6", title: "Print all Divisors of a Given Number", diff: "Easy", topic: "Basic Maths", tuf: "https://takeuforward.org/data-structure/print-all-divisors-of-a-given-number/" },
          { id: "dsa-1-4-7", title: "Check for Prime Number in O(sqrt(N))", diff: "Easy", topic: "Basic Maths", tuf: "https://takeuforward.org/data-structure/check-if-a-number-is-prime-or-not/" }
        ]
      },
      {
        moduleId: "1.5",
        title: "Learn Basic Recursion",
        problems: [
          { id: "dsa-1-5-1", title: "Understand Recursion by printing something N times", diff: "Easy", topic: "Recursion Basics", tuf: "https://takeuforward.org/recursion/introduction-to-recursion-understand-recursion-by-printing-something-n-times/" },
          { id: "dsa-1-5-2", title: "Print 1 to N using Recursion", diff: "Easy", topic: "Recursion Basics", tuf: "https://takeuforward.org/recursion/print-1-to-n-using-recursion/" },
          { id: "dsa-1-5-3", title: "Print N to 1 using Recursion", diff: "Easy", topic: "Recursion Basics", tuf: "https://takeuforward.org/recursion/print-n-to-1-using-recursion/" },
          { id: "dsa-1-5-4", title: "Sum of first N Natural Numbers", diff: "Easy", topic: "Recursion Basics", tuf: "https://takeuforward.org/recursion/sum-of-first-n-natural-numbers/" },
          { id: "dsa-1-5-5", title: "Factorial of N numbers", diff: "Easy", topic: "Recursion Basics", tuf: "https://takeuforward.org/recursion/factorial-of-a-number-iterative-and-recursive/" },
          { id: "dsa-1-5-6", title: "Reverse an Array using Recursion", diff: "Easy", topic: "Recursion Basics", tuf: "https://takeuforward.org/data-structure/reverse-a-given-array/" },
          { id: "dsa-1-5-7", title: "Check if a String is Palindrome or Not", diff: "Easy", topic: "Recursion Basics", tuf: "https://takeuforward.org/data-structure/check-if-the-given-string-is-palindrome-or-not/" },
          { id: "dsa-1-5-8", title: "Fibonacci Number (Multiple Recursion Calls)", diff: "Easy", topic: "Recursion Basics", tuf: "https://takeuforward.org/data-structure/print-fibonacci-series-up-to-nth-term/" }
        ]
      },
      {
        moduleId: "1.6",
        title: "Learn Basic Hashing",
        problems: [
          { id: "dsa-1-6-1", title: "Hashing Theory (Array Hashing & Division Method)", diff: "Easy", topic: "Hashing Basics", tuf: "https://takeuforward.org/hashing/hashing-maps-time-complexity-collisions-division-rule-of-hashing-strivers-a2z-dsa-course/" },
          { id: "dsa-1-6-2", title: "Counting Frequencies of Array Elements", diff: "Easy", topic: "Hashing Basics", tuf: "https://takeuforward.org/data-structure/count-frequency-of-each-element-in-the-array/" },
          { id: "dsa-1-6-3", title: "Find the Highest/Lowest Frequency Element", diff: "Easy", topic: "Hashing Basics", tuf: "https://takeuforward.org/arrays/find-the-highest-lowest-frequency-element/" }
        ]
      }
    ]
  },
  {
    stepId: 2,
    title: "Step 2: Learn Important Sorting Techniques",
    desc: "Master comparison-based sorting, divide & conquer algorithms",
    modules: [
      {
        moduleId: "2.1",
        title: "Sorting-I (Elementary Sorts)",
        problems: [
          { id: "dsa-2-1-1", title: "Selection Sort", diff: "Easy", topic: "Sorting", tuf: "https://takeuforward.org/sorting/selection-sort-algorithm/" },
          { id: "dsa-2-1-2", title: "Bubble Sort", diff: "Easy", topic: "Sorting", tuf: "https://takeuforward.org/data-structure/bubble-sort-algorithm/" },
          { id: "dsa-2-1-3", title: "Insertion Sort", diff: "Easy", topic: "Sorting", tuf: "https://takeuforward.org/data-structure/insertion-sort-algorithm/" }
        ]
      },
      {
        moduleId: "2.2",
        title: "Sorting-II (Efficient & Recursive Sorts)",
        problems: [
          { id: "dsa-2-2-1", title: "Merge Sort Algorithm", diff: "Medium", topic: "Sorting", tuf: "https://takeuforward.org/data-structure/merge-sort-algorithm/" },
          { id: "dsa-2-2-2", title: "Recursive Bubble Sort", diff: "Easy", topic: "Sorting", tuf: "https://takeuforward.org/arrays/recursive-bubble-sort-algorithm/" },
          { id: "dsa-2-2-3", title: "Recursive Insertion Sort", diff: "Easy", topic: "Sorting", tuf: "https://takeuforward.org/arrays/recursive-insertion-sort-algorithm/" },
          { id: "dsa-2-2-4", title: "Quick Sort Algorithm", diff: "Medium", topic: "Sorting", tuf: "https://takeuforward.org/data-structure/quick-sort-algorithm/" }
        ]
      }
    ]
  },
  {
    stepId: 3,
    title: "Step 3: Solve Problems on Arrays",
    desc: "Cornerstone of DSA interviews: Easy, Medium & Hard array paradigms",
    modules: [
      {
        moduleId: "3.1",
        title: "Arrays [Easy Level]",
        problems: [
          { id: "dsa-3-1-1", title: "Largest Element in an Array", diff: "Easy", topic: "Arrays Easy", tuf: "https://takeuforward.org/data-structure/find-the-largest-element-in-an-array/" },
          { id: "dsa-3-1-2", title: "Second Largest Element in an Array without sorting", diff: "Easy", topic: "Arrays Easy", tuf: "https://takeuforward.org/data-structure/find-second-smallest-and-second-largest-element-in-an-array/" },
          { id: "dsa-3-1-3", title: "Check if the Array is Sorted and Rotated", diff: "Easy", topic: "Arrays Easy", tuf: "https://takeuforward.org/data-structure/check-if-an-array-is-sorted/" },
          { id: "dsa-3-1-4", title: "Remove Duplicates in-place from Sorted Array", diff: "Easy", topic: "Arrays Easy", tuf: "https://takeuforward.org/data-structure/remove-duplicates-in-place-from-sorted-array/" },
          { id: "dsa-3-1-5", title: "Left Rotate the Array by One", diff: "Easy", topic: "Arrays Easy", tuf: "https://takeuforward.org/data-structure/left-rotate-the-array-by-one/" },
          { id: "dsa-3-1-6", title: "Rotate Array by K Elements (Left & Right)", diff: "Medium", topic: "Arrays Easy", tuf: "https://takeuforward.org/data-structure/rotate-array-by-k-elements/" },
          { id: "dsa-3-1-7", title: "Move all Zeros to the End of the Array", diff: "Easy", topic: "Arrays Easy", tuf: "https://takeuforward.org/data-structure/move-all-zeros-to-the-end-of-the-array/" },
          { id: "dsa-3-1-8", title: "Linear Search in Array", diff: "Easy", topic: "Arrays Easy", tuf: "https://takeuforward.org/data-structure/linear-search-in-c/" },
          { id: "dsa-3-1-9", title: "Find the Union of Two Sorted Arrays", diff: "Easy", topic: "Arrays Easy", tuf: "https://takeuforward.org/data-structure/union-of-two-sorted-arrays/" },
          { id: "dsa-3-1-10", title: "Find Missing Number in an Array (Sum & XOR)", diff: "Easy", topic: "Arrays Easy", tuf: "https://takeuforward.org/arrays/find-the-missing-number-in-an-array/" },
          { id: "dsa-3-1-11", title: "Maximum Consecutive Ones", diff: "Easy", topic: "Arrays Easy", tuf: "https://takeuforward.org/data-structure/count-maximum-consecutive-ones-in-the-array/" },
          { id: "dsa-3-1-12", title: "Find the number that appears once, others twice", diff: "Easy", topic: "Arrays Easy", tuf: "https://takeuforward.org/arrays/find-the-number-that-appears-once-and-the-other-numbers-twice/" },
          { id: "dsa-3-1-13", title: "Longest Subarray with Given Sum K (Positives)", diff: "Medium", topic: "Arrays Easy", tuf: "https://takeuforward.org/data-structure/longest-subarray-with-given-sum-k/" },
          { id: "dsa-3-1-14", title: "Longest Subarray with Given Sum K (Positives + Negatives)", diff: "Medium", topic: "Arrays Easy", tuf: "https://takeuforward.org/arrays/longest-subarray-with-sum-k-postives-and-negatives/" }
        ]
      },
      {
        moduleId: "3.2",
        title: "Arrays [Medium Level]",
        problems: [
          { id: "dsa-3-2-1", title: "2 Sum Problem (Variants 1 & 2)", diff: "Medium", topic: "Arrays Medium", tuf: "https://takeuforward.org/data-structure/two-sum-check-if-a-pair-with-given-sum-exists-in-array/" },
          { id: "dsa-3-2-2", title: "Sort an array of 0s, 1s and 2s (Dutch National Flag)", diff: "Medium", topic: "Arrays Medium", tuf: "https://takeuforward.org/data-structure/sort-an-array-of-0s-1s-and-2s/" },
          { id: "dsa-3-2-3", title: "Majority Element (> n/2 times) - Moore's Voting", diff: "Medium", topic: "Arrays Medium", tuf: "https://takeuforward.org/data-structure/find-the-majority-element-that-occurs-more-than-n-2-times/" },
          { id: "dsa-3-2-4", title: "Maximum Subarray Sum (Kadane's Algorithm)", diff: "Medium", topic: "Arrays Medium", tuf: "https://takeuforward.org/data-structure/kadanes-algorithm-maximum-subarray-sum-in-an-array/" },
          { id: "dsa-3-2-5", title: "Print Subarray with Maximum Subarray Sum", diff: "Medium", topic: "Arrays Medium", tuf: "https://takeuforward.org/arrays/print-subarray-with-maximum-subarray-sum/" },
          { id: "dsa-3-2-6", title: "Stock Buy and Sell (Single Transaction)", diff: "Easy", topic: "Arrays Medium", tuf: "https://takeuforward.org/data-structure/stock-buy-and-sell/" },
          { id: "dsa-3-2-7", title: "Rearrange Array Elements by Sign (+ and -)", diff: "Medium", topic: "Arrays Medium", tuf: "https://takeuforward.org/arrays/rearrange-array-elements-by-sign/" },
          { id: "dsa-3-2-8", title: "Next Permutation (Lexicographically next)", diff: "Medium", topic: "Arrays Medium", tuf: "https://takeuforward.org/data-structure/next_permutation-find-next-lexicographically-greater-permutation/" },
          { id: "dsa-3-2-9", title: "Leaders in an Array Problem", diff: "Easy", topic: "Arrays Medium", tuf: "https://takeuforward.org/data-structure/leaders-in-an-array/" },
          { id: "dsa-3-2-10", title: "Longest Consecutive Sequence in an Array", diff: "Medium", topic: "Arrays Medium", tuf: "https://takeuforward.org/data-structure/longest-consecutive-sequence-in-an-array/" },
          { id: "dsa-3-2-11", title: "Set Matrix Zeroes in O(1) space", diff: "Medium", topic: "Arrays Medium", tuf: "https://takeuforward.org/data-structure/set-matrix-zero/" },
          { id: "dsa-3-2-12", title: "Rotate Matrix / Image by 90 Degrees Clockwise", diff: "Medium", topic: "Arrays Medium", tuf: "https://takeuforward.org/data-structure/rotate-image-by-90-degrees/" },
          { id: "dsa-3-2-13", title: "Spiral Traversal of Matrix", diff: "Medium", topic: "Arrays Medium", tuf: "https://takeuforward.org/data-structure/spiral-traversal-of-matrix/" },
          { id: "dsa-3-2-14", title: "Count Subarray sum Equals K (Prefix Sum Map)", diff: "Medium", topic: "Arrays Medium", tuf: "https://takeuforward.org/arrays/count-subarray-sum-equals-k/" }
        ]
      },
      {
        moduleId: "3.3",
        title: "Arrays [Hard Level]",
        problems: [
          { id: "dsa-3-3-1", title: "Pascal's Triangle (Row, Element & Full Triangle)", diff: "Hard", topic: "Arrays Hard", tuf: "https://takeuforward.org/data-structure/program-to-generate-pascals-triangle/" },
          { id: "dsa-3-3-2", title: "Majority Elements (> n/3 times) - Extended Boyer-Moore", diff: "Hard", topic: "Arrays Hard", tuf: "https://takeuforward.org/data-structure/majority-elementsn-3-times-find-the-elements-that-appears-more-than-n-3-times-in-the-array/" },
          { id: "dsa-3-3-3", title: "3 Sum Problem (Find all unique triplets with sum 0)", diff: "Hard", topic: "Arrays Hard", tuf: "https://takeuforward.org/data-structure/3-sum-find-triplets-that-add-up-to-a-zero/" },
          { id: "dsa-3-3-4", title: "4 Sum Problem (Unique quadruplets with target sum)", diff: "Hard", topic: "Arrays Hard", tuf: "https://takeuforward.org/data-structure/4-sum-find-quads-that-add-up-to-a-target-value/" },
          { id: "dsa-3-3-5", title: "Largest Subarray with 0 Sum", diff: "Medium", topic: "Arrays Hard", tuf: "https://takeuforward.org/data-structure/length-of-the-longest-subarray-with-zero-sum/" },
          { id: "dsa-3-3-6", title: "Count number of subarrays with given XOR K", diff: "Hard", topic: "Arrays Hard", tuf: "https://takeuforward.org/data-structure/count-the-number-of-subarrays-with-given-xor-k/" },
          { id: "dsa-3-3-7", title: "Merge Overlapping Subintervals", diff: "Hard", topic: "Arrays Hard", tuf: "https://takeuforward.org/data-structure/merge-overlapping-sub-intervals/" },
          { id: "dsa-3-3-8", title: "Merge two Sorted Arrays Without Extra Space", diff: "Hard", topic: "Arrays Hard", tuf: "https://takeuforward.org/data-structure/merge-two-sorted-arrays-without-extra-space/" },
          { id: "dsa-3-3-9", title: "Find the repeating and missing number (Math & XOR)", diff: "Hard", topic: "Arrays Hard", tuf: "https://takeuforward.org/data-structure/find-the-repeating-and-missing-numbers/" },
          { id: "dsa-3-3-10", title: "Count Inversions in an Array (Merge Sort modified)", diff: "Hard", topic: "Arrays Hard", tuf: "https://takeuforward.org/data-structure/count-inversions-in-an-array/" },
          { id: "dsa-3-3-11", title: "Reverse Pairs (LeetCode 493)", diff: "Hard", topic: "Arrays Hard", tuf: "https://takeuforward.org/data-structure/count-reverse-pairs/" },
          { id: "dsa-3-3-12", title: "Maximum Product Subarray in an Array", diff: "Hard", topic: "Arrays Hard", tuf: "https://takeuforward.org/data-structure/maximum-product-subarray-in-an-array/" }
        ]
      }
    ]
  },
  {
    stepId: 4,
    title: "Step 4: Binary Search [1D, 2D Arrays & Search Space]",
    desc: "Mastering the O(log N) divide-and-conquer paradigm & BS on Answers",
    modules: [
      {
        moduleId: "4.1",
        title: "BS on 1D Arrays",
        problems: [
          { id: "dsa-4-1-1", title: "Binary Search to find X in sorted array", diff: "Easy", topic: "Binary Search 1D", tuf: "https://takeuforward.org/data-structure/binary-search-explained/" },
          { id: "dsa-4-1-2", title: "Implement Lower Bound", diff: "Easy", topic: "Binary Search 1D", tuf: "https://takeuforward.org/arrays/implement-lower-bound-bs-2/" },
          { id: "dsa-4-1-3", title: "Implement Upper Bound", diff: "Easy", topic: "Binary Search 1D", tuf: "https://takeuforward.org/arrays/implement-upper-bound/" },
          { id: "dsa-4-1-4", title: "Search Insert Position", diff: "Easy", topic: "Binary Search 1D", tuf: "https://takeuforward.org/arrays/search-insert-position/" },
          { id: "dsa-4-1-5", title: "Floor and Ceil in Sorted Array", diff: "Easy", topic: "Binary Search 1D", tuf: "https://takeuforward.org/arrays/floor-and-ceil-in-sorted-array/" },
          { id: "dsa-4-1-6", title: "First and Last Occurrence of Element in Sorted Array", diff: "Medium", topic: "Binary Search 1D", tuf: "https://takeuforward.org/data-structure/last-occurrence-in-a-sorted-array/" },
          { id: "dsa-4-1-7", title: "Count Occurrences of a number in a sorted array with duplicates", diff: "Easy", topic: "Binary Search 1D", tuf: "https://takeuforward.org/data-structure/count-occurrences-in-sorted-array/" },
          { id: "dsa-4-1-8", title: "Search in Rotated Sorted Array I (Unique Elements)", diff: "Medium", topic: "Binary Search 1D", tuf: "https://takeuforward.org/data-structure/search-element-in-a-rotated-sorted-array/" },
          { id: "dsa-4-1-9", title: "Search in Rotated Sorted Array II (Duplicate Elements)", diff: "Medium", topic: "Binary Search 1D", tuf: "https://takeuforward.org/arrays/search-element-in-rotated-sorted-array-ii/" },
          { id: "dsa-4-1-10", title: "Find Minimum in Rotated Sorted Array", diff: "Medium", topic: "Binary Search 1D", tuf: "https://takeuforward.org/data-structure/minimum-in-rotated-sorted-array/" },
          { id: "dsa-4-1-11", title: "Find how many times array has been rotated", diff: "Easy", topic: "Binary Search 1D", tuf: "https://takeuforward.org/arrays/find-out-how-many-times-the-array-has-been-rotated/" },
          { id: "dsa-4-1-12", title: "Single Element in a Sorted Array", diff: "Medium", topic: "Binary Search 1D", tuf: "https://takeuforward.org/data-structure/search-single-element-in-a-sorted-array/" },
          { id: "dsa-4-1-13", title: "Find Peak Element in an Array", diff: "Medium", topic: "Binary Search 1D", tuf: "https://takeuforward.org/data-structure/peak-element-in-array/" }
        ]
      },
      {
        moduleId: "4.2",
        title: "BS on Answers (Search Space)",
        problems: [
          { id: "dsa-4-2-1", title: "Find Square Root of an Integer in log N", diff: "Easy", topic: "BS on Answers", tuf: "https://takeuforward.org/binary-search/finding-sqrt-of-a-number-using-binary-search/" },
          { id: "dsa-4-2-2", title: "Find Nth Root of Integer M", diff: "Easy", topic: "BS on Answers", tuf: "https://takeuforward.org/data-structure/nth-root-of-a-number-using-binary-search/" },
          { id: "dsa-4-2-3", title: "Koko Eating Bananas (LeetCode 875)", diff: "Medium", topic: "BS on Answers", tuf: "https://takeuforward.org/binary-search/koko-eating-bananas/" },
          { id: "dsa-4-2-4", title: "Minimum days to make M bouquets", diff: "Medium", topic: "BS on Answers", tuf: "https://takeuforward.org/binary-search/minimum-days-to-make-m-bouquets/" },
          { id: "dsa-4-2-5", title: "Find the smallest Divisor Given a Threshold", diff: "Medium", topic: "BS on Answers", tuf: "https://takeuforward.org/binary-search/find-the-smallest-divisor-given-a-threshold/" },
          { id: "dsa-4-2-6", title: "Capacity to Ship Packages within D Days", diff: "Medium", topic: "BS on Answers", tuf: "https://takeuforward.org/binary-search/capacity-to-ship-packages-within-d-days/" },
          { id: "dsa-4-2-7", title: "Kth Missing Positive Number", diff: "Easy", topic: "BS on Answers", tuf: "https://takeuforward.org/binary-search/kth-missing-positive-number/" },
          { id: "dsa-4-2-8", title: "Aggressive Cows (Detailed Concept)", diff: "Hard", topic: "BS on Answers", tuf: "https://takeuforward.org/data-structure/aggressive-cows-detailed-solution/" },
          { id: "dsa-4-2-9", title: "Book Allocation Problem", diff: "Hard", topic: "BS on Answers", tuf: "https://takeuforward.org/data-structure/allocate-minimum-number-of-pages/" },
          { id: "dsa-4-2-10", title: "Split Array Largest Sum / Painter's Partition", diff: "Hard", topic: "BS on Answers", tuf: "https://takeuforward.org/binary-search/split-array-largest-sum/" },
          { id: "dsa-4-2-11", title: "Minimize Max Distance to Gas Station", diff: "Hard", topic: "BS on Answers", tuf: "https://takeuforward.org/binary-search/minimise-maximum-distance-between-gas-stations/" },
          { id: "dsa-4-2-12", title: "Median of Two Sorted Arrays of different sizes", diff: "Hard", topic: "BS on Answers", tuf: "https://takeuforward.org/data-structure/median-of-two-sorted-arrays-of-different-sizes/" },
          { id: "dsa-4-2-13", title: "Kth element of two sorted arrays", diff: "Hard", topic: "BS on Answers", tuf: "https://takeuforward.org/data-structure/k-th-element-of-two-sorted-arrays/" }
        ]
      },
      {
        moduleId: "4.3",
        title: "BS on 2D Arrays",
        problems: [
          { id: "dsa-4-3-1", title: "Find the row with maximum number of 1's", diff: "Easy", topic: "Binary Search 2D", tuf: "https://takeuforward.org/arrays/find-the-row-with-maximum-number-of-1s/" },
          { id: "dsa-4-3-2", title: "Search in a 2D Matrix (Sorted in row-major order)", diff: "Medium", topic: "Binary Search 2D", tuf: "https://takeuforward.org/data-structure/search-in-a-sorted-2d-matrix/" },
          { id: "dsa-4-3-3", title: "Search in a Row and Column-wise Sorted Matrix", diff: "Medium", topic: "Binary Search 2D", tuf: "https://takeuforward.org/arrays/search-in-a-row-and-column-wise-sorted-matrix/" },
          { id: "dsa-4-3-4", title: "Find Peak Element in a 2D Matrix", diff: "Hard", topic: "Binary Search 2D", tuf: "https://takeuforward.org/binary-search/find-a-peak-element-ii/" },
          { id: "dsa-4-3-5", title: "Matrix Median in row-wise sorted matrix", diff: "Hard", topic: "Binary Search 2D", tuf: "https://takeuforward.org/binary-search/median-of-row-wise-sorted-matrix/" }
        ]
      }
    ]
  },
  {
    stepId: 5,
    title: "Step 5: Strings [Basic and Medium]",
    desc: "String parsing, frequency manipulation, palindromes, conversions",
    modules: [
      {
        moduleId: "5.1",
        title: "Basic String Problems",
        problems: [
          { id: "dsa-5-1-1", title: "Remove Outermost Parentheses", diff: "Easy", topic: "Strings", tuf: "https://takeuforward.org/data-structure/remove-outermost-parentheses/" },
          { id: "dsa-5-1-2", title: "Reverse Words in a String", diff: "Medium", topic: "Strings", tuf: "https://takeuforward.org/data-structure/reverse-words-in-a-string/" },
          { id: "dsa-5-1-3", title: "Largest Odd Number in a String", diff: "Easy", topic: "Strings", tuf: "https://takeuforward.org/strings/largest-odd-number-in-a-string/" },
          { id: "dsa-5-1-4", title: "Longest Common Prefix", diff: "Easy", topic: "Strings", tuf: "https://takeuforward.org/data-structure/longest-common-prefix/" },
          { id: "dsa-5-1-5", title: "Isomorphic String", diff: "Easy", topic: "Strings", tuf: "https://takeuforward.org/strings/isomorphic-string/" },
          { id: "dsa-5-1-6", title: "Rotate String (Check if A is rotation of B)", diff: "Easy", topic: "Strings", tuf: "https://takeuforward.org/strings/rotate-string/" },
          { id: "dsa-5-1-7", title: "Check if two Strings are Anagrams of each other", diff: "Easy", topic: "Strings", tuf: "https://takeuforward.org/data-structure/check-if-two-strings-are-anagrams-of-each-other/" }
        ]
      },
      {
        moduleId: "5.2",
        title: "Medium String Problems",
        problems: [
          { id: "dsa-5-2-1", title: "Sort Characters by Frequency", diff: "Medium", topic: "Strings", tuf: "https://takeuforward.org/strings/sort-characters-by-frequency/" },
          { id: "dsa-5-2-2", title: "Maximum Nesting Depth of Parentheses", diff: "Easy", topic: "Strings", tuf: "https://takeuforward.org/strings/maximum-nesting-depth-of-the-parentheses/" },
          { id: "dsa-5-2-3", title: "Roman Number to Integer", diff: "Easy", topic: "Strings", tuf: "https://takeuforward.org/strings/roman-number-to-integer-and-vice-versa/" },
          { id: "dsa-5-2-4", title: "Implement Atoi (String to Integer conversion)", diff: "Medium", topic: "Strings", tuf: "https://takeuforward.org/strings/implement-atoi/" },
          { id: "dsa-5-2-5", title: "Count Number of Substrings with K Distinct Characters", diff: "Medium", topic: "Strings", tuf: "https://takeuforward.org/strings/count-number-of-substrings-with-k-distinct-characters/" },
          { id: "dsa-5-2-6", title: "Longest Palindromic Substring", diff: "Medium", topic: "Strings", tuf: "https://takeuforward.org/data-structure/longest-palindromic-substring/" },
          { id: "dsa-5-2-7", title: "Sum of Beauty of all Substrings", diff: "Medium", topic: "Strings", tuf: "https://takeuforward.org/strings/sum-of-beauty-of-all-substrings/" },
          { id: "dsa-5-2-8", title: "Reverse Every Word in a String", diff: "Easy", topic: "Strings", tuf: "https://takeuforward.org/data-structure/reverse-words-in-a-string/" }
        ]
      }
    ]
  },
  {
    stepId: 6,
    title: "Step 6: Learn LinkedList [Single, Double, Medium & Hard]",
    desc: "Node allocations, pointer manipulation, fast/slow pointers, reversals",
    modules: [
      {
        moduleId: "6.1",
        title: "Learn 1D LinkedList",
        problems: [
          { id: "dsa-6-1-1", title: "Introduction to Linked List & Node creation", diff: "Easy", topic: "Linked List", tuf: "https://takeuforward.org/data-structure/intro-to-linked-list/" },
          { id: "dsa-6-1-2", title: "Inserting a Node in LinkedList (Head, Tail, Kth)", diff: "Easy", topic: "Linked List", tuf: "https://takeuforward.org/data-structure/insert-node-at-beginning-of-linked-list/" },
          { id: "dsa-6-1-3", title: "Deleting a Node in LinkedList", diff: "Easy", topic: "Linked List", tuf: "https://takeuforward.org/data-structure/delete-node-in-a-linked-list/" },
          { id: "dsa-6-1-4", title: "Find the Length of a Linked List (Iterative & Recursive)", diff: "Easy", topic: "Linked List", tuf: "https://takeuforward.org/linked-list/find-the-length-of-a-linked-list/" },
          { id: "dsa-6-1-5", title: "Search an Element in a Linked List", diff: "Easy", topic: "Linked List", tuf: "https://takeuforward.org/linked-list/search-an-element-in-a-linked-list/" }
        ]
      },
      {
        moduleId: "6.2",
        title: "Learn Doubly LinkedList",
        problems: [
          { id: "dsa-6-2-1", title: "Introduction to Doubly Linked List", diff: "Easy", topic: "Doubly LL", tuf: "https://takeuforward.org/data-structure/introduction-to-doubly-linked-list/" },
          { id: "dsa-6-2-2", title: "Insert a node in Doubly Linked List", diff: "Easy", topic: "Doubly LL", tuf: "https://takeuforward.org/data-structure/insert-a-node-in-doubly-linked-list/" },
          { id: "dsa-6-2-3", title: "Delete a node in Doubly Linked List", diff: "Easy", topic: "Doubly LL", tuf: "https://takeuforward.org/data-structure/delete-a-node-in-doubly-linked-list/" },
          { id: "dsa-6-2-4", title: "Reverse a Doubly Linked List", diff: "Easy", topic: "Doubly LL", tuf: "https://takeuforward.org/data-structure/reverse-a-doubly-linked-list/" }
        ]
      },
      {
        moduleId: "6.3",
        title: "Medium Problems on LL",
        problems: [
          { id: "dsa-6-3-1", title: "Middle of a LinkedList (Tortoise & Hare)", diff: "Easy", topic: "Linked List Medium", tuf: "https://takeuforward.org/data-structure/find-middle-element-in-a-linked-list/" },
          { id: "dsa-6-3-2", title: "Reverse a LinkedList (Iterative & Recursive)", diff: "Easy", topic: "Linked List Medium", tuf: "https://takeuforward.org/data-structure/reverse-a-linked-list/" },
          { id: "dsa-6-3-3", title: "Detect a Loop / Cycle in LL", diff: "Easy", topic: "Linked List Medium", tuf: "https://takeuforward.org/data-structure/detect-a-cycle-in-a-linked-list/" },
          { id: "dsa-6-3-4", title: "Find the Starting Point of Loop in LL", diff: "Medium", topic: "Linked List Medium", tuf: "https://takeuforward.org/data-structure/starting-loop-point-of-linked-list/" },
          { id: "dsa-6-3-5", title: "Length of Loop in Linked List", diff: "Easy", topic: "Linked List Medium", tuf: "https://takeuforward.org/linked-list/length-of-loop-in-linked-list/" },
          { id: "dsa-6-3-6", title: "Check if LL is Palindrome", diff: "Medium", topic: "Linked List Medium", tuf: "https://takeuforward.org/data-structure/check-if-given-linked-list-is-plaindrome/" },
          { id: "dsa-6-3-7", title: "Segregate Odd and Even Nodes in LL", diff: "Medium", topic: "Linked List Medium", tuf: "https://takeuforward.org/data-structure/segregate-even-and-odd-nodes-in-linked-list/" },
          { id: "dsa-6-3-8", title: "Remove N-th node from the back of LL", diff: "Medium", topic: "Linked List Medium", tuf: "https://takeuforward.org/data-structure/remove-n-th-node-from-the-end-of-a-linked-list/" },
          { id: "dsa-6-3-9", title: "Delete the Middle Node of LL", diff: "Medium", topic: "Linked List Medium", tuf: "https://takeuforward.org/linked-list/delete-the-middle-node-of-the-linked-list/" },
          { id: "dsa-6-3-10", title: "Sort a LinkedList (Merge Sort on LL)", diff: "Medium", topic: "Linked List Medium", tuf: "https://takeuforward.org/linked-list/sort-a-linked-list/" },
          { id: "dsa-6-3-11", title: "Sort LL of 0's 1's and 2's by changing links", diff: "Medium", topic: "Linked List Medium", tuf: "https://takeuforward.org/linked-list/sort-a-linked-list-of-0s-1s-and-2s/" },
          { id: "dsa-6-3-12", title: "Find the Intersection Point of Two LL", diff: "Medium", topic: "Linked List Medium", tuf: "https://takeuforward.org/data-structure/find-intersection-of-two-linked-lists/" },
          { id: "dsa-6-3-13", title: "Add 1 to a number represented by LL", diff: "Medium", topic: "Linked List Medium", tuf: "https://takeuforward.org/linked-list/add-1-to-a-number-represented-by-linked-list/" },
          { id: "dsa-6-3-14", title: "Add two numbers represented by LinkedList", diff: "Medium", topic: "Linked List Medium", tuf: "https://takeuforward.org/data-structure/add-two-numbers-represented-as-linked-list/" }
        ]
      },
      {
        moduleId: "6.4",
        title: "Hard Problems on LL",
        problems: [
          { id: "dsa-6-4-1", title: "Reverse LL in group of given size K (K-Group)", diff: "Hard", topic: "Linked List Hard", tuf: "https://takeuforward.org/data-structure/reverse-linked-list-in-groups-of-size-k/" },
          { id: "dsa-6-4-2", title: "Rotate a LinkedList by K places", diff: "Medium", topic: "Linked List Hard", tuf: "https://takeuforward.org/data-structure/rotate-a-linked-list/" },
          { id: "dsa-6-4-3", title: "Flattening of a Linked List", diff: "Hard", topic: "Linked List Hard", tuf: "https://takeuforward.org/data-structure/flattening-a-linked-list/" },
          { id: "dsa-6-4-4", title: "Clone a Linked List with Random and Next Pointer", diff: "Hard", topic: "Linked List Hard", tuf: "https://takeuforward.org/data-structure/clone-linked-list-with-random-and-next-pointer/" }
        ]
      }
    ]
  },
  {
    stepId: 7,
    title: "Step 7: Recursion & Backtracking [PatternWise]",
    desc: "Subsequences, combination sums, permutations, N-Queens, Sudoku solver",
    modules: [
      {
        moduleId: "7.1",
        title: "Get a Strong Hold on Recursion",
        problems: [
          { id: "dsa-7-1-1", title: "Recursive Implementation of atoi()", diff: "Medium", topic: "Recursion Patterns", tuf: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-track/" },
          { id: "dsa-7-1-2", title: "Pow(x, n) - Implement Power Exponentiation", diff: "Medium", topic: "Recursion Patterns", tuf: "https://takeuforward.org/data-structure/calculate-the-power-of-a-number-powxn-binary-exponentiation/" },
          { id: "dsa-7-1-3", title: "Count Good Numbers (Modulo arithmetic)", diff: "Medium", topic: "Recursion Patterns", tuf: "https://takeuforward.org/recursion/count-good-numbers/" },
          { id: "dsa-7-1-4", title: "Sort a Stack using Recursion", diff: "Medium", topic: "Recursion Patterns", tuf: "https://takeuforward.org/recursion/sort-a-stack-using-recursion/" },
          { id: "dsa-7-1-5", title: "Reverse a Stack using Recursion", diff: "Medium", topic: "Recursion Patterns", tuf: "https://takeuforward.org/recursion/reverse-a-stack-using-recursion/" }
        ]
      },
      {
        moduleId: "7.2",
        title: "Subsequences & Combination Patterns",
        problems: [
          { id: "dsa-7-2-1", title: "Generate all binary strings of size N with no consecutive 1s", diff: "Medium", topic: "Subsequences", tuf: "https://takeuforward.org/recursion/generate-all-binary-strings-without-consecutive-1s/" },
          { id: "dsa-7-2-2", title: "Generate Parentheses (All valid combinations)", diff: "Medium", topic: "Subsequences", tuf: "https://takeuforward.org/recursion/generate-parentheses/" },
          { id: "dsa-7-2-3", title: "Print all Subsequences / Power Set", diff: "Medium", topic: "Subsequences", tuf: "https://takeuforward.org/data-structure/power-set-print-all-subsequences-of-a-string/" },
          { id: "dsa-7-2-4", title: "Learn All Patterns of Subsequences (Sum equals K)", diff: "Medium", topic: "Subsequences", tuf: "https://takeuforward.org/recursion/print-all-subsequences-whose-sum-is-k/" },
          { id: "dsa-7-2-5", title: "Check if there exists a subsequence with sum K", diff: "Medium", topic: "Subsequences", tuf: "https://takeuforward.org/recursion/check-if-subsequence-with-sum-k-exists/" },
          { id: "dsa-7-2-6", title: "Combination Sum I (Infinite supply of coins)", diff: "Medium", topic: "Subsequences", tuf: "https://takeuforward.org/data-structure/combination-sum-1/" },
          { id: "dsa-7-2-7", title: "Combination Sum II (Unique combinations, no reuse)", diff: "Medium", topic: "Subsequences", tuf: "https://takeuforward.org/data-structure/combination-sum-ii-find-unique-combinations/" },
          { id: "dsa-7-2-8", title: "Subset Sum I (Sum of all subsets)", diff: "Easy", topic: "Subsequences", tuf: "https://takeuforward.org/data-structure/subset-sum-sum-of-all-subsets/" },
          { id: "dsa-7-2-9", title: "Subset Sum II (Print all unique subsets)", diff: "Medium", topic: "Subsequences", tuf: "https://takeuforward.org/data-structure/subset-ii-print-all-the-unique-subsets/" },
          { id: "dsa-7-2-10", title: "Combination Sum III (K numbers sum to N)", diff: "Medium", topic: "Subsequences", tuf: "https://takeuforward.org/recursion/combination-sum-iii/" },
          { id: "dsa-7-2-11", title: "Letter Combinations of a Phone Number", diff: "Medium", topic: "Subsequences", tuf: "https://takeuforward.org/recursion/letter-combinations-of-a-phone-number/" }
        ]
      },
      {
        moduleId: "7.3",
        title: "Hard Backtracking Problems",
        problems: [
          { id: "dsa-7-3-1", title: "Palindrome Partitioning", diff: "Hard", topic: "Backtracking Hard", tuf: "https://takeuforward.org/data-structure/palindrome-partitioning/" },
          { id: "dsa-7-3-2", title: "Word Search in Grid (Backtracking)", diff: "Medium", topic: "Backtracking Hard", tuf: "https://takeuforward.org/data-structure/word-search-leetcode/" },
          { id: "dsa-7-3-3", title: "N-Queens Problem (Optimal Branch & Bound)", diff: "Hard", topic: "Backtracking Hard", tuf: "https://takeuforward.org/data-structure/n-queen-problem-return-all-distinct-solutions-to-the-n-queens-puzzle/" },
          { id: "dsa-7-3-4", title: "Rat in a Maze Problem", diff: "Medium", topic: "Backtracking Hard", tuf: "https://takeuforward.org/data-structure/rat-in-a-maze/" },
          { id: "dsa-7-3-5", title: "Word Break (Backtracking approach)", diff: "Hard", topic: "Backtracking Hard", tuf: "https://takeuforward.org/recursion/word-break/" },
          { id: "dsa-7-3-6", title: "M-Coloring Problem (Graph coloring)", diff: "Medium", topic: "Backtracking Hard", tuf: "https://takeuforward.org/data-structure/m-coloring-problem/" },
          { id: "dsa-7-3-7", title: "Sudoku Solver (Full 9x9 grid)", diff: "Hard", topic: "Backtracking Hard", tuf: "https://takeuforward.org/data-structure/sudoku-solver/" },
          { id: "dsa-7-3-8", title: "Expression Add Operators", diff: "Hard", topic: "Backtracking Hard", tuf: "https://takeuforward.org/recursion/expression-add-operators/" }
        ]
      }
    ]
  },
  {
    stepId: 8,
    title: "Step 8: Bit Manipulation [Concepts & Tricks]",
    desc: "Bitwise magic, XOR tricks, set bits, power sets, math & prime sieve",
    modules: [
      {
        moduleId: "8.1",
        title: "Learn Bit Manipulation Basics",
        problems: [
          { id: "dsa-8-1-1", title: "Introduction to Bitwise Operators (&, |, ^, ~, <<, >>)", diff: "Easy", topic: "Bits", tuf: "https://takeuforward.org/bit-manipulation/introduction-to-bit-manipulation/" },
          { id: "dsa-8-1-2", title: "Check if the i-th bit is set or not", diff: "Easy", topic: "Bits", tuf: "https://takeuforward.org/bit-manipulation/check-if-the-i-th-bit-is-set-or-not/" },
          { id: "dsa-8-1-3", title: "Set the i-th bit", diff: "Easy", topic: "Bits", tuf: "https://takeuforward.org/bit-manipulation/set-the-i-th-bit/" },
          { id: "dsa-8-1-4", title: "Clear the i-th bit", diff: "Easy", topic: "Bits", tuf: "https://takeuforward.org/bit-manipulation/clear-the-i-th-bit/" },
          { id: "dsa-8-1-5", title: "Toggle the i-th bit", diff: "Easy", topic: "Bits", tuf: "https://takeuforward.org/bit-manipulation/toggle-the-i-th-bit/" },
          { id: "dsa-8-1-6", title: "Remove the last set bit (n & (n - 1))", diff: "Easy", topic: "Bits", tuf: "https://takeuforward.org/bit-manipulation/remove-the-last-set-bit/" },
          { id: "dsa-8-1-7", title: "Check if a number is Power of 2", diff: "Easy", topic: "Bits", tuf: "https://takeuforward.org/bit-manipulation/check-if-a-number-is-a-power-of-2/" },
          { id: "dsa-8-1-8", title: "Count number of set bits (Brian Kernighan)", diff: "Easy", topic: "Bits", tuf: "https://takeuforward.org/bit-manipulation/count-number-of-set-bits/" },
          { id: "dsa-8-1-9", title: "Minimum Bit Flips to Convert Number", diff: "Easy", topic: "Bits", tuf: "https://takeuforward.org/bit-manipulation/minimum-bit-flips-to-convert-number/" },
          { id: "dsa-8-1-10", title: "Find Power Set using Bit Manipulation", diff: "Medium", topic: "Bits", tuf: "https://takeuforward.org/bit-manipulation/power-set-print-all-subsets-using-bit-manipulation/" }
        ]
      },
      {
        moduleId: "8.2",
        title: "Interview Bit Manipulation Problems",
        problems: [
          { id: "dsa-8-2-1", title: "Single Number I (One element appears once)", diff: "Easy", topic: "Bits Interview", tuf: "https://takeuforward.org/arrays/find-the-number-that-appears-once-and-the-other-numbers-twice/" },
          { id: "dsa-8-2-2", title: "Single Number II (Every element appears 3 times except one)", diff: "Medium", topic: "Bits Interview", tuf: "https://takeuforward.org/bit-manipulation/single-number-ii/" },
          { id: "dsa-8-2-3", title: "Single Number III (Two numbers appear once, rest twice)", diff: "Medium", topic: "Bits Interview", tuf: "https://takeuforward.org/bit-manipulation/single-number-iii/" },
          { id: "dsa-8-2-4", title: "XOR of Numbers in a Given Range [L, R]", diff: "Medium", topic: "Bits Interview", tuf: "https://takeuforward.org/bit-manipulation/find-xor-of-numbers-from-l-to-r/" },
          { id: "dsa-8-2-5", title: "Divide Two Integers without using *, / and %", diff: "Medium", topic: "Bits Interview", tuf: "https://takeuforward.org/bit-manipulation/divide-two-integers-without-using-multiplication-division-and-mod-operator/" }
        ]
      },
      {
        moduleId: "8.3",
        title: "Advanced Maths & Prime Algorithms",
        problems: [
          { id: "dsa-8-3-1", title: "Print all Prime Factors of a Number", diff: "Medium", topic: "Maths Advanced", tuf: "https://takeuforward.org/maths/prime-factorisation-of-a-number/" },
          { id: "dsa-8-3-2", title: "All Divisors of a Number in O(sqrt N)", diff: "Easy", topic: "Maths Advanced", tuf: "https://takeuforward.org/data-structure/print-all-divisors-of-a-given-number/" },
          { id: "dsa-8-3-3", title: "Sieve of Eratosthenes (Count primes up to N)", diff: "Medium", topic: "Maths Advanced", tuf: "https://takeuforward.org/maths/sieve-of-eratosthenes/" },
          { id: "dsa-8-3-4", title: "Find Prime Factorisation using Sieve (Queries)", diff: "Medium", topic: "Maths Advanced", tuf: "https://takeuforward.org/maths/prime-factorization-using-sieve/" },
          { id: "dsa-8-3-5", title: "Power Exponentiation (Binary Exponentiation)", diff: "Medium", topic: "Maths Advanced", tuf: "https://takeuforward.org/data-structure/calculate-the-power-of-a-number-powxn-binary-exponentiation/" }
        ]
      }
    ]
  },
  {
    stepId: 9,
    title: "Step 9: Stack and Queues [Learning & Monotonic Stack]",
    desc: "LIFO/FIFO, conversions, Next Greater Element, Trapping Rain Water, LRU Cache",
    modules: [
      {
        moduleId: "9.1",
        title: "Learning Stack and Queue",
        problems: [
          { id: "dsa-9-1-1", title: "Implement Stack using Array", diff: "Easy", topic: "Stack Basics", tuf: "https://takeuforward.org/data-structure/implement-stack-using-array/" },
          { id: "dsa-9-1-2", title: "Implement Queue using Array", diff: "Easy", topic: "Stack Basics", tuf: "https://takeuforward.org/data-structure/implement-queue-using-array/" },
          { id: "dsa-9-1-3", title: "Implement Stack using Queue (Single & Two Queues)", diff: "Easy", topic: "Stack Basics", tuf: "https://takeuforward.org/data-structure/implement-stack-using-single-queue/" },
          { id: "dsa-9-1-4", title: "Implement Queue using Stack", diff: "Easy", topic: "Stack Basics", tuf: "https://takeuforward.org/data-structure/implement-queue-using-stack/" },
          { id: "dsa-9-1-5", title: "Implement Stack using Linked List", diff: "Easy", topic: "Stack Basics", tuf: "https://takeuforward.org/data-structure/implement-stack-using-linked-list/" },
          { id: "dsa-9-1-6", title: "Implement Queue using Linked List", diff: "Easy", topic: "Stack Basics", tuf: "https://takeuforward.org/data-structure/implement-queue-using-linked-list/" },
          { id: "dsa-9-1-7", title: "Check for Balanced Parentheses", diff: "Easy", topic: "Stack Basics", tuf: "https://takeuforward.org/data-structure/check-for-balanced-parentheses/" },
          { id: "dsa-9-1-8", title: "Implement Min Stack in O(1) space", diff: "Medium", topic: "Stack Basics", tuf: "https://takeuforward.org/data-structure/implement-min-stack-o2n-and-on-space-complexity/" }
        ]
      },
      {
        moduleId: "9.2",
        title: "Prefix, Infix, Postfix Conversions",
        problems: [
          { id: "dsa-9-2-1", title: "Infix to Postfix Conversion", diff: "Medium", topic: "Stack Conversions", tuf: "https://takeuforward.org/data-structure/infix-to-postfix/" },
          { id: "dsa-9-2-2", title: "Prefix to Infix Conversion", diff: "Medium", topic: "Stack Conversions", tuf: "https://takeuforward.org/data-structure/prefix-to-infix/" },
          { id: "dsa-9-2-3", title: "Prefix to Postfix Conversion", diff: "Medium", topic: "Stack Conversions", tuf: "https://takeuforward.org/data-structure/prefix-to-postfix/" },
          { id: "dsa-9-2-4", title: "Postfix to Prefix Conversion", diff: "Medium", topic: "Stack Conversions", tuf: "https://takeuforward.org/data-structure/postfix-to-prefix/" },
          { id: "dsa-9-2-5", title: "Postfix to Infix Conversion", diff: "Medium", topic: "Stack Conversions", tuf: "https://takeuforward.org/data-structure/postfix-to-infix/" },
          { id: "dsa-9-2-6", title: "Infix to Prefix Conversion", diff: "Medium", topic: "Stack Conversions", tuf: "https://takeuforward.org/data-structure/infix-to-prefix/" }
        ]
      },
      {
        moduleId: "9.3",
        title: "Monotonic Stack / Queue Problems",
        problems: [
          { id: "dsa-9-3-1", title: "Next Greater Element I", diff: "Easy", topic: "Monotonic Stack", tuf: "https://takeuforward.org/data-structure/next-greater-element-using-stack/" },
          { id: "dsa-9-3-2", title: "Next Greater Element II (Circular Array)", diff: "Medium", topic: "Monotonic Stack", tuf: "https://takeuforward.org/data-structure/next-greater-element-2/" },
          { id: "dsa-9-3-3", title: "Next Smaller Element / Immediate Smaller", diff: "Easy", topic: "Monotonic Stack", tuf: "https://takeuforward.org/data-structure/next-smaller-element/" },
          { id: "dsa-9-3-4", title: "Number of NGEs to the right", diff: "Medium", topic: "Monotonic Stack", tuf: "https://takeuforward.org/data-structure/number-of-nges-to-the-right/" },
          { id: "dsa-9-3-5", title: "Trapping Rain Water (Two Pointer & Stack)", diff: "Hard", topic: "Monotonic Stack", tuf: "https://takeuforward.org/data-structure/trapping-rainwater/" },
          { id: "dsa-9-3-6", title: "Asteroid Collision", diff: "Medium", topic: "Monotonic Stack", tuf: "https://takeuforward.org/data-structure/asteroid-collision/" },
          { id: "dsa-9-3-7", title: "Sum of Subarray Minimums", diff: "Medium", topic: "Monotonic Stack", tuf: "https://takeuforward.org/data-structure/sum-of-subarray-minimums/" },
          { id: "dsa-9-3-8", title: "Sum of Subarray Ranges", diff: "Medium", topic: "Monotonic Stack", tuf: "https://takeuforward.org/data-structure/sum-of-subarray-ranges/" },
          { id: "dsa-9-3-9", title: "Remove K Digits to make smallest number", diff: "Medium", topic: "Monotonic Stack", tuf: "https://takeuforward.org/data-structure/remove-k-digits/" },
          { id: "dsa-9-3-10", title: "Largest Rectangle in Histogram", diff: "Hard", topic: "Monotonic Stack", tuf: "https://takeuforward.org/data-structure/area-of-largest-rectangle-in-histogram/" },
          { id: "dsa-9-3-11", title: "Maximal Rectangle in 2D Binary Matrix", diff: "Hard", topic: "Monotonic Stack", tuf: "https://takeuforward.org/data-structure/maximal-rectangle-in-binary-matrix/" }
        ]
      },
      {
        moduleId: "9.4",
        title: "Implementation & Advanced Cache Design",
        problems: [
          { id: "dsa-9-4-1", title: "Sliding Window Maximum (Monotonic Deque)", diff: "Hard", topic: "Stack Implementation", tuf: "https://takeuforward.org/data-structure/sliding-window-maximum/" },
          { id: "dsa-9-4-2", title: "Online Stock Span", diff: "Medium", topic: "Stack Implementation", tuf: "https://takeuforward.org/data-structure/online-stock-span/" },
          { id: "dsa-9-4-3", title: "The Celebrity Problem", diff: "Medium", topic: "Stack Implementation", tuf: "https://takeuforward.org/data-structure/the-celebrity-problem/" },
          { id: "dsa-9-4-4", title: "Rotten Oranges (Queue BFS)", diff: "Medium", topic: "Stack Implementation", tuf: "https://takeuforward.org/data-structure/rotton-oranges-min-time-to-rot-all-oranges-bfs/" },
          { id: "dsa-9-4-5", title: "LRU Cache (Least Recently Used Cache Design)", diff: "Hard", topic: "Stack Implementation", tuf: "https://takeuforward.org/data-structure/lru-cache-implementation/" },
          { id: "dsa-9-4-6", title: "LFU Cache (Least Frequently Used Cache Design)", diff: "Hard", topic: "Stack Implementation", tuf: "https://takeuforward.org/data-structure/lfu-cache-least-frequently-used-cache-implementation/" }
        ]
      }
    ]
  },
  {
    stepId: 10,
    title: "Step 10: Sliding Window & Two Pointer Combined",
    desc: "Contiguous sub-segment optimizations, window expansion & shrinkage",
    modules: [
      {
        moduleId: "10.1",
        title: "Medium Sliding Window Problems",
        problems: [
          { id: "dsa-10-1-1", title: "Longest Substring Without Repeating Characters", diff: "Medium", topic: "Sliding Window", tuf: "https://takeuforward.org/data-structure/length-of-longest-substring-without-any-repeating-character/" },
          { id: "dsa-10-1-2", title: "Max Consecutive Ones III (Flip at most K zeros)", diff: "Medium", topic: "Sliding Window", tuf: "https://takeuforward.org/sliding-window/max-consecutive-ones-iii/" },
          { id: "dsa-10-1-3", title: "Fruit Into Baskets (At most 2 types)", diff: "Medium", topic: "Sliding Window", tuf: "https://takeuforward.org/sliding-window/fruit-into-baskets/" },
          { id: "dsa-10-1-4", title: "Longest Repeating Character Replacement", diff: "Medium", topic: "Sliding Window", tuf: "https://takeuforward.org/sliding-window/longest-repeating-character-replacement/" },
          { id: "dsa-10-1-5", title: "Binary Subarrays With Sum K", diff: "Medium", topic: "Sliding Window", tuf: "https://takeuforward.org/sliding-window/binary-subarrays-with-sum/" },
          { id: "dsa-10-1-6", title: "Count Number of Nice Subarrays (K odd numbers)", diff: "Medium", topic: "Sliding Window", tuf: "https://takeuforward.org/sliding-window/count-number-of-nice-subarrays/" },
          { id: "dsa-10-1-7", title: "Number of Substrings Containing All Three Characters", diff: "Medium", topic: "Sliding Window", tuf: "https://takeuforward.org/sliding-window/number-of-substrings-containing-all-three-characters/" },
          { id: "dsa-10-1-8", title: "Maximum Points You Can Obtain from Cards", diff: "Medium", topic: "Sliding Window", tuf: "https://takeuforward.org/sliding-window/maximum-points-you-can-obtain-from-cards/" }
        ]
      },
      {
        moduleId: "10.2",
        title: "Hard Sliding Window Problems",
        problems: [
          { id: "dsa-10-2-1", title: "Longest Substring with At Most K Distinct Characters", diff: "Medium", topic: "Sliding Window Hard", tuf: "https://takeuforward.org/sliding-window/longest-substring-with-at-most-k-distinct-characters/" },
          { id: "dsa-10-2-2", title: "Subarrays with K Different Integers", diff: "Hard", topic: "Sliding Window Hard", tuf: "https://takeuforward.org/sliding-window/subarrays-with-k-different-integers/" },
          { id: "dsa-10-2-3", title: "Minimum Window Substring (LeetCode 76)", diff: "Hard", topic: "Sliding Window Hard", tuf: "https://takeuforward.org/sliding-window/minimum-window-substring/" },
          { id: "dsa-10-2-4", title: "Minimum Window Subsequence", diff: "Hard", topic: "Sliding Window Hard", tuf: "https://takeuforward.org/sliding-window/minimum-window-subsequence/" }
        ]
      }
    ]
  },
  {
    stepId: 11,
    title: "Step 11: Heaps / Priority Queue",
    desc: "Min-heap, max-heap, heapify, top-K patterns, median streaming & Twitter design",
    modules: [
      {
        moduleId: "11.1",
        title: "Learning Heap Data Structure",
        problems: [
          { id: "dsa-11-1-1", title: "Check if an Array Represents a Binary Heap", diff: "Easy", topic: "Heap Basics", tuf: "https://takeuforward.org/heap/check-if-an-array-represents-a-binary-heap/" },
          { id: "dsa-11-1-2", title: "Min Heap and Max Heap Implementation from Scratch", diff: "Medium", topic: "Heap Basics", tuf: "https://takeuforward.org/heap/min-heap-and-max-heap-implementation/" },
          { id: "dsa-11-1-3", title: "Convert Min Heap to Max Heap in O(N)", diff: "Medium", topic: "Heap Basics", tuf: "https://takeuforward.org/heap/convert-min-heap-to-max-heap/" }
        ]
      },
      {
        moduleId: "11.2",
        title: "Medium Heap Problems",
        problems: [
          { id: "dsa-11-2-1", title: "Kth Largest Element in an Array (Quickselect & Heap)", diff: "Medium", topic: "Heap Medium", tuf: "https://takeuforward.org/data-structure/kth-largest-smallest-element-in-an-array/" },
          { id: "dsa-11-2-2", title: "Kth Smallest Element in an Array", diff: "Medium", topic: "Heap Medium", tuf: "https://takeuforward.org/data-structure/kth-largest-smallest-element-in-an-array/" },
          { id: "dsa-11-2-3", title: "Sort K-Sorted Array (Nearly Sorted)", diff: "Medium", topic: "Heap Medium", tuf: "https://takeuforward.org/heap/sort-k-sorted-array/" },
          { id: "dsa-11-2-4", title: "Merge K Sorted Lists / Arrays", diff: "Hard", topic: "Heap Medium", tuf: "https://takeuforward.org/data-structure/merge-k-sorted-arrays/" },
          { id: "dsa-11-2-5", title: "Replace Elements by its Rank in the Array", diff: "Easy", topic: "Heap Medium", tuf: "https://takeuforward.org/data-structure/replace-elements-by-its-rank-in-the-array/" },
          { id: "dsa-11-2-6", title: "Task Scheduler (CPU cooling interval)", diff: "Medium", topic: "Heap Medium", tuf: "https://takeuforward.org/heap/task-scheduler/" },
          { id: "dsa-11-2-7", title: "Hands of Straights", diff: "Medium", topic: "Heap Medium", tuf: "https://takeuforward.org/heap/hands-of-straights/" }
        ]
      },
      {
        moduleId: "11.3",
        title: "Hard Heap Problems",
        problems: [
          { id: "dsa-11-3-1", title: "Design Twitter (Post, Follow, Feed with Heap)", diff: "Hard", topic: "Heap Hard", tuf: "https://takeuforward.org/heap/design-twitter/" },
          { id: "dsa-11-3-2", title: "Connect N Ropes with Minimum Cost", diff: "Easy", topic: "Heap Hard", tuf: "https://takeuforward.org/heap/connect-n-ropes-with-minimum-cost/" },
          { id: "dsa-11-3-3", title: "Kth Largest Element in a Stream of Numbers", diff: "Medium", topic: "Heap Hard", tuf: "https://takeuforward.org/heap/kth-largest-element-in-a-stream/" },
          { id: "dsa-11-3-4", title: "Maximum Sum Combination (Two sorted arrays)", diff: "Hard", topic: "Heap Hard", tuf: "https://takeuforward.org/heap/maximum-sum-combination/" },
          { id: "dsa-11-3-5", title: "Find Median from Data Stream (Two Heaps)", diff: "Hard", topic: "Heap Hard", tuf: "https://takeuforward.org/data-structure/find-median-from-data-stream/" },
          { id: "dsa-11-3-6", title: "Top K Frequent Elements in Array", diff: "Medium", topic: "Heap Hard", tuf: "https://takeuforward.org/data-structure/top-k-frequent-elements/" }
        ]
      }
    ]
  },
  {
    stepId: 12,
    title: "Step 12: Greedy Algorithms [Easy, Medium & Hard]",
    desc: "Optimal local choices, interval scheduling, knapsack, railway platforms",
    modules: [
      {
        moduleId: "12.1",
        title: "Easy Greedy Problems",
        problems: [
          { id: "dsa-12-1-1", title: "Assign Cookies to Children", diff: "Easy", topic: "Greedy Easy", tuf: "https://takeuforward.org/data-structure/assign-cookies/" },
          { id: "dsa-12-1-2", title: "Fractional Knapsack Problem", diff: "Medium", topic: "Greedy Easy", tuf: "https://takeuforward.org/data-structure/fractional-knapsack-problem-greedy-approach/" },
          { id: "dsa-12-1-3", title: "Find Minimum Number of Coins (Greedy Coin Change)", diff: "Easy", topic: "Greedy Easy", tuf: "https://takeuforward.org/data-structure/find-minimum-number-of-coins/" },
          { id: "dsa-12-1-4", title: "Lemonade Change Problem", diff: "Easy", topic: "Greedy Easy", tuf: "https://takeuforward.org/greedy-algorithm/lemonade-change/" }
        ]
      },
      {
        moduleId: "12.2",
        title: "Medium & Hard Greedy Problems",
        problems: [
          { id: "dsa-12-2-1", title: "N Meetings in One Room", diff: "Easy", topic: "Greedy Advanced", tuf: "https://takeuforward.org/data-structure/n-meetings-in-one-room/" },
          { id: "dsa-12-2-2", title: "Minimum Number of Platforms Required for Railway", diff: "Medium", topic: "Greedy Advanced", tuf: "https://takeuforward.org/data-structure/minimum-number-of-platforms-required-for-a-railway/" },
          { id: "dsa-12-2-3", title: "Job Sequencing Problem with Deadlines", diff: "Medium", topic: "Greedy Advanced", tuf: "https://takeuforward.org/data-structure/job-sequencing-problem/" },
          { id: "dsa-12-2-4", title: "Jump Game I (Can reach end?)", diff: "Medium", topic: "Greedy Advanced", tuf: "https://takeuforward.org/greedy-algorithm/jump-game-i/" },
          { id: "dsa-12-2-5", title: "Jump Game II (Minimum jumps to reach end)", diff: "Medium", topic: "Greedy Advanced", tuf: "https://takeuforward.org/greedy-algorithm/jump-game-ii/" },
          { id: "dsa-12-2-6", title: "Non-overlapping Intervals", diff: "Medium", topic: "Greedy Advanced", tuf: "https://takeuforward.org/greedy-algorithm/non-overlapping-intervals/" },
          { id: "dsa-12-2-7", title: "Insert Interval in Non-overlapping set", diff: "Medium", topic: "Greedy Advanced", tuf: "https://takeuforward.org/greedy-algorithm/insert-interval/" },
          { id: "dsa-12-2-8", title: "Merge Overlapping Intervals", diff: "Medium", topic: "Greedy Advanced", tuf: "https://takeuforward.org/data-structure/merge-overlapping-sub-intervals/" },
          { id: "dsa-12-2-9", title: "Candy Distribution (LeetCode 135)", diff: "Hard", topic: "Greedy Advanced", tuf: "https://takeuforward.org/greedy-algorithm/candy-distribution/" },
          { id: "dsa-12-2-10", title: "Shortest Job First (SJF Scheduling)", diff: "Easy", topic: "Greedy Advanced", tuf: "https://takeuforward.org/greedy-algorithm/shortest-job-first/" }
        ]
      }
    ]
  },
  {
    stepId: 13,
    title: "Step 13: Binary Trees [Traversals, Medium & Hard]",
    desc: "Hierarchical trees, recursive traversals, views, LCA, diameter, Morris traversal",
    modules: [
      {
        moduleId: "13.1",
        title: "Binary Tree Traversals",
        problems: [
          { id: "dsa-13-1-1", title: "Binary Tree Representation in C++/Java", diff: "Easy", topic: "Tree Traversals", tuf: "https://takeuforward.org/data-structure/binary-tree-representation-in-c/" },
          { id: "dsa-13-1-2", title: "Preorder Traversal of Binary Tree", diff: "Easy", topic: "Tree Traversals", tuf: "https://takeuforward.org/data-structure/preorder-traversal-of-binary-tree/" },
          { id: "dsa-13-1-3", title: "Inorder Traversal of Binary Tree", diff: "Easy", topic: "Tree Traversals", tuf: "https://takeuforward.org/data-structure/inorder-traversal-of-binary-tree/" },
          { id: "dsa-13-1-4", title: "Postorder Traversal of Binary Tree", diff: "Easy", topic: "Tree Traversals", tuf: "https://takeuforward.org/data-structure/post-order-traversal-of-binary-tree/" },
          { id: "dsa-13-1-5", title: "Level Order Traversal / BFS of Tree", diff: "Easy", topic: "Tree Traversals", tuf: "https://takeuforward.org/data-structure/level-order-traversal-of-a-binary-tree/" },
          { id: "dsa-13-1-6", title: "Iterative Preorder Traversal using Stack", diff: "Medium", topic: "Tree Traversals", tuf: "https://takeuforward.org/data-structure/iterative-preorder-traversal-of-binary-tree/" },
          { id: "dsa-13-1-7", title: "Iterative Inorder Traversal using Stack", diff: "Medium", topic: "Tree Traversals", tuf: "https://takeuforward.org/data-structure/inorder-traversal-of-binary-tree/" },
          { id: "dsa-13-1-8", title: "Iterative Postorder Traversal (2 Stacks & 1 Stack)", diff: "Hard", topic: "Tree Traversals", tuf: "https://takeuforward.org/data-structure/iterative-postorder-traversal-using-2-stacks/" },
          { id: "dsa-13-1-9", title: "Preorder, Inorder, and Postorder in One Traversal", diff: "Medium", topic: "Tree Traversals", tuf: "https://takeuforward.org/data-structure/preorder-inorder-postorder-traversals-in-one-traversal/" }
        ]
      },
      {
        moduleId: "13.2",
        title: "Medium Binary Tree Problems",
        problems: [
          { id: "dsa-13-2-1", title: "Height / Maximum Depth of Binary Tree", diff: "Easy", topic: "Trees Medium", tuf: "https://takeuforward.org/data-structure/maximum-depth-of-a-binary-tree/" },
          { id: "dsa-13-2-2", title: "Check for Balanced Binary Tree in O(N)", diff: "Easy", topic: "Trees Medium", tuf: "https://takeuforward.org/data-structure/check-if-the-binary-tree-is-balanced-binary-tree/" },
          { id: "dsa-13-2-3", title: "Diameter of Binary Tree", diff: "Medium", topic: "Trees Medium", tuf: "https://takeuforward.org/data-structure/calculate-the-diameter-of-a-binary-tree/" },
          { id: "dsa-13-2-4", title: "Maximum Path Sum in Binary Tree", diff: "Hard", topic: "Trees Medium", tuf: "https://takeuforward.org/data-structure/maximum-sum-path-in-binary-tree/" },
          { id: "dsa-13-2-5", title: "Check if Two Trees are Identical", diff: "Easy", topic: "Trees Medium", tuf: "https://takeuforward.org/data-structure/check-if-two-trees-are-identical/" },
          { id: "dsa-13-2-6", title: "Zig-Zag / Spiral Traversal of Binary Tree", diff: "Medium", topic: "Trees Medium", tuf: "https://takeuforward.org/data-structure/zig-zag-traversal-of-binary-tree/" },
          { id: "dsa-13-2-7", title: "Boundary Traversal of Binary Tree", diff: "Medium", topic: "Trees Medium", tuf: "https://takeuforward.org/data-structure/boundary-traversal-of-a-binary-tree/" },
          { id: "dsa-13-2-8", title: "Vertical Order Traversal of Binary Tree", diff: "Hard", topic: "Trees Medium", tuf: "https://takeuforward.org/data-structure/vertical-order-traversal-of-binary-tree/" },
          { id: "dsa-13-2-9", title: "Top View of Binary Tree", diff: "Medium", topic: "Trees Medium", tuf: "https://takeuforward.org/data-structure/top-view-of-a-binary-tree/" },
          { id: "dsa-13-2-10", title: "Bottom View of Binary Tree", diff: "Medium", topic: "Trees Medium", tuf: "https://takeuforward.org/data-structure/bottom-view-of-a-binary-tree/" },
          { id: "dsa-13-2-11", title: "Right / Left View of Binary Tree", diff: "Easy", topic: "Trees Medium", tuf: "https://takeuforward.org/data-structure/right-left-view-of-binary-tree/" },
          { id: "dsa-13-2-12", title: "Check for Symmetrical Binary Tree", diff: "Easy", topic: "Trees Medium", tuf: "https://takeuforward.org/data-structure/check-for-symmetrical-binary-tree/" }
        ]
      },
      {
        moduleId: "13.3",
        title: "Hard Binary Tree Problems",
        problems: [
          { id: "dsa-13-3-1", title: "Print Root to Node Path in Binary Tree", diff: "Medium", topic: "Trees Hard", tuf: "https://takeuforward.org/data-structure/print-root-to-node-path-in-a-binary-tree/" },
          { id: "dsa-13-3-2", title: "Lowest Common Ancestor (LCA) in Binary Tree", diff: "Medium", topic: "Trees Hard", tuf: "https://takeuforward.org/data-structure/lowest-common-ancestor-for-two-given-nodes/" },
          { id: "dsa-13-3-3", title: "Maximum Width of Binary Tree", diff: "Medium", topic: "Trees Hard", tuf: "https://takeuforward.org/data-structure/maximum-width-of-a-binary-tree/" },
          { id: "dsa-13-3-4", title: "Check for Children Sum Property in Binary Tree", diff: "Medium", topic: "Trees Hard", tuf: "https://takeuforward.org/data-structure/check-for-children-sum-property-in-a-binary-tree/" },
          { id: "dsa-13-3-5", title: "Print all Nodes at Distance K from Target Node", diff: "Hard", topic: "Trees Hard", tuf: "https://takeuforward.org/data-structure/print-all-nodes-at-distance-k-in-a-binary-tree/" },
          { id: "dsa-13-3-6", title: "Minimum Time taken to BURN the Binary Tree from Node", diff: "Hard", topic: "Trees Hard", tuf: "https://takeuforward.org/data-structure/minimum-time-taken-to-burn-the-binary-tree-from-a-node/" },
          { id: "dsa-13-3-7", title: "Count Total Nodes in a Complete Binary Tree in < O(N)", diff: "Medium", topic: "Trees Hard", tuf: "https://takeuforward.org/data-structure/count-number-of-nodes-in-a-binary-tree/" },
          { id: "dsa-13-3-8", title: "Construct Binary Tree from Preorder and Inorder Traversal", diff: "Hard", topic: "Trees Hard", tuf: "https://takeuforward.org/data-structure/construct-a-binary-tree-from-inorder-and-preorder-traversal/" },
          { id: "dsa-13-3-9", title: "Construct Binary Tree from Postorder and Inorder Traversal", diff: "Hard", topic: "Trees Hard", tuf: "https://takeuforward.org/data-structure/construct-binary-tree-from-inorder-and-postorder-traversal/" },
          { id: "dsa-13-3-10", title: "Serialize and Deserialize Binary Tree", diff: "Hard", topic: "Trees Hard", tuf: "https://takeuforward.org/data-structure/serialize-and-deserialize-a-binary-tree/" },
          { id: "dsa-13-3-11", title: "Morris Traversal for Inorder & Preorder in O(1) Space", diff: "Hard", topic: "Trees Hard", tuf: "https://takeuforward.org/data-structure/morris-inorder-traversal-of-a-binary-tree/" },
          { id: "dsa-13-3-12", title: "Flatten Binary Tree to Linked List", diff: "Medium", topic: "Trees Hard", tuf: "https://takeuforward.org/data-structure/flatten-binary-tree-to-linked-list/" }
        ]
      }
    ]
  },
  {
    stepId: 14,
    title: "Step 14: Binary Search Trees [Concepts & Practice]",
    desc: "Ordered tree properties, search, insertion, deletion, BST iterator & recovery",
    modules: [
      {
        moduleId: "14.1",
        title: "BST Concepts & Operations",
        problems: [
          { id: "dsa-14-1-1", title: "Introduction to Binary Search Trees & Properties", diff: "Easy", topic: "BST Basics", tuf: "https://takeuforward.org/binary-search-tree/introduction-to-binary-search-trees/" },
          { id: "dsa-14-1-2", title: "Search in a Binary Search Tree", diff: "Easy", topic: "BST Basics", tuf: "https://takeuforward.org/data-structure/search-in-a-binary-search-tree-bst/" },
          { id: "dsa-14-1-3", title: "Find Min / Max Element in BST", diff: "Easy", topic: "BST Basics", tuf: "https://takeuforward.org/data-structure/minimum-and-maximum-in-a-binary-search-tree/" },
          { id: "dsa-14-1-4", title: "Ceil in a Binary Search Tree", diff: "Medium", topic: "BST Basics", tuf: "https://takeuforward.org/data-structure/ceil-in-a-binary-search-tree/" },
          { id: "dsa-14-1-5", title: "Floor in a Binary Search Tree", diff: "Medium", topic: "BST Basics", tuf: "https://takeuforward.org/data-structure/floor-in-a-binary-search-tree/" },
          { id: "dsa-14-1-6", title: "Insert a given Node in BST", diff: "Medium", topic: "BST Basics", tuf: "https://takeuforward.org/data-structure/insert-a-given-node-in-binary-search-tree/" },
          { id: "dsa-14-1-7", title: "Delete a Node in Binary Search Tree", diff: "Medium", topic: "BST Basics", tuf: "https://takeuforward.org/data-structure/delete-a-node-in-binary-search-tree-bst/" },
          { id: "dsa-14-1-8", title: "Find K-th Smallest / Largest Element in BST", diff: "Medium", topic: "BST Basics", tuf: "https://takeuforward.org/data-structure/kth-largest-smallest-element-in-binary-search-tree/" }
        ]
      },
      {
        moduleId: "14.2",
        title: "Practice Problems on BST",
        problems: [
          { id: "dsa-14-2-1", title: "Check if a Tree is a Valid BST or BT", diff: "Medium", topic: "BST Practice", tuf: "https://takeuforward.org/data-structure/check-if-a-tree-is-a-binary-search-tree-or-binary-tree/" },
          { id: "dsa-14-2-2", title: "Lowest Common Ancestor (LCA) in BST", diff: "Easy", topic: "BST Practice", tuf: "https://takeuforward.org/data-structure/lca-in-binary-search-tree/" },
          { id: "dsa-14-2-3", title: "Construct a BST from Preorder Traversal", diff: "Medium", topic: "BST Practice", tuf: "https://takeuforward.org/data-structure/construct-a-bst-from-a-preorder-traversal/" },
          { id: "dsa-14-2-4", title: "Inorder Predecessor and Successor in BST", diff: "Medium", topic: "BST Practice", tuf: "https://takeuforward.org/data-structure/inorder-successor-predecessor-in-bst/" },
          { id: "dsa-14-2-5", title: "Binary Search Tree Iterator in O(1) time & O(H) space", diff: "Medium", topic: "BST Practice", tuf: "https://takeuforward.org/data-structure/binary-search-tree-iterator/" },
          { id: "dsa-14-2-6", title: "Two Sum in BST (Find pair with given sum)", diff: "Medium", topic: "BST Practice", tuf: "https://takeuforward.org/data-structure/two-sum-in-bst/" },
          { id: "dsa-14-2-7", title: "Recover BST (Correct BST with Two Swapped Nodes)", diff: "Hard", topic: "BST Practice", tuf: "https://takeuforward.org/data-structure/recover-bst-correct-bst-with-two-nodes-swapped/" },
          { id: "dsa-14-2-8", title: "Largest BST in Binary Tree", diff: "Hard", topic: "BST Practice", tuf: "https://takeuforward.org/data-structure/largest-bst-in-binary-tree/" }
        ]
      }
    ]
  },
  {
    stepId: 15,
    title: "Step 15: Graphs [BFS, DFS, Topo, Shortest Path & MST]",
    desc: "Graph traversals, cycle detection, Kahn's algorithm, Dijkstra, Bellman-Ford, Prim's, Disjoint Set",
    modules: [
      {
        moduleId: "15.1",
        title: "Learning Graph Representations & Traversals",
        problems: [
          { id: "dsa-15-1-1", title: "Graph Representation in C++/Java (Adjacency Matrix & List)", diff: "Easy", topic: "Graph Basics", tuf: "https://takeuforward.org/graph/graph-representation-in-c/" },
          { id: "dsa-15-1-2", title: "Connected Components in Graph Theory", diff: "Easy", topic: "Graph Basics", tuf: "https://takeuforward.org/graph/connected-components-in-graph/" },
          { id: "dsa-15-1-3", title: "Breadth First Search (BFS) Traversal", diff: "Easy", topic: "Graph Basics", tuf: "https://takeuforward.org/data-structure/breadth-first-search-bfs-level-order-traversal/" },
          { id: "dsa-15-1-4", title: "Depth First Search (DFS) Traversal", diff: "Easy", topic: "Graph Basics", tuf: "https://takeuforward.org/data-structure/depth-first-search-dfs/" }
        ]
      },
      {
        moduleId: "15.2",
        title: "Problems on BFS / DFS",
        problems: [
          { id: "dsa-15-2-1", title: "Number of Provinces (Connected Components)", diff: "Medium", topic: "Graph BFS/DFS", tuf: "https://takeuforward.org/data-structure/number-of-provinces/" },
          { id: "dsa-15-2-2", title: "Connected Components in Undirected Graph", diff: "Easy", topic: "Graph BFS/DFS", tuf: "https://takeuforward.org/graph/connected-components-in-graph/" },
          { id: "dsa-15-2-3", title: "Rotting Oranges (Multi-source BFS)", diff: "Medium", topic: "Graph BFS/DFS", tuf: "https://takeuforward.org/data-structure/rotton-oranges-min-time-to-rot-all-oranges-bfs/" },
          { id: "dsa-15-2-4", title: "Flood Fill Algorithm", diff: "Easy", topic: "Graph BFS/DFS", tuf: "https://takeuforward.org/data-structure/flood-fill-algorithm/" },
          { id: "dsa-15-2-5", title: "Cycle Detection in Undirected Graph (BFS & DFS)", diff: "Medium", topic: "Graph BFS/DFS", tuf: "https://takeuforward.org/data-structure/detect-cycle-in-an-undirected-graph-using-bfs/" },
          { id: "dsa-15-2-6", title: "0/1 Matrix (Distance of Nearest Cell having 1)", diff: "Medium", topic: "Graph BFS/DFS", tuf: "https://takeuforward.org/data-structure/distance-of-nearest-cell-having-1/" },
          { id: "dsa-15-2-7", title: "Surrounded Regions (Replace O's with X's)", diff: "Medium", topic: "Graph BFS/DFS", tuf: "https://takeuforward.org/data-structure/surrounded-regions-replace-os-with-xs/" },
          { id: "dsa-15-2-8", title: "Number of Enclaves (Boundary BFS)", diff: "Medium", topic: "Graph BFS/DFS", tuf: "https://takeuforward.org/data-structure/number-of-enclaves/" },
          { id: "dsa-15-2-9", title: "Word Ladder I (Shortest transformation sequence)", diff: "Hard", topic: "Graph BFS/DFS", tuf: "https://takeuforward.org/data-structure/word-ladder-i-shortest-paths/" },
          { id: "dsa-15-2-10", title: "Word Ladder II (Find all shortest sequences)", diff: "Hard", topic: "Graph BFS/DFS", tuf: "https://takeuforward.org/data-structure/word-ladder-ii/" },
          { id: "dsa-15-2-11", title: "Number of Distinct Islands (DFS + Set of shapes)", diff: "Medium", topic: "Graph BFS/DFS", tuf: "https://takeuforward.org/data-structure/number-of-distinct-islands/" },
          { id: "dsa-15-2-12", title: "Is Graph Bipartite? (BFS & DFS 2-coloring)", diff: "Medium", topic: "Graph BFS/DFS", tuf: "https://takeuforward.org/data-structure/bipartite-graph-dfs-implementation/" },
          { id: "dsa-15-2-13", title: "Cycle Detection in Directed Graph (DFS Recursion Stack)", diff: "Medium", topic: "Graph BFS/DFS", tuf: "https://takeuforward.org/data-structure/detect-a-cycle-in-directed-graph-using-dfs/" }
        ]
      },
      {
        moduleId: "15.3",
        title: "Topo Sort & Directed Acyclic Graphs (DAG)",
        problems: [
          { id: "dsa-15-3-1", title: "Topological Sort (DFS Algorithm)", diff: "Medium", topic: "Topo Sort", tuf: "https://takeuforward.org/data-structure/topological-sort-algorithm-dfs/" },
          { id: "dsa-15-3-2", title: "Kahn's Algorithm (Topological Sort BFS with In-degree)", diff: "Medium", topic: "Topo Sort", tuf: "https://takeuforward.org/data-structure/kahns-algorithm-topological-sort-bfs/" },
          { id: "dsa-15-3-3", title: "Cycle Detection in Directed Graph (BFS Kahn's Algo)", diff: "Medium", topic: "Topo Sort", tuf: "https://takeuforward.org/data-structure/detect-a-cycle-in-directed-graph-topological-sort-kahns-algorithm-bfs/" },
          { id: "dsa-15-3-4", title: "Course Schedule I (Prerequisites cycle check)", diff: "Medium", topic: "Topo Sort", tuf: "https://takeuforward.org/data-structure/course-schedule-i-and-ii-pre-requisite-tasks-topological-sort/" },
          { id: "dsa-15-3-5", title: "Course Schedule II (Order of tasks to finish)", diff: "Medium", topic: "Topo Sort", tuf: "https://takeuforward.org/data-structure/course-schedule-i-and-ii-pre-requisite-tasks-topological-sort/" },
          { id: "dsa-15-3-6", title: "Find Eventual Safe States (BFS & DFS)", diff: "Medium", topic: "Topo Sort", tuf: "https://takeuforward.org/data-structure/find-eventual-safe-states-bfs-topological-sort/" },
          { id: "dsa-15-3-7", title: "Alien Dictionary (Find order of characters)", diff: "Hard", topic: "Topo Sort", tuf: "https://takeuforward.org/data-structure/alien-dictionary-topological-sort/" }
        ]
      },
      {
        moduleId: "15.4",
        title: "Shortest Path Algorithms",
        problems: [
          { id: "dsa-15-4-1", title: "Shortest Path in Undirected Graph with Unit Weights", diff: "Medium", topic: "Shortest Path", tuf: "https://takeuforward.org/data-structure/shortest-path-in-undirected-graph-with-unit-distance/" },
          { id: "dsa-15-4-2", title: "Shortest Path in Directed Acyclic Graph (DAG) using Topo", diff: "Medium", topic: "Shortest Path", tuf: "https://takeuforward.org/data-structure/shortest-path-in-directed-acyclic-graph-topological-sort/" },
          { id: "dsa-15-4-3", title: "Dijkstra's Algorithm (Priority Queue & Set)", diff: "Medium", topic: "Shortest Path", tuf: "https://takeuforward.org/data-structure/dijkstras-algorithm-using-priority-queue-g-32/" },
          { id: "dsa-15-4-4", title: "Shortest Path in Binary Matrix (Dijkstra variation)", diff: "Medium", topic: "Shortest Path", tuf: "https://takeuforward.org/data-structure/shortest-path-in-a-binary-maze/" },
          { id: "dsa-15-4-5", title: "Path With Minimum Effort", diff: "Medium", topic: "Shortest Path", tuf: "https://takeuforward.org/data-structure/path-with-minimum-effort/" },
          { id: "dsa-15-4-6", title: "Cheapest Flights Within K Stops", diff: "Medium", topic: "Shortest Path", tuf: "https://takeuforward.org/data-structure/cheapest-flights-within-k-stops/" },
          { id: "dsa-15-4-7", title: "Network Delay Time", diff: "Medium", topic: "Shortest Path", tuf: "https://takeuforward.org/data-structure/network-delay-time/" },
          { id: "dsa-15-4-8", title: "Number of Ways to Arrive at Destination", diff: "Medium", topic: "Shortest Path", tuf: "https://takeuforward.org/data-structure/number-of-ways-to-arrive-at-destination/" },
          { id: "dsa-15-4-9", title: "Minimum Multiplications to Reach End", diff: "Medium", topic: "Shortest Path", tuf: "https://takeuforward.org/data-structure/minimum-multiplications-to-reach-end/" },
          { id: "dsa-15-4-10", title: "Bellman-Ford Algorithm (Negative cycles detection)", diff: "Hard", topic: "Shortest Path", tuf: "https://takeuforward.org/data-structure/bellman-ford-algorithm-shortest-distance-with-negative-cycles/" },
          { id: "dsa-15-4-11", title: "Floyd-Warshall Algorithm (All-pairs shortest path)", diff: "Hard", topic: "Shortest Path", tuf: "https://takeuforward.org/data-structure/floyd-warshall-algorithm-g-42/" },
          { id: "dsa-15-4-12", title: "Find the City With the Smallest Number of Neighbors at a Threshold Distance", diff: "Medium", topic: "Shortest Path", tuf: "https://takeuforward.org/data-structure/find-the-city-with-the-smallest-number-of-neighbours-at-a-threshold-distance/" }
        ]
      },
      {
        moduleId: "15.5",
        title: "Minimum Spanning Tree (MST) & Disjoint Set",
        problems: [
          { id: "dsa-15-5-1", title: "Minimum Spanning Tree Concept & Prim's Algorithm", diff: "Hard", topic: "MST & DSU", tuf: "https://takeuforward.org/data-structure/prims-algorithm-minimum-spanning-tree-c-and-java-g-45/" },
          { id: "dsa-15-5-2", title: "Disjoint Set Union (Union by Rank & Path Compression)", diff: "Medium", topic: "MST & DSU", tuf: "https://takeuforward.org/data-structure/disjoint-set-union-by-rank-union-by-size-path-compression-g-46/" },
          { id: "dsa-15-5-3", title: "Kruskal's Algorithm for Minimum Spanning Tree", diff: "Medium", topic: "MST & DSU", tuf: "https://takeuforward.org/data-structure/kruskals-algorithm-minimum-spanning-tree-g-47/" },
          { id: "dsa-15-5-4", title: "Number of Operations to Make Network Connected", diff: "Medium", topic: "MST & DSU", tuf: "https://takeuforward.org/data-structure/number-of-operations-to-make-network-connected-dsu/" },
          { id: "dsa-15-5-5", title: "Most Stones Removed with Same Row or Column", diff: "Medium", topic: "MST & DSU", tuf: "https://takeuforward.org/data-structure/most-stones-removed-with-same-row-or-column-dsu/" },
          { id: "dsa-15-5-6", title: "Accounts Merge (DSU String mapping)", diff: "Hard", topic: "MST & DSU", tuf: "https://takeuforward.org/data-structure/accounts-merge-dsu/" },
          { id: "dsa-15-5-7", title: "Number of Islands II (Online Query DSU)", diff: "Hard", topic: "MST & DSU", tuf: "https://takeuforward.org/data-structure/number-of-islands-ii-online-queries-dsu/" },
          { id: "dsa-15-5-8", title: "Making a Large Island (Flip 0 to 1 with DSU)", diff: "Hard", topic: "MST & DSU", tuf: "https://takeuforward.org/data-structure/making-a-large-island-dsu/" },
          { id: "dsa-15-5-9", title: "Swim in Rising Water", diff: "Hard", topic: "MST & DSU", tuf: "https://takeuforward.org/data-structure/swim-in-rising-water/" }
        ]
      },
      {
        moduleId: "15.6",
        title: "Other Advanced Graph Algorithms",
        problems: [
          { id: "dsa-15-6-1", title: "Strongly Connected Components - Kosaraju's Algorithm", diff: "Hard", topic: "Advanced Graphs", tuf: "https://takeuforward.org/data-structure/strongly-connected-components-kosarajus-algorithm-g-54/" },
          { id: "dsa-15-6-2", title: "Bridges in Graph - Tarjan's Algorithm", diff: "Hard", topic: "Advanced Graphs", tuf: "https://takeuforward.org/data-structure/bridges-in-graph-using-tarjans-algorithm-of-time-in-and-low-time-g-55/" },
          { id: "dsa-15-6-3", title: "Articulation Point in Graph (Cut Vertices)", diff: "Hard", topic: "Advanced Graphs", tuf: "https://takeuforward.org/data-structure/articulation-point-in-graph-g-56/" }
        ]
      }
    ]
  },
  {
    stepId: 16,
    title: "Step 16: Dynamic Programming [Patterns & Problems]",
    desc: "1D DP, 2D grid DP, subsets, strings LCS/Edit Distance, stocks, LIS, MCM, squares",
    modules: [
      {
        moduleId: "16.1",
        title: "Introduction to DP & 1D DP",
        problems: [
          { id: "dsa-16-1-1", title: "Dynamic Programming Introduction (Memoization vs Tabulation)", diff: "Easy", topic: "1D DP", tuf: "https://takeuforward.org/data-structure/dynamic-programming-introduction/" },
          { id: "dsa-16-1-2", title: "Climbing Stairs Problem", diff: "Easy", topic: "1D DP", tuf: "https://takeuforward.org/data-structure/dynamic-programming-climbing-stairs/" },
          { id: "dsa-16-1-3", title: "Frog Jump (DP 3)", diff: "Medium", topic: "1D DP", tuf: "https://takeuforward.org/data-structure/dynamic-programming-frog-jump-dp-3/" },
          { id: "dsa-16-1-4", title: "Frog Jump with K Distances (DP 4)", diff: "Medium", topic: "1D DP", tuf: "https://takeuforward.org/data-structure/dynamic-programming-frog-jump-with-k-distances-dp-4/" },
          { id: "dsa-16-1-5", title: "Maximum Sum of Non-Adjacent Elements (House Robber I)", diff: "Medium", topic: "1D DP", tuf: "https://takeuforward.org/data-structure/maximum-sum-of-non-adjacent-elements-dp-5/" },
          { id: "dsa-16-1-6", title: "House Robber II (Circular Street)", diff: "Medium", topic: "1D DP", tuf: "https://takeuforward.org/data-structure/dynamic-programming-house-robber-dp-6/" }
        ]
      },
      {
        moduleId: "16.2",
        title: "2D/3D DP and DP on Grids",
        problems: [
          { id: "dsa-16-2-1", title: "Ninja's Training (2D DP 7)", diff: "Medium", topic: "Grid DP", tuf: "https://takeuforward.org/data-structure/dynamic-programming-ninjas-training-dp-7/" },
          { id: "dsa-16-2-2", title: "Grid Unique Paths (DP 8)", diff: "Medium", topic: "Grid DP", tuf: "https://takeuforward.org/data-structure/grid-unique-paths-dp-on-grids-dp8/" },
          { id: "dsa-16-2-3", title: "Unique Paths II (Grid with Obstacles DP 9)", diff: "Medium", topic: "Grid DP", tuf: "https://takeuforward.org/data-structure/grid-unique-paths-2-dp-9/" },
          { id: "dsa-16-2-4", title: "Minimum Path Sum in Grid (DP 10)", diff: "Medium", topic: "Grid DP", tuf: "https://takeuforward.org/data-structure/minimum-path-sum-in-a-grid-dp-10/" },
          { id: "dsa-16-2-5", title: "Triangle (Minimum Path Sum in Triangular Grid DP 11)", diff: "Medium", topic: "Grid DP", tuf: "https://takeuforward.org/data-structure/minimum-path-sum-in-triangular-grid-dp-11/" },
          { id: "dsa-16-2-6", title: "Minimum Falling Path Sum in Matrix (DP 12)", diff: "Medium", topic: "Grid DP", tuf: "https://takeuforward.org/data-structure/minimum-maximum-falling-path-sum-dp-12/" },
          { id: "dsa-16-2-7", title: "Chocolate Pickup / Cherry Pickup II (3D DP 13)", diff: "Hard", topic: "Grid DP", tuf: "https://takeuforward.org/data-structure/3-d-dp-ninja-and-his-friends-cherry-pickup-ii-dp-13/" }
        ]
      },
      {
        moduleId: "16.3",
        title: "DP on Subsequences / Subsets",
        problems: [
          { id: "dsa-16-3-1", title: "Subset Sum Equal to Target (DP 14)", diff: "Medium", topic: "Subsequences DP", tuf: "https://takeuforward.org/data-structure/subset-sum-equal-to-target-dp-14/" },
          { id: "dsa-16-3-2", title: "Partition Equal Subset Sum (DP 15)", diff: "Medium", topic: "Subsequences DP", tuf: "https://takeuforward.org/data-structure/partition-equal-subset-sum-dp-15/" },
          { id: "dsa-16-3-3", title: "Partition Set Into 2 Subsets With Min Absolute Difference (DP 16)", diff: "Hard", topic: "Subsequences DP", tuf: "https://takeuforward.org/data-structure/partition-set-into-2-subsets-with-min-absolute-sum-diff-dp-16/" },
          { id: "dsa-16-3-4", title: "Count Subsets with Sum K (DP 17)", diff: "Medium", topic: "Subsequences DP", tuf: "https://takeuforward.org/data-structure/count-subsets-with-sum-k-dp-17/" },
          { id: "dsa-16-3-5", title: "Count Partitions with Given Difference (DP 18)", diff: "Medium", topic: "Subsequences DP", tuf: "https://takeuforward.org/data-structure/count-partitions-with-given-difference-dp-18/" },
          { id: "dsa-16-3-6", title: "0/1 Knapsack Problem (DP 19)", diff: "Medium", topic: "Subsequences DP", tuf: "https://takeuforward.org/data-structure/0-1-knapsack-dp-19/" },
          { id: "dsa-16-3-7", title: "Minimum Coins to Make Target Sum (DP 20)", diff: "Medium", topic: "Subsequences DP", tuf: "https://takeuforward.org/data-structure/minimum-coins-dp-20/" },
          { id: "dsa-16-3-8", title: "Target Sum (DP 21)", diff: "Medium", topic: "Subsequences DP", tuf: "https://takeuforward.org/data-structure/target-sum-dp-21/" },
          { id: "dsa-16-3-9", title: "Coin Change 2 (Ways to make change DP 22)", diff: "Medium", topic: "Subsequences DP", tuf: "https://takeuforward.org/data-structure/coin-change-2-dp-22/" },
          { id: "dsa-16-3-10", title: "Unbounded Knapsack (DP 23)", diff: "Medium", topic: "Subsequences DP", tuf: "https://takeuforward.org/data-structure/unbounded-knapsack-dp-23/" },
          { id: "dsa-16-3-11", title: "Rod Cutting Problem (DP 24)", diff: "Medium", topic: "Subsequences DP", tuf: "https://takeuforward.org/data-structure/rod-cutting-problem-dp-24/" }
        ]
      },
      {
        moduleId: "16.4",
        title: "DP on Strings",
        problems: [
          { id: "dsa-16-4-1", title: "Longest Common Subsequence (LCS DP 25)", diff: "Medium", topic: "Strings DP", tuf: "https://takeuforward.org/data-structure/longest-common-subsequence-dp-25/" },
          { id: "dsa-16-4-2", title: "Print Longest Common Subsequence (DP 26)", diff: "Hard", topic: "Strings DP", tuf: "https://takeuforward.org/data-structure/print-longest-common-subsequence-dp-26/" },
          { id: "dsa-16-4-3", title: "Longest Common Substring (DP 27)", diff: "Medium", topic: "Strings DP", tuf: "https://takeuforward.org/data-structure/longest-common-substring-dp-27/" },
          { id: "dsa-16-4-4", title: "Longest Palindromic Subsequence (DP 28)", diff: "Medium", topic: "Strings DP", tuf: "https://takeuforward.org/data-structure/longest-palindromic-subsequence-dp-28/" },
          { id: "dsa-16-4-5", title: "Minimum Insertions to Make String Palindrome (DP 29)", diff: "Medium", topic: "Strings DP", tuf: "https://takeuforward.org/data-structure/minimum-insertions-to-make-string-palindrome-dp-29/" },
          { id: "dsa-16-4-6", title: "Minimum Insertions/Deletions to Convert String A to B (DP 30)", diff: "Medium", topic: "Strings DP", tuf: "https://takeuforward.org/data-structure/minimum-insertions-deletions-to-convert-string-dp-30/" },
          { id: "dsa-16-4-7", title: "Shortest Common Supersequence (DP 31)", diff: "Hard", topic: "Strings DP", tuf: "https://takeuforward.org/data-structure/shortest-common-supersequence-dp-31/" },
          { id: "dsa-16-4-8", title: "Distinct Subsequences (DP 32)", diff: "Hard", topic: "Strings DP", tuf: "https://takeuforward.org/data-structure/distinct-subsequences-dp-32/" },
          { id: "dsa-16-4-9", title: "Edit Distance (DP 33 - LeetCode 72)", diff: "Hard", topic: "Strings DP", tuf: "https://takeuforward.org/data-structure/edit-distance-dp-33/" },
          { id: "dsa-16-4-10", title: "Wildcard Matching (DP 34)", diff: "Hard", topic: "Strings DP", tuf: "https://takeuforward.org/data-structure/wildcard-matching-dp-34/" }
        ]
      },
      {
        moduleId: "16.5",
        title: "DP on Stocks",
        problems: [
          { id: "dsa-16-5-1", title: "Best Time to Buy and Sell Stock I (One transaction)", diff: "Easy", topic: "Stocks DP", tuf: "https://takeuforward.org/data-structure/stock-buy-and-sell/" },
          { id: "dsa-16-5-2", title: "Stock Buy and Sell II (Infinite transactions DP 36)", diff: "Medium", topic: "Stocks DP", tuf: "https://takeuforward.org/data-structure/buy-and-sell-stock-ii-dp-36/" },
          { id: "dsa-16-5-3", title: "Stock Buy and Sell III (At most 2 transactions DP 37)", diff: "Hard", topic: "Stocks DP", tuf: "https://takeuforward.org/data-structure/buy-and-sell-stock-iii-dp-37/" },
          { id: "dsa-16-5-4", title: "Stock Buy and Sell IV (At most K transactions DP 38)", diff: "Hard", topic: "Stocks DP", tuf: "https://takeuforward.org/data-structure/buy-and-sell-stock-iv-dp-38/" },
          { id: "dsa-16-5-5", title: "Buy and Sell Stocks With Cooldown (DP 39)", diff: "Medium", topic: "Stocks DP", tuf: "https://takeuforward.org/data-structure/buy-and-sell-stocks-with-cooldown-dp-39/" },
          { id: "dsa-16-5-6", title: "Buy and Sell Stocks With Transaction Fee (DP 40)", diff: "Medium", topic: "Stocks DP", tuf: "https://takeuforward.org/data-structure/buy-and-sell-stocks-with-transaction-fee-dp-40/" }
        ]
      },
      {
        moduleId: "16.6",
        title: "DP on Longest Increasing Subsequence (LIS)",
        problems: [
          { id: "dsa-16-6-1", title: "Longest Increasing Subsequence (DP 41)", diff: "Medium", topic: "LIS DP", tuf: "https://takeuforward.org/data-structure/longest-increasing-subsequence-dp-41/" },
          { id: "dsa-16-6-2", title: "Printing Longest Increasing Subsequence (DP 42)", diff: "Medium", topic: "LIS DP", tuf: "https://takeuforward.org/data-structure/printing-longest-increasing-subsequence-dp-42/" },
          { id: "dsa-16-6-3", title: "Longest Increasing Subsequence Binary Search in O(N log N) (DP 43)", diff: "Medium", topic: "LIS DP", tuf: "https://takeuforward.org/data-structure/longest-increasing-subsequence-binary-search-dp-43/" },
          { id: "dsa-16-6-4", title: "Largest Divisible Subset (DP 44)", diff: "Medium", topic: "LIS DP", tuf: "https://takeuforward.org/data-structure/largest-divisible-subset-dp-44/" },
          { id: "dsa-16-6-5", title: "Longest String Chain (DP 45)", diff: "Medium", topic: "LIS DP", tuf: "https://takeuforward.org/data-structure/longest-string-chain-dp-45/" },
          { id: "dsa-16-6-6", title: "Longest Bitonic Subsequence (DP 46)", diff: "Medium", topic: "LIS DP", tuf: "https://takeuforward.org/data-structure/longest-bitonic-subsequence-dp-46/" },
          { id: "dsa-16-6-7", title: "Number of Longest Increasing Subsequences (DP 47)", diff: "Medium", topic: "LIS DP", tuf: "https://takeuforward.org/data-structure/number-of-longest-increasing-subsequences-dp-47/" }
        ]
      },
      {
        moduleId: "16.7",
        title: "MCM DP / Partition DP & Squares",
        problems: [
          { id: "dsa-16-7-1", title: "Matrix Chain Multiplication (MCM DP 48)", diff: "Hard", topic: "MCM DP", tuf: "https://takeuforward.org/data-structure/matrix-chain-multiplication-dp-48/" },
          { id: "dsa-16-7-2", title: "Minimum Cost to Cut a Stick (DP 50)", diff: "Hard", topic: "MCM DP", tuf: "https://takeuforward.org/data-structure/minimum-cost-to-cut-the-stick-dp-50/" },
          { id: "dsa-16-7-3", title: "Burst Balloons (DP 51)", diff: "Hard", topic: "MCM DP", tuf: "https://takeuforward.org/data-structure/burst-balloons-partition-dp-dp-51/" },
          { id: "dsa-16-7-4", title: "Evaluate Boolean Expression to True (DP 52)", diff: "Hard", topic: "MCM DP", tuf: "https://takeuforward.org/data-structure/evaluate-boolean-expression-to-true-partition-dp-dp-52/" },
          { id: "dsa-16-7-5", title: "Palindrome Partitioning II (Minimum cuts DP 53)", diff: "Hard", topic: "MCM DP", tuf: "https://takeuforward.org/data-structure/palindrome-partitioning-ii-front-partition-dp-53/" },
          { id: "dsa-16-7-6", title: "Partition Array for Maximum Sum (DP 54)", diff: "Medium", topic: "MCM DP", tuf: "https://takeuforward.org/data-structure/partition-array-for-maximum-sum-front-partition-dp-54/" },
          { id: "dsa-16-7-7", title: "Maximal Rectangle in Binary Matrix with All 1's (DP 55)", diff: "Hard", topic: "Squares DP", tuf: "https://takeuforward.org/data-structure/maximum-rectangle-area-with-all-1s-dp-on-rectangles-dp-55/" },
          { id: "dsa-16-7-8", title: "Count Square Submatrices with All Ones (DP 56)", diff: "Medium", topic: "Squares DP", tuf: "https://takeuforward.org/data-structure/count-square-submatrices-with-all-1s-dp-56/" }
        ]
      }
    ]
  },
  {
    stepId: 17,
    title: "Step 17: Tries [Prefix Tree]",
    desc: "Fast prefix matching, word counters, distinct substrings & Bitwise maximum XOR",
    modules: [
      {
        moduleId: "17.1",
        title: "Trie Implementations & Applications",
        problems: [
          { id: "dsa-17-1-1", title: "Implement Trie (Prefix Tree) I (Insert, Search, StartsWith)", diff: "Medium", topic: "Trie", tuf: "https://takeuforward.org/data-structure/implement-trie-1/" },
          { id: "dsa-17-1-2", title: "Implement Trie II (Count Words Equal To & Starts With)", diff: "Medium", topic: "Trie", tuf: "https://takeuforward.org/data-structure/implement-trie-ii/" },
          { id: "dsa-17-1-3", title: "Longest Word with All Prefixes", diff: "Medium", topic: "Trie", tuf: "https://takeuforward.org/data-structure/longest-word-with-all-prefixes/" },
          { id: "dsa-17-1-4", title: "Number of Distinct Substrings in a String using Trie", diff: "Medium", topic: "Trie", tuf: "https://takeuforward.org/data-structure/number-of-distinct-substrings-in-a-string-using-trie/" },
          { id: "dsa-17-1-5", title: "Bitwise Maximum XOR of Two Numbers in an Array", diff: "Hard", topic: "Trie", tuf: "https://takeuforward.org/data-structure/maximum-xor-of-two-numbers-in-an-array/" },
          { id: "dsa-17-1-6", title: "Maximum XOR With an Element From Array (Offline Queries)", diff: "Hard", topic: "Trie", tuf: "https://takeuforward.org/data-structure/maximum-xor-queries-trie/" }
        ]
      }
    ]
  },
  {
    stepId: 18,
    title: "Step 18: Advanced Strings [Pattern Matching]",
    desc: "Rabin-Karp rolling hash, Z-Algorithm, KMP LPS array & shortest palindromes",
    modules: [
      {
        moduleId: "18.1",
        title: "Advanced String Pattern Matching",
        problems: [
          { id: "dsa-18-1-1", title: "Rabin-Karp Algorithm (Rolling Hash)", diff: "Medium", topic: "Advanced Strings", tuf: "https://takeuforward.org/data-structure/rabin-karp-algorithm/" },
          { id: "dsa-18-1-2", title: "Z-Algorithm for Pattern Searching", diff: "Hard", topic: "Advanced Strings", tuf: "https://takeuforward.org/data-structure/z-algorithm/" },
          { id: "dsa-18-1-3", title: "KMP Algorithm (Knuth-Morris-Pratt) / Longest Prefix Suffix (LPS)", diff: "Hard", topic: "Advanced Strings", tuf: "https://takeuforward.org/data-structure/kmp-algorithm-for-pattern-searching/" },
          { id: "dsa-18-1-4", title: "Shortest Palindrome (KMP LPS table application)", diff: "Hard", topic: "Advanced Strings", tuf: "https://takeuforward.org/data-structure/shortest-palindrome/" }
        ]
      }
    ]
  },
  {
    stepId: 19,
    title: "Step 19: Advanced Graphs [Network Flows & Special Paths]",
    desc: "Strongly connected components, Eulerian circuits, Hamiltonian paths & network flows",
    modules: [
      {
        moduleId: "19.1",
        title: "Advanced Graph Paradigms",
        problems: [
          { id: "dsa-19-1-1", title: "Kosaraju's Algorithm for Strongly Connected Components (SCC)", diff: "Hard", topic: "Advanced Graphs", tuf: "https://takeuforward.org/data-structure/strongly-connected-components-kosarajus-algorithm-g-54/" },
          { id: "dsa-19-1-2", title: "Tarjan's Algorithm for Strongly Connected Components", diff: "Hard", topic: "Advanced Graphs", tuf: "https://takeuforward.org/data-structure/tarjans-algorithm-for-scc/" },
          { id: "dsa-19-1-3", title: "Eulerian Path and Circuit in Directed & Undirected Graph", diff: "Hard", topic: "Advanced Graphs", tuf: "https://takeuforward.org/graph/eulerian-path-and-circuit/" },
          { id: "dsa-19-1-4", title: "Hamiltonian Path & Traveling Salesman Problem Intro", diff: "Hard", topic: "Advanced Graphs", tuf: "https://takeuforward.org/graph/hamiltonian-cycle-path/" },
          { id: "dsa-19-1-5", title: "Introduction to Max Flow / Ford-Fulkerson & Dinic's Algorithm", diff: "Hard", topic: "Advanced Graphs", tuf: "https://takeuforward.org/graph/network-flow-basics/" }
        ]
      }
    ]
  }
];
