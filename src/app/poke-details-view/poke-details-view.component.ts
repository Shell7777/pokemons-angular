import { Component, OnInit } from '@angular/core';
import {ActivatedRoute}  from '@angular/router'
@Component({
  selector: 'app-poke-details-view',
  templateUrl: './poke-details-view.component.html',
  styleUrls: ['./poke-details-view.component.css']
})
export class PokeDetailsViewComponent implements OnInit {

  image:any
  name :any
  constructor(private ruta:ActivatedRoute) {
    this.ruta.params.subscribe(parameter => {

       fetch("https://pokeapi.co/api/v2/pokemon/"+parameter.i+"/")
        .then(request => request.json())
        .then(data => {
          this.image = data.sprites.front_default
          this.name = data.name
        })

    })
   }

  ngOnInit(): void {
  }

}


