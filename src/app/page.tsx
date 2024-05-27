import Link from "next/link"

export default function Home() {
  return (
    <div className="p-8 flex flex-col gap-8">
      <h1 className="text-2xl">Next.js Parallel Routes</h1>
      <Link href="/dashboard" className="text-xl underline">Dashboard</Link>
    </div>
  )
}
