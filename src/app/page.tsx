import type { JSX } from 'react'


const Home = (): JSX.Element => (
  <div className="flex-center mb-48 mt-160 flex-col text-center container md:mt-112">
    <div className="flex-center mb-16 gap-x-8 overflow-hidden border border-gray-200 rounded-full bg-white px-28 py-8 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
      <p className="text-sm font-semibold text-gray-700">Qulita is now public!</p>
    </div>

    <h1 className="mb-20 max-w-896 text-5xl font-bold lg:text-7xl md:text-6xl">
      Chat with your <span className="text-purple-600">documents</span> in seconds.
    </h1>

    <p className="max-w-prose text-zinc-700">
      Qulita allows you to have conversations with any PDF document. Simply upload your file and start asking questions right away.
    </p>
  </div>
)


export default Home
