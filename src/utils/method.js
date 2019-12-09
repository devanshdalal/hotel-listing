import { api_response } from "./common";
import isEmpty from "lodash/isEmpty";
import orderBy from "lodash/orderBy";

export const APIhandler = options => {
  console.log("aaaaaaaaaaaaaaaaaaaaaaaa", options);

  let params = {};
  // get url params
  const routeParams = options.reqUrl.split("?");
  if (routeParams.length > 1) {
    let paramsStr = routeParams[1];
    paramsStr.split("&").map(data => {
      let keyValue = data.split("=");
      params[keyValue[0]] = keyValue[1] ? keyValue[1] : "";
      return "";
    });
  }

  // filter: "dsds"
  // limit: "20"
  // skip: "0"
  // sort: "-season"
  return new Promise(async (resolve, reject) => {
    console.log("params", params);

    if (api_response.length) {
      if (
        !isEmpty(params) &&
        (!isEmpty(params.filter) || !isEmpty(params.sort))
      ) {
        let response = api_response.filter(
          item => item.name.toLowerCase() === params.filter.toLowerCase()
        );
        if (params.sort.length) {
          const order = params.sort[0] === "-" ? "desc" : "asc";
          const sortByKey =
            params.sort[0] === "-" ? params.sort.substr(1) : params.sort;
          response = orderBy(response, sortByKey, order);
        }
        return resolve({ data: [response, response.length] });
      } else {
        return resolve({ data: [api_response, api_response.length] });
      }
    } else {
      return reject({});
    }
  });
};
