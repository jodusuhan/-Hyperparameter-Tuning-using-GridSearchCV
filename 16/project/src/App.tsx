import { useState } from 'react';
import { BookOpen, Grid3x3, Gauge, BarChart3, Settings } from 'lucide-react';
import Header from './components/Header';
import StepCard from './components/StepCard';
import CodeExample from './components/CodeExample';
import ConceptsSection from './components/ConceptsSection';

function App() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: 'Load & Preprocess Data',
      description: 'Load the Breast Cancer dataset and apply basic preprocessing',
      icon: BookOpen,
      code: `from sklearn.datasets import load_breast_cancer
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
import pandas as pd

# Load the dataset
data = load_breast_cancer()
X = pd.DataFrame(data.data, columns=data.feature_names)
y = pd.Series(data.target)

# Split the data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Apply preprocessing
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

print(f"Training set shape: {X_train_scaled.shape}")
print(f"Testing set shape: {X_test_scaled.shape}")`
    },
    {
      id: 1,
      title: 'Select Model',
      description: 'Choose a model like SVM or Random Forest for tuning',
      icon: Settings,
      code: `from sklearn.svm import SVC
from sklearn.ensemble import RandomForestClassifier

# Option 1: Support Vector Machine
model_svm = SVC(random_state=42)

# Option 2: Random Forest
model_rf = RandomForestClassifier(random_state=42)

# We'll use Random Forest for this example
model = RandomForestClassifier(random_state=42)

print("Model selected: Random Forest")`
    },
    {
      id: 2,
      title: 'Define Parameter Grid',
      description: 'Create a grid of hyperparameters to test',
      icon: Grid3x3,
      code: `# Define parameter grid for Random Forest
param_grid = {
    'n_estimators': [50, 100, 200],
    'max_depth': [5, 10, 15, 20],
    'min_samples_split': [2, 5, 10],
    'min_samples_leaf': [1, 2, 4]
}

# For SVM, you would use:
# param_grid = {
#     'C': [0.1, 1, 10, 100],
#     'kernel': ['linear', 'rbf'],
#     'gamma': ['scale', 'auto']
# }

print(f"Total combinations to test: {3*4*3*4}")
print("Parameters ready for grid search")`
    },
    {
      id: 3,
      title: 'Apply GridSearchCV',
      description: 'Run GridSearchCV with cross-validation to find best parameters',
      icon: Gauge,
      code: `from sklearn.model_selection import GridSearchCV

# Create GridSearchCV object
grid_search = GridSearchCV(
    estimator=model,
    param_grid=param_grid,
    cv=5,  # 5-fold cross-validation
    scoring='accuracy',
    n_jobs=-1,  # Use all processors
    verbose=1
)

# Fit GridSearchCV
print("Starting GridSearchCV...")
grid_search.fit(X_train_scaled, y_train)

print(f"Best parameters: {grid_search.best_params_}")
print(f"Best cross-val score: {grid_search.best_score_:.4f}")`
    },
    {
      id: 4,
      title: 'Compare Performance',
      description: 'Compare tuned model with default model performance',
      icon: BarChart3,
      code: `from sklearn.metrics import accuracy_score

# Default model predictions
default_model = RandomForestClassifier(random_state=42)
default_model.fit(X_train_scaled, y_train)
y_pred_default = default_model.predict(X_test_scaled)
accuracy_default = accuracy_score(y_test, y_pred_default)

# Tuned model predictions
best_model = grid_search.best_estimator_
y_pred_tuned = best_model.predict(X_test_scaled)
accuracy_tuned = accuracy_score(y_test, y_pred_tuned)

# Compare results
print(f"Default Model Accuracy: {accuracy_default:.4f}")
print(f"Tuned Model Accuracy: {accuracy_tuned:.4f}")
print(f"Improvement: {(accuracy_tuned - accuracy_default)*100:.2f}%")`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Hyperparameter Tuning with GridSearchCV
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn how to optimize machine learning models by finding the best hyperparameters.
            Master model tuning techniques using the Breast Cancer dataset.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Tuning Steps</h3>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <StepCard
                  key={step.id}
                  step={step}
                  index={index}
                  isActive={activeStep === index}
                  onClick={() => setActiveStep(index)}
                />
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-8 lg:self-start">
            <CodeExample code={steps[activeStep].code} />
          </div>
        </div>

        <ConceptsSection />
      </main>

      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">
            Task 16: Hyperparameter Tuning Implementation
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
