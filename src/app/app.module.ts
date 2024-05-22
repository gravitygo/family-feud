import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameMasterComponent } from './game-master/game-master.component';
import { TeamComponent } from './team/team.component';
import { QueueListComponent } from './queue-list/queue-list.component';
import { WebsocketService } from './websocket.service';
import { UniquePipe } from './unique.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GameMasterComponent,
    TeamComponent,
    QueueListComponent,
    UniquePipe,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [WebsocketService],
  bootstrap: [AppComponent],
})
export class AppModule {}
