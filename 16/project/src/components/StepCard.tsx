import { LucideIcon } from 'lucide-react';

interface StepCardProps {
  step: {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
  };
  index: number;
  isActive: boolean;
  onClick: () => void;
}

function StepCard({ step, index, isActive, onClick }: StepCardProps) {
  const Icon = step.icon;

  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-6 rounded-lg border-2 transition-all ${
        isActive
          ? 'border-blue-500 bg-blue-50 shadow-md'
          : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm'
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
            isActive ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
          }`}
        >
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span
              className={`text-xs font-semibold ${
                isActive ? 'text-blue-600' : 'text-gray-500'
              }`}
            >
              STEP {index + 1}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {step.title}
          </h3>
          <p className="text-sm text-gray-600">{step.description}</p>
        </div>
      </div>
    </button>
  );
}

export default StepCard;
