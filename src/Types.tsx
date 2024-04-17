
export interface Product {
  id: number;
  title: string;
  description: string;
}
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
}
export interface Data {
  products?: Product[];
  users?: User[];
  total: Number;
  skip: Number;
  limit: Number;
}
