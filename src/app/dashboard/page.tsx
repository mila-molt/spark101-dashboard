import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { UserButton } from '@clerk/nextjs'

const ADMIN_EMAIL = 'camivelasco@gmail.com'

// Mock data - después viene de Supabase
const mockClients = [
  {
    id: 1,
    name: 'Juan Gozio',
    company: 'Tech Tackle',
    botName: '@Consultor_Pesca_Bot',
    totalConversations: 15,
    totalMessages: 127,
    tokensUsed: 45230,
    lastActivity: '2026-02-02'
  }
]

const mockConversations = [
  {
    id: 1,
    contactName: '@camivelasco',
    contactId: '7123919159',
    messages: 8,
    tokens: 1250,
    lastMessage: '2026-02-02 10:19',
    preview: 'Me gustaría pescar con fly...'
  }
]

export default async function Dashboard() {
  const user = await currentUser()
  
  if (!user) {
    redirect('/')
  }
  
  const isAdmin = user.emailAddresses[0]?.emailAddress === ADMIN_EMAIL
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⚡</span>
            <h1 className="text-xl font-bold text-gray-900">Spark101</h1>
            {isAdmin && (
              <span className="bg-spark-100 text-spark-700 text-xs px-2 py-1 rounded-full font-medium">
                Admin
              </span>
            )}
          </div>
          <UserButton afterSignOutUrl="/" />
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {isAdmin ? <AdminDashboard /> : <ClientDashboard />}
      </main>
    </div>
  )
}

function AdminDashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Panel de Administración
      </h2>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <StatCard title="Clientes" value="1" icon="👥" />
        <StatCard title="Bots Activos" value="1" icon="🤖" />
        <StatCard title="Conversaciones" value="15" icon="💬" />
        <StatCard title="Tokens Usados" value="45.2K" icon="🔢" />
      </div>
      
      {/* Clients Table */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h3 className="font-semibold text-gray-900">Clientes</h3>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cliente</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bot</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Conversaciones</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tokens</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Última Actividad</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {mockClients.map(client => (
              <tr key={client.id} className="hover:bg-gray-50 cursor-pointer">
                <td className="px-6 py-4">
                  <div>
                    <div className="font-medium text-gray-900">{client.name}</div>
                    <div className="text-sm text-gray-500">{client.company}</div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{client.botName}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{client.totalConversations}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{client.tokensUsed.toLocaleString()}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{client.lastActivity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function ClientDashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Mis Conversaciones
      </h2>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <StatCard title="Contactos" value="1" icon="👥" />
        <StatCard title="Mensajes" value="8" icon="💬" />
        <StatCard title="Tokens" value="1.2K" icon="🔢" />
      </div>
      
      {/* Conversations */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h3 className="font-semibold text-gray-900">Conversaciones</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {mockConversations.map(conv => (
            <div key={conv.id} className="px-6 py-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium text-gray-900">{conv.contactName}</div>
                  <div className="text-sm text-gray-500 mt-1">{conv.preview}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">{conv.messages} msgs</div>
                  <div className="text-xs text-gray-400">{conv.tokens} tokens</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function StatCard({ title, value, icon }: { title: string; value: string; icon: string }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
        <span className="text-3xl">{icon}</span>
      </div>
    </div>
  )
}
