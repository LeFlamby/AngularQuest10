import { Component, Input } from '@angular/core';
import { AppUserKittenComponent } from '../app-user-kitten/app-user-kitten.component';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './app-list-kitten.component.html',
  styleUrls: ['./app-list-kitten.component.css']
})
export class AppListKittenComponent {
  @Input() appUserKittenComponent!: AppUserKittenComponent;

  kittens = [
    {
      name: 'Chat',
      breed: 'Gouttière',
      birthdate: '2019-04-07',
      photo: 'https://placekitten.com/300/300'
    },
    {
      name: 'Garfield',
      breed: 'GrosTas',
      birthdate: '1987-02-25',
      photo: 'https://placekitten.com/300/301'
    },
    {
      name: 'Kitkat',
      breed: 'Chocolate',
      birthdate: '2012-12-12',
      photo: 'https://placekitten.com/300/302'
    },
    {
      name: 'Bleurk',
      breed: 'Space-Cat',
      birthdate: 'Unknown',
      photo: 'https://placekitten.com/300/303'
    },
    {
      name: 'Oussama',
      breed: 'Explosive',
      birthdate: '2001-09-11',
      photo: 'https://placekitten.com/300/304'
    }
  ];

  onKittenAdded(kitten: any):void {
   
  }

  selectedKitten: any = null;

  showKittenDetails(kitten: any) {
    this.selectedKitten = kitten;
  }

  hideKittenDetails() {
    this.selectedKitten = null;
  }

  adoptKitten(kitten: any) {
    const index = this.kittens.indexOf(kitten);
    if (index !== -1) {
      this.kittens.splice(index, 1);
      this.appUserKittenComponent.onKittenAdopted(kitten);
    }
  }
  
}
