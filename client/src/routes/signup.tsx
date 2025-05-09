import { createFileRoute } from '@tanstack/react-router'

import PublicRoute from '@/components/navigations/PublicRoute'
import Signup from '@/features/auth/components/Signup'

export const Route = createFileRoute('/signup')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <PublicRoute>
      <Signup/>
    </PublicRoute>
  )
}
