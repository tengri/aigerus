export interface IPhoto {
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  url: string;
}

export interface IApartment {
  id: string;
  name: string;
  image: string;
  residence: string;
  address: string;
  coordinates: { lat: number; lng: number };
  price: number;
  oldPrice: number;
  overview: string;
  params: {
    name: string;
    value: string;
  }[];
  photos: IPhoto[];
}
