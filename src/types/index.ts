export interface SlideProps {
  onNext: () => void;
  onSubmit?: (data: FormData) => void;
  currentStep?: number;
}

export interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  address: string;
  terms: boolean;
}

export interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  bgColor?: string;
}

export interface SocialIcon {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

export interface NextStep {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  bgColor: string;
}