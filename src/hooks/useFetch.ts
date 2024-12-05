import { useState, useEffect } from "react";

interface FetchOptions extends RequestInit {
  headers?: HeadersInit;
}

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  isCached: boolean;
}

const cache: Record<string, unknown> = {};
const BASEURL = process.env.REACT_APP_API_URL || "";

function useFetch<T>(url: string, options?: FetchOptions) {
  const [state, setState] = useState<FetchState<T>>({
    data: (cache[url] as T) || null, // Type-safe cache handling
    loading: !cache[url],
    error: null,
    isCached: !!cache[url],
  });

  useEffect(() => {
    if (cache[url]) return; // Skip fetching if data is already cached

    let isMounted = true;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // Abort after 10 seconds

    const fetchData = async () => {
      setState({
        data: null,
        loading: true,
        error: null,
        isCached: false,
      });

      try {
        const response = await fetch(`${BASEURL}${url}`, {
          ...options,
          signal: controller.signal,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            ...(options?.headers || {}),
          },
        });

        if (!response.ok) {
          const errorDetails = await response.json();
          throw new Error(
            errorDetails.message ||
              `Error ${response.status}: ${response.statusText}`
          );
        }

        const data = (await response.json()) as T;

        if (isMounted) {
          cache[url] = data; // Cache response
          setState({
            data,
            loading: false,
            error: null,
            isCached: false,
          });
        }
      } catch (error: unknown) {
        if (isMounted) {
          const errorMessage =
            error instanceof Error
              ? error.name === "AbortError"
                ? "Request timed out after 10 seconds"
                : error.message
              : "An unknown error occurred";

          setState({
            data: null,
            loading: false,
            error: errorMessage,
            isCached: false,
          });
        }
      } finally {
        clearTimeout(timeoutId); // Clear timeout on completion
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Prevent state updates after unmount
      controller.abort(); // Cancel any ongoing request
    };
  }, [url, options]);

  return state;
}

export default useFetch;
