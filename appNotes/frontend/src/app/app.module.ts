import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListnotesComponent } from './components/listnotes/listnotes.component';
import { CreatenoteComponent } from './components/createnote/createnote.component';
import { EditnoteComponent } from './components/editnote/editnote.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import { ListNotesAdminComponent } from './components/list-notes-admin/list-notes-admin.component';
import { EditNotesAdminComponent } from './components/edit-notes-admin/edit-notes-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    ListnotesComponent,
    CreatenoteComponent,
    EditnoteComponent,
    LoginComponent,
    SignupComponent,
    ListNotesAdminComponent,
    EditNotesAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AlifeFileToBase64Module

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
