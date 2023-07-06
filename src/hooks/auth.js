export const useAuth = () => {
    const getUser = window.localStorage.getItem('userLogged')
    return getUser;
}
