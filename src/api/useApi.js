import { useState } from "react";

export default useApi = (url) => {
  const [data, setData] = useState([]);
  const [Error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async () => {
    setLoading(true);
    const result = await url();
    setLoading(false);

    if (!result.ok) return setError(true);
    setError(false);
    setData(result.data);
  };

  return { data, Error, loading, request };
};
