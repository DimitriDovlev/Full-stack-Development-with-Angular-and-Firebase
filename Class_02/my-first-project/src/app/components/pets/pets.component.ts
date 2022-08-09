import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss'],
})
export class PetsComponent implements OnInit {
  constructor() {}
  @Input() titleReceive: string;
  @Input() petFromParent: any;
  //With the output decorator we are emmiting an event that will pass data to the parent.
  @Output() titleToSendToParent: EventEmitter<string> =
    new EventEmitter<string>();
  @Output() addLike: EventEmitter<void> = new EventEmitter<void>();

  titleToSend: string = 'Title sent from child to parent!';

  pet = {
    title: 'pet1',
    type: 'Dog',
  };

  pet2 = {
    title: 'pet2',
    type: 'Cat',
  };

  sendTitleToParent() {
    this.titleToSendToParent.emit(this.titleToSend);
  }
  onAddLike() {
    this.addLike.emit();
  }

  ngOnInit(): void {}
}
