import { createFileRoute } from '@tanstack/react-router'
import ProtectedRoute from '@/components/navigations/ProtectedRoute'

export const Route = createFileRoute('/home/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <ProtectedRoute>
        <div>Main App Layout Here</div>
    </ProtectedRoute>
  )
}