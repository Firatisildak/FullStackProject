import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ETicaretClient';

  constructor() {}

  ngOnInit(): void {
    $.get("https://localhost:7160/api/Product", (data) => {
      console.log(data);
    }).fail((error) => {
      console.error("Error:", error);
    });
  }
}
