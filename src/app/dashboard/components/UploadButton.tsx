'use client'


import { useBoolean } from 'ahooks'
import { buttonVariants } from '@components/shadcn-ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@components/shadcn-ui/Dialog'
import type { JSX } from 'react'


const UploadButton = (): JSX.Element => {
  const [
    modalOpened,
    { setTrue: openModal, setFalse: closeModal, set: setModalOpened }
  ] = useBoolean(false)

  return (
    <Dialog open={modalOpened} onOpenChange={setModalOpened}>
      <DialogTrigger className={buttonVariants()} onClick={openModal}>
        Upload PDF
      </DialogTrigger>

      <DialogContent>
        Example content
      </DialogContent>
    </Dialog>
  )
}


export default UploadButton
