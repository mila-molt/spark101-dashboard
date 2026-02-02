'use client'

import { useState } from 'react'

// Mock data - será reemplazado por Supabase
const mockClients = [
  {
    id: '1',
    name: 'Juan Gozio',
    business: 'Tech Tackle',
    bot_name: '@Consultor_Pesca_Bot',
    conversations: 47,
    tokens: 125000,
    last_activity: '2026-02-02',
  },
]

export default function AdminDashboard() {
  const [selectedClient, setSelectedClient] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Panel de Administración</h2>
        <p className="text-gray-600 mt-1">Vista general de todos los clientes</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <p className="text-sm text-gray-500">Clientes Activos</p>
          <p className="text-3xl font-bold text-spark-600">{mockClients.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <p className="text-sm text-gray-500">Conversaciones Totales</p>
          <p className="text-3xl font-bold text-spark-600">
            {mockClients.reduce((acc, c) => acc + c.conversations, 0)}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <p className="text-sm text-gray-500">Tokens Consumidos</p>
          <p className="text-3xl font-bold text-spark-600">
            {(mockClients.reduce((acc, c) => acc + c.tokens, 0) / 1000).toFixed(0)}K
          </p>
        </div>
      </div>

      {/* Client List */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="px-6 py-4 border-b">
          <h3 className="font-semibold">Clientes</h3>
        </div>
        <div className="divide-y">
          {mockClients.map((client) => (
            <div
              key={client.id}
              className="px-6 py-4 hover:bg-gray-50 cursor-pointer flex justify-between items-center"
              onClick={() => setSelectedClient(client.id)}
            >
              <div>
                <p className="font-medium">{client.name}</p>
                <p className="text-sm text-gray-500">{client.business} • {client.bot_name}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">{client.conversations} conversaciones</p>
                <p className="text-xs text-gray-500">{(client.tokens / 1000).toFixed(0)}K tokens</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
