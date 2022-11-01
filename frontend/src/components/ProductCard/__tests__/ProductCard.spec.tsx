import { render, screen } from "@testing-library/react";
import { Product } from "types/product";
import ProductCard from "..";


test('ProductPrice should render ProductPrice', () => {
    const product: Product = {
        name: 'TV', 
        price: 2022,
        imgUrl: 'https://google.com',
    } as Product;

    render(<ProductCard product={product}/>);
    //screen.debug();
    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByAltText(product.name)).toBeInTheDocument();
    expect(screen.getByText('R$')).toBeInTheDocument();
    expect(screen.getByText('2.022,00')).toBeInTheDocument();
});