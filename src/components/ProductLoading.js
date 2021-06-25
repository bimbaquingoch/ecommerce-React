import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import IconButton from "@material-ui/core/IconButton";
import CardActions from "@material-ui/core/CardActions";

export const ProductLoading = () => {
  return (
    <div className="card-content">
      <br />
      <SkeletonTheme color="#2d3556" highlightColor="#38c9e5">
        <Skeleton variant="rect" width={210} height={38} />
      </SkeletonTheme>
      <br />
      <SkeletonTheme color="#2d3556" highlightColor="#38c9e5">
        <Skeleton variant="rect" width={210} height={118} />
      </SkeletonTheme>
      <h2 className="card-content__precio">
        <SkeletonTheme color="#2d3556" highlightColor="#38c9e5">
          <Skeleton variant="rect" width={210} height={28} />
        </SkeletonTheme>
      </h2>
      <CardActions className="card-content__icons" disableSpacing>
        {/* icon cart*/}
        <IconButton aria-label="add to cart">
          <SkeletonTheme color="#2d3556" highlightColor="#38c9e5">
            <Skeleton
              animation="wave"
              variant="circle"
              width={40}
              height={40}
            />
          </SkeletonTheme>
        </IconButton>
        <IconButton>
          <SkeletonTheme color="#2d3556" highlightColor="#38c9e5">
            <Skeleton
              animation="wave"
              variant="circle"
              width={40}
              height={40}
            />
          </SkeletonTheme>
        </IconButton>
      </CardActions>
    </div>
  );
};
