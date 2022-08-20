import React, { useState } from "react";
import { VideoList } from "../data/VideoList";
import "../styles/Videos.css";

const Videos = () => {
  const videoList = VideoList;

  const ranges = [{
    divider: 1E3,
    suffix: 'K'
}, {
    divider: 1E6,
    suffix: 'M'
}, {
    divider: 1E9,
    suffix: 'B'
}];

  const formatViews = (input) => {
    for (let index = ranges.length - 1; index >= 0; index--) {
        if (input > ranges[index].divider) {
            let quotient = input / ranges[index].divider;

            if (quotient < 10) {
                quotient = Math.floor(quotient * 10) / 10;
            } else {
                quotient = Math.floor(quotient);
            }

            return quotient.toString() + ranges[index].suffix;
        }
    }

    return input.toString();
}
// 123,123,123,123
  videoList.map((video, index) => {
    console.log(video);
  });

  return (
    <div className="card">
      {videoList.map((video, index) => {
        return (
          <div className="card__inner" key={index}>
            <div className="card__thumbnailContainer">
              <img
              className="card__thumbnail"
              src={video.snippet.thumbnails.high.url}
              alt=""
            />
            <p className="card__duration">{video.duration}</p>
            </div>
            <div className="card__bottom">
            <div className="card__avatar">
              <img src="https://i.scdn.co/image/ab6761610000e5eb3e5fc149e1901d1811096a53" alt="" />
            </div>
            <div className="card__info">
              <h4 className="card__title">{video.snippet.title.substring(0, 40)}...</h4>
              <p className="card__channel">{video.snippet.channelTitle}</p>
            <p className="card__views">{formatViews(video.statistics.viewCount)} views</p>
            
            </div>
            </div>
            
            
          </div>
        );
      })}
    </div>
  );
};

export default Videos;
