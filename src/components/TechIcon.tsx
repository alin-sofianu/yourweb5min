export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return (
    <>
      <Component className='size-10 fill-[url(#tech-icon-gradient)]' />
      {/* The svg element here, is only so that I give a gradient background to an svg */}
      {/* The trick here is that I can "fill" an svg, like above, with a linearGradient's id that is defined elsewhere */}
      <svg className="size-0 absolute">
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" stopColor="rgb(110 231 183)"/>
          <stop offset="100%" stopColor="rgb(56 189 248)"/>
        </linearGradient>
      </svg>
    </>
  )
}