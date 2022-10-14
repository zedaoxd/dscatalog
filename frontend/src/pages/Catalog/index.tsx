import Pagination from 'components/Pagination';
import ProductCard from 'components/ProductCard';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from 'types/product';
import { SpringPage } from 'types/vendor/spring';
import axios from 'axios';

import './styles.css';
import { BASE_URL } from 'utils/requests';
import { AxiosParams } from 'types/vendor/axios';

const Catalog = () => {

  const [page, setPage] = useState<SpringPage<Product>>();

  useEffect(() => {
    const param : AxiosParams = {
      method: 'GET',
      url: `${BASE_URL}/products`,
      params: {
        page: 0,
        size: 12,
      },
    };

    axios(param)
      .then(response => setPage(response.data))
  }, []);

  return (
    <div className="container my-4 catalog-container">
      <div className="row catalog-title-container">
        <h1>Catálogo de produtos</h1>
      </div>
      <div className="row">
        {page?.content?.map(product => (
          <div className="col-sm-6 col-lg-4 col-xl-3" key={product.id}>
            <Link to={"/products/" + product.id}>
              <ProductCard product={product}/>
            </Link>
          </div>
        ))}
      </div>
      <div className="row">
        <Pagination />
      </div>
    </div>
  );
};

export default Catalog;
