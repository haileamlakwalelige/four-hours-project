export default function MapComponent() {
  const steps = [
    {
      number: "01",
      title: "Get Started",
      description: "With our intuitive setup, you're up and running in minutes.",
    },
    {
      number: "02",
      title: "Customize and Configure",
      description: "Adapt Area to your specific requirements and preferences.",
    },
    {
      number: "03",
      title: "Grow Your Business",
      description: "Make informed decisions to exceed your goals.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Horizontal scroll container on small screens, grid on md+ */}
          <div
            className="flex space-x-8 overflow-x-auto md:grid md:grid-cols-3 md:gap-12 lg:gap-16
            scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
          >
            {steps.map((step, index) => (
              <div
                key={index}
                className="w-[250px] lg:w-full lg:min-w-[280px] flex-shrink-0 space-y-6 md:min-w-auto"
              >
                {/* Step Number */}
                <div className="text-6xl lg:text-7xl font-light text-gray-300">
                  {step.number}
                </div>

                {/* Step Content */}
                <div className="space-y-4">
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Border Line */}
          <div className="mt-16 lg:mt-24">
            <div className="w-full h-px bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
