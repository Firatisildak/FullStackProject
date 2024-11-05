import { Component } from '@angular/core';
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ETicaretClient';
  ngAfterViewInit() {
    $(document).ready(() => {
      alert("asd");
    });
  }
}
