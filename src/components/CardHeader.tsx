import StarIcon from '@/assets/icons/star.svg'
import { twMerge } from 'tailwind-merge'

export const CardHeader = ({ title, description,className }:
  {
    title: string,
    description: string,
    className?: string,
  }
) => {
  return (
    <div className={twMerge('flex flex-col p-6 md:py-8 md:px-10 lg:pb-1', className)}>
      <div className='inline-flex gap-2 items-center mb-2'>
        <StarIcon className="size-9 text-emerald-300" />
        <h3 className='font-serif text-3xl'>{title}</h3>
      </div>
      <p className='pb-8 text-white/60 text-sm lg:text-base'>{description}</p>
    </div>
  )
}