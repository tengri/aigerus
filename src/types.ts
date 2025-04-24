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
}
