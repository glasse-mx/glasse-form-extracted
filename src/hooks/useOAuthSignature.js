import { v1 as uuidv1 } from "uuid";
import { HmacSHA1, enc } from "crypto-js";

export const getAuthorizationHeader = (type, formId) => {
  const method = type;
  const baseUrl =
    type === "GET"
      ? `${import.meta.env.VITE_PUBLIC_WORDPRESS_URL}${formId}`
      : `${import.meta.env.VITE_PUBLIC_WORDPRESS_URL}${formId}/submissions`;

  const consumerKey = import.meta.env.VITE_GRAVITY_CONSUMER_KEY;
  const secretKey = import.meta.env.VITE_GRAVITY_CONSUMER_SECRET;

  const oauth_timestamp = Math.floor(Date.now() / 1000);
  const oauth_nonce = uuidv1();

  const queryParameters = {
    offset: 0,
    limit: 100,
    filter: "status='active'",
  };

  const parameters = {
    ...queryParameters,
    oauth_consumer_key: import.meta.env.VITE_GRAVITY_CONSUMER_KEY,
    oauth_signature_method: "HMAC-SHA1",
    oauth_timestamp: oauth_timestamp,
    oauth_nonce: oauth_nonce,
    oauth_version: "1.0",
  };

  let ordered = {};
  Object.keys(parameters)
    .sort()
    .forEach(function (key) {
      ordered[key] = parameters[key];
    });

  let encodedParameters = "";
  for (let k in ordered) {
    const encodedValue = escape(ordered[k]);
    const encodedKey = encodeURIComponent(k);
    if (encodedParameters === "") {
      encodedParameters += encodeURIComponent(`${encodedKey}=${encodedValue}`);
    } else {
      encodedParameters += encodeURIComponent(`&${encodedKey}=${encodedValue}`);
    }
  }

  const encodedUrl = encodeURIComponent(baseUrl);
  encodedParameters = encodeURIComponent(encodedParameters);

  const signature_base_string = `${method}&${encodedUrl}&${encodedParameters}`;

  const signing_key = `${secretKey}&`;

  //   console.log(signature_base_string, signing_key);

  //   const oauth_signature = CryptoJS.createHmac("sha1", signing_key)
  //     .update(signature_base_string)
  //     .digest()
  //     .toString("base64");

  const hmac = HmacSHA1(signature_base_string, signing_key);
  const oauthSignature = hmac.toString(enc.Base64);

  const encoded_oauth_signature = encodeURIComponent(oauthSignature);

  const authorization_header = `OAuth oauth_consumer_key="${consumerKey}",oauth_signature_method="HMAC-SHA1",oauth_timestamp="${oauth_timestamp}",oauth_nonce="${oauth_nonce}",oauth_version="1.0",oauth_signature="${encoded_oauth_signature}"`;

  return authorization_header;
};
