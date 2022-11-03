import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { getByIdProductos } from "../services/services";
import {Card, Col, Row} from "react-bootstrap"

const styles = {
    cardContainer:{
        width:"18rem",
        margin:"20px auto"
    }
}

function Detalle() {

    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(()=>{
        const request = async ()=> {
            try {
                const document = await getByIdProductos(id)

                if(document){
                    setProducto(document.data())
                    setLoading(false)
                }
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
        request()
    },[id])

    return ( 
        <div>
            <Loading loading={loading}>
                <Row>
                    <Col>
                        <Card style={styles.cardContainer}>
                            <Card.Body>
                                <Card.Title>{producto.name}</Card.Title>
                                <Card.Subtitle>$ {producto.price}</Card.Subtitle>
                                <Card.Text>{producto.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Loading>
        </div>
     );
}

export default Detalle;