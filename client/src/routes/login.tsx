import { createFileRoute } from '@tanstack/react-router';

import PublicRoute from '@/components/navigations/PublicRoute';
import Login from '@/features/auth/components/Login';

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <PublicRoute>
      <Login/>
    </PublicRoute>
  )
}
