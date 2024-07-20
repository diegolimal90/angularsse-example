import { Component, OnInit } from '@angular/core';
import { SseService } from '../sse.service';

@Component({
  selector: 'app-sse-messages',
  templateUrl: './sse-messages.component.html',
  styleUrls: ['./sse-messages.component.scss']
})
export class SseMessagesComponent implements OnInit {
  messages: string[] = [];

  constructor(private sseService: SseService) { }

  ngOnInit(): void {
    this.sseService.getServerSentEvent('http://127.0.0.1:8080/api/heroes')
      .subscribe(message => {
        this.messages.push(message);
      });
  }
}
