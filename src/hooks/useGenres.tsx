import React, { useEffect } from "react";
import apiClient from "../services/api-client";

export interface Genre {
    id: number;
    name: string;

}
interface FetchGenresResponse {
    count: number;
    results: Genre[];
}
const useGenres = () => {
    const [genres, setGenres] = React.useState<Genre[]>([]);
    const [error, setError] = React.useState("");
    const [isLoading, setLoading] = React.useState(false);
    
    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);

        apiClient
            .get<FetchGenresResponse>("/genres", { signal: controller.signal })
            .then((res) => {
                setGenres(res.data.results);
                setLoading(false);
            })
            .catch((error) => {
                if (error.name === 'CanceledError') return;
                setError(error.message)
                setLoading(false);
            });

            return () => controller.abort();
    }, []);

    return { genres, error, isLoading };  
}

export default useGenres;
