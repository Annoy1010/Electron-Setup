import config from '../config';
import Home from '../screens/Home';
import Login from '../screens/Login';

const routes = [
    {
        path: config.routes.home,
        element: Home,
    },
    {
        path: config.routes.login,
        element: Login,
    },
];

export default routes;
