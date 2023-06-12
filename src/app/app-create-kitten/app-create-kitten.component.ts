import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './app-create-kitten.component.html',
  styleUrls: ['./app-create-kitten.component.css']
})
export class AppCreateKittenComponent {
  @Output() kittenAdded: EventEmitter<any> = new EventEmitter<any>();

  kitten = {
    name: '',
    breed: '',
    birthdate: '',
    photo: ''
  };

  addKitten() {
    this.kittenAdded.emit(this.kitten);
        this.kitten = {
      name: '',
      breed: '',
      birthdate: '',
      photo: ''
    };
  }
}
