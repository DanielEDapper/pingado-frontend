
//REALIZA PROCESSO DE SCROLL PARA A HORIZONTAL NA SESSÃO DE PROCESSOS DA MARCA.

const process = document.querySelector(".process");             
                                                                    
const track = document.querySelector(".process__track");           
                                                                
const maxTranslate = track.scrollWidth - window.innerWidth;

window.addEventListener("scroll", () => {
    const distance = 
    window.scrollY - process.offsetTop;

    const translate = Math.max(
        0,
        Math.min(
            distance,
            maxTranslate
        )

    );

    track.style.transform = 
    `translateX(-${translate}px)`;
});

// REALIZA PROCESSO DE BUSCA DOS CAFÉS SELECIONADOS DE ACORDO COM O MÊS DA MÁQUINA DO CLIENTE.
//                                                                  -> BASE DE DADOS: db.json

async function carregarCafeDoMes() {
    try {

        const resposta = await fetch("./API/db.json");

        if (!resposta.ok) {
            throw new Error("Não foi possível encontrar o arquivo db.json");
        }

        const dados = await resposta.json();

        const mesAtual = new Date().getMonth() + 1;

        const mes = dados.find(item => item.mes === mesAtual);

        if (!mes) {
            console.log("Nenhum café cadastrado para este mês.");
            return;
        }

        const container = document.getElementById("coffeeContainer");

        let html = "";

        mes.cafes.forEach(cafe => {

            html += `
                <article class="coffee-card">

                    <div class="coffee-card__image">
                        <img src="${cafe.imagem}" alt="${cafe.nome}">
                    </div>

                    <div class="coffee-card__content">

                        <span class="coffee-card__origin">
                            ${cafe.origem}
                        </span>

                        <h3 class="coffee-card__title">
                            ${cafe.nome}
                        </h3>

                        <p class="coffee-card__notes">
                            ${cafe.notas.join(" • ")}
                        </p>

                        <button class="btn btn-terciary">
                            Assinar este café
                        </button>

                    </div>

                </article>
            `;

        });

        container.innerHTML = html;

    } catch (erro) {
        console.error(erro);
    }
}

/* ==========================================
   ORIGENS
========================================== */

const origins = document.querySelectorAll(".origin");
const regions = document.querySelectorAll(".region");

const regionMap = {

    chapada: document.getElementById("chapada"),

    matas: document.getElementById("matas"),

    sul: document.getElementById("sul"),

    mantiqueira: document.getElementById("mantiqueira"),

    cerrado: document.getElementById("cerrado"),

    caparao: document.getElementById("caparao"),

    mogiana: document.getElementById("mogiana")

};

/* ==========================================
   LIMPA REGIÕES
========================================== */

function clearCurrentRegion(){

    regions.forEach(region=>{

        region.classList.remove("active");

    });

}

/* ==========================================
   OBSERVER
========================================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const article = entry.target;

        const regionName = article.dataset.region;

        /* ------------------------------
           TEXTO
        ------------------------------ */

        origins.forEach(origin=>{

            origin.classList.remove("active");

        });

        article.classList.add("active");

        /* ------------------------------
           MAPA
        ------------------------------ */

        clearCurrentRegion();

        const currentRegion = regionMap[regionName];

        if(currentRegion){

            currentRegion.classList.add("active");
            currentRegion.classList.add("visited");

        }

    });

},{
    threshold:.55
});

/* ==========================================
   OBSERVA TODOS
========================================== */

origins.forEach(origin=>{

    observer.observe(origin);

});

carregarCafeDoMes();