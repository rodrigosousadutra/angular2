/**
 * Created by root on 27/02/17.
 */

import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'foto',
    templateUrl: './foto.component.html',
    styleUrls:['./foto.component.css']
})

export class FotoComponent {

    @Input() titulo: string = '';
    @Input() url: string = '';
    descricao: string = '';
}

//Se eu não quisesse usar essa componente em outra aplicação, não seria necessário a criação de um modulo