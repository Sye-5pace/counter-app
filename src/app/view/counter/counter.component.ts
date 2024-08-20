import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/reusable/button/button.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [ ButtonComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

}
