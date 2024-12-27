// const FeatureCard = (image: string, title: string, description:string) => {
//     return (
//         <div>
//            <img
//           src={image}
//           alt={title}
//           className="w-full h-40 object-cover rounded-lg mb-3"
//         />
//         <h3 className="text-[#4A55A2] font-medium text-base mb-1">
//           {title}
//         </h3>
//         <p className="text-[#7B7B7B] text-sm">
//          {description}
//         </p>
//         </div>
//     )
// }

// export default FeatureCard;

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect } from 'react'



export interface FeatureCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

  
  export interface HeaderProps {
    title: string;
    logoUrl: string;
  }
  

export interface NavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  autoSlideInterval?: number;
}

export function FeatureNavigation({ onPrevious, onNext, autoSlideInterval = 3000 }: NavigationProps) {
  useEffect(() => {
    const interval = setInterval(() => {
      onNext();
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [onNext, autoSlideInterval]);

  return (
    <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-2">
      <button 
        className="w-10 h-10 flex items-center justify-center"
        onClick={onPrevious}
      >
        <ChevronLeft className="w-8 h-8 text-brandBlue" />
      </button>
      <button 
        className="w-10 h-10 flex items-center justify-center"
        onClick={onNext}
      >
        <ChevronRight className="w-8 h-8 text-brandBlue" />
      </button>
    </div>
  );
}

export function FeatureCard({ title, description, imageUrl }: FeatureCardProps) {
    return (
      <div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-60 h-60 object-contain"
          />
          <div>
            <h5 className="text-brandBlue font-bold mb-2 text-2xl text-center ">{title}</h5>
            <p className="text-sm px-2">{description}</p>
          </div>
        </div>
      </div>
    );
}

