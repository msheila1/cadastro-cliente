import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-editar-clientes',
  templateUrl: './editar-clientes.component.html',
  styleUrls: ['./editar-clientes.component.scss']
})
export class EditarClientesComponent implements OnInit {
  client;
  id;
  constructor(private _Activatedroute:ActivatedRoute, private apiService: ApiService, private router:Router) { }
  @ViewChild("f") form: any;

  ngOnInit() {
    this.id=this._Activatedroute.snapshot.params['id'];
    let clients=this.apiService.getClients();
    this.client=clients.find(p => p.id==this.id);
    console.log(this.client);
  }
  onSubmit() {
    if (this.form.value) {
      console.log(this.form.value)
    this.apiService.updateClients(this.client,this.form.value);
    this.router.navigate(['buscar-de-clientes']);
    }
  }
}
