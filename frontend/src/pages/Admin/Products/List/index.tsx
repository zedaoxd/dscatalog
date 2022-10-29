import { AxiosRequestConfig } from 'axios';
import ProductCrudCard from 'pages/Admin/Products/ProductCrudCard';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from 'types/product';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'utils/requests';
import './styles.css';

export const List = () => {
  const [page, setPage] = useState<SpringPage<Product>>();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/products',
      params: {
        page: 0,
        size: 50,
        sort: 'name,desc',
      },
    };

    requestBackend(config).then((response) => {
      setPage(response.data);
    });
  };

  return (
    <div className="product-crud-container">
      <div className="product-crud-bar-container">
        <Link to="/admin/products/create">
          <button className="btn btn-primary text-white btn-crud-add">
            ADCIONAR
          </button>
        </Link>

        <div className="base-card product-filter-container">Search bar</div>
      </div>
      <div className="row">
        {page?.content.map((p) => (
          <div key={p.id} className="col-sm-6 col-md-12">
            <ProductCrudCard product={p} onDelete={getProducts} />
          </div>
        ))}
      </div>
      ;
    </div>
  );
};
