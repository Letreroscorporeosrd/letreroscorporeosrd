import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

// Evita que Next.js intente analizar esta ruta como estática durante el build
// (NextAuth siempre es dinámico: depende de la sesión de cada visitante)
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
