import { useRouter } from 'next/router'
import React, { createContext, useEffect, useState } from 'react'

export const SmoothScrollContext = createContext({
  scroll: null,
})

export const SmoothScrollProvider = ({ children, options }) => {
  const [scroll, setScroll] = useState(null)
  const router = useRouter();
  const query = router.query

  useEffect(()=> {
    if(query.section) {
      scroll && scroll.scrollTo(`#${query.section}`);
    }
  }, [query.section])
  // 

  // scroll && scroll.on('scroll', ()=> {scroll.update()})

  useEffect(() => {
    if (!scroll) {
      (async () => {
        try {
          const LocomotiveScroll = (await import('locomotive-scroll')).default

          setScroll(
            new LocomotiveScroll({
              el: document.querySelector('[data-scroll-container]') ?? undefined,
              ...options,
            })
          )
        } catch (error) {
          throw Error(`[SmoothScrollProvider]: ${error}`)
        }
      })()
    } else {
      setTimeout(() => scroll.update(), 300);
    }

    return () => {
      scroll && scroll.destroy()
    }
  }, [scroll]) // eslint-disable-line react-hooks/exhaustive-deps

  return <SmoothScrollContext.Provider value={{ scroll }}>{children}</SmoothScrollContext.Provider>
}

SmoothScrollContext.displayName = 'SmoothScrollContext'
SmoothScrollProvider.displayName = 'SmoothScrollProvider'
