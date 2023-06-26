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
		throw new Error('Method not implemented.');
	}
}
