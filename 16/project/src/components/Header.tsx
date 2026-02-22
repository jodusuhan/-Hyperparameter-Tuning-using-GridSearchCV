import { Zap } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Zap className="w-8 h-8 text-blue-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Model Tuning Learning Platform
            </h1>
            <p className="text-sm text-gray-600">
              Master Hyperparameter Optimization Techniques
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
