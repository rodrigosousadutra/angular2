/**
 * Created by root on 26/02/17.
 */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module'; // importa o módulo que será carregado primeiro
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);