"use client";

import { useState, useEffect, useCallback } from "react";
import { get, ref, set } from "firebase/database";
import { database } from "@/utils/firebase";

export default function useTrees() {
  const [trees, setTrees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get trees from Firebase
  const getTrees = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const snapshot = await get(ref(database, "trees"));

      if (snapshot.exists()) {
        const data = snapshot.val();

        setTrees(
          Array.isArray(data) ? data : Object.values(data)
        );
      } else {
        setTrees([]);
      }
    } catch (err) {
      setError(err.message);
      console.error("Error fetching trees:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Save trees to Firebase
  const storeTrees = useCallback(async (updatedTrees) => {
    setError(null);

    try {
      await set(ref(database, "trees"), updatedTrees);
      setTrees(updatedTrees);
    } catch (err) {
      setError(err.message);
      console.error("Error saving trees:", err);
      throw err;
    }
  }, []);

  // Fetch trees when hook is mounted
  useEffect(() => {
    getTrees();
  }, [getTrees]);

  return {
    trees,
    setTrees,
    getTrees,
    storeTrees,
    loading,
    error,
  };
}