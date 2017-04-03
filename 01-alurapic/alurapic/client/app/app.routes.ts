/**
 * Created by rodrigo on 28/02/17.
 */

// alurapic/client/app/app.routes.ts


import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const appRoutes: Routes  = [
    { path: '', component: ListagemComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);

//Precisamos pedir ao módulo RouterModule que construa nossas rotas com base na configuração definida em appRoutes.
// É o resultado dessa operação que exportaremos. Faremos isso pelo método RouterModule.forRoot: