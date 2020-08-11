import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestPokeApiService {
  pokemones : any
  constructor() {
      this.pokemones = this.getRequestAPi()
      //console.log(this.getPokemon())
   }
   getRequestAPi(){
     return fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(response => response.json())
    .then(data => ( data))
      //console.log(data.results)
    }

   getPokemon(){
      return this.pokemones
  }
}
