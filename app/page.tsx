"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";

const sections = [
  {
    label: "Estratégia",
    title: "Sua marca no lugar certo, para as pessoas certas.",
    text: "Hoje, nosso foco é criar sites modernos e estratégicos para fortalecer sua presença digital, posicionar sua marca e transformar visitantes em oportunidades.",
    side: "left",
  },
  {
    label: "Performance",
    title: "Mais visibilidade. Mais resultados.",
    text: "O site é o começo. À medida que a Scalone Labs cresce, nossa estrutura também evolui para acompanhar marcas que querem ir além da presença digital.",
    side: "right",
  },
  {
    label: "Tecnologia",
    title: "Tecnologia que impulsiona seu futuro.",
    text: "Construímos experiências digitais rápidas, responsivas e preparadas para acompanhar a evolução da sua empresa.",
    side: "left",
  },
];

function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1200ms] ease-out ${
        visible
          ? "translate-y-0 opacity-100 blur-0"
          : "translate-y-14 opacity-0 blur-[4px]"
      }`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030B18] text-white">

      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="relative flex min-h-screen items-center overflow-hidden">

        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/scalone-hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[#030B18]/30" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#030B18]/90 via-[#030B18]/45 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#030B18] via-transparent to-[#030B18]/10" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-24 sm:px-10 lg:px-16">

          <div className="max-w-4xl">

            <div className="mb-10 flex items-center gap-4">

              <Image
                src="/scalone-symbol-cyan.png"
                alt="Scalone Labs"
                width={52}
                height={52}
                priority
                className="h-11 w-11 object-contain sm:h-12 sm:w-12"
              />

              <div className="leading-none">

                <div className="text-sm font-semibold tracking-[0.28em] text-white">
                  SCALONE
                </div>

                <div className="mt-1 text-[10px] tracking-[0.48em] text-cyan-300">
                  LABS
                </div>

              </div>

            </div>

            <div className="space-y-1">

              <h1 className="text-5xl font-semibold tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
                Sua marca.
              </h1>

              <h2 className="bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-5xl font-semibold tracking-[-0.045em] text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
                Em outra dimensão.
              </h2>

            </div>

            <p className="mt-8 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
              Criamos sites e experiências digitais que conectam sua marca a
              novas oportunidades.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <a
                href="https://w.app/scalonelabs"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 px-7 py-4 text-sm font-semibold text-[#030B18] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]"
              >
                Quero meu site

                <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

              </a>

              <a
                href="#sobre"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-300/50 hover:bg-white/10"
              >
                Conheça a Scalone Labs
              </a>

            </div>

          </div>

        </div>

        <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-white/40 sm:flex">

          <span>Explore</span>

          <span className="h-10 w-px bg-gradient-to-b from-cyan-300/70 to-transparent" />

        </div>

      </section>


      {/* =========================================================
          APRESENTAÇÃO
      ========================================================== */}

      <section
        id="sobre"
        className="relative flex min-h-screen items-center overflow-hidden bg-[#030B18]"
      >

        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src="/pagina%20apresenta%C3%A7%C3%A3o.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-[#030B18]/20" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#030B18]/90 via-[#030B18]/45 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#030B18]/75 via-transparent to-[#030B18]/15" />

        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#030B18]/80 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#030B18] to-transparent" />

        <Reveal>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 sm:px-10 lg:px-16">

            <div className="max-w-3xl">

              <div className="mb-7 flex items-center gap-4">

                <Image
                  src="/scalone-symbol-cyan.png"
                  alt="Scalone Labs"
                  width={30}
                  height={30}
                  className="h-6 w-6 object-contain"
                />

                <p className="text-xs font-medium uppercase tracking-[0.42em] text-cyan-300">
                  Scalone Labs
                </p>

              </div>

              <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl">

                Presença digital não precisa

                <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
                  ser comum.
                </span>

              </h2>

              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Criamos experiências digitais pensadas para fazer sua marca
                aparecer, comunicar e crescer no ambiente online.
              </p>

            </div>

          </div>

        </Reveal>

      </section>


      {/* =========================================================
          ESTRATÉGIA / PERFORMANCE / TECNOLOGIA
      ========================================================== */}

      {sections.map((section) => (

        <section
          key={section.label}
          className="relative min-h-screen overflow-hidden bg-[#030B18]"
        >

          <div className="absolute inset-x-0 top-0 z-30 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />


          {/* =====================================================
              VÍDEOS DE FUNDO
          ====================================================== */}

          <div className="absolute inset-0 overflow-hidden">

            {section.label === "Estratégia" && (
              <video
                className="absolute inset-0 h-full w-full object-cover object-center"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source
                  src="/scalone-social-dashboard.mp4"
                  type="video/mp4"
                />
              </video>
            )}

            {section.label === "Performance" && (
              <video
                className="absolute inset-0 h-full w-full object-cover object-center"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source
                  src="/scalone-performance.mp4"
                  type="video/mp4"
                />
              </video>
            )}

            {section.label === "Tecnologia" && (
              <video
                className="absolute inset-0 h-full w-full object-contain object-center"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source
                  src="/scalone-digital-cube.mp4"
                  type="video/mp4"
                />
              </video>
            )}

            <div className="absolute inset-0 bg-[#030B18]/25" />

            {section.side === "left" ? (
              <div className="absolute inset-0 bg-gradient-to-r from-[#030B18]/95 via-[#030B18]/55 to-[#030B18]/5" />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-l from-[#030B18]/95 via-[#030B18]/55 to-[#030B18]/5" />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-[#030B18]/80 via-transparent to-[#030B18]/20" />

            <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#030B18]/75 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#030B18] to-transparent" />

          </div>


          {/* =====================================================
              CONTEÚDO
          ========================================================== */}

          <div className="relative z-10 flex min-h-screen items-center">

            <Reveal>

              <div className="mx-auto w-full max-w-7xl px-6 py-32 sm:px-10 lg:px-16">

                <div
                  className={`max-w-xl ${
                    section.side === "right"
                      ? "lg:ml-auto"
                      : "lg:mr-auto"
                  }`}
                >

                  {/* =================================================
                      SÍMBOLO + NOME DA SEÇÃO
                  ================================================== */}

                  <div className="mb-8 flex items-center gap-4">

                    <Image
                      src="/scalone-symbol-cyan.png"
                      alt="Scalone Labs"
                      width={30}
                      height={30}
                      className="h-6 w-6 object-contain"
                    />

                    <span className="h-px w-12 bg-gradient-to-r from-cyan-300 to-transparent" />

                    <span className="text-xs uppercase tracking-[0.3em] text-white/60">
                      {section.label}
                    </span>

                  </div>


                  <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">
                    {section.title}
                  </h2>


                  <p className="mt-8 max-w-lg text-base leading-8 text-slate-300 sm:text-lg">
                    {section.text}
                  </p>


                  {/* =================================================
                      INDICATIVOS
                  ================================================== */}

                  <div className="mt-9 flex flex-wrap gap-3">

                    {(section.label === "Estratégia"
                      ? [
                          "Design estratégico",
                          "Posicionamento de marca",
                          "Experiência do usuário",
                        ]
                      : section.label === "Performance"
                        ? [
                            "SEO e otimização",
                            "Dados e performance",
                            "Tráfego pago — em breve",
                          ]
                        : [
                            "Desenvolvimento moderno",
                            "Experiência digital",
                            "Escalabilidade",
                          ]
                    ).map((tag) => (

                      <span
                        key={tag}
                        className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-3 text-xs font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-300/50 hover:bg-white/10 hover:text-white hover:shadow-[0_0_25px_rgba(34,211,238,0.08)]"
                      >
                        {tag}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            </Reveal>

          </div>

        </section>

      ))}


      {/* =========================================================
          CTA FINAL
      ========================================================== */}

      <section
        id="contato"
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030B18]"
      >

        <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_45%)]" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />


        <Reveal>

          <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center sm:px-10">

            <div className="mb-10 flex justify-center">

              <div className="relative">

                <div className="absolute inset-0 scale-150 rounded-full bg-cyan-300/10 blur-3xl" />

                <Image
                  src="/scalone-symbol-cyan.png"
                  alt="Scalone Labs"
                  width={110}
                  height={110}
                  className="relative h-20 w-20 object-contain sm:h-24 sm:w-24"
                />

              </div>

            </div>


            <p className="text-xs font-medium uppercase tracking-[0.45em] text-cyan-300">
              Vamos conversar
            </p>


            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl md:text-6xl">

              Sua marca pronta para o

              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
                próximo nível?
              </span>

            </h2>


            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Conte para nós o que sua empresa precisa e vamos transformar sua
              presença digital em algo que realmente represente sua marca.
            </p>


            <a
              href="https://w.app/scalonelabs"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 px-8 py-4 text-sm font-semibold text-[#030B18] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(34,211,238,0.25)]"
            >
              Fale com a gente

              <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </a>


            <div className="mt-24 border-t border-white/10 pt-8">

              <div className="flex items-center justify-center gap-3">

                <Image
                  src="/scalone-symbol-cyan.png"
                  alt=""
                  width={28}
                  height={28}
                  className="h-6 w-6 object-contain"
                />

                <span className="text-xs font-semibold tracking-[0.3em] text-white">
                  SCALONE
                </span>

                <span className="text-xs tracking-[0.3em] text-cyan-300">
                  LABS
                </span>

              </div>

              <p className="mt-4 text-xs text-white/30">
                Presença digital em outra dimensão.
              </p>

            </div>

          </div>

        </Reveal>

      </section>

    </main>
  );
}