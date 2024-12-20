import{ useEffect, useState } from "react";

const useMonitorWidth = () => {
    const [showDashboardMediaView, setShowDashboardMediaView] = useState(false);
const [vw, setVw] = useState("");

useEffect(() => {
  const handleResize = () => {
          if (window.innerWidth <= 430) {
            setShowDashboardMediaView(true);
            setVw(window.innerWidth);
          } else {
            setVw(window.innerWidth);
            setShowDashboardMediaView(false);
          }
        };
        window.addEventListener("resize", handleResize);
        handleResize();
    
        return () => window.removeEventListener("resize", handleResize);
      }, []);
      return { showDashboardMediaView, vw };
}
export default useMonitorWidth;