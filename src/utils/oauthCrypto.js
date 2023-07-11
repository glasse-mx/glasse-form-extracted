import oauthSignature from "oauth-signature";

export const generateNonce = () => {
  const allowedCharset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let nonce = "";

  for (let i = 0; i < 10; i++) {
    nonce += allowedCharset.charAt(
      Math.floor(Math.random() * allowedCharset.length)
    );
  }

  return nonce;
};

export const getTimestamp = () => Math.floor(Date.now() / 1000);

export const getSignature = (nonce, timestamp, consumerKey, consumerSecret) =>
  oauthSignature.generate(
    "GET",
    "http://freddomx.local/wp-json/gf/v2/forms/1",
    {
      oauth_consumer_key: consumerKey,
      oauth_signature_method: "HMAC-SHA1",
      oauth_timestamp: timestamp,
      oauth_nonce: nonce,
      oauth_version: "1.0",
    },
    consumerSecret
  );
