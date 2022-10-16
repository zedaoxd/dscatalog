import ButtonIcon from 'components/ButtonIcon';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { requestBackendLogin } from 'utils/requests';
import './styles.css';


type FormData = {
    username: string;
    password: string;
}

const Login = () => {

    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = (formData: FormData) => {
        requestBackendLogin(formData)
            .then(response => console.log('Sucesso', response))
            .catch(error => console.log('error', error));
    };

    return (
        <div className="base-card login-card">
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <input 
                        {...register("username")}
                        type="text" 
                        className="form-control base-input" 
                        placeholder="Email" 
                        name="username"
                    />
                </div>
                <div className="mb-2">
                    <input 
                        {...register("password")}
                        type="password" 
                        className="form-control base-input" 
                        placeholder="Password" 
                        name="password" 
                    />
                </div>
                <Link to="/admin/auth/recover" className="login-link-recover">
                    Esqueci a senha
                </Link>
                <div className="login-submit">
                    <ButtonIcon text="Fazer login" />
                </div>
                <div className="signup-container">
                    <span className="not-registered">Não tem Cadastro?</span>
                    <Link to="/admin/auth/register" className="login-link-register">
                        CADASTRAR
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Login;