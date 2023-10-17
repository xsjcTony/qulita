import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from '@components/shadcn-ui/button'
import type { JSX } from 'react'


const Home = (): JSX.Element => (
  <>
    <div className="mb-12 flex-center flex-col pt-28 text-center container sm:pt-40">
      <div className="mb-4 flex-center gap-x-2 overflow-hidden border border-gray-200 rounded-full bg-white px-7 py-2 text-sm font-semibold text-gray-700 shadow-md backdrop-blur transition-all @hover:border-gray-300 @hover:bg-white/50">
        Qulita is now public!
      </div>

      <h1 className="mb-5 max-w-4xl text-5xl font-bold lg:text-7xl md:text-6xl">
        Chat with your <span className="text-purple-600">documents</span> in seconds.
      </h1>

      <p className="mb-5 max-w-prose text-zinc-700 sm:text-lg">
        Qulita allows you to have conversations with any PDF document. Simply upload your file and start asking questions right away.
      </p>

      <Link className={buttonVariants({ size: 'lg' })} href="/dashboard" target="_blank">
        Get started <i className="i-lucide-arrow-right ml-2 text-5" />
      </Link>
    </div>


    {/* Showcase section */}
    <div className="mb-32 sm:mb-56">
      <div className="relative isolate">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 transform-gpu overflow-hidden blur-3xl -top-40 -z-10 sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-36.125rem rotate-30 from-#ff80b5 to-#9089fc bg-gradient-to-tr opacity-30 sm:left-[calc(50%-30rem)] sm:w-72.1875rem -translate-x-1/2"
            style={{
              clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }}
          />
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-x-0 transform-gpu overflow-hidden blur-3xl -top-40 -z-10 sm:-top-80">
          <div
            className="relative left-[calc(50%-13rem)] aspect-1155/678 w-36.125rem rotate-30 from-#ff80b5 to-#9089fc bg-gradient-to-tr opacity-30 sm:left-[calc(50%-36rem)] sm:w-72.1875rem -translate-x-1/2"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }}
          />
        </div>

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset -m-2 lg:rounded-2xl lg:p-4 lg:-m-4">
              <Image
                priority
                alt="product preview"
                className="rounded-md bg-white p-2 shadow-2xl ring-1 ring-gray-900/10 md:p-20 sm:p-8"
                height={866}
                quality={100}
                src="/dashboard-preview.jpg"
                width={1364}
              />
            </div>
          </div>
        </div>
      </div>
    </div>


    {/* Feature section */}
    <div className="mx-auto mb-32 max-w-5xl">
      <div className="mb-12 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="texy-gray-900 mb-4 text-4xl font-bold sm:text-5xl">Start chatting in minutes</h2>
          <p className="text-lg text-gray-600">
            Chatting to your PDF files has never been easier than with Qulita.
          </p>
        </div>
      </div>

      <ol className="mb-8 pt-8 md:flex md:gap-x-12 space-y-4 md:px-6 md:space-y-0">
        <li className="md:flex-1">
          <div className="flex flex-col gap-y-2 border-l-4 border-zinc-300 px-4 py-2 md:border-l-0 md:border-t-2 md:px-0 md:pb-0 md:pt-4">
            <span className="text-sm font-medium text-purple-600">Step 1</span>
            <span className="mb-2 text-xl font-semibold">Sign up for an account</span>
            <span className="text-zinc-700">
              Either starting out with a free plan or choose our
              {' '}
              <Link className="text-purple-700 underline underline-offset-2" href="/pricing">
                pro plan
              </Link>
            </span>
          </div>
        </li>
        <li className="md:flex-1">
          <div className="flex flex-col gap-y-2 border-l-4 border-zinc-300 px-4 py-2 md:border-l-0 md:border-t-2 md:px-0 md:pb-0 md:pt-4">
            <span className="text-sm font-medium text-purple-600">Step 2</span>
            <span className="mb-2 text-xl font-semibold">Upload your PDF file</span>
            <span className="text-zinc-700">
              We&apos;ll process your file and make it ready for you to chat with.
            </span>
          </div>
        </li>
        <li className="md:flex-1">
          <div className="flex flex-col gap-y-2 border-l-4 border-zinc-300 px-4 py-2 md:border-l-0 md:border-t-2 md:px-0 md:pb-0 md:pt-4">
            <span className="text-sm font-medium text-purple-600">Step 3</span>
            <span className="mb-2 text-xl font-semibold">Start asking questions</span>
            <span className="text-zinc-700">
              It&apos;s that simple. Try out Qulita today - it really takes less than a minute.
            </span>
          </div>
        </li>
      </ol>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mt-16 flow-root sm:mt-24">
          <div className="rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset -m-2 lg:rounded-2xl lg:p-4 lg:-m-4">
            <Image
              alt="uploading preview"
              className="rounded-md bg-white p-2 shadow-2xl ring-1 ring-gray-900/10 md:p-20 sm:p-8"
              height={732}
              quality={100}
              src="/file-upload-preview.jpg"
              width={1419}
            />
          </div>
        </div>
      </div>
    </div>
  </>
)


export default Home
