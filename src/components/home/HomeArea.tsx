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
  const rows = [
    {
      features: [
        { text: "Ultra-fast browsing", state: true },
        { text: "Fast browsing", state: true, isPositive: false },
        { text: "Moderate speeds", state: false },
      ],
    },
    {
      features: [
        { text: "Advanced AI insights", state: true },
        { text: "Basic AI recommendations", state: true, isPositive: false },
        { text: "No AI assistance", state: false },
      ],
    },
    {
      features: [
        { text: "Seamless integration", state: true },
        { text: "Restricts customization", state: true, isPositive: false },
        { text: "Steep learning curve", state: false },
      ],
    },
    {
      features: [
        { text: "Advanced AI insights", state: true },
        { text: "Basic AI insights", state: false },
        { text: "No AI assistance", state: false },
      ],
    },
    {
      features: [
        { text: "Ultra-fast browsing", state: true },
        { text: "Fast browsing", state: true, isPositive: false },
        { text: "Moderate speeds", state: false },
      ],
    },
    {
      features: [
        { text: "Full UTF-8 support", state: true },
        { text: "Potential display errors", state: false },
        { text: "Partial UTF-8 support", state: false },
      ],
    },
  ];

  // Titles for each column
  const titles = ["Area", "WebSurge", "HyperView"];

  return (
    <div className="min-h-full py-10">
      <div className="w-full mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {/* Desktop Header - hidden on mobile */}
            <div className="hidden sm:grid grid-cols-3 border-b border-gray-200">
              {titles.map((title) => (
                <div
                  key={title}
                  className="p-6 text-center border-gray-200"
                  style={{ boxShadow: title === "Area" ? "inset 0 -4px 0 #0000001f" : "none" }}
                >
                  <h3
                    className={`text-xl ${
                      title === "Area" ? "font-semibold text-gray-900" : "font-medium text-gray-500"
                    }`}
                  >
                    {title}
                  </h3>
                </div>
              ))}
            </div>

            {/* Desktop: Rows in grid */}
            <div className="hidden sm:block divide-y divide-gray-100">
              {rows.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 border-t border-gray-100"
                >
                  {row.features.map((feature, j) => (
                    <div
                      key={j}
                      className={`p-4 flex items-center gap-3 border-l border-gray-200 bg-white ${
                        j === 0 ? "border-l-0" : ""
                      }`}
                      style={{ minHeight: "4rem" }}
                    >
                      <FeatureIcon
                        hasFeature={feature.state}
                        isPositive={feature.isPositive}
                      />
                      <span
                        className={`${
                          feature.state
                            ? feature.isPositive === false
                              ? "text-gray-500"
                              : "text-gray-700"
                            : "text-gray-400"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Mobile: Columns stacked vertically */}
            <div className="sm:hidden flex flex-col divide-y divide-gray-100">
              {titles.map((title, colIdx) => (
                <div key={title} className="border-t border-gray-100 bg-white p-4">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">{title}</h3>
                  <div className="flex flex-col gap-3">
                    {rows.map((row, rowIdx) => {
                      const feature = row.features[colIdx];
                      return (
                        <div key={rowIdx} className="flex items-center gap-3">
                          <FeatureIcon
                            hasFeature={feature.state}
                            isPositive={feature.isPositive}
                          />
                          <span
                            className={`${
                              feature.state
                                ? feature.isPositive === false
                                  ? "text-gray-500"
                                  : "text-gray-700"
                                : "text-gray-400"
                            }`}
                          >
                            {feature.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
