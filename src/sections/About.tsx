'use client'
import { SectionHeader } from '@/components/SectionHeader'
import { Card } from '@/components/Card';
import { CardHeader } from '@/components/CardHeader';
import Image from 'next/image'
import bookCover from '@/assets/images/book-cover.png'
import JavaScriptIcon from '@/assets/icons/square-js.svg'
import HtmlIcon from '@/assets/icons/html5.svg'
import CssIcon from '@/assets/icons/css3.svg'
import ReactIcon from '@/assets/icons/react.svg'
import ChromeIcon from '@/assets/icons/chrome.svg'
import GithubIcon from '@/assets/icons/github.svg'
import mapImage from '@/assets/images/map.png'
import smileEmoji from '@/assets/images/memoji-smile.png'
import { ToolboxItems } from '@/components/ToolboxItems';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const toolBoxItems = [
  {
    title: "Javascript",
    iconType: JavaScriptIcon,
  },
  {
    title: "HTML5",
    iconType: HtmlIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  }, {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
]

const hobbies = [
  {
    title: 'Painting',
    emoji: "🎨",
    left: "5%",
    top: "5%"
  },
  {
    title: 'Photography',
    emoji: "📸",
    left: "50%",
    top: "5%"
  }, {
    title: 'Gaming',
    emoji: "🕹️",
    left: "10%",
    top: "35%"
  }, {
    title: 'Hiking',
    emoji: "👣",
    left: "35%",
    top: "40%"
  }, {
    title: 'Music',
    emoji: "🎸",
    left: "70%",
    top: "45%"
  }, {
    title: 'Fitess',
    emoji: "💪🏻",
    left: "5%",
    top: "65%"
  }, {
    title: 'Reading',
    emoji: "📖",
    left: "45%",
    top: "70%"
  },
]

export const AboutSection = () => {
  const constraintRef = useRef(null)

  return (
    <div className='py-16 lg:py-28'>
      <div className='container text-center'>
        <div className='mb-20'>
          <SectionHeader title="A glimpse into my world" eyebrow="about me" description="Learn more about who I am, what I do, and what inspires me."
          />
        </div>
        <div className='flex flex-col gap-8 mt-20'>

          <div className='md:grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-8 lg:grid-cols-3'>
            <Card className='h-[320px] md:col-span-2 lg:col-span-1'>
              <CardHeader title="My reads" description="Explore the books shaping my perspectives." />
              <Image className='w-[55%] mx-auto justify-center mt-2 md:mt-0' src={bookCover} alt="Atomic habits" />
            </Card>
            <Card className='h-[320px] md:col-span-3 lg:col-span-2'>
              <CardHeader title="My toolbox" description="Explore the technologies and tools I use to craft exceptional digital experiences."
              className='' />
              <ToolboxItems toolBoxItems={toolBoxItems} className='' itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
              <ToolboxItems toolBoxItems={toolBoxItems} className='mt-6' itemsWrapperClassName="animate-move-right [animation-duration:15s]" />
            </Card>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8'>
            <Card className='h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2'>
              <CardHeader title="Beyond the Code" description="Explore my interests and hobbies beyond the digital realm." 
              className='px-6 py-6'/>
              <div className='relative flex-1' ref={constraintRef}>
                {hobbies.map((hobby) => {
                  return (
                    <motion.div key={hobby.title} className='inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute'
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }} 
                    drag
                    dragConstraints={constraintRef}
                    >
                      <span className='font-medium text-gray-950'>{hobby.title}</span>
                      <span>{hobby.emoji}</span>
                    </motion.div>
                  )
                })}
              </div>
            </Card>
            <Card className='h-[320px] p-0 relative md:col-span-2 lg:col-span-1'>
              <Image src={mapImage} alt="map" className='h-full w-full object-cover object-left-top'/>
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[""] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30'>
              <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]'></div>
              <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10'></div>
                <Image src={smileEmoji} alt="smileEmoji" className='size-20'/>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
};
