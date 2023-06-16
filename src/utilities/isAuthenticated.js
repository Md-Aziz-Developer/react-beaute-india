import store from "store";

const isAuthenticated = () => {
    const { auth } = store.getState();
    if (auth.accessToken) {
        return true;
    } else {
        return false;
    }
};

export default isAuthenticated