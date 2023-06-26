import { Component } from '@angular/core';

@Component({
	selector: 'app-pokemon-list-manager',
	templateUrl: './pokemon-list-manager.component.html',
	styleUrls: ['./pokemon-list-manager.component.css'],
})
export class PokemonListManagerComponent {
	// dummy array to simulate the number of cards
	pokemonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
