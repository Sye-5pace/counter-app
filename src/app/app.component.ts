import { Component } from '@angular/core';
import { CounterViewComponent } from './components/counter-view/counter-view.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'counter-app';
}
