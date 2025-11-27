import { Brain, ClipboardList, BarChart3, Coffee } from 'lucide-react'
import { SlideProps, Feature } from '@/types'

export default function BenefitsSlide({ onNext }: SlideProps) {
  const benefits: Feature[] = [
    {
      icon: Brain,
      title: "AI Training Programs",
      description: "Help train AI models and get paid for your contributions.",
      bgColor: "bg-amber"
    },
    {
      icon: ClipboardList,
      title: "Survey Platforms",
      description: "Share your opinions through surveys and earn rewards.",
      bgColor: "bg-gold"
    },
    {
      icon: BarChart3,
      title: "Account Management",
      description: "We optimize your accounts to ensure maximum earnings.",
      bgColor: "bg-amber"
    },
    {
      icon: Coffee,
      title: "Passive Earnings",
      description: "Earn money while focusing on other aspects of your life.",
      bgColor: "bg-gold"
    }
  ]

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">
        How It Works
      </h2>
      <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
        {benefits.map((benefit, index) => {
          const IconComponent = benefit.icon
          return (
            <div 
              key={index}
              className="benefit-card flex items-center p-3 md:p-4 rounded-lg border border-opacity-20"
              style={{ 
                backgroundColor: `${benefit.bgColor === 'bg-amber' ? 'rgba(255, 191, 0, 0.1)' : 'rgba(212, 175, 55, 0.1)'}`,
                borderColor: benefit.bgColor === 'bg-amber' ? '#FFBF00' : '#D4AF37'
              }}
            >
              <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full ${benefit.bgColor} flex items-center justify-center mr-3 md:mr-4`}>
                <IconComponent className="text-white w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm">
                  {benefit.description}
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