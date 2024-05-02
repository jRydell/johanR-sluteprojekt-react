import { useState, useEffect } from "react";

type ApiResponse<T> = {
  docs: T;
  data: T;
};

type Book = {
  key: string;
  title: string;
  author_name: string[];
  first_publish_year: number;
};

export const useFetch = (url: string): ApiResponse<Book[]> | null => {
  const [data, setData] = useState<ApiResponse<Book[]> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`An error occurred: ${response.statusText}`);
        }

        const jsonData: ApiResponse<Book[]> = await response.json();
        setData(jsonData);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};
