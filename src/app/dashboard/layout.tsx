import Header from "./Header"

export default function DashboardLayout({
    children,
    team,
    analytics,
}: Readonly<{
    children: React.ReactNode
    team: React.ReactNode
    analytics: React.ReactNode
}>) {
    return (
        <div className="p-8">
            <Header />
            {children}
            <div className="flex gap-4 py-4">
                {team}
                {analytics}
            </div>
        </div>
    )
}