import axios from "axios";

export const geGravityRaw = () => {
  // const consumerKey = import.meta.env.VITE_GRAVITY_CONSUMER_KEY;
  // const secretKey = import.meta.env.VITE_GRAVITY_CONSUMER_SECRET;

  // const oauthNonce = generateNonce();
  // const timestamp = getTimestamp();
  // const oauthSignature = getSignature(
  //   oauthNonce,
  //   timestamp,
  //   consumerKey,
  //   secretKey
  // );

  const options = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://app.glasse.com.mx/wp-json/gf/v2/forms/1",
    headers: {
      // 'Authorization': `OAuth oauth_consumer_key="${consumerKey}", oauth_nonce="${oauthNonce}", oauth_signature="${oauthSignature}", oauth_signature_method="HMAC-SHA1", oauth_timestamp="${timestamp}", oauth_version="1.0"`
    },
  };

  const gravityRaw = axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return gravityRaw;
};
