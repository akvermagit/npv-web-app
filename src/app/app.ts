import { Component } from '@angular/core';
import { NpvForm } from "./npv-form/npv-form";

@Component({
  selector: 'app-root',
  imports: [ NpvForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'npv-web-app';
}
