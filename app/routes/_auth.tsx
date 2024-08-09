import { IconBrandJustd } from '@irsyadadl/paranoid'
import { Link } from '@/components/ui/link'
import { Outlet } from '@remix-run/react'
import { Toast } from '@/components/ui/toast'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center bg-muted/20 justify-center min-h-svh">
      <div className="max-w-lg mx-auto w-full">
        <Link href="/" className="mx-auto size-10 bg-secondary rounded grid place-content-center mb-6">
          <IconBrandJustd className="size-5" />
        </Link>
        <Outlet />
      </div>
    </div>
  )
}
