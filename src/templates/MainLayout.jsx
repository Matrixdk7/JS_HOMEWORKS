import { Container } from 'react-bootstrap';
import NavigationBar from '../components/NavigationBar';
import { Outlet } from 'react-router-dom';
import {useState} from "react";

const MainLayout = () => {
    const [search, setSearch] = useState('');
    return (
        <>
            <NavigationBar search={search} setSearch={setSearch} />
            <Container>
                <Outlet context={{ search }} />
            </Container>
        </>
    );
};

export default MainLayout;
