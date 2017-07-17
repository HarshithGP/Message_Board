import { Component} from '@angular/core';
import { MessagesComponent } from './messages-component';
import { NewMessageComponent } from './new-message.component';

@Component({
  selector: 'home',
  template: `
      <new-message></new-message>
      <messages></messages>`
})
export class HomeComponent  {

/*
  @ViewChild(MessagesComponent) messages: MessagesComponent;

  onPosted(message) {
    this.messages.messages.push(message);
  }
  */
}
