import AsyncStorage from '@react-native-async-storage/async-storage';

// React native storage
export const getAuthToken = async () => {
    try {
        const token = await AsyncStorage.getItem('token');

        return token;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const setAuthToken = async (token) => {
    try {
        await AsyncStorage.setItem('token', token);
    } catch (error) {
        console.log(error);
    }
};