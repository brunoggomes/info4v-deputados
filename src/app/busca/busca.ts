import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, 
         ReactiveFormsModule, Validators } from '@angular/forms';
import { DeputadoService } from '../model/deputado-service';

@Component({
  selector: 'app-busca',
  imports: [ReactiveFormsModule],
  templateUrl: './busca.html',
  styleUrl: './busca.css'
})
export class Busca {
  formBusca: FormGroup

  fb: FormBuilder = inject(FormBuilder)
  ds: DeputadoService = inject(DeputadoService)
  constructor() {
    this.formBusca = this.fb.group({
      idDep: ['', Validators.required]
    })
  }
  
  obterDepesas() {
    const idDep = this.formBusca.value.id
    this.ds.obterDespesasPorId(idDep)
  }
}
