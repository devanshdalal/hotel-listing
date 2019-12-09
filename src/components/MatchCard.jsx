import React from "react";
import { withRouter } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

// @ts-ignore
import colors from "assets/css/colors.scss";

const { theme } = colors;

function MatchCard(props) {
  const { item, key, style, history } = props;
  const {
    name,
    host_name = "Francesca",
    neighbourhood_group = "North Region",
    neighbourhood = "Woodlands",
    latitude = 1.44255,
    longitude = 103.7958,
    room_type = "Private room",
    price = 83
  } = item;
  const onClick = () => {
    history.push("/item-detail", { item });
  };
  if (
    !name &&
    !host_name &&
    !neighbourhood_group &&
    !neighbourhood &&
    !room_type &&
    !price
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
      <h6 className="marginPadding">{name}</h6>
      <div
        className="MatchCard"
        onClick={onClick}
        style={{
          borderTopColor: theme
        }}
      >
        <div className="left-image-view MatchCard_imageView">
          {/* <img
            src={getImages(allTeams[team1].icon)}
            className="teamImage"
            alt=""
          /> */}
        </div>

        <div className="MatchCard_detail">
          <div className="team-name">{host_name}</div>
          <h6 className="marginPadding">{neighbourhood}</h6>
          <div className="team-name">{neighbourhood_group}</div>
          <div className="venue">{room_type}</div>
          <div className="venue">{price}</div>
        </div>
        <div className="right-image-view MatchCard_imageView">
          {/* <img
            src={getImages(allTeams[team2].icon)}
            className="teamImage"
            alt=""
          /> */}
        </div>
      </div>
    </div>
  );
}

const MatchCardWithRouter = withRouter(props => <MatchCard {...props} />);
export default MatchCardWithRouter;
