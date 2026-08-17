"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError("Correo o contraseña incorrectos.");
      return;
    }
    router.push("/admin");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-azul p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-sign bg-white p-8 shadow-lg"
      >
        <h1 className="mb-6 font-heading text-2xl text-brand-azul">
          Panel Admin
        </h1>

        <label className="mb-1 block text-sm font-medium text-brand-negro">
          Correo
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full rounded-sign border border-gray-300 px-3 py-2"
        />

        <label className="mb-1 block text-sm font-medium text-brand-negro">
          Contraseña
        </label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 w-full rounded-sign border border-gray-300 px-3 py-2"
        />

        {error && <p className="mb-4 text-sm text-brand-rojo">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-sign bg-brand-naranja py-2 font-heading text-white transition hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </main>
  );
}
