export class PokemonResponse {
	private name: string;
	private url: string;

	constructor(name: string, url: string) {
		this.name = name;
		this.url = url;
	}

	public get pokemonName(): string {
		return this.name;
	}

	public set pokemonName(name: string) {
		this.name = name;
	}

	public get pokemonURL(): string {
		return this.url;
	}

	public set pokemonURL(url: string) {
		this.url = url;
	}
}
