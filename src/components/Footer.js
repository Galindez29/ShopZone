import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  CreditCard,
  Shield,
  Truck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerSections = [
    {
      title: "Compañía",
      links: [
        { name: "Sobre nosotros", href: "/about" },
        { name: "Carreras", href: "/careers" },
        { name: "Prensa", href: "/press" },
        { name: "Inversionistas", href: "/investors" }
      ]
    },
    {
      title: "Ayuda",
      links: [
        { name: "Centro de ayuda", href: "/help" },
        { name: "Rastrear pedido", href: "/track" },
        { name: "Devoluciones", href: "/returns" },
        { name: "Envíos", href: "/shipping" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Términos de servicio", href: "/terms" },
        { name: "Política de privacidad", href: "/privacy" },
        { name: "Política de cookies", href: "/cookies" },
        { name: "Política de devoluciones", href: "/return-policy" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Youtube, href: "#", name: "YouTube" }
  ];

  const paymentMethods = [
    "Visa", "Mastercard", "PayPal", "Apple Pay", "Google Pay"
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-slate-800 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-4">
              Mantente al día con nuestras ofertas
            </h3>
            <p className="text-slate-300 mb-8 text-lg">
              Suscríbete a nuestro newsletter y recibe descuentos exclusivos y las últimas novedades
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 rounded-xl bg-slate-700 border border-slate-600 focus:outline-none focus:border-yellow-400 transition-colors"
              />
              <motion.button
                className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-6 py-3 rounded-xl font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Suscribirse
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-yellow-400 text-slate-900 p-3 rounded-xl">
                    <ShoppingCart className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">ShopZone</h2>
                    <p className="text-slate-400">Tu tienda online de confianza</p>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6 leading-relaxed">
                  ShopZone es tu destino para encontrar los mejores productos 
                  de las marcas más reconocidas, con la garantía de calidad 
                  y servicio que mereces.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-yellow-400" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-yellow-400" />
                    <span>contacto@shopzone.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-yellow-400" />
                    <span>123 Commerce St, Ciudad, País</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-slate-300 hover:text-yellow-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Features */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-slate-700"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-4">
              <div className="bg-slate-800 p-3 rounded-xl">
                <Truck className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h4 className="font-semibold">Envío gratis</h4>
                <p className="text-slate-400 text-sm">En pedidos superiores a $50</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-slate-800 p-3 rounded-xl">
                <Shield className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h4 className="font-semibold">Compra segura</h4>
                <p className="text-slate-400 text-sm">Protección garantizada</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-slate-800 p-3 rounded-xl">
                <CreditCard className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h4 className="font-semibold">Múltiples pagos</h4>
                <p className="text-slate-400 text-sm">Todas las tarjetas aceptadas</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-slate-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-slate-400 text-center lg:text-left">
              © 2025 ShopZone. Todos los derechos reservados.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="bg-slate-700 hover:bg-slate-600 p-3 rounded-xl transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-2">
              <span className="text-slate-400 text-sm mr-2">Aceptamos:</span>
              {paymentMethods.map((method) => (
                <div
                  key={method}
                  className="bg-white text-slate-800 px-3 py-1 rounded text-xs font-semibold"
                >
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;