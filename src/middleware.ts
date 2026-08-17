export { default } from "next-auth/middleware";

// Protege todo /admin/* excepto la propia página de login.
// El sitio público (todo lo demás) queda fuera del middleware.
export const config = {
  matcher: ["/admin/((?!login).*)"],
};
