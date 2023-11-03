export type IQuotes = {
  advice: string;
  date: string;
  id: number;
};
export interface ICardDTO {
  quote: IQuotes | undefined;
  getQuote: () => void;
}
