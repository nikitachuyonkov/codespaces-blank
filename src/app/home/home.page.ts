import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

interface Beer {
  id: string;
  beer_name: string;
  producer: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  myname: string = "Никита";
  
  mylist: string[] = []; 
  beer: Beer[] = [];

  newName: string = '';
  newProducer: string = '';

  constructor() {}

  addItem() {
    if (this.newName.trim() && this.newProducer.trim()) {
      const newItem: Beer = {
        id: uuidv4(),
        beer_name: this.newName,
        producer: this.newProducer
      };

      this.beer.push(newItem);
      this.mylist.push(this.newName);

      // Очистка полей ввода
      this.newName = '';
      this.newProducer = '';
    }
  }

  // Метод для удаления элемента по индексу
  deleteItem(index: number) {
    // Удаляем из основного списка объектов
    this.beer.splice(index, 1);
    
    // Удаляем соответствующее название из вспомогательного списка
    if (index >= 0 && index < this.mylist.length) {
      this.mylist.splice(index, 1);
    }
  }
}