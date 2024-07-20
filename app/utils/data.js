import axios from "axios";
import { PathParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

export const fetchUser = async () => {
    try {
        const response = await axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users');
        return response.data;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
};

