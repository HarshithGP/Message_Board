import { Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <nav></nav>
      <router-outlet></router-outlet>
      `
})
export class AppComponent  {

/*
  @ViewChild(MessagesComponent) messages: MessagesComponent;

  onPosted(message) {
    this.messages.messages.push(message);
  }
  */
}
