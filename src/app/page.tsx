import { SignInButton, SignedIn, SignedOut } from '@clerk/nextjs'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-spark-50 to-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          ⚡ Spark101
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Dashboard de Conversaciones
        </p>
        
        <SignedOut>
          <SignInButton mode="modal">
            <button className="bg-spark-600 hover:bg-spark-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all">
              Iniciar Sesión con Google
            </button>
          </SignInButton>
        </SignedOut>
        
        <SignedIn>
          <Link 
            href="/dashboard"
            className="bg-spark-600 hover:bg-spark-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all inline-block"
          >
            Ir al Dashboard →
          </Link>
        </SignedIn>
      </div>
      
      <footer className="absolute bottom-4 text-gray-400 text-sm">
        Desarrollado por Diana para Spark101
      </footer>
    </main>
  )
}
