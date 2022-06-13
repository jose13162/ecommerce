import React from "react";
import cookies from "react-cookies";
import { useNavigate } from "react-router-dom";
import { useStore } from "zustand";
import { profileStore } from "../store/profile";
import { $axios } from "../utils/axios";

interface IProps {
  children?: React.ReactNode;
}

export function RequireAuth({ children }: IProps) {
  const token = cookies.load("token");
  const { setUser } = useStore(profileStore);
  const navigate = useNavigate();

  $axios
    .get("/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => {
      setUser(data);
    })
    .catch(() => {
      navigate("/login");
    });

  return <>{children}</>;
}
