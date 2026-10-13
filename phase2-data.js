// Phase 2: Python, Machine Learning & Continuous DSA Practice
// Curated roadmap for Pratyush Tiwari's CS Marathon Phase 2

const PHASE2_DATA = [
  {
    trackId: "p2-python",
    trackTitle: "Track A: Python Engineering & Data Stack",
    desc: "From Python runtime internals and OOP to high-performance NumPy/Pandas and AsyncIO",
    modules: [
      {
        moduleId: "py-1",
        title: "Python Internals & Core Foundations",
        items: [
          { id: "p2-py-101", title: "Python Memory Model, Objects, IDs & Reference Counting", diff: "Easy", topic: "Python Core", resource: "https://docs.python.org/3/reference/datamodel.html" },
          { id: "p2-py-102", title: "Mutability vs Immutability, Deepcopy vs Shallow Copy", diff: "Easy", topic: "Python Core", resource: "https://docs.python.org/3/library/copy.html" },
          { id: "p2-py-103", title: "Global Interpreter Lock (GIL) - What, Why & Impacts", diff: "Medium", topic: "Python Internals", resource: "https://realpython.com/python-gil/" },
          { id: "p2-py-104", title: "Python Bytecode & Disassembly (`dis` module)", diff: "Medium", topic: "Python Internals", resource: "https://docs.python.org/3/library/dis.html" },
          { id: "p2-py-105", title: "Custom Exceptions, Context Management (`try-except-finally-else`)", diff: "Easy", topic: "Python Core", resource: "https://docs.python.org/3/tutorial/errors.html" }
        ]
      },
      {
        moduleId: "py-2",
        title: "Advanced OOP & Python Data Model (Dunders)",
        items: [
          { id: "p2-py-201", title: "Dunder Methods: `__init__`, `__repr__`, `__str__`, `__call__`", diff: "Easy", topic: "OOP", resource: "https://docs.python.org/3/reference/datamodel.html#special-method-names" },
          { id: "p2-py-202", title: "Sequence & Mapping Dunders: `__getitem__`, `__setitem__`, `__len__`", diff: "Medium", topic: "OOP", resource: "https://docs.python.org/3/reference/datamodel.html#emulating-container-types" },
          { id: "p2-py-203", title: "Multiple Inheritance & Method Resolution Order (C3 MRO algorithm)", diff: "Medium", topic: "OOP", resource: "https://www.python.org/download/releases/2.3/mro/" },
          { id: "p2-py-204", title: "Abstract Base Classes (`abc.ABC`, `@abstractmethod`)", diff: "Medium", topic: "OOP", resource: "https://docs.python.org/3/library/abc.html" },
          { id: "p2-py-205", title: "Descriptors, Properties (`@property`) & Metaclasses (`type`)", diff: "Hard", topic: "Advanced OOP", resource: "https://docs.python.org/3/howto/descriptor.html" }
        ]
      },
      {
        moduleId: "py-3",
        title: "Functional Patterns, Decorators & Generators",
        items: [
          { id: "p2-py-301", title: "Closures & Scope (LEGB Rule: Local, Enclosing, Global, Built-in)", diff: "Easy", topic: "Functional", resource: "https://realpython.com/inner-functions-what-are-they-good-for/" },
          { id: "p2-py-302", title: "Function Decorators with Arguments & `functools.wraps`", diff: "Medium", topic: "Decorators", resource: "https://realpython.com/primer-on-python-decorators/" },
          { id: "p2-py-303", title: "Class Decorators & Parameterized Decorators", diff: "Medium", topic: "Decorators", resource: "https://realpython.com/primer-on-python-decorators/" },
          { id: "p2-py-304", title: "Custom Context Managers (`__enter__`, `__exit__` & `contextlib`)", diff: "Medium", topic: "Context Managers", resource: "https://docs.python.org/3/library/contextlib.html" },
          { id: "p2-py-305", title: "Generators, Iterators, `yield` vs `yield from`, Memory Profiling", diff: "Medium", topic: "Generators", resource: "https://realpython.com/introduction-to-python-generators/" }
        ]
      },
      {
        moduleId: "py-4",
        title: "Concurrency, AsyncIO & Systems Programming",
        items: [
          { id: "p2-py-401", title: "Multi-Threading vs Multi-Processing (CPU vs I/O bound tasks)", diff: "Medium", topic: "Concurrency", resource: "https://docs.python.org/3/library/concurrent.futures.html" },
          { id: "p2-py-402", title: "Process Pools & Thread Pools with `concurrent.futures`", diff: "Medium", topic: "Concurrency", resource: "https://docs.python.org/3/library/concurrent.futures.html" },
          { id: "p2-py-403", title: "AsyncIO Event Loop, Coroutines, `async/await` mechanics", diff: "Hard", topic: "AsyncIO", resource: "https://docs.python.org/3/library/asyncio.html" },
          { id: "p2-py-404", title: "Async Tasks, `asyncio.gather`, `asyncio.create_task`, Timeouts", diff: "Hard", topic: "AsyncIO", resource: "https://realpython.com/async-io-python/" },
          { id: "p2-py-405", title: "Async I/O with `aiohttp` / Async Database drivers", diff: "Medium", topic: "AsyncIO", resource: "https://docs.aiohttp.org/" }
        ]
      },
      {
        moduleId: "py-5",
        title: "High Performance NumPy (Vectorization)",
        items: [
          { id: "p2-py-501", title: "NumPy ndarray internals, strides, C-contiguous vs F-contiguous", diff: "Medium", topic: "NumPy", resource: "https://numpy.org/doc/stable/user/basics.html" },
          { id: "p2-py-502", title: "Broadcasting Rules & Vectorized Array Operations", diff: "Medium", topic: "NumPy", resource: "https://numpy.org/doc/stable/user/basics.broadcasting.html" },
          { id: "p2-py-503", title: "Advanced Indexing, Boolean Masks & Integer Array Slicing", diff: "Medium", topic: "NumPy", resource: "https://numpy.org/doc/stable/user/basics.indexing.html" },
          { id: "p2-py-504", title: "Linear Algebra with NumPy: Dot product, SVD, Eigenvalues, Inverses", diff: "Medium", topic: "NumPy", resource: "https://numpy.org/doc/stable/reference/routines.linalg.html" },
          { id: "p2-py-505", title: "Einstein Summation Convention (`np.einsum`) & Matrix Optimizations", diff: "Hard", topic: "NumPy", resource: "https://numpy.org/doc/stable/reference/generated/numpy.einsum.html" }
        ]
      },
      {
        moduleId: "py-6",
        title: "Pandas & Polars Data Wrangling",
        items: [
          { id: "p2-py-601", title: "Pandas Series & DataFrames: `.loc`, `.iloc`, Chained indexing caveats", diff: "Easy", topic: "Pandas", resource: "https://pandas.pydata.org/docs/user_guide/indexing.html" },
          { id: "p2-py-602", title: "Data Cleaning: Imputation, Deduplication, String & Datetime parsing", diff: "Easy", topic: "Pandas", resource: "https://pandas.pydata.org/docs/user_guide/missing_data.html" },
          { id: "p2-py-603", title: "Split-Apply-Combine (`groupby`), Pivoting & Melt operations", diff: "Medium", topic: "Pandas", resource: "https://pandas.pydata.org/docs/user_guide/groupby.html" },
          { id: "p2-py-604", title: "Window Functions, Rolling averages, Expanding windows", diff: "Medium", topic: "Pandas", resource: "https://pandas.pydata.org/docs/user_guide/window.html" },
          { id: "p2-py-605", title: "Intro to Polars: Lazy DataFrames, Query Optimization & Lightning speeds", diff: "Medium", topic: "Polars", resource: "https://docs.pola.rs/user-guide/getting-started/" }
        ]
      },
      {
        moduleId: "py-7",
        title: "Modern Python Tooling & Production Standards",
        items: [
          { id: "p2-py-701", title: "Type Annotations, Generic Types, Union, Optional, Protocol (`typing`)", diff: "Medium", topic: "Typing", resource: "https://docs.python.org/3/library/typing.html" },
          { id: "p2-py-702", title: "Data Validation & Settings Management with Pydantic V2", diff: "Medium", topic: "Pydantic", resource: "https://docs.pydantic.dev/latest/" },
          { id: "p2-py-703", title: "Testing with `pytest`: Fixtures, Parameterization, Mocking", diff: "Medium", topic: "Testing", resource: "https://docs.pytest.org/" },
          { id: "p2-py-704", title: "Dependency Management with UV / Poetry and Virtual Envs", diff: "Easy", topic: "Tooling", resource: "https://github.com/astral-sh/uv" }
        ]
      }
    ]
  },
  {
    trackId: "p2-ml",
    trackTitle: "Track B: Machine Learning & Deep Learning Roadmap",
    desc: "Mathematical foundations, classical ML, PyTorch deep learning, Transformers & MLOps",
    modules: [
      {
        moduleId: "ml-1",
        title: "Mathematics & Statistics for ML",
        items: [
          { id: "p2-ml-101", title: "Linear Algebra: Vector spaces, Basis, Rank, Orthogonality, Eigen decomposition", diff: "Medium", topic: "ML Math", resource: "https://www.3blue1brown.com/topics/linear-algebra" },
          { id: "p2-ml-102", title: "Singular Value Decomposition (SVD) & Principal Component intuition", diff: "Hard", topic: "ML Math", resource: "https://en.wikipedia.org/wiki/Singular_value_decomposition" },
          { id: "p2-ml-103", title: "Multivariable Calculus: Gradients, Jacobians, Hessians, Chain Rule", diff: "Medium", topic: "ML Math", resource: "https://www.khanacademy.org/math/multivariable-calculus" },
          { id: "p2-ml-104", title: "Probability Distributions: Gaussian, Bernoulli, Poisson, Central Limit Theorem", diff: "Medium", topic: "Statistics", resource: "https://en.wikipedia.org/wiki/Probability_distribution" },
          { id: "p2-ml-105", title: "Statistical Inference: Hypothesis Testing, p-values, Confidence Intervals, Bayes Theorem", diff: "Medium", topic: "Statistics", resource: "https://en.wikipedia.org/wiki/Bayes%27_theorem" },
          { id: "p2-ml-106", title: "Maximum Likelihood Estimation (MLE) & Maximum A Posteriori (MAP)", diff: "Hard", topic: "ML Math", resource: "https://en.wikipedia.org/wiki/Maximum_likelihood_estimation" }
        ]
      },
      {
        moduleId: "ml-2",
        title: "Classical Supervised Learning Algorithms",
        items: [
          { id: "p2-ml-201", title: "Linear Regression: Ordinary Least Squares (OLS) derivation & Cost function", diff: "Easy", topic: "Supervised ML", resource: "https://scikit-learn.org/stable/modules/linear_model.html#ordinary-least-squares" },
          { id: "p2-ml-202", title: "Regularization: Ridge (L2 penalty) vs Lasso (L1 penalty - Sparsity) vs ElasticNet", diff: "Medium", topic: "Supervised ML", resource: "https://scikit-learn.org/stable/modules/linear_model.html#ridge-regression-and-classification" },
          { id: "p2-ml-203", title: "Logistic Regression: Sigmoid, Log-Odds, Binary Cross-Entropy Loss & Optimization", diff: "Medium", topic: "Supervised ML", resource: "https://scikit-learn.org/stable/modules/linear_model.html#logistic-regression" },
          { id: "p2-ml-204", title: "Decision Trees: ID3/CART algorithms, Gini Impurity, Information Gain & Pruning", diff: "Medium", topic: "Supervised ML", resource: "https://scikit-learn.org/stable/modules/tree.html" },
          { id: "p2-ml-205", title: "Ensemble Learning: Bagging, Bootstrap sampling, Random Forest architecture", diff: "Medium", topic: "Supervised ML", resource: "https://scikit-learn.org/stable/modules/ensemble.html#forest" },
          { id: "p2-ml-206", title: "Gradient Boosting: AdaBoost intuition, Gradient Boosted Trees, Residual fitting", diff: "Hard", topic: "Supervised ML", resource: "https://scikit-learn.org/stable/modules/ensemble.html#gradient-boosted-trees" },
          { id: "p2-ml-207", title: "State-of-the-Art Boosters: XGBoost, LightGBM, CatBoost (Handling categorical & speed)", diff: "Hard", topic: "Supervised ML", resource: "https://xgboost.readthedocs.io/" },
          { id: "p2-ml-208", title: "Support Vector Machines (SVM): Hyperplanes, Margins, Slack variables & Kernel Trick (RBF)", diff: "Hard", topic: "Supervised ML", resource: "https://scikit-learn.org/stable/modules/svm.html" },
          { id: "p2-ml-209", title: "K-Nearest Neighbors (KNN) & Distance Metrics (Euclidean, Manhattan, Cosine)", diff: "Easy", topic: "Supervised ML", resource: "https://scikit-learn.org/stable/modules/neighbors.html" },
          { id: "p2-ml-210", title: "Naive Bayes Classifier: Conditional Independence, Multinomial & Gaussian variants", diff: "Easy", topic: "Supervised ML", resource: "https://scikit-learn.org/stable/modules/naive_bayes.html" }
        ]
      },
      {
        moduleId: "ml-3",
        title: "Unsupervised Learning & Clustering",
        items: [
          { id: "p2-ml-301", title: "K-Means & K-Means++ Clustering: Centroid updates, Elbow Method & Silhouette Score", diff: "Medium", topic: "Unsupervised", resource: "https://scikit-learn.org/stable/modules/clustering.html#k-means" },
          { id: "p2-ml-302", title: "Hierarchical / Agglomerative Clustering & Dendrogram interpretation", diff: "Medium", topic: "Unsupervised", resource: "https://scikit-learn.org/stable/modules/clustering.html#hierarchical-clustering" },
          { id: "p2-ml-303", title: "DBSCAN (Density-Based Spatial Clustering of Applications with Noise)", diff: "Medium", topic: "Unsupervised", resource: "https://scikit-learn.org/stable/modules/clustering.html#dbscan" },
          { id: "p2-ml-304", title: "Principal Component Analysis (PCA): Covariance matrix, Eigenvalues & Variance ratio", diff: "Hard", topic: "Dimensionality", resource: "https://scikit-learn.org/stable/modules/decomposition.html#pca" },
          { id: "p2-ml-305", title: "Non-linear Dimensionality Reduction: t-SNE & UMAP for High-Dimensional Embeddings", diff: "Hard", topic: "Dimensionality", resource: "https://scikit-learn.org/stable/modules/manifold.html#t-sne" }
        ]
      },
      {
        moduleId: "ml-4",
        title: "Model Evaluation & Feature Engineering",
        items: [
          { id: "p2-ml-401", title: "Data Splitting Strategy: Train/Validation/Test, Stratified K-Fold Cross-Validation", diff: "Easy", topic: "Validation", resource: "https://scikit-learn.org/stable/modules/cross_validation.html" },
          { id: "p2-ml-402", title: "Classification Metrics: Confusion Matrix, Precision, Recall, F1-Score, PR Curves", diff: "Medium", topic: "Metrics", resource: "https://scikit-learn.org/stable/modules/model_evaluation.html" },
          { id: "p2-ml-403", title: "ROC Curve & AUC Score: Threshold optimization & Class Imbalance handling", diff: "Medium", topic: "Metrics", resource: "https://scikit-learn.org/stable/modules/model_evaluation.html#roc-metrics" },
          { id: "p2-ml-404", title: "Regression Metrics: MAE, MSE, RMSE, R² Score, Adjusted R²", diff: "Easy", topic: "Metrics", resource: "https://scikit-learn.org/stable/modules/model_evaluation.html#regression-metrics" },
          { id: "p2-ml-405", title: "Feature Preprocessing: StandardScaling, MinMax, One-Hot, Target Encoding, Interaction terms", diff: "Medium", topic: "Feature Eng", resource: "https://scikit-learn.org/stable/modules/preprocessing.html" },
          { id: "p2-ml-406", title: "Hyperparameter Tuning: Grid Search, Randomized Search & Bayesian Optimization (Optuna)", diff: "Medium", topic: "Optimization", resource: "https://optuna.org/" }
        ]
      },
      {
        moduleId: "ml-5",
        title: "Deep Learning Foundations & Neural Networks",
        items: [
          { id: "p2-ml-501", title: "Biological Neuron to Artificial Perceptron & Multi-Layer Perceptron (MLP)", diff: "Easy", topic: "Deep Learning", resource: "https://www.deeplearningbook.org/contents/mlp.html" },
          { id: "p2-ml-502", title: "Activation Functions: Sigmoid, Tanh, ReLU, LeakyReLU, GeLU, Softmax & vanishing gradients", diff: "Medium", topic: "Deep Learning", resource: "https://en.wikipedia.org/wiki/Activation_function" },
          { id: "p2-ml-503", title: "Forward Pass & Backpropagation Derivation from Scratch with Chain Rule", diff: "Hard", topic: "Deep Learning", resource: "https://karpathy.ai/zero-to-hero.html" },
          { id: "p2-ml-504", title: "Loss Functions: Mean Squared Error, Binary Cross-Entropy, Categorical Cross-Entropy", diff: "Medium", topic: "Deep Learning", resource: "https://pytorch.org/docs/stable/nn.html#loss-functions" },
          { id: "p2-ml-505", title: "Optimizers: Gradient Descent, SGD, Momentum, RMSprop, Adam & AdamW weight decay", diff: "Hard", topic: "Deep Learning", resource: "https://pytorch.org/docs/stable/optim.html" },
          { id: "p2-ml-506", title: "Regularization in Neural Nets: Dropout, Weight Decay, Batch Normalization, Layer Normalization", diff: "Medium", topic: "Deep Learning", resource: "https://www.deeplearningbook.org/contents/regularization.html" }
        ]
      },
      {
        moduleId: "ml-6",
        title: "PyTorch Deep Dive & Tensor Engineering",
        items: [
          { id: "p2-ml-601", title: "PyTorch Tensors: Shapes, Strides, Memory layout, GPU acceleration (`.to(device)`)", diff: "Easy", topic: "PyTorch", resource: "https://pytorch.org/tutorials/beginner/basics/tensorqs_tutorial.html" },
          { id: "p2-ml-602", title: "Autograd: Dynamic computational graph, `tensor.backward()`, `.grad`, `torch.no_grad()`", diff: "Medium", topic: "PyTorch", resource: "https://pytorch.org/tutorials/beginner/basics/autogradqs_tutorial.html" },
          { id: "p2-ml-603", title: "Building Neural Networks with `torch.nn.Module`: Linear, Sequential, Parameter hooks", diff: "Medium", topic: "PyTorch", resource: "https://pytorch.org/tutorials/beginner/basics/buildmodel_tutorial.html" },
          { id: "p2-ml-604", title: "Custom Datasets & DataLoaders (`torch.utils.data.Dataset`), Batching, Workers, Collate fn", diff: "Medium", topic: "PyTorch", resource: "https://pytorch.org/tutorials/beginner/basics/data_tutorial.html" },
          { id: "p2-ml-605", title: "Complete End-to-End Training & Validation Loop with Learning Rate Schedulers", diff: "Medium", topic: "PyTorch", resource: "https://pytorch.org/tutorials/beginner/basics/optimization_tutorial.html" },
          { id: "p2-ml-606", title: "Model Checkpointing: Saving & Loading `state_dict`, Early Stopping mechanism", diff: "Easy", topic: "PyTorch", resource: "https://pytorch.org/tutorials/beginner/basics/saveloadrun_tutorial.html" }
        ]
      },
      {
        moduleId: "ml-7",
        title: "Computer Vision & Convolutional Neural Networks (CNNs)",
        items: [
          { id: "p2-ml-701", title: "Convolution Arithmetic: Kernel filters, Stride, Padding, Receptive fields", diff: "Medium", topic: "Computer Vision", resource: "https://cs231n.github.io/convolutional-networks/" },
          { id: "p2-ml-702", title: "Pooling Layers (MaxPool, AvgPool, Global Average Pooling) & Feature extraction", diff: "Easy", topic: "Computer Vision", resource: "https://cs231n.github.io/convolutional-networks/" },
          { id: "p2-ml-703", title: "Classic Architectures: LeNet, AlexNet, VGGNet & ResNet Residual Skip Connections", diff: "Hard", topic: "Computer Vision", resource: "https://arxiv.org/abs/1512.03385" },
          { id: "p2-ml-704", title: "Transfer Learning: Fine-tuning pretrained ImageNet models with PyTorch torchvision", diff: "Medium", topic: "Computer Vision", resource: "https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html" },
          { id: "p2-ml-705", title: "Object Detection & Segmentation Concepts: YOLO overview, Mask R-CNN, IoU & mAP", diff: "Hard", topic: "Computer Vision", resource: "https://paperswithcode.com/task/object-detection" }
        ]
      },
      {
        moduleId: "ml-8",
        title: "NLP, Attention Mechanism & Transformers",
        items: [
          { id: "p2-ml-801", title: "Text Preprocessing & Embeddings: Tokenization, Word2Vec, GloVe, Cosine similarity", diff: "Easy", topic: "NLP", resource: "https://web.stanford.edu/class/cs224n/" },
          { id: "p2-ml-802", title: "Recurrent Networks: RNNs, LSTMs, GRUs, Hidden states & Exploding/Vanishing gradients", diff: "Medium", topic: "NLP", resource: "https://colah.github.io/posts/2015-08-Understanding-LSTMs/" },
          { id: "p2-ml-803", title: "The Attention Revolution: Bahdanau Attention & Why Seq2Seq needed attention", diff: "Medium", topic: "Transformers", resource: "https://arxiv.org/abs/1409.0473" },
          { id: "p2-ml-804", title: "'Attention Is All You Need': Scaled Dot-Product Attention, Queries, Keys, Values", diff: "Hard", topic: "Transformers", resource: "https://arxiv.org/abs/1706.03762" },
          { id: "p2-ml-805", title: "Transformer Architecture: Multi-Head Attention, Positional Encoding, Feedforward layers", diff: "Hard", topic: "Transformers", resource: "https://jalammar.github.io/illustrated-transformer/" },
          { id: "p2-ml-806", title: "BERT vs GPT Architectures: Masked LM (Encoder) vs Autoregressive Causal LM (Decoder)", diff: "Hard", topic: "Transformers", resource: "https://jalammar.github.io/illustrated-bert/" },
          { id: "p2-ml-807", title: "Hugging Face `transformers` Library: Pipelines, Tokenizers, AutoModel, Fine-tuning", diff: "Medium", topic: "Transformers", resource: "https://huggingface.co/docs/transformers/" }
        ]
      },
      {
        moduleId: "ml-9",
        title: "Production MLOps, LLMs & Vector Systems",
        items: [
          { id: "p2-ml-901", title: "Model Serialization: ONNX Runtime, TorchScript, Joblib & Latency benchmarking", diff: "Medium", topic: "MLOps", resource: "https://onnxruntime.ai/" },
          { id: "p2-ml-902", title: "Building a High-Performance ML Inference API with FastAPI and Pydantic", diff: "Medium", topic: "MLOps", resource: "https://fastapi.tiangolo.com/" },
          { id: "p2-ml-903", title: "Dockerizing an ML Application: Multi-stage builds, GPU container support", diff: "Medium", topic: "MLOps", resource: "https://docs.docker.com/" },
          { id: "p2-ml-904", title: "Experiment Tracking: MLflow or Weights & Biases (W&B) for metrics & artifacts", diff: "Medium", topic: "MLOps", resource: "https://mlflow.org/" },
          { id: "p2-ml-905", title: "Vector Databases & Semantic Search: ChromaDB / Pinecone, Embeddings, RAG pipeline", diff: "Hard", topic: "LLMs & RAG", resource: "https://www.pinecone.io/learn/vector-database/" }
        ]
      },
      {
        moduleId: "ml-10",
        title: "Hands-on Capstone Portfolio Projects",
        items: [
          { id: "p2-ml-1001", title: "Project 1: Kaggle End-to-End Tabular Competition (XGBoost/LightGBM + Ensembling)", diff: "Medium", topic: "Projects", resource: "https://www.kaggle.com/competitions" },
          { id: "p2-ml-1002", title: "Project 2: PyTorch Custom Image Classifier Web App (ResNet Transfer Learning + Streamlit/FastAPI)", diff: "Medium", topic: "Projects", resource: "https://pytorch.org/tutorials/" },
          { id: "p2-ml-1003", title: "Project 3: Production Retrieval-Augmented Generation (RAG) System with Vector Search", diff: "Hard", topic: "Projects", resource: "https://github.com/langchain-ai/langchain" },
          { id: "p2-ml-1004", title: "Project 4: Full MLOps Pipeline with CI/CD, Docker Container & Automated Model Monitoring", diff: "Hard", topic: "Projects", resource: "https://madewithml.com/" }
        ]
      }
    ]
  },
  {
    trackId: "p2-dsa-advanced",
    trackTitle: "Track C: Continuous DSA & Contest Grinding",
    desc: "Maintain interview sharpness with weekly contests, high-yield sets and mock drills",
    modules: [
      {
        moduleId: "dsa-adv-1",
        title: "LeetCode & Platform Contests Tracking",
        items: [
          { id: "p2-con-1", title: "Weekly Contest Drill 1 (Solve 3/4 questions in 90 mins)", diff: "Medium", topic: "Contest", resource: "https://leetcode.com/contest/" },
          { id: "p2-con-2", title: "Weekly Contest Drill 2 (Speed Run Q1 & Q2 in under 15 mins)", diff: "Medium", topic: "Contest", resource: "https://leetcode.com/contest/" },
          { id: "p2-con-3", title: "Bi-Weekly Contest Drill 3 (Hard Question Upsolving)", diff: "Hard", topic: "Contest", resource: "https://leetcode.com/contest/" },
          { id: "p2-con-4", title: "Post-Contest Analysis: Upsolve the question you failed during contest", diff: "Hard", topic: "Contest", resource: "https://leetcode.com/contest/" },
          { id: "p2-con-5", title: "Reach 1750+ LeetCode Contest Rating Milestone", diff: "Hard", topic: "Contest", resource: "https://leetcode.com/contest/" }
        ]
      },
      {
        moduleId: "dsa-adv-2",
        title: "High-Yield Interview Repertoire Reinforcement",
        items: [
          { id: "p2-rev-1", title: "Array & Two Pointers Speed Run (5 problems in 45 mins)", diff: "Medium", topic: "Speed Drill", resource: "https://neetcode.io/practice" },
          { id: "p2-rev-2", title: "Binary Search on Answer Space (Aggressive Cows, Book Allocation, Gas Stations)", diff: "Hard", topic: "Speed Drill", resource: "https://neetcode.io/practice" },
          { id: "p2-rev-3", title: "Trees & Graphs Traversal Marathon (LCA, Morris Traversal, Topo, Dijkstra)", diff: "Hard", topic: "Speed Drill", resource: "https://neetcode.io/practice" },
          { id: "p2-rev-4", title: "DP Master Patterns Drill (LCS variants, LIS in NlogN, MCM, Stock states)", diff: "Hard", topic: "Speed Drill", resource: "https://neetcode.io/practice" },
          { id: "p2-rev-5", title: "Design Data Structures (LRU Cache, LFU Cache, All O(1) Data Structure)", diff: "Hard", topic: "Speed Drill", resource: "https://neetcode.io/practice" }
        ]
      }
    ]
  }
];
