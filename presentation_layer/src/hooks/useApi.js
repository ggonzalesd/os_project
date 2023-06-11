import axios from "axios";
import { useEffect, useState } from "react"

export default function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    (async () => {
      setLoading(true);
      setError(null);
      setData(null);
      try {
        const res = await axios.get(url);
        setData(res.data);
        setLoading(false);
        setError(null);
      } catch(err) {
        setError(err);
        setLoading(false);
        setData(null);
      }
    })();
  }, [url]);

  return { data, loading, error }
}