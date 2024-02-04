import { useEffect } from "react";
import { useState } from "react";
import { MENU_API_URL } from "../utils/contents";

const useRestMenuFetch = (resid) => {
  const [resMenu, setResMenu] = useState(null);
  useEffect(() => {
    menuFetch();
  }, []);

  const menuFetch = async () => {
    const data = await fetch(MENU_API_URL + resid);
    const json = await data.json();
    // console.log(json.data);
    setResMenu(json.data);
  };
  return resMenu;
};
export default useRestMenuFetch;
