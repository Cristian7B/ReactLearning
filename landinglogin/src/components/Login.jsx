import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Toaster, toast } from "sonner"
import validator from "validator"
export function Login() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const [dataSend, setDataSend] = useState(null)


    const notificationSubmit = (nombre) => {
        const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Sonner' }), 2000));

        toast.promise(promise, {
            loading: 'Loading...',
            success: () => {
                return `¡Realizado, has guardado tus datos ${nombre}!`;
            },
            error: 'Error',
            
        });
    };
    const notificationWarning = text => toast.warning(text);
    const notificationError = text => toast.error(text)


    const handleData = async data => {
        const validateEmail = validator.isEmail(data.correo)
        const nombreCheck = !errors.nombre
        console.log(nombreCheck)
        if (validateEmail && nombreCheck) {
            try {
                const sendData = await axios.post("http://localhost:3000/profileData", data)
                notificationSubmit(data.nombre)
                setDataSend(sendData)
            }
            catch (e) {
                notificationError("No ha podido registrarse la solicitud")
            }
        }

        else {
            if (!validateEmail) {
                notificationWarning("Email incorrecto, verificalo")
            } 
            else if (nombreCheck) {
                notificationError("nombre incorrecta, verificala")
            }
        }
    }


    return (
        <div className="formData">
            <div className="layoutText">
                <img className="acmLogo" src="https://acmud.org/images/logo-main.png" alt="Logo ACMUD" />
                <h1>¡Registra</h1>
                <h3>tu participación!</h3>
            </div>
            <form className="formSubmitData" onSubmit={handleSubmit(handleData)}>
                <h3>¡Ingresa tus datos!</h3>
                <div className="containerInput">
                    {errors.correo && <span className="required">{errors.correo.message}</span>}
                    <input 
                        placeholder="email@email.com" 
                        type="text" 
                        {
                            ...register("correo", {
                                required:"El correo es requerido."
                            })
                        }
                    />

                    {errors.nombre && <span className="required">{errors.nombre.message}</span>}
                    <input
                        type="text"
                        placeholder="Nombre"
                        {...register("nombre", { required: "Tu nombre es requerido." })}
                    />
                </div>
                <button type="submit">Iniciar sesión</button>
            </form>
            <Toaster position="bottom-center" richColors />
        </div>
    )
}