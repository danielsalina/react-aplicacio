import { useState } from "react";
import { useForm } from "react-hook-form";
import FormGroup from "../components/Forms/FormGroup";
import { userRegister, createUser } from "../services/services";
import { registerMessage } from "../utils/errorMessage";
import AlertCustom from "../components/AlertCustom"
import ButtonWithLoading from "../components/Forms/ButtonWithLoading"

function Registro() {

    const {register, handleSubmit, formState: {errors}} = useForm()
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState({variant: "", text: ""})

    const onSubmit = async data => {
        try {
            setLoading(true)
            const responseUser = await userRegister({...data})

            if(responseUser.user.uid){
                const document = await createUser({...data}, responseUser)
                setAlert({variant:"success", text:"El usuario se dio de alta correctamente"})
                setLoading(false)
                console.log(responseUser.user.uid)
                console.log(document)
            }
            
        } catch (error) {
            setLoading(false)
            setAlert({variant:"danger", text: registerMessage[error.code]})
            console.log(error)
            console.log(error.code)
        }
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup label="Nombre" register={{...register("name", {required: true})}} />
                {errors.name && <div>El campo nombre es obligatorio</div>}
                <FormGroup label="Apellido" register={{...register("lastname", {required: true})}} />
                {errors.lastname && <div>El campo apellido es obligatorio</div>}
                <FormGroup label="Email" type="email" register={{...register("email", {required: true})}} />
                {errors.email && <div>El campo email es obligatorio</div>}
                <FormGroup label="Contraseña" type="password" register={{...register("password", {required: true, minLength:1})}} />
                {errors.password?.type === "required" && <div>El campo contraseña es obligatorio</div>}
                {errors.minLength?.type === "minLenght" && <div>El campo contraseña debe tener minimamente una longitud de 6 carácteres</div>}
                <ButtonWithLoading loading={loading}>Registrarme</ButtonWithLoading>
            </form>
            <AlertCustom {...alert}/>
        </div>
     );
}

export default Registro;