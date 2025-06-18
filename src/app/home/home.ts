import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Carosel } from '../carosel/carosel';

@Component({
  selector: 'app-home',
  imports: [RouterLink,Carosel],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
