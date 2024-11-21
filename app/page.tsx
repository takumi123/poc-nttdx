import { auth } from "./auth"

export default async function Home() {
  const session = await auth()

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            ようこそ
          </h1>
          {session?.user ? (
            <div className="mt-8">
              <p className="text-xl text-gray-700">
                {session.user.name || session.user.email}さん、ログインしています。
              </p>
              <p className="mt-4 text-gray-600">
                このページは認証済みユーザーのみがアクセスできます。
              </p>
            </div>
          ) : (
            <div className="mt-8">
              <p className="text-xl text-gray-700">
                ログインまたは新規登録してください。
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
