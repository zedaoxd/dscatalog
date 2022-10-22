import { ReactComponent as Error403svg } from 'assets/images/403-Error.svg';
import './styles.css';

const Error403 = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-content-container error">
          <div>
            <h1>Acesso Negado!</h1>
            <p>
              Se você acha que isso é um erro, entre em contato com o administrador do sistema.
            </p>
          </div>
        </div>
        <div className="home-image-container">
          <Error403svg />
        </div>
      </div>
    </div>
  );
}

export default Error403;
