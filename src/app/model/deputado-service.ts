import { Injectable } from '@angular/core';
import { Deputado } from './deputado';


@Injectable({
  providedIn: 'root'
})
export class DeputadoService {
  private deputados: Deputado[] = [
  {
    id: "1",
    nome: "Carlos Henrique da Silva",
    email: "carlos.silva@camara.leg.br",
    idLegislatura: "57",
    siglaPartido: "PDS",
    siglaUf: "SP",
    urlFoto: "https://fotos.camara.leg.br/deputado1.jpg"
  },
  {
    id: "2",
    nome: "Fernanda Souza Lima",
    email: "fernanda.lima@camara.leg.br",
    idLegislatura: "57",
    siglaPartido: "PTN",
    siglaUf: "RJ",
    urlFoto: "https://fotos.camara.leg.br/deputado2.jpg"
  },
  {
    id: "3",
    nome: "João Batista Rocha",
    email: "joao.rocha@camara.leg.br",
    idLegislatura: "57",
    siglaPartido: "MDB",
    siglaUf: "MG",
    urlFoto: "https://fotos.camara.leg.br/deputado3.jpg"
  },
  {
    id: "4",
    nome: "Mariana Costa e Silva",
    email: "mariana.costa@camara.leg.br",
    idLegislatura: "57",
    siglaPartido: "PVL",
    siglaUf: "RS",
    urlFoto: "https://fotos.camara.leg.br/deputado4.jpg"
  },
  {
    id: "5",
    nome: "Rafael Oliveira Mendes",
    email: "rafael.mendes@camara.leg.br",
    idLegislatura: "57",
    siglaPartido: "PDT",
    siglaUf: "BA",
    urlFoto: "https://fotos.camara.leg.br/deputado5.jpg"
  },
  {
    id: "6",
    nome: "Luciana Torres Barreto",
    email: "luciana.barreto@camara.leg.br",
    idLegislatura: "57",
    siglaPartido: "PSB",
    siglaUf: "PE",
    urlFoto: "https://fotos.camara.leg.br/deputado6.jpg"
  },
  {
    id: "7",
    nome: "Ricardo Fernandes Lopes",
    email: "ricardo.lopes@camara.leg.br",
    idLegislatura: "57",
    siglaPartido: "PRL",
    siglaUf: "GO",
    urlFoto: "https://fotos.camara.leg.br/deputado7.jpg"
  },
  {
    id: "8",
    nome: "Ana Paula Martins",
    email: "ana.martins@camara.leg.br",
    idLegislatura: "57",
    siglaPartido: "UNI",
    siglaUf: "SC",
    urlFoto: "https://fotos.camara.leg.br/deputado8.jpg"
  },
  {
    id: "9",
    nome: "Eduardo Nascimento Alves",
    email: "eduardo.alves@camara.leg.br",
    idLegislatura: "57",
    siglaPartido: "PSD",
    siglaUf: "CE",
    urlFoto: "https://fotos.camara.leg.br/deputado9.jpg"
  },
  {
    id: "10",
    nome: "Tatiane Ribeiro Cunha",
    email: "tatiane.cunha@camara.leg.br",
    idLegislatura: "57",
    siglaPartido: "REP",
    siglaUf: "PA",
    urlFoto: "https://fotos.camara.leg.br/deputado10.jpg"
  }
];


  obterDeputados(): Deputado[] {
    return [...this.deputados]
  }

}
