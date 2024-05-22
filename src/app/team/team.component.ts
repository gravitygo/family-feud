import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
})
export class TeamComponent implements OnInit {
  color: string | null = null;
  buttonColor: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private websocketService: WebsocketService,
  ) {}

  ngOnInit(): void {
    this.websocketService.getMessages().subscribe((message) => {});
    this.color = this.route.snapshot.paramMap.get('color');
    this.buttonColor = 'bg-' + this.color;
  }

  pressButton() {
    if (this.color) {
      this.websocketService.sendMessage({
        type: 'pressButton',
        color: this.color,
      });
    }
  }
}
