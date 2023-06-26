export class Pokemon {
	private id: number;
	private name: string;
	private type: string;
	private imageURL: string;

	constructor(id: number, name: string, type: string, imageURL: string) {
		this.id = id;
		this.name = name;
		this.type = type;
		this.imageURL = imageURL;
	}

	public get pokemonID(): number {
		return this.id;
	}

	public get pokemonName(): string {
		return this.name;
	}

	public get pokemonType(): string {
		return this.type;
	}

	public get pokemonImageURL(): string {
		return this.imageURL;
	}

	public set pokemonID(id: number) {
		this.id = id;
	}

	public set pokemonName(name: string) {
		this.name = name;
	}

	public set pokemonType(type: string) {
		this.type = type;
	}

	public set pokemonImageURL(imageURL: string) {
		this.imageURL = imageURL;
	}
}
