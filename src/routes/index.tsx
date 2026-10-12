import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { RefreshCw, ShieldCheck, Heart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/config/site";
import { initPixel, trackLead } from "@/lib/pixel";

const TITLE = "Achadinhos da Gil — Grupo grátis de ofertas e cupons";
const DESC =
  "Entre no grupo gratuito de WhatsApp Achadinhos da Gil e encontre ofertas e cupons da Amazon, Shopee, Magazine Luiza, Shein e Mercado Livre.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://achadinhos-da-gil.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://achadinhos-da-gil.lovable.app/" },
      { rel: "preload", as: "image", href: SITE.optimizedLogoUrl, fetchPriority: "high" },
    ],
  }),
  component: Index,
});

const benefits = [
  "Ofertas pesquisadas e avaliadas para garantir menor preço e melhor qualidade",
  "Entre agora no grupo de promoções e cupons de desconto",
];

const marketplaces = [
  "Amazon",
  "Shopee",
  "Magazine Luiza",
  "Shein",
  "Mercado Livre",
];

function MarketplaceStrip() {
  return (
    <ul className="mt-4 flex w-full flex-wrap justify-center gap-x-4 gap-y-2 border-y border-border py-3 text-xs font-bold text-muted-foreground" aria-label="Lojas com ofertas">
      {marketplaces.map((name) => <li key={name}>{name}</li>)}
    </ul>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.47-.01" />
    </svg>
  );
}

function JoinButton() {
  return (
    <Button asChild className="btn-whatsapp">
      <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={trackLead}>
        <WhatsAppIcon className="h-6 w-6 shrink-0" />
        <span>Entrar no grupo do WhatsApp</span>
      </a>
    </Button>
  );
}

function Index() {
  useEffect(() => initPixel(), []);
  return (
    <main className="min-h-screen bg-background">
      <div className="invitation-banner px-4 py-3 text-center text-[11px] font-extrabold uppercase">
        Participe do nosso grupo gratuitamente
      </div>
      <div className="mx-auto flex w-full max-w-[440px] flex-col items-center px-5 pb-10 pt-4 text-center">
        <img
          src={SITE.optimizedLogoUrl}
          alt="Logo Achadinhos da Gil"
          className="h-auto w-44 max-w-full object-contain"
          loading="eager"
          fetchPriority="high"
          width={528}
          height={352}
        />

        <h1 className="mt-3 text-[32px] font-extrabold leading-[1.12] text-foreground">
          <span className="block text-primary">Achadinhos da Gil!</span>
        </h1>
        <div className="mt-4 w-full rounded-3xl border border-border bg-card p-5 shadow-soft">
          <p className="text-base leading-relaxed text-muted-foreground">
            Aqui você encontra ofertas de qualidade e com bom gosto por um preço que cabe no seu bolso!
          </p>

          <MarketplaceStrip />

          <ul className="mt-3 grid w-full gap-2">
            {benefits.map((text) => (
              <li key={text} className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3 py-2 text-left">
                <RefreshCw className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="min-w-0 text-sm font-semibold leading-relaxed text-foreground">{text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 w-full"><JoinButton /></div>

          <section className="mt-6 w-full" aria-labelledby="trust-heading">
            <h2 id="trust-heading" className="flex items-center justify-center gap-2 text-sm font-extrabold text-primary">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" /> É CONFIÁVEL?
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Sim, somente moderadores do grupo podem enviar promoções exclusivas, com links verificados para você comprar nas lojas.
            </p>
          </section>
        </div>

        <div className="mt-9 flex w-full items-center gap-3" aria-hidden="true">
          <span className="h-px flex-1 bg-primary/40" />
          <Heart className="h-4 w-4 fill-primary text-primary" />
          <span className="h-px flex-1 bg-primary/40" />
        </div>

        <footer className="mt-6 w-full text-sm text-foreground">
          <p className="flex items-center justify-center gap-1.5 text-base font-bold"><Heart aria-hidden="true" className="h-4 w-4 fill-primary text-primary" /> Achadinhos da Gil</p>
          <p className="mt-1 text-xs font-semibold">Pequenos achados, grandes vantagens!</p>
          <p className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-semibold">
            <a className="footer-link inline-flex items-center gap-1.5" href={SITE.siteUrl} target="_blank" rel="noopener noreferrer">
              <Globe className="h-3.5 w-3.5" /> Site oficial: achadinhos.sinergia.club
            </a>
            <a className="footer-link" href={SITE.privacyUrl} target="_blank" rel="noopener noreferrer">Política de Privacidade</a>
            <a className="footer-link basis-full" href={SITE.termsUrl} target="_blank" rel="noopener noreferrer">Termos de Uso</a>
          </p>
        </footer>
      </div>
    </main>
  );
}
