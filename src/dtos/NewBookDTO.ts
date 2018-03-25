export interface INewBookDTO {
  authors?: number[];
  categories?: number[];
  isbn10?: string;
  isbn13: string;
  publicationDate?: string;
  publishers?: number[];
  title: string;
}

export class NewBookDTO implements INewBookDTO {
  public authors?: number[];
  public categories?: number[];
  public isbn10?: string;
  public isbn13!: string;
  public publicationDate?: string;
  public publishers?: number[];
  public title!: string;
}