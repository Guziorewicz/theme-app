import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlocksComponent } from './blocks/blocks.component';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [FormsModule, BlocksComponent, NgFor, NgIf],
})
export class AppComponent {

}
