import React from 'react'
import { Recycle, Handshake, Compass, Gem, ArrowRight } from 'lucide-react'

import Button from '../components/molecules/Button';

const values = [
  {
    icon: Recycle,
    title: 'Matéria-prima do mar',
    description:
      'Priorizamos resíduos encontrados em praias e mangues antes de considerar qualquer material novo.',
  },
  {
    icon: Handshake,
    title: 'Cadeia justa',
    description:
      'Pagamos preço justo a coletores e artesãos, e mantemos nossos custos e margens transparentes.',
  },
  {
    icon: Compass,
    title: 'Consumo consciente',
    description:
      'Produzimos por encomenda em pequenos lotes para evitar excesso de estoque e desperdício.',
  },
  {
    icon: Gem,
    title: 'Durabilidade em primeiro lugar',
    description:
      'Cada peça é feita para durar anos, não temporadas — qualidade acima de tendência.',
  },
]

const Sobre = () => {

const stats = [
  { value: '3,2 t', label: 'de resíduos retirados das praias desde 2021' },
  { value: '48', label: 'praias percorridas em mutirões de coleta' },
  { value: '120+', label: 'artesãos parceiros remunerados de forma justa' },
  { value: '18 mil', label: 'joias com nova vida vendidas até hoje' },
]

const steps = [
  {
    number: '01',
    title: 'Coleta',
    description:
      'Parceiros e voluntários recolhem vidro, metal e fragmentos em mutirões de limpeza costeira.',
  },
  {
    number: '02',
    title: 'Higienização',
    description:
      'Cada material passa por lavagem e triagem cuidadosa antes de entrar no ateliê.',
  },
  {
    number: '03',
    title: 'Transformação',
    description:
      'Artesãos cortam, polem e lapidam o material até revelar sua nova forma.',
  },
  {
    number: '04',
    title: 'Nova vida',
    description:
      'A peça finalizada chega até você, pronta para contar a história do mar.',
  },
] 

  return (
    <>
    <section className="relative overflow-hidden">
      <div className="relative h-[78vh] min-h-[520px] w-full">
        <img
          src="/fundo-hero.png"
          alt="Praia ao entardecer com resíduos plásticos e vidro do mar sendo coletados na areia"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031c26]/90 via-[#05202c]/45 to-[#05202c]/10" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end">
        <div className="mx-auto w-full max-w-6xl px-6 pb-16 md:px-10 md:pb-20">
          <p className="text-xs font-semibold tracking-[0.25em] text-secondary-foreground/80 uppercase">
            <span className="text-[#7fd4e0]">Eco Trend</span> · Sobre nós
          </p>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl leading-[1.08] font-medium text-balance text-white md:text-6xl">
            Da maré para o seu pescoço: joias com história de mar.
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-white/80 md:text-lg">
            Transformamos o que o oceano devolveu à areia em peças únicas, para
            um jeito mais consciente de se adornar.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-primary py-20 text-primary-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-xl">
          <span className="text-xs font-semibold tracking-[0.25em] text-white/60 uppercase">
            Nosso impacto
          </span>
          <h2 className="mt-4 font-heading text-3xl leading-tight text-balance md:text-4xl">
            Números que medimos para continuar melhorando
          </h2>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-t border-white/20 pt-6">
              <dd className="font-heading text-4xl text-white md:text-5xl">
                {stat.value}
              </dd>
              <dt className="mt-2 text-sm leading-relaxed text-white/70">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <div className="max-w-xl">
        <span className="text-xs font-semibold tracking-[0.25em] text-secondary uppercase">
          O que nos guia
        </span>
        <h2 className="mt-4 font-heading text-3xl leading-tight text-balance text-foreground md:text-4xl">
          Princípios que não abrimos mão
        </h2>
      </div>

      <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
        {values.map((value) => {
          const Icon = value.icon
          return (
            <div key={value.title} className="bg-card p-8">
              <Icon className="size-6 text-secondary" strokeWidth={1.5} />
              <h3 className="mt-5 font-heading text-lg text-foreground">
                {value.title}
              </h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>

     <section className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div className="relative aspect-square overflow-hidden rounded-3xl md:aspect-auto">
            <img
              src="/exmplo-joia.jpeg"
              alt="Materiais encontrados na praia organizados sobre a areia: vidro do mar, cordas e conchas"
              
              className="object-cover"
            />
          </div>

          <div>
            <span className="text-xs font-semibold tracking-[0.25em] text-secondary uppercase">
              Como transformamos
            </span>
            <h2 className="mt-4 font-heading text-3xl leading-tight text-balance text-foreground md:text-4xl">
              Do achado de praia à joia acabada
            </h2>
            <ol className="mt-10 space-y-8">
              {steps.map((step) => (
                <li key={step.number} className="flex gap-5">
                  <span className="font-heading text-2xl leading-none text-primary/40">
                    {step.number}
                  </span>
                  <div className="border-l border-border pl-5">
                    <h3 className="font-heading text-lg text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-pretty leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden">
      <div className="relative min-h-[200px] w-full">
        <img
          src="/fundo.jpg"
          alt="Colar e brincos feitos de vidro do mar e metal reciclado sobre uma pedra à beira-mar"
          
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#031c26]/85 via-[#031c26]/55 to-transparent" />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <div className="max-w-md">
            <h2 className="font-heading text-3xl leading-tight text-balance text-white md:text-4xl">
              Vista uma história que respeita o mar
            </h2>
            <p className="mt-4 text-pretty text-white/80">
              Conheça as coleções da Eco Trend e escolha uma peça que já
              começou como parte do oceano.
            </p>
            <Button icone={ArrowRight} nome={'Ver produtos'} estilizacao={'mt-7 h-11 gap-2 rounded-full bg-secondary px-6 text-secondary-foreground hover:bg-secondary/85'} /> 
            
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Sobre
