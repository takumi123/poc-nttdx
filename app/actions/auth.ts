import { prisma } from "../lib/prisma"
import bcrypt from "bcrypt"
import { signIn } from "../auth"

export async function register(data: {
  email: string
  password: string
  name: string
}) {
  const existingUser = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  })

  if (existingUser) {
    throw new Error("このメールアドレスは既に登録されています")
  }

  const hashedPassword = await bcrypt.hash(data.password, 10)

  const user = await prisma.user.create({
    data: {
      email: data.email,
      password: hashedPassword,
      name: data.name,
    },
  })

  // 登録後に自動的にログイン
  await signIn("credentials", {
    email: data.email,
    password: data.password,
    redirect: false,
  })

  return user
}
