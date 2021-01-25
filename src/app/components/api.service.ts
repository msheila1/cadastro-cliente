import { Injectable } from '@angular/core';
import { Init } from './api-init';

@Injectable({
    providedIn: 'root',
  })
export class ApiService extends Init {

  constructor() {
    super();
    console.log('ApiService Works');
    this.load();
   }

   getClients() {
     let client = JSON.parse(localStorage.getItem('api'));
     return client;
   }

   addClients(newEmp) {
      let clients = JSON.parse(localStorage.getItem('api'));
      clients.push(newEmp);
      localStorage.setItem('api', JSON.stringify(clients));
   }

   deleteClients(id) {
     let clients = JSON.parse(localStorage.getItem('api'));
     for(let i = 0; i <clients.length; i++) {
      if(clients[i].id == id) {
        clients.splice(i, 1);
      }
   }
      localStorage.setItem('api', JSON.stringify(clients));
   }

     updateClients(oldEmp, newEmp){  let clients = JSON.parse(localStorage.getItem('api'));

     for(let i = 0; i <clients.length; i++) {
      if(clients[i].id == oldEmp.id) {
        clients[i] = newEmp;
      }
   }
      localStorage.setItem('api', JSON.stringify(clients));
   }




}