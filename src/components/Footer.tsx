import { motion } from 'motion/react';
import { type Variants } from 'motion/react';
import { Hammer, Phone, Mail, MessageCircle } from 'lucide-react';

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const contactGroups = [
  {
    title: 'Telefono',
    items: [
      { Icon: Phone, label: 'Principale', text: '+39 351 963 1564', href: 'tel:+393519631564' },
      { Icon: Phone, label: 'Mobile', text: '+39 392 042 7981', href: 'tel:+393920427981' },
      { Icon: MessageCircle, label: 'WhatsApp', text: '+39 331 403 6156', href: 'https://wa.me/393314036156' },
    ],
  },
  {
    title: 'Email',
    items: [
      { Icon: Mail, label: 'Email', text: 'mahmoudsassi2077@gmail.com', href: 'mailto:mahmoudsassi2077@gmail.com' },
      { Icon: Mail, label: 'Email', text: 'dyabramadan97@gmail.com', href: 'mailto:dyabramadan97@gmail.com' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-7 sm:py-9">
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          className="grid gap-8 lg:grid-cols-[minmax(240px,0.9fr)_minmax(0,1.5fr)] lg:items-start"
        >
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#A67C52]">
                <Hammer className="h-5 w-5 text-white" />
              </div>
              <div className="min-w-0">
                <div className="font-black text-lg leading-tight tracking-tight uppercase text-white">
                  CARTONGESSO EXPRESS
                </div>
                <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#A67C52]">
                  Nova Milanese · Dal 2010
                </div>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-gray-400">
              Cartongesso premium, finiture nette e interventi su misura per abitazioni e locali commerciali.
            </p>

            <div className="mt-5 space-y-2 border-t border-white/10 pt-4 text-xs leading-relaxed text-gray-500">
              <div>
                <span className="font-bold uppercase tracking-widest text-gray-400">Sede</span>
                <span className="block text-gray-300">Via Fabio Filzi, 19 - Nova Milanese (MB)</span>
              </div>
              <div>
                <span className="font-bold uppercase tracking-widest text-gray-400">P.IVA</span>
                <span className="ml-2 text-gray-300">14041330961</span>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactGroups.map((group) => (
              <div key={group.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#A67C52]">
                  {group.title}
                </div>
                <div className="space-y-2">
                  {group.items.map(({ Icon, label, text, href }) => (
                    <a
                      key={text}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex min-w-0 items-center gap-3 rounded-lg border border-white/8 bg-white/[0.04] px-3 py-2 text-gray-300 transition-colors duration-200 hover:border-[#A67C52]/40 hover:text-[#E6C9A8]"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-[#A67C52]" />
                      <span className="min-w-0">
                        <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-500">
                          {label}
                        </span>
                        <span className="block break-all text-sm leading-snug">{text}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4 sm:py-5">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-2.5 text-[11px] sm:text-xs text-gray-500 font-medium text-center">
          <span>© 2026 CARTONGESSO EXPRESS S.R.L. · P.IVA 14041330961</span>
          <span>Tutti i diritti riservati · Via Fabio Filzi, 19 - Nova Milanese (MB)</span>
        </div>
      </div>
    </footer>
  );
}
