import React from "react";
import { Badge } from "reactstrap";
import { withRouter } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

// @ts-ignore
import colors from "assets/css/colors.scss";

const { theme } = colors;

function MatchCard(props) {
  const { item, key, style, history } = props;
  const {
    name,
    host_name = "",
    neighbourhood_group = "",
    neighbourhood = "",
    room_type = "",
    price = 0
  } = item;
  const onClick = () => {
    history.push("/item-detail", { item });
  };
  if (
    !name &&
    !host_name &&
    !neighbourhood_group &&
    !neighbourhood &&
    !room_type
  ) {
    return (
      <div
        className="MatchCard"
        key={key}
        style={{
          ...style,
          borderTopColor: theme,
          display: "block",
          height: 140,
          margin: "20px 0px"
        }}
      >
        <SkeletonTheme color="rgba(227, 247, 250, 0.8)" highlightColor={theme}>
          <p style={{ margin: "20px 10px 0" }}>
            <Skeleton count={4} />
          </p>
        </SkeletonTheme>
      </div>
    );
  }
  return (
    <div key={key} style={style}>
      <div
        className="MatchCard"
        onClick={onClick}
        style={{
          borderTopColor: theme
        }}
      >
        <div className="MatchCard_detail">
          <h5>
            <Badge pill color="info">
              {room_type}
            </Badge>
          </h5>
          <h4 className="marginPadding truncate-text">{name}</h4>
          <div className="truncate-text">{host_name}</div>
          <h6 className="marginPadding venue truncate-text">{`${neighbourhood}, ${neighbourhood_group}`}</h6>
        </div>
        <div className="MatchCard_price">
          <div>Price</div>
          <h2 className="value">{price}</h2>
        </div>
      </div>
    </div>
  );
}

const MatchCardWithRouter = withRouter(props => <MatchCard {...props} />);
export default MatchCardWithRouter;
