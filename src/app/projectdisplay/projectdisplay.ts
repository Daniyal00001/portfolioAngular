import { Component, Output, EventEmitter  , Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  
  selector: 'app-projectdisplay',
  imports: [CommonModule],
  templateUrl: './projectdisplay.html',
  styleUrl: './projectdisplay.css'
})
export class Projectdisplay {
  @Output() closed = new EventEmitter<void>();  // these both are properties of its parent 
  @Input() project: any;

  emitClose() {
    this.closed.emit();  // notifies parent to run `no()`
  }
}
