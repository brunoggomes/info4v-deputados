import { inject, Injectable } from '@angular/core';
import { Deputado } from './deputado';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DeputadoService {
  //inject(HttpClient) cria o objeto do serviço HttpClient
  private http = inject(HttpClient)
  private APIURL = 'https://dadosabertos.camara.leg.br/api/v2'
  private deputados: Deputado[] = [];


  obterDeputados(): Deputado[] {
    this.http.get(`${this.APIURL}/deputados?ordem=ASC&ordenarPor=nome`).subscribe(
      res => {
        console.log(res)
      })
      
    return [...this.deputados]
  }

}
