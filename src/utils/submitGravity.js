import axios from "axios";
import { getAuthorizationHeader } from "../hooks/useOAuthSignature";

export const onGravitySubmit = async (body, formId) => {
  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_PUBLIC_WORDPRESS_URL}${formId}/submissions`,
    headers: {
      "Content-Type": "application/json",
      "Authorization": getAuthorizationHeader("POST", 1),
    },
    data: body,
  };

  const submission = await axios
    .request(config)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

  console.log(config);
};
