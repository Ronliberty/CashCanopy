import { Mail, Phone, MapPin, Target } from 'lucide-react'
import { SlideProps, Feature } from '@/types' 

export default function RequirementsSlide({ onNext }: SlideProps) {
  const requirements: Feature[] = [
    {
      icon: Mail,
      title: "Valid Email Address",
      description: "For account creation and communication.",
      bgColor: "bg-amber"
    },
    {
      icon: Phone,
      title: "Phone Number",
      description: "For verification and security purposes.",
      bgColor: "bg-gold"
    },
    {
      icon: MapPin,
      title: "Country & Address",
      description: "To match you with location-specific opportunities.",
      bgColor: "bg-amber"
    },
    {
      icon: Target,
      title: "Readiness to Start Earning",
      description: "A positive mindset and willingness to engage with opportunities.",
      bgColor: "bg-gold"
    }
  ]

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">
        What You Need
      </h2>
      <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
        {requirements.map((req, index) => {
          const IconComponent = req.icon
          return (
            <div key={index} className="flex items-center p-3 rounded-lg bg-light-amber">
              <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full ${req.bgColor} flex items-center justify-center mr-3 md:mr-4`}>
                <IconComponent className="text-white w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                  {req.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm">
                  {req.description}
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
        Continue
      </button>
    </div>
  )
}