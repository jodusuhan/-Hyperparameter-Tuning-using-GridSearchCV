# Model Tuning Learning Platform

An interactive web application designed to help students learn about hyperparameter tuning using GridSearchCV and the Breast Cancer dataset.

## Overview

This project is an educational tool for Task 16 of the Machine Learning internship program. It provides a step-by-step guide to optimizing machine learning models through systematic hyperparameter tuning.

## Features

- **Interactive Step-by-Step Guide**: Learn each phase of the model tuning workflow
- **Code Examples**: Copy-paste ready Python code for each step
- **Key Concepts**: Understand hyperparameter optimization through Q&A format
- **Performance Comparison**: Learn how to compare tuned vs default models
- **Clean UI**: Modern, student-friendly interface built with React and Tailwind CSS

## What You'll Learn

1. **Load & Preprocess Data**: Prepare the Breast Cancer dataset for modeling
2. **Select Model**: Choose between SVM or Random Forest for tuning
3. **Define Parameter Grid**: Create a comprehensive hyperparameter search space
4. **Apply GridSearchCV**: Use cross-validation to find optimal parameters
5. **Compare Performance**: Evaluate improvements from tuning

## Tuning Steps Covered

### Step 1: Load & Preprocess Data
- Load the Breast Cancer dataset from sklearn
- Split data into training and testing sets
- Apply StandardScaler for preprocessing
- Understand proper data handling

### Step 2: Select Model
- Understand different model options (SVM, Random Forest)
- Choose appropriate model for the task
- Review model-specific hyperparameters

### Step 3: Define Parameter Grid
- Create parameter grid for Random Forest
- Understand parameter ranges and values
- Calculate total combinations to test
- Learn parameter selection strategies

### Step 4: Apply GridSearchCV
- Set up GridSearchCV with cross-validation
- Run systematic hyperparameter search
- Extract best parameters and scores
- Understand the tuning process

### Step 5: Compare Performance
- Train default model (no tuning)
- Train tuned model with best parameters
- Calculate accuracy on test set
- Measure improvement percentage

## Key Concepts Explained

- **Hyperparameters**: Settings specified before training (learning rate, tree depth, etc.)
- **GridSearchCV**: Tool for exhaustive hyperparameter search with cross-validation
- **Cross-Validation**: Data splitting technique for reliable performance estimation
- **Data Leakage Prevention**: Why tuning must happen on training data only
- **GridSearch vs RandomSearch**: Trade-offs between exhaustive and sampling-based search

## Technology Stack

- **React** - Frontend framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide React** - Icon library

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## How to Use This Platform

1. **Navigate Through Steps**: Click on each step card to view the corresponding code
2. **Copy Code**: Use the copy button to copy code examples
3. **Read Concepts**: Scroll down to understand key tuning concepts
4. **Learn Comparison**: Review how to compare tuned vs default models

## Implementation Guide

To implement hyperparameter tuning in a Jupyter notebook:

1. Open Jupyter Notebook or Google Colab
2. Copy the code from each step in order
3. Run each cell sequentially
4. Observe GridSearchCV output and best parameters
5. Compare performance metrics between models
6. Save results in a performance comparison table

## Project Structure

```
src/
├── components/
│   ├── Header.tsx           # Application header
│   ├── StepCard.tsx         # Step cards for navigation
│   ├── CodeExample.tsx      # Code display with copy functionality
│   └── ConceptsSection.tsx  # Key concepts and parameters
├── App.tsx                  # Main application component
├── main.tsx                 # Application entry point
└── index.css                # Global styles
```

## Dataset Information

**Primary Dataset**: Breast Cancer Dataset (sklearn)
- Built into scikit-learn
- Binary classification problem
- 30 numerical features
- 569 samples
- Target: Malignant (1) or Benign (0)

**Alternative**: Titanic Dataset (if needed)

## Learning Outcomes

After using this platform, students will understand:
- How hyperparameters affect model performance
- How to use GridSearchCV for systematic tuning
- Importance of cross-validation in hyperparameter search
- Why tuning should only happen on training data
- How to measure and compare model improvements
- Difference between grid search and random search

## Task Deliverables

When completing Task 16, ensure you have:
1. Jupyter notebook with GridSearchCV implementation
2. Best parameters output and explanation
3. Performance comparison table (default vs tuned model)

## Interview Preparation

The platform covers these common interview questions:
- What are hyperparameters?
- Why is GridSearchCV used?
- What is cross-validation?
- Why is tuning on test data wrong?
- GridSearch vs RandomSearch?

## Common Hyperparameters by Model

### Random Forest
- `n_estimators`: Number of trees
- `max_depth`: Maximum depth of trees
- `min_samples_split`: Minimum samples to split a node
- `min_samples_leaf`: Minimum samples in a leaf

### Support Vector Machine (SVM)
- `C`: Regularization parameter
- `kernel`: Type of kernel (linear, rbf, poly)
- `gamma`: Kernel coefficient

## Tips for Efficient Tuning

1. Start with a coarse grid and refine based on results
2. Use `n_jobs=-1` in GridSearchCV to parallelize computation
3. Reduce cross-validation folds if time is a constraint
4. Monitor cross-validation scores to avoid overfitting
5. Always compare against a baseline model

## Contributing

This is an educational project. Feel free to fork and customize for your learning needs.

## License

This project is created for educational purposes as part of the Machine Learning internship program.

## Support

For questions or issues related to the task, refer to the internship guidelines or reach out to your mentors.
