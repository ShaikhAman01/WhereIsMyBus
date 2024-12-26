import Background from '../assets/bg.svg'
import TextLogo from '../assets/textLogo.svg'
import DownArrow from '../assets/downArrow.svg'
import Button from './button';

const Hero = () => {
  return (
    <section>
      
<img src={Background} alt="App Logo" className="w-full h-full object-cover" />
        
       
<div className='flex flex-col justify-center items-center text-center pt-5'>
   <img src={TextLogo} alt="textlogo" className='mb-8 w-auto max-w-xs' />
    <Button/>
    <div className='text-xl font-medium underline flex justify-center items-center gap-2 pt-3'>
    <img src={DownArrow} alt="textlogo" className='w-auto max-w-xs' />
        <a href="mb-8 tex">Learn More</a>
    </div>
        </div>
        



</section>
  )
}

export default Hero;

// return (
//     //     <section className="relative w-full h-screen">
//     //       <img
//     //         src={Background}
//     //         alt="Background"
//     //         className="absolute inset-0 w-full h-full object-cover"
//     //       />
    
//     //       <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
//     //         <img src={TextLogo} alt="Text Logo" className="mb-4 w-auto max-w-xs" />
//     //         <Button />
//     //       </div>
//     //     </section>
//     //   );