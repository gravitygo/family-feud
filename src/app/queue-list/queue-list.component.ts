import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-queue-list',
  templateUrl: './queue-list.component.html',
})
export class QueueListComponent implements OnInit {
  queue: string[] = [];

  constructor(private websocketService: WebsocketService) {}

  ngOnInit(): void {
    this.websocketService.getMessages().subscribe((message) => {
      if (message.type === 'queue') {
        this.queue = message.queue;
      }
    });
  }
}
