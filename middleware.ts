import { auth } from "./app/auth"
 
export default auth((req: NextAuthRequest) => {
  const isAuth = !!req.auth
  const isAuthPage = req.nextUrl.pathname.startsWith('/login') || 
                    req.nextUrl.pathname.startsWith('/register')
 
  if (isAuthPage) {
    if (isAuth) {
      return Response.redirect(new URL('/', req.nextUrl))
    }
    return null
  }
 
  if (!isAuth) {
    return Response.redirect(new URL('/login', req.nextUrl))
  }
 
  return null
})
 
// 必要なルートでミドルウェアを実行
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
