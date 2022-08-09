import React, { useContext, useEffect } from "react";
import { NavPriv } from "../component/NavPriv";
import { Context } from "../store/appContext";

export const Private = (props) => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.private();
  }, [actions.private]);
  return (
    <div>
      <NavPriv />
      <h1>
        {`
        si logras ver esto, es porque tu usuario es -- 
        ${store.private && store.private.email} --`}
      </h1>
    </div>
  );
};
