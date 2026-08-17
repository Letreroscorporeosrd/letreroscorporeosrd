import Link from "next/link";

const NAV_SECTIONS = [
  { href: "/admin", label: "Inicio" },
  { href: "/admin/banners", label: "Banners y ofertas" },
  { href: "/admin/portafolio", label: "Portafolio" },
  { href: "/admin/equipo", label: "Equipo" },
  { href: "/admin/historia", label: "Historia" },
  { href: "/admin/videos", label: "Videos" },
  { href: "/admin/laboratorio", label: "Laboratorio creativo" },
  { href: "/admin/tienda", label: "Tienda" },
  { href: "/admin/letreros", label: "Letreros" },
  { href: "/admin/aprende", label: "Aprende" },
  { href: "/admin/asociados", label: "Asociados" },
  { href: "/admin/resenas", label: "Reseñas" },
  { href: "/admin/configuracion", label: "Configuración" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 shrink-0 bg-brand-azul p-4 text-white">
        <h2 className="mb-6 font-heading text-lg">Letreros Corpóreos RD</h2>
        <nav className="flex flex-col gap-1">
          {NAV_SECTIONS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sign px-3 py-2 text-sm hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 bg-gray-50 p-8">{children}</main>
    </div>
  );
}
