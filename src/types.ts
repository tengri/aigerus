export interface IPhoto {
  width: number;
  height: number;
  url: string;
}

export interface IFlat {
  id: string;
  name: string;
  image: string;
  residence: string;
  address: string;
  price: number;
  description: string;
  files: IFiles[];
  floor: number;
  totalFloors: number;
  capacity: number;
  area: number;
  tags: {
    name: string;
    value: string;
  }[];
}

export interface IListResponse<T> {
  data: T[];
  total: number;
}
