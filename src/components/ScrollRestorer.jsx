// src/components/ScrollRestorer.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollRestorer() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}