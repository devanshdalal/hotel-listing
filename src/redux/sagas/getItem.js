import { all, call, put, takeLatest, select } from "redux-saga/effects";
import ActionTypes from "../constants/ActionTypes";
import APICaller from "utils/APICaller";

export function* getItems() {
  const filters = yield select(state => state.itemsReducer.filters);
  let {
    search = "",
    sort = "",
    order = "",
    region = "",
    limit = 20,
    skip = 0
  } = filters;
  let url = `list?limit=${limit}`;
  if (skip) {
    url = `${url}&start=${skip}`;
  }
  if (search.length) {
    search = search.trim().toLowerCase();
    url = `${url}&name=${search}`;
  }
  if (sort.length || order.length) {
    sort = sort && order ? `${sort},${order}` : "";
    url = `${url}&sort=${sort}`;
  }
  if (region) {
    url = `${url}&region=${region}`;
  }
  try {
    const response = yield call(APICaller, { method: "GET", reqUrl: url });
    yield put({
      type: ActionTypes.GET_ITEMS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    yield put({
      type: ActionTypes.GET_ITEMS_FAILURE,
      payload: []
    });
  }
}

export default function* root() {
  yield all([takeLatest(ActionTypes.GET_ITEMS, getItems)]);
}
