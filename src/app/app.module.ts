import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductoListComponent } from './product/producto-list/producto-list.component';
import { ProductoFilterPipe } from './product/producto-filter.pipe';
import Ejemplo1Component  from './formulario/ejemplo1/ejemplo1.component';
import SignUpComponent from "./auth/features/sign-up/sign-up.component"
import SignInComponent from "./auth/features/sign-in/sign-in.component"

@NgModule({
  declarations: [
    ProductoListComponent,
    ProductoFilterPipe,
  ],
  imports: [
    AppComponent,
    Ejemplo1Component,
    SignUpComponent,
    SignInComponent,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  
  providers: [],
})
export class AppModule { }