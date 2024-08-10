'use client'

import { useHref, useNavigate } from '@remix-run/react'
import { RouterProvider } from 'react-aria-components'
import type { NavigateOptions } from 'react-router-dom'

declare module 'react-aria-components' {
  interface RouterConfig {
    routerOptions: NavigateOptions
  }
}

export function RouteProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()
  return (
    <RouterProvider navigate={navigate} useHref={useHref}>
      {children}
    </RouterProvider>
  )
}
