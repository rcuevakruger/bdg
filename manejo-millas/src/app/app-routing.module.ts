/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { BilleteraComponent } from './Billetera/Billetera.component';

import { PropietarioComponent } from './Propietario/Propietario.component';
import { ClienteComponent } from './Cliente/Cliente.component';
import { ComercioComponent } from './Comercio/Comercio.component';
import { EmisorComponent } from './Emisor/Emisor.component';

import { AcreditarMillasComponent } from './AcreditarMillas/AcreditarMillas.component';
import { CambiarMillasComponent } from './CambiarMillas/CambiarMillas.component';
import { CobrarMillasComponent } from './CobrarMillas/CobrarMillas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Billetera', component: BilleteraComponent },
  { path: 'Propietario', component: PropietarioComponent },
  { path: 'Cliente', component: ClienteComponent },
  { path: 'Comercio', component: ComercioComponent },
  { path: 'Emisor', component: EmisorComponent },
  { path: 'AcreditarMillas', component: AcreditarMillasComponent },
  { path: 'CambiarMillas', component: CambiarMillasComponent },
  { path: 'CobrarMillas', component: CobrarMillasComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }
