import axios from "axios";
import { useState, useEffect } from "react";
import { getAuthorizationHeader } from "../hooks/useOAuthSignature" 

export const geGravityRaw = (id) => {
  const url = import.meta.env.VITE_PUBLIC_WORDPRESS_URL;
  const [gravityForm, setGravityForm] = useState({});


  const options = {
    method: "get",
    url: `${url}${id}`,
    headers: {
      'Authorization': getAuthorizationHeader('GET','1')
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setGravityForm(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return gravityForm;
};
