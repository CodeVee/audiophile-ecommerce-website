export interface Product {
    id: number;
    slug: string;
    name: string;
    image: ScreenImage;
    category: Category;
    categoryImage: ScreenImage;
    new: boolean;
    price: number;
    description: string;
    features: string;
    includes: Accessory[];
    gallery: {
      first: ScreenImage;
      second: ScreenImage;
      third: ScreenImage;
    };
    others: SimilarProduct[];
    cartImage: string;
    formattedPrice: string;
    formattedDescription: string[];
}

type Category = 'earphones' | 'headphones' | 'speakers'

export interface ScreenImage {
    mobile: string;
    tablet: string;
    desktop: string;
}

interface Accessory {
    quantity: number;
    item: string;
}

export interface SimilarProduct {
    slug: string;
    name: string;
    image: ScreenImage;
}

export interface CartProduct {
    productId: number;
    quantity: number;
    price: number;
    productName: string;
    imageUrl: string;
    formattedPrice: string;
}