import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Tag, ShieldCheck, Zap, Info, ArrowRight, Lock, Heart, Globe } from "lucide-react";
import { SITE } from "@/config/site";
import { initPixel, trackLead } from "@/lib/pixel";

const TITLE = "Achadinhos da Gil — Grupo grátis de ofertas do Mercado Livre";
const DESC =
  "Entre no grupo gratuito de WhatsApp Achadinhos da Gil e receba ofertas e descontos do Mercado Livre em um só lugar.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: SITE.logoUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: SITE.logoUrl },
    ],
  }),
  component: Index,
});

const cards = [
  { icon: Tag, title: "Ofertas selecionadas", text: "Produtos em promoção, descontos e achadinhos compartilhados automaticamente." },
  { icon: ShieldCheck, title: "Compra segura", text: "Os links levam você ao Mercado Livre, onde poderá conferir todos os detalhes, preço, vendedor, frete e condições antes de comprar." },
  { icon: Zap, title: "Não perca as oportunidades", text: "Preços, descontos e disponibilidade podem mudar a qualquer momento. Confira sempre o valor final no Mercado Livre antes de concluir a compra." },
  { icon: Info, title: "Transparência", text: "Participamos do programa de afiliados e podemos receber comissão pelas compras realizadas através dos nossos links, sem custo adicional para você." },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.47-.01" />
    </svg>
  );
}

function JoinButton() {
  return (
    <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={trackLead} className="btn-whatsapp">
      <WhatsAppIcon className="h-6 w-6 shrink-0" />
      ENTRAR NO GRUPO GRÁTIS <ArrowRight className="h-5 w-5 shrink-0" />
    </a>
  );
}

function Swooshes({ flip }: { flip?: boolean }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-x-0 ${flip ? "bottom-0 rotate-180" : "top-0"} h-40 sm:h-56`}>
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="h-full w-full">
        <path fill="oklch(0.82 0.14 65 / 45%)" d="M0,0 C240,140 480,220 720,200 C960,180 1200,90 1440,40 L1440,0 Z" />
        <path fill="oklch(0.75 0.16 55 / 55%)" d="M0,0 C200,90 460,170 720,150 C980,130 1240,50 1440,10 L1440,0 Z" />
        <path fill="oklch(0.68 0.19 45 / 70%)" d="M0,0 C260,60 520,110 780,95 C1040,80 1260,30 1440,0 L1440,0 Z" />
      </svg>
    </div>
  );
}

function Index() {
  useEffect(() => initPixel(), []);
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <Swooshes />
      <Swooshes flip />

      <div className="relative mx-auto flex max-w-xl flex-col items-center px-5 py-12 text-center">
        <img
          src={SITE.logoUrl}
          alt="Logo Achadinhos da Gil"
          className="h-auto w-60 max-w-full object-contain drop-shadow-xl sm:w-72"
          loading="eager"
        />

        <h1 className="mt-6 font-display text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
          Bem-vindo ao Achadinhos da Gil!
        </h1>
        <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
          Nosso objetivo é ajudar você a encontrar boas ofertas e oportunidades no Mercado Livre, reunidas em um só lugar. 🔥
        </p>

        <div className="mt-7 w-full"><JoinButton /></div>
        <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-[11px] font-extrabold uppercase tracking-wide text-accent-foreground shadow-soft sm:text-xs">
          <Lock className="h-3.5 w-3.5 shrink-0 text-primary" />
          Grupo gratuito com produtos do Mercado Livre para você economizar
        </p>

        <div className="mt-10 grid w-full gap-4">
          {cards.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start gap-4 rounded-2xl bg-card p-5 text-left shadow-soft">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/15">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-base font-bold text-card-foreground">{title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 w-full"><JoinButton /></div>

        <div className="mt-10 flex w-full items-center gap-3" aria-hidden="true">
          <span className="h-px flex-1 bg-primary/40" />
          <Heart className="h-4 w-4 fill-primary text-primary" />
          <span className="h-px flex-1 bg-primary/40" />
        </div>

        <footer className="mt-6 text-sm text-muted-foreground">
          <p className="text-base font-bold text-foreground">🧡 Achadinhos da Gil</p>
          <p className="mt-1">Pequenos achados, grandes vantagens!</p>
          <p className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <a className="link inline-flex items-center gap-1.5" href={SITE.siteUrl} target="_blank" rel="noopener noreferrer">
              <Globe className="h-3.5 w-3.5" /> Site oficial: achadinhos.sinergia.club
            </a>
            <a className="link" href={SITE.privacyUrl} target="_blank" rel="noopener noreferrer">Política de Privacidade</a>
            <a className="link" href={SITE.termsUrl} target="_blank" rel="noopener noreferrer">Termos de Uso</a>
          </p>
        </footer>
      </div>
    </main>
  );
}
