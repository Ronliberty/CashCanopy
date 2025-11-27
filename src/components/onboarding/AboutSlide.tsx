import { ShieldCheck, Zap, Clock } from 'lucide-react'
import { SlideProps, Feature } from '@/types'  

export default function AboutSlide({ onNext }: SlideProps) {
  const features: Feature[] = [
    {
      icon: ShieldCheck,
      title: "Verified Earning Platforms",
      description: "We connect you with trusted partners for secure income opportunities."
    },
    {
      icon: Zap,
      title: "Optimized Workflows",
      description: "We manage accounts and processes to maximize your earning potential."
    },
    {
      icon: Clock,
      title: "Passive Income",
      description: "Earn while we handle the day-to-day management of your accounts."
    }
  ]

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-800">
        What is CashCanopy?
      </h2>
      <div className="mb-4 md:mb-6 space-y-3 md:space-y-4">
        {features.map((feature, index) => {
          const IconComponent = feature.icon
          return (
            <div key={index} className="flex items-start p-3 rounded-lg bg-light-amber">
              <div className="feature-icon w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mr-3 md:mr-4">
                <IconComponent className="text-amber w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
      <button 
        onClick={onNext}
        className="btn-primary text-white py-3 w-full rounded-lg font-medium text-sm md:text-base"
      >
        Next
      </button>
    </div>
  )
}