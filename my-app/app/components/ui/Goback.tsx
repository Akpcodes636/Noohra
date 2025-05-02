
'use client'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function GoBack() {
  const router = useRouter()

  const goBack = () => {
    router.back()
  }
  return (
    <div
      onClick={goBack}
      className=""
    >
      <ArrowLeft size={24} />
    </div>
  )
}
