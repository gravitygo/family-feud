import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameMasterComponent } from './game-master/game-master.component';
import { TeamComponent } from './team/team.component';
import { QueueListComponent } from './queue-list/queue-list.component';

const routes: Routes = [
  { path: 'game-master', component: GameMasterComponent },
  { path: 'team/:color', component: TeamComponent },
  { path: 'list', component: QueueListComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
