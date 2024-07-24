import { useState } from "react"
import { useForm } from "react-hook-form"
import { Toaster, toast } from "sonner"

export function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const handleData = (event) => {
        notificationSubmit(event.nombre)
    }

    const notificationError = (text) => toast.error(`Campo requerido: ${text}`)
    const notificationSubmit = (nombre) => {
        const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Sonner' }), 2000));

        toast.promise(promise, {
            loading: 'Loading...',
            success: () => {
                return `¡Realizado, has guardado tus datos ${nombre}!`;
            },
            error: 'Error',
        });
    }

    if (errors.contraseña) {
        notificationError("Contraseña")
    }

    return (
        <div className="formData">
            <div className="layoutText">
                <img className="acmLogo" src="https://acmud.org/images/logo-main.png" alt="Logo ACMUD" />
                <h2>Iniciar</h2>
                <h1>Sesion</h1>
                <h3>ahora es más fácil</h3>
            </div>
            <form className="formSubmitData" onSubmit={handleSubmit(handleData)}>
                <h3>¡Ingresa tus datos!</h3>
                <div className="containerInput">
                    <input placeholder="Correo" {...register("correo", { required: true })} />
                    <input placeholder="Contraseña" {...register("contraseña", { required: true })} />
                </div>
                <button type='submit'>Guardar</button>
            </form>
            <Toaster position="bottom-center" richColors />
        </div>
    )
}
