export class Pokemon {
	id: number;
	name: string;
	type: string;
	imageURL: string;
	sprites: any;
	types: any;
	height: any;
	weight: any;

	constructor(id: number, name: string, type: string, imageURL: string) {
		this.id = id;
		this.name = name;
		this.type = type;
		this.imageURL = imageURL;
	}
}
