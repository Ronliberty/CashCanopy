'use client'
import { useState } from 'react'
import ProgressBar from '@/components/ui/ProgressBar'
import WelcomeSlide from './WelcomeSlide'
import AboutSlide from './AboutSlide'
import BenefitsSlide from './BenefitsSlide'
import RequirementsSlide from './RequirementsSlide'
import SignupSlide from './SignupSlide'
import ThankYouSlide from './ThankYouSlide'
import { SlideProps } from '@/types' 
import { Coins } from 'lucide-react'

export default function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState<number>(0)
  
  const slides: React.ComponentType<SlideProps>[] = [
    WelcomeSlide,
    AboutSlide,
    BenefitsSlide,
    RequirementsSlide,
    SignupSlide,
    ThankYouSlide
  ]
  
  const CurrentSlide = slides[currentStep]
  
  const handleNext = (): void => {
    if (currentStep < slides.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }
  
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    handleNext()
  }
  
  return (
    <div className="max-w-lg w-full mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative">
        
        {/* Logo/Header */}
        <div className="pt-6 md:pt-8 px-4 md:px-8 text-center">
          <div className="flex justify-center items-center mb-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber flex items-center justify-center mr-3">
              <Coins className="text-white w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">CashCanopy</h1>
          </div>
          <p className="text-gray-500 text-xs md:text-sm">Your Gateway to Passive Income</p>
        </div>

        {/* Progress Bar */}
        <ProgressBar currentStep={currentStep} totalSteps={slides.length} />

        {/* Current Slide */}
        <div className="px-4 md:px-8 pb-6 md:pb-8">
          <CurrentSlide 
            onNext={handleNext} 
            onSubmit={handleSubmit}
            currentStep={currentStep}
          />
        </div>
      </div>
    </div>
  )
}