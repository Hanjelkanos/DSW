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
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { UsermanagementComponent } from './components/usermanagement/usermanagement.component';
import { EdituserComponent } from './components/edituser/edituser.component';
import { NotesCollectionsComponent } from './components/notes-collections/notes-collections.component';
import { FriendshipsComponent } from './components/friendships/friendships.component';
import { FriendrequestsComponent } from './components/friendrequests/friendrequests.component';
import { FriendshipsadminComponent } from './components/friendshipsadmin/friendshipsadmin.component';
import { CollectionsadminComponent } from './components/collectionsadmin/collectionsadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    ListnotesComponent,
    CreatenoteComponent,
    EditnoteComponent,
    LoginComponent,
    SignupComponent,
    ListNotesAdminComponent,
    EditNotesAdminComponent,
    AdminMenuComponent,
    UsermanagementComponent,
    EdituserComponent,
    NotesCollectionsComponent,
    FriendshipsComponent,
    FriendrequestsComponent,
    FriendshipsadminComponent,
    CollectionsadminComponent
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
