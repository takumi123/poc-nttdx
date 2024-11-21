import { auth, signOut } from "../auth"
import Link from "next/link"

export async function NavBar() {
  const session = await auth()

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link 
              href="/" 
              className="flex items-center px-2 text-gray-900 font-medium"
            >
              ホーム
            </Link>
          </div>
          <div className="flex items-center">
            {session?.user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">
                  {session.user.name || session.user.email}
                </span>
                <form action={async () => {
                  "use server"
                  await signOut()
                }}>
                  <button
                    type="submit"
                    className="text-sm text-gray-700 hover:text-gray-900"
                  >
                    ログアウト
                  </button>
                </form>
              </div>
            ) : (
              <div className="space-x-4">
                <Link
                  href="/login"
                  className="text-sm text-gray-700 hover:text-gray-900"
                >
                  ログイン
                </Link>
                <Link
                  href="/register"
                  className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                >
                  登録
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
