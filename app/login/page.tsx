import { AuthForm } from "../ui/auth-form"
import { signIn } from "../auth"
import { redirect } from "next/navigation"
import Link from "next/link"

export default function LoginPage() {
  async function login(data: { 
    email: string
    password: string 
    name: string
  }) {
    "use server"
    
    const signInResult = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    })

    if (!signInResult?.error) {
      redirect("/")
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            ログイン
          </h2>
        </div>
        <AuthForm mode="login" onSubmit={login} />
        <div className="text-center">
          <Link 
            href="/register" 
            className="text-sm text-indigo-600 hover:text-indigo-500"
          >
            アカウントをお持ちでない方はこちら
          </Link>
        </div>
      </div>
    </div>
  )
}
