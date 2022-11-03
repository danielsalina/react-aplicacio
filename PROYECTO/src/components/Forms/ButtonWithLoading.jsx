import {Button, Spinner } from "react-bootstrap"

function ButtonWithLoading({variant, type, loading, children}) {
    return ( 
        <Button type={type || "submit"} variant={variant || "primary"} disabled={loading}>
            {loading && <Spinner animation="border" size="lg" />}
            {children}
        </Button>
     );
}

export default ButtonWithLoading;