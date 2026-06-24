import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Jaise hi path change hoga, window automatic top par chali jayegi
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}