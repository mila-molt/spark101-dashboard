import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { ADMIN_EMAIL } from '@/lib/types'
import AdminDashboard from '@/components/AdminDashboard'
import ClientDashboard from '@/components/ClientDashboard'

export default async function DashboardPage() {
  const user = await currentUser()
  
  if (!user) {
    redirect('/sign-in')
  }
  
  const email = user.emailAddresses[0]?.emailAddress
  const isAdmin = email === ADMIN_EMAIL
  
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⚡</span>
            <h1 className="text-xl font-semibold text-gray-900">Spark101</h1>
            {isAdmin && (
              <span className="bg-spark-100 text-spark-700 text-xs px-2 py-1 rounded-full">
                Admin
              </span>
            )}
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">{email}</span>
          </div>
        </div>
      </header>
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {isAdmin ? <AdminDashboard /> : <ClientDashboard email={email || ''} />}
      </div>
    </main>
  )
}
