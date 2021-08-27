import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PlayerListComponent} from './player/player-list/player-list.component';
import {PlayerEditComponent} from './player/player-edit/player-edit.component';
import {PlayerDeleteComponent} from './player/player-delete/player-delete.component';
import {PlayerCreateComponent} from './player/player-create/player-create.component';


const routes: Routes = [
  {
    path: '',
    component: PlayerListComponent
  },
  {
    path: 'create',
    component: PlayerCreateComponent
  },
  {
    path: 'edit/:id',
    component: PlayerEditComponent
  },
  {
    path: 'delete/:id',
    component: PlayerDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
