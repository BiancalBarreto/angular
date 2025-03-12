import { Component, signal } from '@angular/core';

//components
import { InputAddItemComponent } from '../../components/input-add-item/input-add-item.component';

@Component({
  selector: 'app-list',
  imports: [InputAddItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  public addItem = signal(true); 

}
