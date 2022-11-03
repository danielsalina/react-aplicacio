import {Spinner} from "react-bootstrap"

function Loading({loading, children, configuration}) {

    const styles = {
        spinner: {
            position:"fixed",
            top: "50%",
            left: "50%"
        }
    }

    return ( 
        <>
            {
                loading
                ?
                <Spinner style={styles.spinner}
                animation={configuration?.animation || "border"}
                role="status" 
                variant={configuration?.variant || "dark"}/>
                :
                <>
                    {children}
                </>
            }
        </>
     );
}

export default Loading;