import AsyncStorage from "@react-native-async-storage/async-storage";

export const getToken = async () => {
    const storedToken = await AsyncStorage.getItem("token");
    console.log("storedToken : ", storedToken);
    return storedToken;
};

export const setToken = async (token: string) => {
    console.log("setToken : ", token);
    await AsyncStorage.setItem("token", token);
};


export const removeToken = async () => {
    await AsyncStorage.removeItem("token");
};

export const saveToken = async (token: string) => {
    console.log("saveToken : ", token);
    await AsyncStorage.setItem("token", token);
};