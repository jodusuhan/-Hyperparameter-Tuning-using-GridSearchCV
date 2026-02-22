import { HelpCircle } from 'lucide-react';

function ConceptsSection() {
  const concepts = [
    {
      question: 'What are hyperparameters?',
      answer:
        'Hyperparameters are settings that you specify before training a model. Unlike parameters (learned from data), hyperparameters control how the learning process works. Examples include learning rate, tree depth, regularization strength, and number of clusters.',
    },
    {
      question: 'Why is GridSearchCV used?',
      answer:
        'GridSearchCV automatically tests all combinations of hyperparameters you specify and finds the best ones based on cross-validation performance. It saves time and ensures a systematic search instead of manual guessing.',
    },
    {
      question: 'What is cross-validation?',
      answer:
        'Cross-validation divides your training data into multiple folds and trains the model multiple times, each time using different folds for validation. This gives a more reliable performance estimate and helps prevent overfitting.',
    },
    {
      question: 'Why is tuning on test data wrong?',
      answer:
        'If you tune hyperparameters using test data, you essentially allow the model to "see" and overfit to the test set. This inflates performance estimates. You must tune only on training data to maintain an unbiased test set evaluation.',
    },
    {
      question: 'GridSearch vs RandomSearch?',
      answer:
        'GridSearch tests all parameter combinations (exhaustive), while RandomSearch samples random combinations. GridSearch is thorough but slow with many parameters, while RandomSearch is faster but might miss the best combination.',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
      <div className="flex items-center gap-3 mb-6">
        <HelpCircle className="w-6 h-6 text-blue-600" />
        <h3 className="text-2xl font-bold text-gray-900">Key Concepts</h3>
      </div>

      <div className="space-y-6">
        {concepts.map((concept, index) => (
          <div
            key={index}
            className="border-l-4 border-blue-500 pl-4 py-2"
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              {concept.question}
            </h4>
            <p className="text-gray-700 leading-relaxed">{concept.answer}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-3">
          Performance Comparison
        </h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-blue-200">
            <span className="font-medium text-gray-900">Default Model</span>
            <span className="text-sm text-gray-700">Without tuning</span>
          </div>
          <div className="flex items-center justify-between pb-3 border-b border-blue-200">
            <span className="font-medium text-gray-900">Tuned Model</span>
            <span className="text-sm text-gray-700">With best parameters</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-900">Improvement</span>
            <span className="text-sm text-green-700 font-semibold">Accuracy increase</span>
          </div>
        </div>
      </div>

      <div className="mt-6 p-6 bg-green-50 rounded-lg border border-green-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-3">
          GridSearchCV Parameters
        </h4>
        <div className="space-y-3 text-sm">
          <div>
            <p className="font-medium text-gray-900">estimator</p>
            <p className="text-gray-700">The model to tune (e.g., RandomForestClassifier, SVC)</p>
          </div>
          <div>
            <p className="font-medium text-gray-900">param_grid</p>
            <p className="text-gray-700">Dictionary of hyperparameters and values to test</p>
          </div>
          <div>
            <p className="font-medium text-gray-900">cv</p>
            <p className="text-gray-700">Number of cross-validation folds (typically 5 or 10)</p>
          </div>
          <div>
            <p className="font-medium text-gray-900">n_jobs</p>
            <p className="text-gray-700">Number of processors to use (-1 means use all)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConceptsSection;
