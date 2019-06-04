import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  petName = 'dog';
  petImage = 'https://nuoithu.com/wp-content/uploads/2018/11/Boo-Puppie-For-Sale.jpg';

  updateName(name){
    this.petName = name;
  }

  updateImage(image){
    this.petImage = image;
  }
  constructor() { }

  ngOnInit() {
  }

}
