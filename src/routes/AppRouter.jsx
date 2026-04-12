import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import MainLayout from '../templates/MainLayout';
import CreateUserPage from '../pages/CreateUserPage';
import UserListPage from "../pages/UserListPage";
import UserDetailsPage from "../pages/UserDetailsPage";
import EditUserPage from "../pages/EditUserPage";
import NotFoundPage from "../pages/NotFoundPage";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Navigate to="/users" replace />} />
                    <Route path="users" element={<UserListPage />} />
                    <Route path="users/create" element={<CreateUserPage />} />
                    <Route path="users/:id" element={<UserDetailsPage />} />
                    <Route path="users/:id/edit" element={<EditUserPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;
