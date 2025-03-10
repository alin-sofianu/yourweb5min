import StarIcon from '@/assets/icons/star.svg'
import React from 'react';

const adjectives = ["Performant", "Accesible", "Secure", "Interactive", "Scalable", "User Friendly", "Maintainable", "Search Optimized", "Usable", "Reliable", "Responsive"]

export const TapeSection = () => {
  return (
    <div className='py-16 lg:py-24 overflow-x-clip'>
      <div className='bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1'>
        <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
        <div className="flex flex-none gap-4 py-3 animate-move-left">
        {[...new Array(2)].map((_, idx) => (
          <React.Fragment key={idx}>
            {adjectives.map((adj) => (
              <div key={adj} className="inline-flex gap-4 shrink-0 items-center">
                <span className="text-gray-900 uppercase font-extrabold text-sm">{adj}</span>
                <StarIcon className="size-6 text-gray-900 -rotate-12" />
              </div>
            ))}
          </React.Fragment>
        ))}
</div>

        </div>
      </div>
    </div>
  );
};
