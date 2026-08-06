import { useState, useEffect, useCallback } from "react";
import { getAircraft } from "../services/aircraftService";

function useAircraft() {
  const [aircraft, setAircraft] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadAircraft = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getAircraft();
      setAircraft(data);
      return data;
    } catch (err) {
      setError(err);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadAircraft();
  }, [loadAircraft]);

  return {
    aircraft,
    loading,
    error,
    reload: loadAircraft,
  };
}

export default useAircraft;
