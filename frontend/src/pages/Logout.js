import { redirect } from "react-router-dom";

const logoutAction = () => {
    localStorage.removeItem('token');
    return redirect('/');
}

export default logoutAction;