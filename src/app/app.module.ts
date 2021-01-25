import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgxMaskModule, IConfig} from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { BuscarClientesComponent } from './components/buscar-clientes/buscar-clientes.component';
import { CadastrarClientesComponent } from './components/cadastrar-clientes/cadastrar-clientes.component';
import { EditarClientesComponent } from './components/editar-clientes/editar-clientes.component';

export const options: Partial<IConfig> = {
  thousandSeparator: "."
};

@NgModule({
  declarations: [
    AppComponent,
    BuscarClientesComponent,
    CadastrarClientesComponent,
    BuscarClientesComponent,
    EditarClientesComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(options) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
