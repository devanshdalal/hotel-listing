import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

// @ts-ignore
import colors from "assets/css/colors.scss";

const { theme } = colors;

function SkeltonCard(props) {
  const { key } = props;
  return (
    <div
      className="MatchCard"
      key={key}
      style={{
        borderTopColor: theme,
        display: "block",
        height: 140,
        margin: "10px 0px"
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

export default SkeltonCard;
