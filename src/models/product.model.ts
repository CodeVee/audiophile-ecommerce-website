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
}

type Category = 'earphones' | 'headphones' | 'speakers'

interface ScreenImage {
    mobile: string;
    tablet: string;
    desktop: string;
}

interface Accessory {
    quantity: number;
    item: string;
}

interface SimilarProduct {
    slug: string;
    name: string;
    image: ScreenImage;
}