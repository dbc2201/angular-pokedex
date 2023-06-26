import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonHttpService } from 'src/app/services/pokemon-http.service';

@Component({
	selector: 'app-pokemon-list-manager',
	templateUrl: './pokemon-list-manager.component.html',
	styleUrls: ['./pokemon-list-manager.component.css'],
})
export class PokemonListManagerComponent implements OnInit {
	// dummy array to simulate the number of cards
	pokemonArray: Pokemon[] = [];

	constructor(private pokemonService: PokemonHttpService) {}

	ngOnInit(): void {
		let numberOfPokemonToFetch = 200;
		for (
			let pokemonID = 1;
			pokemonID <= numberOfPokemonToFetch;
			pokemonID++
		) {
			this.pokemonService.getPokemon(pokemonID).subscribe({
				next: (pokemon) => this.pokemonArray.push(pokemon),
				error: (error) => {
					alert('error loading data form the API');
					console.error(error);
					console.error(error.message);
				},
			});
		}
	}
}
