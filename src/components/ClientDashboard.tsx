'use client'

interface ClientDashboardProps {
  email: string
}

// Mock data - será reemplazado por Supabase
const mockConversations = [
  {
    id: '1',
    user_name: 'Carlos M.',
    preview: '¿Qué señuelo me recomendás para pejerrey?',
    date: '2026-02-02 10:30',
    messages: 8,
  },
  {
    id: '2',
    user_name: 'Ana L.',
    preview: 'Busco una caña para mi hijo de 10 años',
    date: '2026-02-01 18:45',
    messages: 12,
  },
]

export default function ClientDashboard({ email }: ClientDashboardProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Tus Conversaciones</h2>
        <p className="text-gray-600 mt-1">Historial de interacciones con tu bot</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <p className="text-sm text-gray-500">Conversaciones</p>
          <p className="text-3xl font-bold text-spark-600">{mockConversations.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <p className="text-sm text-gray-500">Mensajes Totales</p>
          <p className="text-3xl font-bold text-spark-600">
            {mockConversations.reduce((acc, c) => acc + c.messages, 0)}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <p className="text-sm text-gray-500">Este Mes</p>
          <p className="text-3xl font-bold text-green-600">+23%</p>
        </div>
      </div>

      {/* Conversations List */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="px-6 py-4 border-b">
          <h3 className="font-semibold">Últimas Conversaciones</h3>
        </div>
        <div className="divide-y">
          {mockConversations.map((conv) => (
            <div
              key={conv.id}
              className="px-6 py-4 hover:bg-gray-50 cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">{conv.user_name}</p>
                  <p className="text-sm text-gray-600 mt-1">{conv.preview}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">{conv.date}</p>
                  <p className="text-xs text-gray-400">{conv.messages} mensajes</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
