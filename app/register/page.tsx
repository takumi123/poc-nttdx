import { AuthForm } from "../ui/auth-form"
import { register } from "../actions/auth"
import Link from "next/link"
import { redirect } from "next/navigation"

export default function RegisterPage() {
  async function handleRegister(data: { 
    email: string
    password: string
    name: string 
  }) {
    "use server"
    
    try {
      await register(data)
      redirect("/")
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message)
      }
      throw new Error("登録中にエラーが発生しました")
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            アカウント登録
          </h2>
        </div>
        <AuthForm mode="register" onSubmit={handleRegister} />
        <div className="text-center">
          <Link 
            href="/login" 
            className="text-sm text-indigo-600 hover:text-indigo-500"
          >
            既にアカウントをお持ちの方はこちら
          </Link>
        </div>
      </div>
    </div>
  )
}
