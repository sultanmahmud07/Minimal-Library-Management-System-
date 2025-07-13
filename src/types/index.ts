// export interface Book {
//   _id: string;
//   title: string;
//   author: string;
//   genre: string;
//   isbn: string;
//   description?: string;
//   copies: number;
//   available: boolean;
// }
// src/types/index.ts

export interface IBook {
  _id: string; // from MongoDB
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
}

export interface IBorrowData {
  book: string;
  quantity: number;
  dueDate: string;
}

export interface IBorrowSummary {
  title: string;
  isbn: string;
  totalQuantity: number;
}
