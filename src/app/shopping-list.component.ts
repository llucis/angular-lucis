import { Component, Input } from '@angular/core';

@Component({
  selector: 'shopping-list',
  template: `
    <h1>Shopping List</h1>
    <ul>
    <li *ngFor="let li of list"> 
       {{li}}
    </li>
    </ul>
    <input [(ngModel)]="newItem" />
    <button (click)="addNewItem()" >Add</button>
  `,
  styles: [``]
})
export class ShoppingListComponent  {
 list = [
   'Milk',
   'Eggs',
   'Bread'
 ]
 newItem = ''
 
 addNewItem() {
   this.list.push(this.newItem);
   this.newItem = '';
 }
}
