import { Component } from '@angular/core';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './app-user-kitten.component.html',
  styleUrls: ['./app-user-kitten.component.css']
})
export class AppUserKittenComponent {
  adoptedKittens: any[] = [];
  onKittenAdopted(kitten: any) {
    this.adoptedKittens.push(kitten);
  }
}
