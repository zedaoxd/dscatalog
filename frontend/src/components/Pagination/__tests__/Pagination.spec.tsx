import { render, screen } from "@testing-library/react";
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
});
