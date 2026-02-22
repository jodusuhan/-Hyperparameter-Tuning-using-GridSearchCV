import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface CodeExampleProps {
  code: string;
}

function CodeExample({ code }: CodeExampleProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
      <div className="bg-gray-800 px-4 py-3 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-200">Python Code</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-700 hover:bg-gray-600 text-white rounded transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy
            </>
          )}
        </button>
      </div>
      <div className="p-6 bg-gray-900 overflow-x-auto">
        <pre className="text-sm text-gray-100 font-mono leading-relaxed">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

export default CodeExample;
