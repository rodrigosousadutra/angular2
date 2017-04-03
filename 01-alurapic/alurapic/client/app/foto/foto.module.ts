/**
 * Created by root on 27/02/17.
 */

import { NgModule }      from '@angular/core';
import { FotoComponent }   from './foto.component';
import { FiltroPorTitulo } from './foto.pipes';

@NgModule({
    declarations: [ FotoComponent, FiltroPorTitulo ], // Obrigatorio, registro os componentes utilizados
    exports: [FotoComponent, FiltroPorTitulo] //Defino o que deve ser exportado no modulo
})
export class FotoModule { }