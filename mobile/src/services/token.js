import AsyncStorage from '@react-native-async-storage/async-storage';

// React native storage
export const getAuthToken = async () => {
    try {
        const token = await AsyncStorage.getItem('token');
        return JSON.parse(token);
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const setAuthToken = async (token) => {
    try {
        await AsyncStorage.setItem('token', JSON.stringify(token));
    } catch (error) {
        console.log(error);
    }
};