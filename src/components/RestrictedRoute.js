import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsAccessDenied } from "redux/selectors";

const RestrictedRoute = ({ redirectTo = '/', component: Component }) => {
    const isAccessDenied = useSelector(selectIsAccessDenied);
    
    return isAccessDenied ? Component : <Navigate to={redirectTo} />
};

export default RestrictedRoute;