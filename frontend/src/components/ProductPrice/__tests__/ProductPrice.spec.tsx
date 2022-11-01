import { render, screen } from "@testing-library/react";
import ProductPrice from "..";


test('ProductPrice should render ProductPrice', () => {
    const price = 2190.1;
    render(<ProductPrice price={price}/>);
    //screen.debug();
    expect(screen.getByText('R$')).toBeInTheDocument();
    expect(screen.getByText('2.190,10')).toBeInTheDocument();
});