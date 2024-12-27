import Pin from '../assets/pin.svg'

const Button = () => {
  return (
    <div>
      <button className='rounded-lg bg-buttonYellow w-80 outline outline-1 py-3 '>
        <span className='flex justify-center items-center gap-2'>
            <img src={Pin} alt="" />
            <span className='text-xl font-medium'>Track Buses</span>
        </span>
      </button>
    </div>
  )
}

export default Button
