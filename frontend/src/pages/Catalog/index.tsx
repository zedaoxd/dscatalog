import Pagination from 'components/Pagination';
import ProductCard from 'components/ProductCard';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from 'types/product';
import { SpringPage } from 'types/vendor/spring';
import axios from 'axios';

import './styles.css';
import CardLoader from './CardLoader';

const Catalog = () => {
  const [page, setPage] = useState<SpringPage<Product>>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    getProducts(0);
  }, []);

  const getProducts = (pageNumber: number) => {
    setIsLoading(true);
    axios({
      method: 'GET',
      baseURL: 'https://dscatalog-production-1c02.up.railway.app',
      url: '/products',
      params: {
        page: pageNumber,
        size: 12,
        sort: 'name,desc',
      },
    })
      .then((response) => setPage(response.data))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="container my-4 catalog-container">
      <div className="row catalog-title-container">
        <h1>Catálogo de produtos</h1>
      </div>
      <div className="row">
        {isLoading ? (
          <CardLoader />
        ) : (
          page?.content?.map((product) => (
            <div className="col-sm-6 col-lg-4 col-xl-3" key={product.id}>
              <Link to={'/products/' + product.id}>
                <ProductCard product={product} />
              </Link>
            </div>
          ))
        )}
      </div>
      <div className="row">
        <Pagination
          pageCount={page ? page.totalPages : 0}
          range={3}
          onChange={getProducts}
          forcePage={page?.number}
        />
      </div>
    </div>
  );
};

export default Catalog;
