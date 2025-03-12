import { ChangeDetectorRef, Component, ElementRef, EventEmitter, inject, Output, ViewChild } from '@angular/core';
import { IListItems } from '../../interface/IListItems.interface';

@Component({
  selector: 'app-input-add-item',
  imports: [],
  templateUrl: './input-add-item.component.html',
  styleUrl: './input-add-item.component.scss'
})
export class InputAddItemComponent {
  
  #cdr = inject(ChangeDetectorRef);

  @ViewChild("inputText") public inputText!: ElementRef;
  @Output () public outputListItems = new EventEmitter<IListItems>();
  public focusAndAddItem(value: string) {
    if(value){
      this.#cdr.detectChanges();
      this.inputText.nativeElement.value ='';

      //gerando ID
      const dataAtual = new Date();
      const timestamp = dataAtual.getTime();
      const id = `ID ${timestamp}`

      this.outputListItems.emit({
        id,
        checked: false,
        value
      })
      return this.inputText.nativeElement.focus(); 
    }
  }
}
