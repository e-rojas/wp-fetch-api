export default class Api {
  post() {
    let URL = `${process.env.REACT_APP_BASE_URL}posts`;
    return fetch(URL)
      .then((res) => res.json())
      .catch((e) => console.log("Api ERROR", e));
  }
}
