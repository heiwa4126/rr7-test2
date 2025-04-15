export interface Product {
	name: string;
	summary: string;
	description: string;
}

export interface Products {
	[key: string]: Product;
}

export interface ProductWithId extends Product {
	id: string;
}
