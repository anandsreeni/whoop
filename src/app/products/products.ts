import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cards } from '../cards/cards';

@Component({
  selector: 'app-products',
  imports: [RouterLink,Cards],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

}
