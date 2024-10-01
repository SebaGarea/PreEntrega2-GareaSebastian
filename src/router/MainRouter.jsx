import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Category, Home, ItemDetail } from "../pages";

export const MainRouter = () => {
    //Route utiliza HOOK--> Higher Order Component
    //Una ruta se compone de: hacia donde hay que ir, y que componente se va a renderizar cuando estemos en ese lugar.
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/item/:id" element={<ItemDetail />} />
                <Route path="/category/:id" element={<Category />} />
            </Routes>
        </Router>
    );
};
