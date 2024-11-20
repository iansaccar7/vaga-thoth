import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CadastroComponent } from './components/cadastro/cadastro.component'; // Caminho correto

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent // CadastroComponent precisa estar declarado aqui
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
