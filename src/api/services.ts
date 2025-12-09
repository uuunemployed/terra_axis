import type { Service } from "../types/service";

export async function getServices(): Promise<Service[]> {
    const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, '');

    try {
        const fullUrl = `${BASE_URL}/api/services.json`;

        const response = await fetch(fullUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data as Service[];
    }
    catch (error) {
        console.error('Error fetching services:', error);
        return[];
    }
}