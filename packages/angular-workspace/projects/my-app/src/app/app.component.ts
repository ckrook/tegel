import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TegelModule } from 'component-library';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TegelModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'my-app';
}
