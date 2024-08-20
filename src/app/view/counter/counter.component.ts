import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store'
import { CommonModule } from '@angular/common';
import anime from 'animejs/lib/anime.es.js';
import { ICounterState } from '../../store/counter.model';
import { ButtonComponent } from '../../components/reusable/button/button.component';
import { increment , decrement, reset } from '../../store/counter.actions'
import { selectCount } from '../../store/counter.selectors';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [ CommonModule, ButtonComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})

export class CounterComponent {
  count!: number;

  constructor(private store: Store<{count: ICounterState}>){}

  ngOnInit(){
    this.store.pipe(select(selectCount)).subscribe(
      (count) => this.count = count
    );
  }

  increment(): void {
    this.store.dispatch(increment());
  }

  decrement(): void {
    console.log(this.count);
    this.store.dispatch(decrement());
  }

  reset(): void {
    this.store.dispatch(reset());
  }

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
