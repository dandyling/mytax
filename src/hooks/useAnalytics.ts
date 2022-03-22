import { logEvent, setCurrentScreen } from "firebase/analytics";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { analytics } from "../App";

const logCurrentPage = () => {
  setCurrentScreen(analytics, window.location.pathname);
  logEvent(analytics, "screen_view");
};

export const useAnalytics = () => {
  const history = useHistory();
  useEffect(() => {
    logCurrentPage(); // log the first page visit
    history.listen(() => {
      logCurrentPage();
    });
  }, [history]);
};
