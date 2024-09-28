import { AuthContext } from "@/contexts";
import React, { useContext } from "react";

const useAuth = () => {
  const { auth, setAuth } = useContext(AuthContext);
  return { auth, setAuth };
};

export default useAuth;
