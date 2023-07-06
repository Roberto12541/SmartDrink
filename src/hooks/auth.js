export const useAuth = () => {
    const getUser = window.localStorage.getItem('userLogged')
    console.log(getUser);
    return getUser;
}
