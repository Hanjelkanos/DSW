import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListnotesComponent } from './components/listnotes/listnotes.component';
import { CreatenoteComponent } from './components/createnote/createnote.component';
import { EditnoteComponent } from './components/editnote/editnote.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ListNotesAdminComponent } from './components/list-notes-admin/list-notes-admin.component';
import { EditNotesAdminComponent } from './components/edit-notes-admin/edit-notes-admin.component';
import { UsermanagementComponent } from './components/usermanagement/usermanagement.component';
import { EdituserComponent } from './components/edituser/edituser.component';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { NotesCollectionsComponent } from './components/notes-collections/notes-collections.component';
import { FriendshipsComponent } from './components/friendships/friendships.component';
import { FriendrequestsComponent } from './components/friendrequests/friendrequests.component';
import { FriendshipsadminComponent } from './components/friendshipsadmin/friendshipsadmin.component';
import { CollectionsadminComponent } from './components/collectionsadmin/collectionsadmin.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'listNotes', component: ListnotesComponent},
  { path: 'listUsers', component: UsermanagementComponent},
  { path: 'noteCollections', component: NotesCollectionsComponent},
  { path: 'noteCollectionsadmin', component: CollectionsadminComponent},
  { path: 'noteCollections/:useremail', component: NotesCollectionsComponent},
  { path: 'adminMenu', component: AdminMenuComponent},
  { path: 'listNotesAdmin', component: ListNotesAdminComponent},
  { path: 'create/note', component: CreatenoteComponent},
  { path: 'create/note/:useremail', component: CreatenoteComponent},
  { path: 'edit/note/:noteID', component: EditnoteComponent},
  { path: 'edit/user/:userID', component: EdituserComponent},
  { path: 'editAdmin/note/:noteID', component: EditNotesAdminComponent},
  { path: 'listNotes/:useremail', component: ListnotesComponent},
  { path: 'friendships', component: FriendshipsComponent},
  { path: 'friendshipsadmin', component: FriendshipsadminComponent},
  { path: 'friendrequests', component: FriendrequestsComponent},
  { path: 'friendships/:useremail', component: FriendshipsComponent},
  { path: 'friendrequests/:useremail', component: FriendrequestsComponent},
  { path: 'edit/note/:noteID/:useremail', component: EditnoteComponent},
  { path: 'editAdmin/note/:noteID/:useremail', component: EditNotesAdminComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
