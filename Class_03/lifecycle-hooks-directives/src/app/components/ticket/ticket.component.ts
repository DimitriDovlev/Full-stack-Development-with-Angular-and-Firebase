import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from 'src/app/interfaces/ticket';
import { TicketStatus } from 'src/app/interfaces/ticket-status';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
})
export class TicketComponent implements OnInit {
  @Input() ticket: Ticket;
  @Output() emitTicket: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  constructor() {}

  ngOnInit(): void {}

  displayTicket(ticket: Ticket): void {
    this.emitTicket.emit(ticket);
  }
}
