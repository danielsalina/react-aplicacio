import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'

const btns ={
    btn: {
        width:"95px",
        fontSize:"14px",
        margin:"5px 2px"
    }
}

function Actions({datos, userLogin}) {
    return ( 
        <div>
            <Button variant="success" style={btns.btn} as = {Link} to={"/producto/"+datos.id}>Ver Detalle</Button>

            {
                userLogin &&
                <>
                    <Button variant="warning" style={btns.btn} as = {Link} to={"/producto/modificar/"+datos.id}>Modificar</Button>
                    <Button variant="danger" style={btns.btn} as = {Link} to={"/producto/eliminar/"+datos.id}>Eliminar</Button>
                </>
            }
        </div>
     );
}

export default Actions;