export interface MediaFile {
  id: number;
  url: string;
}

export type Media = MediaFile[];

export interface IProduct {
  id: number;
  merchantId: number;
  title: string;
  price: number;
  stock: number;
  media: Media;
}
