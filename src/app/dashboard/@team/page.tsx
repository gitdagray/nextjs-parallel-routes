import { pause } from "@/lib/utils"

export default async function Team() {
    await pause(3000)

    //throw new Error('Data not available')

    return (
        <section className="h-96 w-96 border-2 rounded-lg p-4">
            <h2 className="text-xl">Team</h2>
        </section>
    )
}