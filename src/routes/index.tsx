import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Tag, ShieldCheck, Clock, Handshake, ArrowRight } from "lucide-react";
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
  { icon: Clock, title: "Não perca as oportunidades", text: "Preços, descontos e disponibilidade podem mudar a qualquer momento. Confira sempre o valor final no Mercado Livre antes de concluir a compra." },
  { icon: Handshake, title: "Transparência", text: "Não somos vendedores. Participamos do programa de afiliados e podemos receber comissão pelas compras realizadas através dos nossos links, sem custo adicional para você." },
];

function JoinButton() {
  return (
    <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={trackLead} className="btn-whatsapp">
      ENTRAR NO GRUPO GRÁTIS <ArrowRight className="h-5 w-5 shrink-0" />
    </a>
  );
}

function Index() {
  useEffect(() => initPixel(), []);
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="deco-blob -left-24 -top-24 h-64 w-64" />
      <div className="deco-blob -right-20 top-1/3 h-56 w-56" />
      <div className="deco-blob -bottom-24 left-1/4 h-72 w-72" />

      <div className="relative mx-auto flex max-w-xl flex-col items-center px-5 py-10 text-center">
        <img src={SITE.logoUrl} alt="Logo Achadinhos da Gil" className="h-auto w-56 max-w-full object-contain sm:w-64" loading="eager" />
        <h1 className="mt-6 font-display text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
          Bem-vindo ao <span className="text-primary">Achadinhos da Gil!</span>
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Nosso objetivo é ajudar você a encontrar boas ofertas e oportunidades no Mercado Livre, reunidas em um só lugar. 🔥
        </p>
        <div className="mt-7 w-full"><JoinButton /></div>
        <p className="mt-4 rounded-full bg-accent px-4 py-2 text-xs font-bold tracking-wide text-accent-foreground">
          GRUPO GRATUITO COM OFERTAS DO MERCADO LIVRE PARA VOCÊ ECONOMIZAR
        </p>

        <div className="mt-10 grid w-full gap-4">
          {cards.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex flex-col items-center rounded-2xl bg-card p-6 shadow-soft">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-accent">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mt-3 text-lg font-bold text-card-foreground">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 w-full"><JoinButton /></div>

        <footer className="mt-12 text-sm text-muted-foreground">
          <p className="text-base font-bold text-foreground">🧡 Achadinhos da Gil</p>
          <p className="mt-1">Pequenos achados, grandes vantagens!</p>
          <p className="mt-4">Site oficial: <a className="link" href={SITE.siteUrl} target="_blank" rel="noopener noreferrer">achadinhos.sinergia.club</a></p>
          <p className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1">
            <a className="link" href={SITE.privacyUrl} target="_blank" rel="noopener noreferrer">Política de Privacidade</a>
            <a className="link" href={SITE.termsUrl} target="_blank" rel="noopener noreferrer">Termos de Uso</a>
          </p>
        </footer>
      </div>
    </main>
  );
}
