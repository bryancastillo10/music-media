import { createFileRoute } from '@tanstack/react-router'
import PublicRoute from '@/components/navigations/PublicRoute'
import ResetPassword from '@/features/user/components/ResetPassword'

export const Route = createFileRoute('/reset-password/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <PublicRoute>
      <ResetPassword/>
    </PublicRoute>
  )
}
