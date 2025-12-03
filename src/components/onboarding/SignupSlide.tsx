'use client'
import { useState, ChangeEvent, FormEvent } from 'react'
import { SlideProps, FormData } from '@/types' 

export default function SignupSlide({ onSubmit }: SlideProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    address: '',
    terms: false
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

const handleSubmit = async (e: FormEvent): Promise<void> => {
  e.preventDefault();

  if (onSubmit) {
    await onSubmit(formData);  // send data to parent
  }
};


  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6 text-gray-800">
        Join CashCanopy
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div>
            <input 
              required 
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="form-input w-full border border-gray-300 px-3 md:px-4 py-2 md:py-3 rounded-lg focus:outline-none text-sm md:text-base" 
            />
          </div>
          <div>
            <input 
              required 
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="form-input w-full border border-gray-300 px-3 md:px-4 py-2 md:py-3 rounded-lg focus:outline-none text-sm md:text-base" 
            />
          </div>
        </div>

        <input 
          required 
          type="email" 
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="form-input w-full border border-gray-300 px-3 md:px-4 py-2 md:py-3 rounded-lg focus:outline-none text-sm md:text-base" 
        />

        <input 
          required 
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="form-input w-full border border-gray-300 px-3 md:px-4 py-2 md:py-3 rounded-lg focus:outline-none text-sm md:text-base" 
        />

        <select 
          required 
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="form-input w-full border border-gray-300 px-3 md:px-4 py-2 md:py-3 rounded-lg focus:outline-none text-sm md:text-base"
        >
          <option value="">Select Country</option>
          <option>USA</option>
          <option>Canada</option>
          <option>Argentina</option>
          <option>Australia</option>
          <option>UK</option>
          <option>Mexico</option>
          <option>France</option>
          <option>Italy</option>
          <option>Germany</option>
          <option>India</option>
          <option>Indonesia</option>
        </select>

        <input 
          required 
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="form-input w-full border border-gray-300 px-3 md:px-4 py-2 md:py-3 rounded-lg focus:outline-none text-sm md:text-base" 
        />

        <div className="flex items-start mt-1 md:mt-2">
          <input 
            type="checkbox" 
            id="terms" 
            name="terms"
            required 
            checked={formData.terms}
            onChange={handleChange}
            className="mt-0.5 md:mt-1 mr-2 accent-amber" 
          />
          <label htmlFor="terms" className="text-xs md:text-sm text-gray-600">
            I agree to the <a href="#" className="text-amber font-medium">Terms of Service</a> and <a href="#" className="text-amber font-medium">Privacy Policy</a>
          </label>
        </div>

        <button 
          type="submit"
          className="btn-primary text-white py-3 w-full rounded-lg font-medium text-sm md:text-base mt-3 md:mt-4"
        >
          Start Earning
        </button>
      </form>
    </div>
  )
}