import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import ProductPrice from 'components/ProductPrice';
import { Link } from 'react-router-dom';

import './styles.css';

const ProductDetails = () => {
    return (
        <div className="product-details-container">
            <div className="base-card product-details-card">
                <Link to="/products">
                    <div className="goback-container">
                        <ArrowIcon />
                        <h2>VOLTAR</h2>
                    </div>
                </Link>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="img-container">
                            <img src="https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg" alt="nome do produto" />
                        </div>
                        <div className="name-price-container">
                            <h1>Nome do produto</h1>
                            <ProductPrice price={2345.67} />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="description-container">
                            <h2>Descrição do produto</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quia perferendis voluptate, est dolore vero reprehenderit blanditiis a at doloremque quas cupiditate iure iusto natus pariatur voluptatem! Odit, libero exercitationem?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;