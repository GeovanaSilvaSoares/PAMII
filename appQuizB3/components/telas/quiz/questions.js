// questions.js
export const questions = [
    {
    question: "LUGAR DE PRESERVAR E CONTAR MEMÓRIAS.",
    answers: [
        { id: 1, text: "MUSEU", correct: true},
        { id: 2, text: "GALERIA DE ARTE", correct: false},
        { id: 3, text: "MEMORIAL", correct: false},
        { id: 4, text: "BIBLIOTECA", correct: false},
    ], 
    icons: [
      { img: require('../../../assets/imgs/lugar.png'), label: "LUGAR" },
      { img: require("../../../assets/imgs/cuidado.png"), label: "PRESERVAR" },
      { img: require("../../../assets/imgs/perda-de-memoria.png"), label: "MEMÓRIAS" }
    ]
    },
    {
    question: "GUARDAR E RESGASTAR INFORMAÇÕES E ACONTECIMENTOS DA HISTÓRIA E GRUPOS.",
    answers: [
        { id: 1, text: "CAPSULA DO TEMPO", correct: false},
        { id: 2, text: "ARQUIVO", correct: false},
        { id: 3, text: "MEMÓRIA", correct: true},
        { id: 4, text: "ALBUM", correct: false},
    ],
    icons: [
      { img: require("../../../assets/imgs/mais-informacoes.png"), label: "INFORMAÇÕES"},
      { img: require("../../../assets/imgs/historia.png"), label: "HISTÓRIA" },
      { img: require("../../../assets/imgs/diversidade.png"), label: "PESSOAS" }
    ]
    },
    {
    question: "ALGO QUE É IMPORTANTE PARA ALGUÉM OU O PREÇO DE ALGUMA COISA EM DINHEIRO.",
    answers: [
        { id: 1, text: "CASA", correct: false},
        { id: 2, text: "VALOR", correct: true},
        { id: 3, text: "DINHEIRO", correct: false},
        { id: 4, text: "LEMBRANÇAS", correct: false},
    ],
    icons: [
      { img: require("../../../assets/imgs/estrela.png"), label: "IMPORTANTE" },
      { img: require("../../../assets/imgs/diversidade.png"), label: "ALGUÉM" },
      { img: require("../../../assets/imgs/etiqueta-de-preco.png"), label: "PREÇO" }
    ]
    },
    {
    question: "QUANTIA USADA NA COMPRA E VENDA DE AÇÕES.",
    answers: [
        { id: 1, text: "MIGALHAS", correct: false},
        { id: 2, text: "PREÇO", correct: true},
        { id: 3, text: "COTAS", correct: false},
        { id: 4, text: "DINHEIRO", correct: false},
    ],
    icons: [
      { img: require("../../../assets/imgs/mercado-de-acoes.png"), label: "AÇÕES" },
      { img: require("../../../assets/imgs/compras-online.png"), label: "COMPRA E VENDA" },
      { img: require("../../../assets/imgs/dinheiro.png"), label: "DINHEIRO" }
    ]
    },
    {
    question: "PARTE DE UMA EMPRESA QUE PODE SER COMPRADA OU VENDIDA.",
    answers: [
        { id: 1, text: "AÇÃO", correct: true},
        { id: 2, text: "TITULO", correct: false},
        { id: 3, text: "POSSE", correct: false},
        { id: 4, text: "FUNDO", correct: false},
    ],
    icons: [
      { img: require("../../../assets/imgs/parte.png"), label: "PARTE" },
      { img: require("../../../assets/imgs/empresa.png"), label: "EMPRESA" },
      { img: require("../../../assets/imgs/taxa.png"), label: "COMPRADA" }
    ]
    },
    {
    question: "COMPRAR AÇOES ACREDITANDO GANHAR DINHEIRO COM O PASSAR DO TEMPO.",
    answers: [
        { id: 1, text: "INVESTIMENTO", correct: true},
        { id: 2, text: "JUROS", correct: false},
        { id: 3, text: "ECONOMIA", correct: false},
        { id: 4, text: "GUARDAR", correct: false},
    ],
    icons: [
      { img: require("../../../assets/imgs/ganho.png"), label: "GANHAR DINHEIRO" },
      { img: require("../../../assets/imgs/mercado-de-acoes.png"), label: "AÇÕES" },
      { img: require("../../../assets/imgs/tempo.png"), label: "PASSAR DO TEMPO" }
    ]
    },
    {
    question: "LUGAR ONDE AÇÕES RECEBEM PREÇO E SÃO NEGOCIADAS.",
    answers: [
        { id: 1, text: "LOJA", correct: false},
        { id: 2, text: "SHOPPING", correct: false},
        { id: 3, text: "BOLSA DE VALORES", correct: true},
        { id: 4, text: "BANCO", correct: false},
    ],
    icons: [
      { img: require("../../../assets/imgs/lugar.png"), label: "LUGAR" },
      { img: require("../../../assets/imgs/mercado-de-acoes.png"), label: "AÇÕES" },
      { img: require("../../../assets/imgs/etiqueta-de-preco.png"), label: "PREÇO" }
    ]
    },
    {
    question: "MOMENTO DE NEGOCIAÇÕES DE AÇÕES NA BOLSA DE VALORES.",
    answers: [
        { id: 1, text: "MERCADO", correct: false},
        { id: 2, text: "VENDINHA", correct: false},
        { id: 3, text: "PRAÇA", correct: false},
        { id: 4, text: "PREGÃO", correct: true},
    ],
    icons: [
      { img: require("../../../assets/imgs/conversa.png"), label: "NEGOCIAR" },
      { img: require("../../../assets/imgs/bolsa-de-valores.png"), label: "BOLSA DE VALORES" },
      { img: require("../../../assets/imgs/mercado-de-acoes.png"), label: "AÇÕES" }
    ]
    },
]