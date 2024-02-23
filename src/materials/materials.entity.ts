export interface IPriceList {
  product: string;
  price: number;
}

export interface MaterialsEntity {
  img: string;
  title: string;
  text: string;
  priceList?: IPriceList[];
}