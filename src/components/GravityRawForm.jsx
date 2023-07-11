import { generateNonce, getSignature, getTimestamp } from "../utils/oauthCrypto"
import axios from "axios"


export const GravityRawForm = () => {

  // const consumerKey = import.meta.env.VITE_GRAVITY_CONSUMER_KEY
  // const secretKey = import.meta.env.VITE_GRAVITY_CONSUMER_SECRET

  // const oauthNonce = generateNonce()
  // const timestamp = getTimestamp()
  // const oauthSignature = getSignature(oauthNonce, timestamp,consumerKey,secretKey)
 
  // const options = {
  //   method: 'get',
  //   maxBodyLength: Infinity,
  //   url: 'https://app.glasse.com.mx/wp-json/gf/v2/forms/1',
  //   headers: {
  //     'Authorization': `OAuth oauth_consumer_key="${consumerKey}", oauth_nonce="${oauthNonce}", oauth_signature="${oauthSignature}", oauth_signature_method="HMAC-SHA1", oauth_timestamp="${timestamp}", oauth_version="1.0"`
  //   }
  // };

  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });
var myHeaders = new Headers();
myHeaders.append("Authorization", "OAuth oauth_consumer_key=\"ck_27d89bdc7dcbe5dae6cbaaf0a19e404713242556\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"1689117840\",oauth_nonce=\"QcKcVC5wfx4\",oauth_version=\"1.0\",oauth_signature=\"DghxONbXIYun1jjpr5hBLrxFcRQ%3D\"");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://app.glasse.com.mx/wp-json/gf/v2/forms/1", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  return (
    <div>GravityRawForm</div>
  )
}
