import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import { socialLinks } from "@/userSettingsAndContent/socialLinks";

export const Footer = () => {
  return (
    <footer className='relative overflow-x-clip'>
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container relative">
        <div className='flex flex-col md:flex-row md:justify-between gap-8 items-center border-t border-white/15 py-6 text-sm'>
          <div className='text-white/40'>&copy; 2024. All rights reserved.</div>
          <nav className='flex flex-col md:flex-row items-center gap-8'>
            {socialLinks.map(link => (
              <a key={link.title} href={link.href} className='inline-flex items-center gap-1.5'>
                <span>{link.title}</span>
                <ArrowUpRightIcon className="size-4"/>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
