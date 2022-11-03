import Alert from "react-bootstrap/Alert"

const styles = {
    alert: {
        maxWidth: "500px",
        margin:"50px auto",
        color:"#000"
    }
}

function AlertCustom({variant, text}) {
    return ( 
        <Alert variant={variant} style = {styles.alert}>
            {text}
        </Alert>
     );
}

export default AlertCustom;