import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerListComponent } from './player/player-list/player-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CreatePlayerComponent } from './player/create-player/create-player.component';
import { PlayerEditComponent } from './player/player-edit/player-edit.component';
import { PlayerDeleteComponent } from './player/player-delete/player-delete.component';
import { PlayerCreateComponent } from './player/player-create/player-create.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerEditComponent,
    PlayerDeleteComponent,
   PlayerCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
