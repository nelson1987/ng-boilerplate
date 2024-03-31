import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDialogModule } from '@angular/material/dialog';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {RouterModule, Routes} from '@angular/router';
const appRoutes: Routes = [
  {path: 'cadastro-produto', component: CadastroProdutoComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CadastroProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
        appRoutes, {enableTracing: true}  // <-- debugging purposes only
        )
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
