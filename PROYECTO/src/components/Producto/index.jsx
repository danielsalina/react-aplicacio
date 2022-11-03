import AuthContext from "../../context/AuthContext";
import Actions from "./Actions";
import {Card, Col} from "react-bootstrap"

const styles = {
    cardContainer: {
        margin:"10px 25px",
        width:"18rem",
        textAlign:"center"
    }
}

function Producto({datos}) {
    return ( 
        <AuthContext.Consumer>
            {
                context => 
                <Col>
                <Card style={styles.cardContainer}>
                    <Card.Body>
                        <Card.Title>{datos.name}</Card.Title>
                        <Card.Subtitle>{datos.price}</Card.Subtitle>
                        <Card.Text>{datos.description}</Card.Text>
                        <Actions userLogin={context.userLogin} datos={datos} />
                    </Card.Body>
                </Card>
                </Col>
            }
        </AuthContext.Consumer>
     );
}

export default Producto;