import { Button } from "../";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col">
      <header className="flex items-center justify-between px-[5%] py-6">
        <a href="#" className="font-logo text-5xl text-white no-underline">
          Pingado
        </a>

        <nav>
          <Button variant="secondary">Login</Button>
        </nav>
      </header>

      <div className="ml-[8%] flex w-1/2 flex-1 flex-col justify-center gap-5">
        <h1 className="font-titulo text-8xl text-white">UM MUNDO DE CAFÉ.</h1>
        <h2 className="font-titulo text-8xl text-white text-right">
          ENVIADO.
        </h2>
        <p className="font-texto text-xl text-white">
          Conheça cafés especiais selecionados por especialistas e entregues
          frescos na sua casa.
        </p>

        <Button variant="secondary">Assinar agora</Button>
      </div>
    </section>
  );
}