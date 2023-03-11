import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListnotesComponent } from './components/listnotes/listnotes.component';
import { CreatenoteComponent } from './components/createnote/createnote.component';
import { EditnoteComponent } from './components/editnote/editnote.component';

const routes: Routes = [
  { path: '', component: ListnotesComponent},
  { path: 'listNotes', component: ListnotesComponent},
  { path: 'create/note', component: CreatenoteComponent},
  { path: 'edit/note/:noteID', component: EditnoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
