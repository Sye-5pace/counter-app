import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/reusable/button/button.component';
import anime from 'animejs/lib/anime.es.js';


@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [ ButtonComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})

export class CounterComponent {
  count: number = 0;
  ngAfterViewInit() :void {
    anime({
      targets: 'main',
      translateY: [300, 0],
      easing: 'easeInOutQuad',
      borderRadius: ['50%', '.625rem'],
      width: ['0px', '35rem'],
      height: ['0px', '15.5rem'],
      opacity: [0, 1],
      delay: 300,
      scale: [0.8, 1]
    });
  }

}
