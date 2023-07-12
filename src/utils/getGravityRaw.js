import axios from "axios";
import { useState, useEffect } from "react";

export const geGravityRaw = (id) => {
  const url = import.meta.env.VITE_PUBLIC_WORDPRESS_URL;
  const [gravityForm, setGravityForm] = useState({});

  const options = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${url}${id}`,
    headers: {
      // 'Authorization': `OAuth oauth_consumer_key="${consumerKey}", oauth_nonce="${oauthNonce}", oauth_signature="${oauthSignature}", oauth_signature_method="HMAC-SHA1", oauth_timestamp="${timestamp}", oauth_version="1.0"`
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
