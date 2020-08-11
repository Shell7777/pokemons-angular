import { Component, OnInit } from '@angular/core';
import {RequestPokeApiService} from 'src/app/request-poke-api.service'
@Component({
  selector: 'app-poke-view',
  templateUrl: './poke-view.component.html',
  styleUrls: ['./poke-view.component.css']
})
export class PokeViewComponent implements OnInit {
  pokemones:any

  constructor(private _servicioPokeApi:RequestPokeApiService) {

    _servicioPokeApi.getPokemon()
        .then(data =>  {
          this.pokemones = (data.results)
          console.log(this.pokemones)
        });
   }

  ngOnInit(): void {
  }

}
