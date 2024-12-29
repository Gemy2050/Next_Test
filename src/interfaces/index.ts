export interface IAxiosError {
  message: string;
  status: number;
  data: {
    message: string;
    statusCode: number;
  };
}

export interface IProductImage {
  id: number;
  imageUrl: string;
}

export interface IProduct {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  hasDiscount: boolean;
  priceBeforeDiscount: number;
  productCategoryId: number;
  category: string;
  quantity?: number;
  variants?: {
    id: number;
    color: string;
    sizes: [];
  }[];
  productImages: IProductImage[];
}
