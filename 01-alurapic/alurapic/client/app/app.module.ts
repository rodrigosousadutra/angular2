/**
 * Created by root on 26/02/17.
 */

// alurapic/client/app/app.module.ts


// importou a extensão map!

import 'rxjs/add/operator/map';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FotoModule } from './foto/foto.module';
// importou o módulo que já possui um provider configurado
import { HttpModule } from '@angular/http';
import { PainelModule } from './painel/painel.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { routing } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// HttpModule adicionadno no array de imports!
@NgModule({
    imports:      [
        BrowserModule,
        HttpModule,
        PainelModule,
        FotoModule,
        routing,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [ AppComponent, ListagemComponent, CadastroComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }