import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, HeaderComponent, UserComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
   