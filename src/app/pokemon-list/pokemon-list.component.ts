import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../model/Pokemon';
import { Type } from '../model/Type';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent {
  public pokemons: Pokemon[] = [
    {image: '', number: 1, name: 'Bulbasaur', types: [Type.Grass, Type.Poison]},
    {image: '', number: 2, name: 'Ivysaur', types: [Type.Grass, Type.Poison]},
    {image: '', number: 3, name: 'Venusaur', types: [Type.Grass, Type.Poison]},
    {image: '', number: 4, name: 'Charmander', types: [Type.Fire]},
  ]
}
