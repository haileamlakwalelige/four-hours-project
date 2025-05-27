import { Check, X } from "lucide-react";

const FeatureIcon = ({
  hasFeature,
  isPositive = true,
}: {
  hasFeature: boolean;
  isPositive?: boolean;
}) => {
  if (hasFeature && isPositive) {
    return <Check className="w-4 h-4 text-green-600" />;
  } else if (hasFeature && !isPositive) {
    return <Check className="w-4 h-4 text-gray-500" />;
  } else {
    return <X className="w-4 h-4 text-gray-400" />;
  }
};

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="w-full mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 border-b border-gray-200">
              <div className="p-6 text-center shadow-md bg-white">
                <h3 className="text-xl font-semibold text-gray-900">Area</h3>
              </div>
              <div className="p-6 text-center border-l border-gray-200">
                <h3 className="text-xl font-medium text-gray-500">WebSurge</h3>
              </div>
              <div className="p-6 text-center border-l border-gray-200">
                <h3 className="text-xl font-medium text-gray-500">HyperView</h3>
              </div>
            </div>

            {/* Comparison Rows */}
            <div className="divide-y divide-gray-100">
              {/* Ultra-fast browsing */}
              <div className="grid grid-cols-3">
                <div className="p-4 flex items-center gap-3 shadow-md bg-white">
                  <FeatureIcon hasFeature={true} />
                  <span className="text-gray-700">Ultra-fast browsing</span>
                </div>
                <div className="p-4 flex items-center gap-3 border-l border-gray-200">
                  <FeatureIcon hasFeature={true} isPositive={false} />
                  <span className="text-gray-500">Fast browsing</span>
                </div>
                <div className="p-4 flex items-center gap-3 border-l border-gray-200">
                  <FeatureIcon hasFeature={false} />
                  <span className="text-gray-400">Moderate speeds</span>
                </div>
              </div>

              {/* AI insights */}
              <div className="grid grid-cols-3">
                <div className="p-4 flex items-center gap-3 shadow-md bg-white">
                  <FeatureIcon hasFeature={true} />
                  <span className="text-gray-700">Advanced AI insights</span>
                </div>
                <div className="p-4 flex items-center gap-3 border-l border-gray-200">
                  <FeatureIcon hasFeature={true} isPositive={false} />
                  <span className="text-gray-500">Basic AI recommendations</span>
                </div>
                <div className="p-4 flex items-center gap-3 border-l border-gray-200">
                  <FeatureIcon hasFeature={false} />
                  <span className="text-gray-400">No AI assistance</span>
                </div>
              </div>

              {/* Integration */}
              <div className="grid grid-cols-3">
                <div className="p-4 flex items-center gap-3 shadow-md bg-white">
                  <FeatureIcon hasFeature={true} />
                  <span className="text-gray-700">Seamless integration</span>
                </div>
                <div className="p-4 flex items-center gap-3 border-l border-gray-200">
                  <FeatureIcon hasFeature={true} isPositive={false} />
                  <span className="text-gray-500">Restricts customization</span>
                </div>
                <div className="p-4 flex items-center gap-3 border-l border-gray-200">
                  <FeatureIcon hasFeature={false} />
                  <span className="text-gray-400">Steep learning curve</span>
                </div>
              </div>

              {/* AI insights (second row) */}
              <div className="grid grid-cols-3">
                <div className="p-4 flex items-center gap-3 shadow-md bg-white">
                  <FeatureIcon hasFeature={true} />
                  <span className="text-gray-700">Advanced AI insights</span>
                </div>
                <div className="p-4 flex items-center gap-3 border-l border-gray-200">
                  <FeatureIcon hasFeature={false} />
                  <span className="text-gray-400">Basic AI insights</span>
                </div>
                <div className="p-4 flex items-center gap-3 border-l border-gray-200">
                  <FeatureIcon hasFeature={false} />
                  <span className="text-gray-400">No AI assistance</span>
                </div>
              </div>

              {/* Browsing speed (second row) */}
              <div className="grid grid-cols-3">
                <div className="p-4 flex items-center gap-3 shadow-md bg-white">
                  <FeatureIcon hasFeature={true} />
                  <span className="text-gray-700">Ultra-fast browsing</span>
                </div>
                <div className="p-4 flex items-center gap-3 border-l border-gray-200">
                  <FeatureIcon hasFeature={true} isPositive={false} />
                  <span className="text-gray-500">Fast browsing</span>
                </div>
                <div className="p-4 flex items-center gap-3 border-l border-gray-200">
                  <FeatureIcon hasFeature={false} />
                  <span className="text-gray-400">Moderate speeds</span>
                </div>
              </div>

              {/* UTF-8 support */}
              <div className="grid grid-cols-3">
                <div className="p-4 flex items-center gap-3 shadow-md bg-white">
                  <FeatureIcon hasFeature={true} />
                  <span className="text-gray-700">Full UTF-8 support</span>
                </div>
                <div className="p-4 flex items-center gap-3 border-l border-gray-200">
                  <FeatureIcon hasFeature={false} />
                  <span className="text-gray-400">Potential display errors</span>
                </div>
                <div className="p-4 flex items-center gap-3 border-l border-gray-200">
                  <FeatureIcon hasFeature={false} />
                  <span className="text-gray-400">Partial UTF-8 support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
