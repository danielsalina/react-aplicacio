import { useEffect, useState } from "react";
import Producto from "../components/Producto/index";
import { getAllProductos } from "../services/services";
import Loading from "../components/Loading"
import {Row} from "react-bootstrap"

function Home() {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const request = async () => {
            try {
                const docs = await getAllProductos()
                if(docs){
                    setProductos(docs)
                    setLoading(false)
                }
            } catch (error) {
                console.log("Tenemos un error: ", error)       
            }
        }
        request()
    },[])
    return ( 
        <Loading loading={loading}>
           <Row>
                {
                    productos.map((producto) => 
                    <Producto key={producto.id} datos={{...producto.data(), id:producto.id}}/>)
                }
           </Row>
        </Loading>
     );
}

export default Home;