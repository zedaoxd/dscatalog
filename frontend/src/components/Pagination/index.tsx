import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import ReactPaginate from 'react-paginate';

import './styles.css';

type Props = {
  pageCount: number;
  range: number;
  onChange?: (pageNumber: number) => void;
  forcePage?: number;
};

const Pagination = ({ pageCount, range, onChange, forcePage }: Props) => {
  return (
    <ReactPaginate
      forcePage={forcePage}
      pageCount={pageCount}
      pageRangeDisplayed={range}
      marginPagesDisplayed={1}
      containerClassName="pagination-container"
      pageLinkClassName="pagination-item"
      breakClassName="pagination-item"
      previousClassName="arrow-previous"
      nextLinkClassName="arrow-next"
      activeLinkClassName="pagination-link-active"
      disabledClassName="arrow-inactive"
      onPageChange={(items) => (onChange ? onChange(items.selected) : {})}
      previousLabel={<ArrowIcon data-testid="arrow-previous-1" />}
      nextLabel={<ArrowIcon data-testid="arrow-next-1" />}
    />
  );
};

export default Pagination;
