import axios from "axios";
const BASE_URL = "https://places.googleapis.com/v1/places:searchNearby";
const API_KEY = "AIzaSyCx3nO9Zpghadz7-CH2BP3wW-yq9UcH5M8";
const CLERK_API_KEY =
  "pk_test_d2lubmluZy1nYW5uZXQtNjQuY2xlcmsuYWNjb3VudHMuZGV2JA";
const FIREBASE_API = "AIzaSyBo89PIur1MLWp6xKSd64C3T-BWwGNI8AY";
const config = {
  headers: {
    "Content-Type": "application/json",
    "X-Goog-Api-Key": API_KEY,
    "X-Goog-FieldMask": [
      "places.displayName",
      "places.formattedAddress",
      "places.location",
      "places.evChargeOptions",
      "places.shortFormattedAddress",
      "places.photos",
      "places.id",
    ],
  },
};

const NewNearByPlace = (data) => axios.post(BASE_URL, data, config);

export default {
  NewNearByPlace,
  API_KEY,
  CLERK_API_KEY,
  FIREBASE_API,
};
