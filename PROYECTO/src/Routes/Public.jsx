import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Home from '../pages/Home';
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Registro from "../pages/Registro";
import ProductosAlta from "../pages/ABMProductos/ProductosAlta"
import Detalle from "../pages/Detalle"
import ProductosEliminar from "../pages/ABMProductos/ProductosEliminar";
import ProductosModificar from "../pages/ABMProductos/ProductosModificar";
import {Container} from "react-bootstrap"

function Public() {
    return ( 
        <Router>
            <Menu/>
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Navigate to="/" />} />
                    <Route path="/alta" element={<Registro/>} />
                    <Route path="/ingresar" element={<Login/>} />
                    <Route path="/producto/alta" element={<ProductosAlta />} />
                    <Route path="/producto/:id" element={<Detalle/>} />
                    <Route path="/producto/modificar/:id" element={<ProductosModificar/>} />
                    <Route path="/producto/eliminar/:id" element={<ProductosEliminar/>} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </Container>
            <Footer/>
        </Router>
     );
}

export default Public;