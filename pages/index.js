import gsap, { Power3 } from 'gsap';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Loader from '~/components/features/Loader';
import { SmoothScrollProvider } from '../src/contexts/SmoothScrollContext'
import Home from '../src/pages/Home.page'

export default function IndexPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace({query: ""});
  }, [])
  // smoothMobile: true,
  return (
    <SmoothScrollProvider options={
      { smooth: true, getDirection: true }}>
      {/* <main data-scroll-section><Home /></main> */}
      <Home />
    </SmoothScrollProvider>
  )
  // return <Home />
}
