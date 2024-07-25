import axios from 'axios';
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";

export function FormLogin() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const handleData = async (data) => {
        try {
            const response = await axios.post('http://localhost:3000/profileData', data);
            notificationSubmit(data.correo);
            console.log(response.data);
        } catch (error) {
            console.error(error);
            notificationError("Correo o contraseña incorrectos");
        }
    };

    const notificationError = (text) => toast.error(text);
    const notificationSubmit = (correo) => {
        const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Sonner' }), 2000));

        toast.promise(promise, {
            loading: 'Loading...',
            success: () => {
                return `¡Realizado, has guardado tus datos ${correo}!`;
            },
            error: 'Error',
        });
    };

    return (
        <div className="formData">
            <div className="layoutText">
                <img className="acmLogo" src="https://acmud.org/images/logo-main.png" alt="Logo ACMUD" />
                <h2>Iniciar</h2>
                <h1>Sesión</h1>
                <h3>ahora es más fácil</h3>
            </div>
            <form className="formSubmitData" onSubmit={handleSubmit(handleData)}>
                <h3>¡Ingresa tus datos!</h3>
                <div className="containerInput">
                    <input
                        placeholder="Correo"
                        {...register("correo", {
                            required: "Correo es requerido",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: "Correo no es válido"
                            }
                        })}
                    />
                    {errors.correo && <span>{errors.correo.message}</span>}
                    <input
                        type="password"
                        placeholder="Contraseña"
                        {...register("contraseña", { required: "Contraseña es requerida" })}
                    />
                    {errors.contraseña && <span>{errors.contraseña.message}</span>}
                </div>
                <button type="submit">Iniciar sesión</button>
            </form>
            <Toaster position="bottom-center" richColors />
        </div>
    );
}
