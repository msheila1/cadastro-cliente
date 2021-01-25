import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { v4 as uuid } from 'uuid';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-clientes',
  templateUrl: './cadastrar-clientes.component.html',
  styleUrls: ['./cadastrar-clientes.component.scss']
})
export class CadastrarClientesComponent implements OnInit {
  @Input()
  client;

  form: FormGroup;

  constructor(private apiService: ApiService,private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.client = this.apiService.getClients();
    
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      rgClient: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      datNascimento: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      empresa: [],
      bairro: [],
      endereco: [],
      telefone: [],
      numero: [],
      estado: [],
      cidade: [],
      cep: [],
      complemento: [],
    })
  }


  get f() { return this.form.controls; }
  
  onSubmit() {
    if (this.form.value) {
    let newClient = {
      id:uuid(),
      firstName: this.form.value.firstName,
      rgClient: this.form.value.rgClient,
      cpf: this.form.value.cpf,
      datNascimento: this.form.value.datNascimento,
      telefone: this.form.value.telefone,
      email: this.form.value.email,
      empresa: this.form.value.empresa,
      endereco: this.form.value.endereco,
      numero: this.form.value.numero,
      bairro: this.form.value.bairro,
      complemento: this.form.value.complemento,
      cep: this.form.value.cep,
      estado: this.form.value.estado,
      cidade: this.form.value.cidade
    }
    this.client.push(newClient);
    this.apiService.addClients(newClient);
    this.router.navigate(['buscar-de-clientes']);
    }
  }
}