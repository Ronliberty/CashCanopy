import { ProgressBarProps } from "@/types" 

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  return (
    <div className="py-4 md:py-6 px-4 md:px-8 flex justify-center items-center">
      <div className="flex items-center">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div key={index} className="flex items-center">
            <div className={`
              progress-step 
              ${index < currentStep ? 'completed' : ''}
              ${index === currentStep ? 'active' : ''}
              w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-semibold text-sm md:text-base
              ${index < currentStep ? 'bg-amber text-white' : ''}
              ${index === currentStep ? 'bg-gold text-white' : ''}
              ${index > currentStep ? 'bg-gray-200 text-gray-500' : ''}
            `}>
              {index + 1}
            </div>
            {index < totalSteps - 1 && (
              <div className={`
                w-8 md:w-12 h-0.5 mx-1
                ${index < currentStep ? 'bg-amber' : 'bg-gray-300'}
              `} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}