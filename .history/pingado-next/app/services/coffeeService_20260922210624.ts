const API_URL = process.env.NEXT_PUBLIC_API_URL;

import { Coffee } from "../types/Coffee";

console.log("API_URL:", API_URL);

export async function listarCafes(): Promise<Coffee[]> {
    const response = await fetch(`${API_URL}/api/coffees`);

    if (!response.ok) {
        throw new Error("Não foi possível carregar os cafés.");
    }

    return response.json();
}