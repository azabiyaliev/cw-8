export interface IQuoteForm {
  category: string;
  author: string;
  quote: string;
}

export interface IQuote {
  id: string;
  category: string;
  author: string;
  quote: string;
}

export interface IQuoteAPI {
  [id: string]: IQuote;
}

