import { render, screen } from "@testing-library/react";
import ButtonIcon from "..";


test('ButtonIcon should render button with given text', () => {
    const text = 'Fazer login';
    render(<ButtonIcon text={text}/>);
    //screen.debug();
    expect(screen.getByText(text)).toBeInTheDocument();
})