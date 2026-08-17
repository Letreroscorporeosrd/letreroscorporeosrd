# Letreros Corpóreos RD — Plataforma web

Estructura base del proyecto: Next.js 14 (App Router) + TypeScript + Tailwind CSS +
Prisma + PostgreSQL + NextAuth.

## Qué incluye esta primera entrega

- Proyecto Next.js configurado (TypeScript, Tailwind con los colores de marca #0F3358 / #F2661C, fuentes Anton/Oswald/Inter)
- Schema completo de Prisma con las 12 tablas núcleo del brief (projects, project_media, team_members, timeline_events, banners, products, sign_models, courses, partners, reviews, quote_requests, settings) más las tablas de NextAuth
- Login del panel `/admin` con NextAuth (credenciales) y middleware que protege todas las rutas `/admin/*`
- Carpetas de rutas ya creadas para cada página pública y cada sección del admin (aún sin contenido — se irán llenando en los próximos pasos)
- Script de seed que crea el primer usuario admin

## Cómo correrlo localmente

```bash
npm install

# 1. Copia el archivo de variables de entorno y complétalo
cp .env.example .env

# 2. Crea la base de datos en PostgreSQL y aplica el schema
npx prisma migrate dev --name init

# 3. Crea el primer usuario admin (admin@letreroscorporeosrd.com / cambiar-esta-clave)
npm run seed

# 4. Arranca el servidor de desarrollo
npm run dev
```

Abre `http://localhost:3000` para el sitio público y `http://localhost:3000/admin/login`
para el panel admin.

## Estructura de carpetas

```
src/app/
  (public)/           páginas públicas (nosotros, equipo, portafolio, tienda, etc.)
  admin/               panel administrativo, protegido por middleware
  api/auth/            NextAuth
prisma/
  schema.prisma        modelo de datos completo
  seed.ts              usuario admin inicial
src/lib/
  auth.ts              configuración de NextAuth
  prisma.ts            cliente de Prisma
```

## Próximos pasos sugeridos

1. Diseñar y construir el Home real (hero animado, proceso "Detrás del letrero",
   tarjetas de equipo) usando el prototipo visual existente como referencia.
2. Construir el CRUD del panel admin sección por sección (empezando por Portafolio
   y Equipo, que alimentan las páginas públicas más visitadas).
3. Integrar Cloudinary (o S3) para subida de fotos y videos.
4. Construir el cotizador público y conectarlo a la tabla `quote_requests`.
5. Añadir el botón flotante de WhatsApp con mensajes automáticos por sección.
