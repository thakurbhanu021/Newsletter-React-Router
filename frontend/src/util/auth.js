import { redirect } from "react-router-dom";

const getAuthToken = () => {
  const token = localStorage.getItem("token");

  if(!token){
    return null;
  }

  const tokenDuration = getTokenDuration();

  if(tokenDuration < 0 ){
    return 'EXPIRED';
  }
  return token;
};

export default getAuthToken;

export const tokenLoader = () => {
  return getAuthToken();
};

export const checkAuthLoader = () => {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth");
  }
  return null;
};

export const getTokenDuration = () => {
    const storedExpirationDate = localStorage.getItem('expiration');
    const expirationDate = new Date(storedExpirationDate);
    const now = new Date();

    const duration = expirationDate.getTime() - now.getTime();
    return duration;
}
