import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
	selector: 'app-pokemon-list-manager',
	templateUrl: './pokemon-list-manager.component.html',
	styleUrls: ['./pokemon-list-manager.component.css'],
})
export class PokemonListManagerComponent {
	// dummy array to simulate the number of cards
	pokemonArray: Pokemon[] = [];
}
