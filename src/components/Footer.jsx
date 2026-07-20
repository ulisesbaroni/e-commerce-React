import { Instagram, Phone } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const anioActual = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">© {anioActual} Sendero Místico Atelier. Todos los derechos reservados.</p>

        <div className="footer__contacto">
          <a href="tel:+543514027788" className="footer__telefono">
            <Phone size={16} strokeWidth={1.5} />
            +54 351 402-7788
          </a>

          <a
            href="https://www.instagram.com/senderomisticoatelier?igsh=MXF3b2V3dHM4YzMzMA=="
            target="_blank"
            rel="noopener noreferrer"
            className="footer__instagram"
            aria-label="Instagram de Sendero Místico Atelier"
          >
            <Instagram size={20} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
