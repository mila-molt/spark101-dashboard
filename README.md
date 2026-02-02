# Spark101 Client Dashboard 🚀

Dashboard para visualizar conversaciones de bots de clientes.

## Tech Stack
- **Next.js 14** (App Router)
- **Clerk** (Auth con Google)
- **Supabase** (PostgreSQL)
- **Tailwind CSS + shadcn/ui**

## Usuarios
| Rol | Acceso |
|-----|--------|
| **Admin** (camivelasco@gmail.com) | Todos los clientes y bots |
| **Cliente** (ej: Juan) | Solo sus conversaciones |

## Features
- ✅ Login con Google (Clerk)
- ✅ Dashboard admin multi-cliente
- ✅ Dashboard cliente individual  
- ✅ Vista de conversaciones por contacto
- ✅ Contador de tokens consumidos
- ✅ Métricas básicas

## Clientes Activos
1. **Juan Gozio** - Tech Tackle (@Consultor_Pesca_Bot)

## Setup Local

```bash
npm install
cp .env.example .env.local
# Configurar variables de Clerk y Supabase
npm run dev
```

## Deploy
Vercel (conectado a este repo)

---
*Desarrollado por Diana para Spark101*
