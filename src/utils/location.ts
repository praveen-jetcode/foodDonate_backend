import NodeGeocoder from "node-geocoder";

const options:any = {
  provider: 'google',
  httpAdapter:"https",
  apiKey:process.env.API_KEY,
  formatter: null
};

const geocoder = NodeGeocoder(options);
export default geocoder
