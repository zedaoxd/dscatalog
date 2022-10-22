import { ReactComponent as Error403svg } from 'assets/images/403-Error.svg';
import './styles.css';

const Error403 = () => {
  return (
    <div className="e-container">
      <div>
        <div className="e-content-container">
          <h1 className="error">Acesso Negado!</h1>
          <p>
            Se você acha que isso é um erro, entre em contato com o administrador do sistema.
          </p>
        </div>
      </div>
      <div>
        <Error403svg />
      </div>
    </div>
  );
}

export default Error403;
