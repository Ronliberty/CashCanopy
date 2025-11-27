import { TrendingUp } from 'lucide-react'
import { SlideProps } from '@/types' 

export default function WelcomeSlide({ onNext }: SlideProps) {
  return (
    <div className="text-center">
      <div className="mb-4 md:mb-6">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-amber flex items-center justify-center mx-auto mb-4">
          <TrendingUp className="text-white w-8 h-8 md:w-10 md:h-10" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-800">
          Welcome to CashCanopy
        </h1>
      </div>
      <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
        Your gateway to earning steady income through AI training and survey partnerships.
      </p>
      <button 
        onClick={onNext}
        className="btn-primary text-white py-3 w-full rounded-lg font-medium text-sm md:text-base"
      >
        Get Started
      </button>
    </div>
  )
}