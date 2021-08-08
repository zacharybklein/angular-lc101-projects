import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Fav Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://www.sonomacounty.com/sites/default/files/2020-01/cities_towns_sebastopol_sonoma_county_038_1920x968.jpg';
  image3 = 'https://res.cloudinary.com/simpleview/image/upload/v1512627671/clients/albuquerque/dc282394_4c85_4630_87ef_c76eabdd942d_2532a267-9f6f-45e2-b4d3-6b84271c7bbc.jpg';

  constructor() { }

  ngOnInit() {
  }

}