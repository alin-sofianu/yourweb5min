import headerLaptopGuy from '@/assets/images/memoji-computer.png'
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg'
import grainImage from "@/assets/images/grain.jpg"
import { HeroOrbit } from '@/components/HeroOrbit';
import StarIcon from "@/assets/icons/star.svg"
import SparkleIcon from "@/assets/icons/sparkle.svg"

export const HeroSection = () => {
  return (
    <div className='py-32 md:py-48 lg:py-60 relative overflow-x-clip'>

      {/*START bg elems*/}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div className='absolute inset-0 -z-30 opacity-5' style={{ backgroundImage: `url(${grainImage.src})` }}></div>
        <div className='size-[620px] hero-ring'></div>
        <div className='size-[820px] hero-ring'></div>
        <div className='size-[1020px] hero-ring'></div>
        <div className='size-[1220px] hero-ring'></div>
        <HeroOrbit size={680} rotation={-70}>
          <StarIcon className='size-28 text-emerald-300' />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={15}>
          <StarIcon className='size-12 text-emerald-300' />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={100}>
          <StarIcon className='size-8 text-emerald-300' />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-15}>
          <SparkleIcon className='size-8 text-emerald-300/20' />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={80}>
          <SparkleIcon className='size-5 text-emerald-300/20' />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={180}>
          <SparkleIcon className='size-10 text-emerald-300/20' />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={150}>
          <SparkleIcon className='size-14 text-emerald-300/20' />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={185} >
          <div className='size-2 rounded-full text-emerald-300/20' />
        </HeroOrbit>
      </div>
      {/*END bg elems*/}

      <div className="container">
        <div className='flex flex-col items-center'>
          <Image
            src={headerLaptopGuy}
            alt="geek_person"
            className='size-[100px]'
          />
          <div className='flex align-middle items-center bg-gray-950 border border-gray-800 rounded-lg px-4 py-1.5 gap-4'>
            <div className="size-[10px] bg-green-600 rounded-full"></div>
            <div className='text-sm font-medium'>Available for new projects</div>
          </div>

        </div>
        <div className='mx-auto max-w-lg'>
          <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>Building exceptional User Experiences
          </h1>
          <p className='mt-4 text-center text-white/60 md:text-lg'>I specialize in transforming designs into functional, high-performing web applications. Let's discuss your next project.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className='flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
            <span className='font-semibold'>Explore my work </span>
            <ArrowDown className="size-4" />
          </button>

          <button className='flex items-center gap-2 bg-white text-gray-900 h-12 px-6 rounded-xl'>
            <span>👋</span>
            <span className='font-semibold'>Let's connect</span>
          </button>
        </div>
      </div>
    </div>
  )
};
