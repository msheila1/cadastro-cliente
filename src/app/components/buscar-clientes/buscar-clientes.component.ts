import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-buscar-clientes',
  templateUrl: './buscar-clientes.component.html',
  styleUrls: ['./buscar-clientes.component.scss']
})
export class BuscarClientesComponent implements OnInit {
  clients;
  query = '';
  
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.clients = this.apiService.getClients();
  }

  deleteClients(id) {
    for(let i = 0; i < this.clients.length; i++) {
      if(this.clients[i].id == id) {
          this.clients.splice(i, 1);
      }
    }

    this.apiService.deleteClients(id);
  }


  filtrarClientes() {
    if (this.query === '') {
      this.apiService = this.clients;
    } else {
      this.clients = Object.assign([], this.clients).filter(
        emp => emp.firstName.toLowerCase().indexOf(this.query.toLowerCase()) > -1
      );
    }
  }

}
