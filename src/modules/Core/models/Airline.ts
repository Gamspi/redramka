export interface Airline {
  id: number;
  name: string;
  country: string;
  logo: string;
  slogan: string;
  head_quaters: string;
  website: string;
  established: string;
}
export interface IPassengers {
  _id: string;
  name: string;
  trips: number;
  airline: Array<Airline>;
  __v: number;
}
export interface IResponse<T> {
  totalPassengers: number;
  totalPages: number;
  data: [T];
}
