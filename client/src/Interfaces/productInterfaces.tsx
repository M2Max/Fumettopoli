export interface productObject{
    productInCart: string;
    Image: string;
    quantityInCart: number;
    totalPriceCart: number;
}

export interface fullProductObject{
    Name: string;
    Category: string;
    Description: string;
    Image: string;
    QuantityAvailable: number;
    Price: number;
}

export interface productSlideObject{
    Name: string;
    Image: string;
}
