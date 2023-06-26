import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class PokemonHttpService {
	constructor(private httpClient: HttpClient) {}

	/**
	 * this function fetches a single pokemon at a time from the PokeAPI
	 * @param pokemonID the id of the pokemon to be fetched
	 * @returns an observable of the pokemon object fetched
	 */
	getPokemon(pokemonID: number): Observable<Pokemon> {
		const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonID}`;
		return this.httpClient.get<Pokemon>(URL);
	}
}
