

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
export interface IBookResponse {
  success: boolean;
  message: string;
  data: IBook[];
}

export interface IBorrowData {
  book: string;
  quantity: number;
  dueDate: string;
}

export interface IBorrowSummary {
  totalQuantity: number;
  book: {
    title: string;
    isbn: string;
  };
}

export interface IBorrowSummaryResponse {
  success: boolean;
  message: string;
  data: IBorrowSummary[];
}

export interface IApiError {
  status: number;
  data: {
    success: boolean;
    message: string;
    error?: unknown;
  };
}
