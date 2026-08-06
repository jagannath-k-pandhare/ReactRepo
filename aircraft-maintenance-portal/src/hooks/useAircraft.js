import { useState, useEffect, useCallback } from "react";
import { getAircraft, getAircraftById } from "../services/aircraftService";

function useAircraft(id) {
  const [aircraft, setAircraft] = useState(id ? null : []);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadAircraft = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = id ? await getAircraftById(id) : await getAircraft();

      setAircraft(data);

      return data;
    } catch (err) {
      setError(err);
      return null;
    } finally {
      setLoading(false);
    }
  }, [id]);

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
