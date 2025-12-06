import { Check, Mail, Phone, Zap, Facebook, Instagram, Twitter, Youtube, Twitch, Send } from 'lucide-react'
import { SlideProps, SocialIcon, NextStep} from '@/types'
import Link from "next/link";

export default function ThankYouSlide({ onNext }: SlideProps) {
  const socialIcons: SocialIcon[] = [
    { icon: Facebook, label: 'Facebook' },
    { icon: Instagram, label: 'Instagram' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Youtube, label: 'YouTube' },
    { icon: Twitch, label: 'Twitch' },
    // { icon: Reddit, label: 'Reddit' },
    { icon: Send, label: 'Telegram' }
  ]

  const nextSteps: NextStep[] = [
    {
      icon: Mail,
      text: "You'll receive a confirmation email",
      bgColor: "bg-amber"
    },
    {
      icon: Phone,
      text: "Our team will contact you to verify details",
      bgColor: "bg-gold"
    },
    {
      icon: Zap,
      text: "We'll set up your earning accounts",
      bgColor: "bg-amber"
    }
  ]

  return (
    <div className="text-center">
      <div className="mb-4 md:mb-6">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-amber flex items-center justify-center mx-auto mb-3 md:mb-4">
          <Check className="text-white w-8 h-8 md:w-10 md:h-10" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-amber mb-2 md:mb-3">
          Thank You!
        </h1>
        <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
          Your submission has been received.  
          Our team will contact you within 24 hours to get you started.
        </p>
      </div>

      <div className="bg-light-amber p-4 md:p-6 rounded-lg mb-4 md:mb-6">
        <h3 className="text-base md:text-lg font-medium mb-3 md:mb-4 text-gray-800">
          What Happens Next?
        </h3>
        <div className="space-y-2 md:space-y-3 text-left">
          {nextSteps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="flex items-center">
                <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full ${step.bgColor} flex items-center justify-center mr-2 md:mr-3`}>
                  <IconComponent className="text-white w-3 h-3 md:w-4 md:h-4" />
                </div>
                <p className="text-gray-600 text-xs md:text-sm">{step.text}</p>
              </div>
            )
          })}
        </div>
      </div>

      <h3 className="text-base md:text-lg font-medium mb-3 md:mb-4 text-gray-800">
        Connect With Us
      </h3>

      <div className="grid grid-cols-4 gap-3 md:gap-4 text-gray-400 text-xl md:text-2xl mb-4 md:mb-6">
        {socialIcons.map((social, index) => {
          const IconComponent = social.icon
          return (
            <a 
              key={index}
              href="#" 
              className="social-icon flex items-center justify-center"
              aria-label={social.label}
            >
              <IconComponent className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          )
        })}
      </div>
<Link href="/">
      <button 
       
        className="btn-primary text-white py-3 w-full rounded-lg font-medium text-sm md:text-base"
      >
        Return to Homepage.
      </button>
      </Link>
    </div>
  )
}