export default defineRouteMiddleware((to, from) => {
  const user = useSupabaseUser()

  // List of public routes that don't require authentication
  const publicRoutes = ['/', '/login', '/signup', '/terms', '/privacy', '/over-ons']

  // If the route is public, allow access
  if (publicRoutes.includes(to.path)) {
    return
  }

  // If no user and trying to access protected route, redirect to login
  if (!user.value && !publicRoutes.includes(to.path)) {
    return navigateTo('/login')
  }
})
