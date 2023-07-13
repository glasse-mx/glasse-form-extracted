import axios from "axios";
import { useState, useEffect } from "react";
import { getAuthorizationHeader } from "../hooks/useOAuthSignature" 

export const geGravityRaw = async (id) => {
  const url = import.meta.env.VITE_PUBLIC_WORDPRESS_URL;
  const [gravityForm, setGravityForm] = useState({});


  const options = {
    method: "GET",
    maxBodyLength: Infinity,
    url: `${url}${id}`,
    headers: {
      Authorization: getAuthorizationHeader('GET','1'),
      'Content-Tpe': 'application/json'
    },
  };

  // useEffect(() => {
  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       setGravityForm(response.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, []);

  const formulari0 = await axios.get('https://app.glasse.com.mx/wp-json/gf/v2/forms/1',options)
  console.log(formulari0)
  return gravityForm;
};
