import './styles.css';

export const Form = () => {
  return (
    <div className="product-crud-container">
      <div className="base-card product-crud-form-card">
        <h1 className="product-crud-form-title">DADOS DO PRODUTO</h1>
        <form>
          <div className="row">
            <div className="col-lg-6">
              <input type="text" className="form-control base-input" />
              <input type="text" className="form-control base-input" />
              <input type="text" className="form-control base-input" />
            </div>
            <div className="col-lg-6">
              <textarea
                name=""
                rows={10}
                className="form-control base-input"
              ></textarea>
            </div>
          </div>

          <div>
            <button className="btn btn-outline-danger">CANCELAR</button>
            <button className="btn btn-primary">SALVAR</button>
          </div>
        </form>
      </div>
    </div>
  );
};
