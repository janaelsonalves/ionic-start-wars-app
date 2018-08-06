import { Scout } from "../scout.model";

export const SCOUTS: Scout[] = [
    {
        sigla: "G",
        estatistica: "Gol",
        pontos: 8.0,
        tipo: "Ataque"
    },
    {
        sigla: "A",
        estatistica: "Assistência",
        pontos: 5.0,
        tipo: "Ataque"
    },
    {
        sigla: "FT",
        estatistica: "Finalização na trave",
        pontos: 3.0,
        tipo: "Ataque"
    },
    {
        sigla: "FD",
        estatistica: "Finalização defendida",
        pontos: 1.2,
        tipo: "Ataque"
    },
    {
        sigla: "FF",
        estatistica: "Finalização para fora",
        pontos: 0.8,
        tipo: "Ataque"
    },
    {
        sigla: "FS",
        estatistica: "Falta sofrida",
        pontos: 0.5,
        tipo: "Ataque"
    },
    {
        sigla: "PE",
        estatistica: "Passe errado",
        pontos: -0.3,
        tipo: "Ataque"
    },
    {
        sigla: "I",
        estatistica: "Impedimento",
        pontos: -0.5,
        tipo: "Ataque"
    },
    {
        sigla: "PP",
        estatistica: "Pênalti perdido",
        pontos: -4.0,
        tipo: "Ataque"
    },
    {
        sigla: "DP",
        estatistica: "Defesa de penalti",
        pontos: 7.0,
        tipo: "Defesa"
    },
    {
        sigla: "SG",
        estatistica: "Jogo sem sofrer gol",
        pontos: 5.0,
        tipo: "Defesa"
    },
    {
        sigla: "DD",
        estatistica: "Defesa difícil",
        pontos: 3.0,
        tipo: "Defesa"
    },
    {
        sigla: "RB",
        estatistica: "Roubada de bola",
        pontos: 1.5,
        tipo: "Defesa"
    },
    {
        sigla: "FC",
        estatistica: "Falta cometida",
        pontos: -0.5,
        tipo: "Defesa"
    },
    {
        sigla: "GS",
        estatistica: "Gol sofrido",
        pontos: -2.0,
        tipo: "Defesa"
    },
    {
        sigla: "CA",
        estatistica: "Cartão amarelo",
        pontos: -2.0,
        tipo: "Defesa"
    },
    {
        sigla: "CV",
        estatistica: "Cartão vermelho",
        pontos: -5.0,
        tipo: "Defesa"
    },
    {
        sigla: "GC",
        estatistica: "Gol contra",
        pontos: -5.0,
        tipo: "Defesa"
    }
]