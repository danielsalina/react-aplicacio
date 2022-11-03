import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import FormGroup from "../../components/Forms/FormGroup";
import { deleteByIdProductos, getByIdProductos, setByIdProductos} from "../../services/services";
import {Button} from "react-bootstrap"

function ProductosEliminar() {

    const {setValue, register, handleSubmit, formState: {errors}} = useForm()
    const navigate = useNavigate()
    const {id} = useParams()

    const onSubmit = async data => {
        try {
            const document = await setByIdProductos(id, data)
            console.log(document)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        const request = async ()=> {
            try {
                const response = await getByIdProductos(id)

                if(response){
                    setValue("name", response.data().name)
                    setValue("description", response.data().description)
                    setValue("price", response.data().price)
                }
            } catch (error) {
                console.log(error)
            }
        }
        request()
    },[id, setValue])

    const handleDelete = async ()=>{
        try {
            const document = await deleteByIdProductos(id)
            console.log(document)
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup label="Nombre" register={{...register("name", {required: true})}} />
                {errors.name && <div>El campo nombre es obligatorio</div>}
                <FormGroup label="Precio" register={{...register("price", {required: true})}} />
                {errors.price && <div>El campo precio es obligatorio</div>}
                <FormGroup label="Descripcion" register={{...register("description", {required: true})}} />
                {errors.price && <div>El campo descripción es obligatorio</div>}
            </form>
                <Button onClick={handleDelete}>Eliminar</Button>
        </div>
     );
}

export default ProductosEliminar;