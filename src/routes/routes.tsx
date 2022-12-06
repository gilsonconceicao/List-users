import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from '../pages/Form/Form';
import ListUsers from '../pages/ListUsers/ListUsers';
//import Cadastro from './pages/Cadastro/Cadastro';

function RoutesPage() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Form/>} />
                    <Route path="/users" element={<ListUsers/>} />
                </Routes>
            </Router>
        </>
    );
}

export default RoutesPage;