/**
 * Created by rodrigo on 28/02/17.
 */

// alurapic/client/app/listagem/listagem.component.ts

import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {

    fotos: Object[] = []; // ou  fotos: Array<Object> = [];

    constructor(http: Http) {

        http.get('v1/fotos')
            .map(res => res.json())
            .subscribe(
                fotos => this.fotos = fotos,
                erro => console.log(erro)
            );
    }

}