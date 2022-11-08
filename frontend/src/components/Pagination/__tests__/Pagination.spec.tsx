import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pagination from "..";


describe('Pagination tests', () => {
    test('should render Pagination', () => {
       const pageCount = 3;
       const range = 3;
       
       render(<Pagination pageCount={pageCount} range={range}/>);

       expect(screen.getByText('1')).toBeInTheDocument();
       expect(screen.getByText('1')).toHaveClass('pagination-link-active');

       expect(screen.getByText('2')).toBeInTheDocument();
       expect(screen.getByText('2')).not.toHaveClass('pagination-link-active');

       expect(screen.getByText('3')).toBeInTheDocument();
       expect(screen.getByText('3')).not.toHaveClass('pagination-link-active');

       expect(screen.queryByText('4')).not.toBeInTheDocument();
       
    });

    test('next arrow should call on change', () => {
        const pageCount = 3;
        const range = 3;
        const onChange = jest.fn();
       
        render(
            <Pagination 
                pageCount={pageCount} 
                range={range} 
                onChange={onChange} 
            />
        );
        const arrowNext = screen.getByTestId('arrow-next-1');

        userEvent.click(arrowNext);
        expect(onChange).toHaveBeenCalledWith(1);
       
    });

    // test('previous arrow should call on change', () => {
    //     const pageCount = 3;
    //     const range = 3;
    //     const onChange = jest.fn();
    //     const forcePage = 1;
       
    //     render(
    //         <Pagination 
    //             pageCount={pageCount} 
    //             range={range} 
    //             onChange={onChange} 
    //             forcePage={forcePage}
    //         />
    //     );
    //     const arrowPrevious = screen.getByTestId('arrow-previous-1');

    //     userEvent.click(arrowPrevious);
    //     expect(onChange).toHaveBeenCalledWith(0);
       
    // });

    // test('page link should call on change', () => {
    //     const pageCount = 3;
    //     const range = 3;
    //     const onChange = jest.fn();
       
    //     render(
    //         <Pagination 
    //             pageCount={pageCount} 
    //             range={range} 
    //             onChange={onChange} 
    //         />
    //     );
    //     const page = screen.getByText('2');

    //     userEvent.click(page);
    //     expect(onChange).toHaveBeenCalledWith(1);
       
    // });
});
