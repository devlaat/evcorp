import { SocialIcons } from "./social-icons";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-6 text-center">

        {/* Redes sociales */}
        <SocialIcons />

        {/* Texto */}
        <div className="text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} <strong>ELEKTRON TECH</strong>.  
            Todos los derechos reservados.
          </p>
          <p className="mt-1">devLAAT 💻🚀</p>
        </div>

      </div>
    </footer>
  );
}
