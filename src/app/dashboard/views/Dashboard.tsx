import UploadButton from '@app/dashboard/components/UploadButton'
import type { JSX } from 'react'


const Dashboard = (): JSX.Element => (
  <div className="mx-auto max-w-7xl md:p-10">
    <div className="mt-8 flex flex-col items-start justify-between gap-y-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center">
      <h1 className="mb-3 text-5xl font-bold text-gray-900">My Files</h1>
      <UploadButton />
    </div>
  </div>
)


export default Dashboard
