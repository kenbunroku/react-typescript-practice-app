import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { User } from "../types/api/user";
import { useMessage } from "../hooks/useMessage";
import { useLoginUser } from "../hooks/useLoginUser";

export const useAuth = () => {
  const navigation = useNavigate();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            const isAdmin = res.data.id === 10 ? true : false;
            setLoginUser({ ...res.data, isAdmin });
            showMessage({ title: "Login was success.", status: "success" });
            navigation("/home");
          } else {
            alert("User ID could not be found.");
            setLoading(false);
          }
        })
        .catch(() => {
          alert("You cannot login.");
          setLoading(false);
        });
    },
    [navigation, showMessage, setLoginUser]
  );
  return { login, loading };
};
