import './styles.css';

import ProductPrice from 'components/ProductPrice';
import { Product } from 'types/product';
import { CategoryBadge } from '../CategoryBadge';
import { Link } from 'react-router-dom';
import { requestBackend } from 'utils/requests';

type Props = {
  product: Product;
  onDelete: () => void;
};

const ProductCrudCard = ({ product, onDelete }: Props) => {
  const handleDelete = (productId: number) => {
    const confirmDelete = window.confirm(
      `Tem certeza que deseja deletar o produto ${product.name}?`
    );
    if (!confirmDelete) {
      return;
    }

    requestBackend({
      method: 'DELETE',
      url: `/products/${productId}`,
      withCredentials: true,
    }).then(() => onDelete());
  };

  return (
    <div className="base-card product-crud-card">
      <div className="product-crud-card-top-container">
        <img src={product.imgUrl} alt={product.name} />
      </div>
      <div className="product-crud-card-description">
        <div className="product-crud-card-bottom-container">
          <h6>{product.name}</h6>
          <ProductPrice price={product.price} />
        </div>
        <div className="product-crud-categories-container">
          {product.categories.map((c) => (
            <CategoryBadge name={c.name} key={c.id} />
          ))}
        </div>
      </div>
      <div className="product-crud-card-buttons-container">
        <button
          onClick={() => handleDelete(product.id)}
          className="btn btn-outline-danger product-crud-card-button product-crud-card-button-first"
        >
          EXCLUIR
        </button>
        <Link to={`/admin/products/${product.id}`}>
          <button className="btn btn-outline-secondary product-crud-card-button">
            EDITAR
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCrudCard;
