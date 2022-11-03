import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AlertCustom from "../components/AlertCustom";
import FormGroup from "../components/Forms/FormGroup";
import AuthContext from "../context/AuthContext";
import { authentication, userAuth } from "../services/services";
import { loginMessage } from "../utils/errorMessage";
import ButtonWithLoading from "../components/Forms/ButtonWithLoading"

function Login() {

    const {register, handleSubmit, formState: {errors}} = useForm()
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState({variant: "", text: ""})
    const navigate = useNavigate()
    const context = useContext(AuthContext)

    const onSubmit = async data => {
        try {
            setLoading(true)
            const responseUser = await userAuth({...data})

            if(responseUser.user.uid){
                const userInfo = await authentication(responseUser)
                if (userInfo) {
                    context.loginUser(userInfo.docs[0]?.data())
                    console.log(userInfo.docs[0]?.data())
                    setLoading(false)
                    navigate("/")
                }
            }
            
        } catch (error) {
            console.log(error)
            setLoading(false)
            setAlert({variant:"danger", text: loginMessage[error.code]})
        }
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup label="Email" type="email" register={{...register("email", {required: true})}} />
                {errors.email && <div>El campo email es obligatorio</div>}
                <FormGroup label="Contraseña" type="password" register={{...register("password", {required: true, minLength:6})}} />
                {errors.password?.type === "required" && <div>El campo contraseña es obligatorio</div>}
                {errors.minLength?.type === "minLenght" && <div>El campo contraseña debe tener minimamente una longitud de 6 carácteres</div>}
                <ButtonWithLoading loading={loading}>Ingresar</ButtonWithLoading>
            </form>
            <AlertCustom {...alert}/>
        </div>
     );
}

export default Login;