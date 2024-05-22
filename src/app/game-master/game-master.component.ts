import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-game-master',
  templateUrl: './game-master.component.html',
})
export class GameMasterComponent implements OnInit {
  queue: string[] = [];

  constructor(private websocketService: WebsocketService) {}

  ngOnInit(): void {
    this.websocketService.getMessages().subscribe((message) => {
      if (message.type === 'queue') {
        this.queue = message.queue;
      }
    });
  }

  resetQueue() {
    this.websocketService.sendMessage({ type: 'resetQueue' });
  }
}
