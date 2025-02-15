import toast from 'react-hot-toast';
import { create } from 'zustand';
import axios from '../lib/axiosConfig.js'


export const useDataStore = create((set) => ({

    loading: false,
    profileData: null,


    getProfile: async () => {
        try {
            // set({ loading: true });

            const res = await axios.get(`/api/auth`);


            console.log("users profile :", res.data);

            set({ profileData: res.data });

        } catch (error) {
            // set({ loading: false });
            console.log("Error getProfile :", error.response.data.error);

        }
    },

    register: async ({ formData }) => {
        try {
            // set({ loading: true });

            console.log("Student data :", formData);

            const res = await axios.post(`/api/auth/register`, formData)

            console.log("Response in registering :", res.data);

            set({ profileData: res.data });

            toast.success("Registered successfully");
            return true;

        } catch (error) {
            set({ loading: false });
            console.log("Error register :", error.response.data.error);
            toast.error(error.response.data.error || "Something went wrong");
            return false;
        }
    },

    login: async ({ password, email }) => {
        try {
            // set({ loading: true });

            const res = await axios.post(`/api/auth/login`, { password, email });

            console.log("Login successful:", res.data);


            set({ profileData: res.data });
            toast.success("Logged in successfully");
            return true;

        } catch (error) {
            // set({ loading: false });
            console.log("Error login :", error.response.data.error);
            toast.error(error.response.data.error || "Something went wrong");
            return false;
        }
    },
    logout: async () => {
        try {
            const res = await axios.post(`/api/auth/logout`)

            set({ profileData: null });

            toast.success("Logged out successfully");

        } catch (error) {
            console.log("Error in logout :", error.response.data.error);
            toast.error(error.response.data.error || "Error occurred!")
        }
    },
    refreshToken: async () => {
        try {
            // set({ loading: true });
            const res = await axios.post('/api/auth/refresh-token');
            console.log("Refresh token :: ", res.data);
            // toast.success("Request failed!");
            // set({ loading: false });
        } catch (error) {
            // set({ loading: false });
            // toast.error('Error occurred ! no refreshed token');
            console.log('resfreshToken ::: ', error.response.data.error);
        }
    }

}))

// let refreshPromise = null;

// axios.interceptors.response.use(
//     (response) => {
//         console.log("interceptor :: ");
//         return response;
//     },
//     async (error) => {
//         console.log("Axios Interceptor Error:", error);

//         let originalRequest = error.config;

//         if (error.response?.status === 401 && !originalRequest._retry) {

//             originalRequest._retry = true;
//             console.log("originalRequest :: ", originalRequest)
//             try {
//                 // if (!refreshPromise) {
//                 //     refreshPromise = await useDataStore.getState().refreshToken();
//                 // }

//                 // await refreshPromise;
//                 // refreshPromise = null;

//                 // // Retry the original request (cookies should now include new token)
//                 // return axios(originalRequest);

//                 if (refreshPromise) {
//                     await refreshPromise;
//                     return axios(originalRequest);
//                 }

//                 // Start a new refresh process
//                 refreshPromise = useDataStore.getState().refreshToken();
//                 await refreshPromise;
//                 refreshPromise = null;

//                 return axios(originalRequest);

//             } catch (refreshError) {
//                 console.log("Refresh Token Error:", refreshError);
//                 useDataStore.getState().logout();
//                 return Promise.reject(refreshError);
//             }
//         }

//         return Promise.reject(error);
//     }
// );

let refreshPromise = null;

axios.interceptors.response.use(
    (response) => response,
    async (error) => {
        let originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            if (!refreshPromise) {
                refreshPromise = useDataStore.getState().refreshToken()
                    .catch((refreshError) => {
                        console.log("Token Refresh Failed:", refreshError);
                        useDataStore.getState().logout();
                        throw refreshError;
                    })
                    .finally(() => {
                        refreshPromise = null;
                    });
            }

            await refreshPromise;

            // Retry the original request (it should now send the updated cookie)
            return axios(originalRequest);
        }

        return Promise.reject(error);
    }
);
