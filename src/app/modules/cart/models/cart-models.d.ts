export interface ProductOptions {
    size?: string;
    color?: string
}
export interface CartImage {
    baseUrl: string;
    caption?: string | null;
    title?: string;
    URI?: {
        small?: string;
        medium: string;
        large?: string;
        xlarge?: string;
    }
}
export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    inStock: boolean;
    image?: CartImage,
    options?: ProductOptions
}