import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsAccessDenied } from "redux/selectors";

const PrivateRoute = ({ redirectTo = '/', component: Component }) => {
    const isAccessDenied = useSelector(selectIsAccessDenied);
    
    return isAccessDenied ? <Navigate to={redirectTo} /> : Component
};

export default PrivateRoute;