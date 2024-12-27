import Background from '../assets/bg.svg'
import TextLogo from '../assets/textLogo.svg'
import DownArrow from '../assets/downArrow.svg'
import Button from './button';

const Hero = () => {
  return (
    <section className='pb-16'>
      
<img src={Background} alt="App Logo" className="w-full h-full object-cover" />
        
       
<div className='flex flex-col justify-center items-center text-center pt-5'>
   <img src={TextLogo} alt="textlogo" className='mb-8 w-auto max-w-xs' />
    <Button/>
    <div className='text-md font-semibold underline flex justify-center items-center gap-2 pt-3'>
    <img src={DownArrow} alt="textlogo" className='w-auto max-w-xs' />
        <a href="mb-8 ">Know More</a>
    </div>
        </div>
        



</section>
  )
}

export default Hero;

