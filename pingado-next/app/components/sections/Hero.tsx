import Image from "next/image";
import { Button } from "../ui/Button";
 
export function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden">
 
              {/* Conteúdo */}
              <div className="relative z-10 min-h-screen">
 
                  {/* Título + texto (centralizados verticalmente na página) */}
                  <div
                      className="
                          absolute
                          left-10
                          top-1/2
                          max-w-5xl
                          -translate-y-1/2
                          md:left-20
                      "
                  >
 
                      <h1
                          className="
                              max-w-9xl
                              font-titulo
                              text-6xl
                              font-light
                              uppercase
                              leading-[0.9]
                              tracking-tight
                              text-white
                              md:text-7xl
                              lg:text-8xl
                          "
                      >
                          Um mundo de café.
                          <br />
 
                          <span className="ml-[59%]">
                              Enviado.
                          </span>
                      </h1>
 
                      <p
                          className="
                              mt-6
                              max-w-xl
                              font-texto
                              text-base
                              leading-relaxed
                              text-white
                              md:text-lg
                          "
                      >
                          Conheça cafés especiais selecionados por
                          especialistas e entregues frescos na sua casa.
                      </p>
 
                  </div>
 
                  {/* Botão (fixo perto do rodapé, independente do título) */}
                  <div className="absolute inset-x-0 bottom-16 px-10 md:px-20">
                      <Button>
                          Assinar agora
                      </Button>
                  </div>
 
              </div>
        </section>
    );
}
 
 