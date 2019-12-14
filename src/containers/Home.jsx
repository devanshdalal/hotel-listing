import React, { useEffect } from "react";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";
import { FaSearchMinus } from "react-icons/fa";

import { getItems } from "redux/actions/getItem";
import FilterBar from "components/FilterBar";
import MatchesList from "components/MatchesList";
import SkeltonCard from "components/SkeltonCard";

const Home = props => {
  let {
    dispatch,
    items,
    history,
    itemsApiInProgress,
    filters,
    responseItemCount
  } = props;
  let { limit } = filters;
  useEffect(() => {
    dispatch(getItems());
    // eslint-disable-next-line
  }, []);

  const loadMore = () => {
    !itemsApiInProgress && dispatch(getItems());
  };
  if (itemsApiInProgress && items.length === 0) {
    items = [{}, {}, {}, {}, {}, {}];
  }
  // console.log("items@@@@", responseItemCount, items);

  return (
    <div className="Home">
      {items.length ? (
        <>
          <FilterBar history={history} />
          <div className="center Home_body_container">
            <InfiniteScroll
              pageStart={0}
              loadMore={loadMore}
              style={{ width: "100%" }}
              hasMore={responseItemCount === limit ? true : false}
              loader={
                <div
                  className="MatchesList"
                  style={{ paddingBottom: 10 }}
                  key={new Date()}
                >
                  <SkeltonCard />
                </div>
              }
            >
              <MatchesList matches={items} />
            </InfiniteScroll>
          </div>
        </>
      ) : (
        <div className="Home_noResult">
          <FaSearchMinus size={60} />
          <h4 className="title">No result found</h4>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    loading: state.loadingReducer.loadState,
    items: state.itemsReducer.items,
    itemsApiInProgress: state.itemsReducer.itemsApiInProgress,
    responseItemCount: state.itemsReducer.responseItemCount,
    filters: state.itemsReducer.filters
  };
};
export default connect(mapStateToProps)(Home);
