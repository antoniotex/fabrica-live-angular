import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../model/Pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent {
  @Input()
  public pokemon: Pokemon | undefined

  public formatId = (id?: number): string => {
    if(!id){
      return '000'
    }
    const aux = id.toString()

    if(aux.length === 1){
      return `00${id}`
    }

    if(aux.length === 2){
      return `0${id}`
    }

    return aux
  }
}
