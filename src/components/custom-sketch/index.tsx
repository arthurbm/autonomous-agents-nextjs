import dynamic from 'next/dynamic'

// Will only import `react-p5` on client-side
export const CustomSketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})