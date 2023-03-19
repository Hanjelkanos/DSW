import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListnotesComponent } from './components/listnotes/listnotes.component';
import { CreatenoteComponent } from './components/createnote/createnote.component';
import { EditnoteComponent } from './components/editnote/editnote.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ListNotesAdminComponent } from './components/list-notes-admin/list-notes-admin.component';
import { EditNotesAdminComponent } from './components/edit-notes-admin/edit-notes-admin.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'listNotes', component: ListnotesComponent},
  { path: 'listNotesAdmin', component: ListNotesAdminComponent},
  { path: 'create/note', component: CreatenoteComponent},
  { path: 'edit/note/:noteID', component: EditnoteComponent},
  { path: 'editAmin/note/:noteID', component: EditNotesAdminComponent},
  { path: 'listNotes/:useremail', component: ListnotesComponent},
  { path: 'listNotesAdmin/:useremail', component: ListNotesAdminComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
