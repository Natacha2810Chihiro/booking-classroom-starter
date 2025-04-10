import api from './api.services';


const getUserWithToken = async (token: string) => {
    const response = await api.get("/user/me", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

const userService = {
    getUserWithToken,
};

export default userService;