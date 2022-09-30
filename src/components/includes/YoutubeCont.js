import React from "react";

function YoutubeItem(props) {
  return (
    <li>
      <a href={`https://www.youtube.com/watch?v=${props.video.id.videoId}`}>
        <img
          src={props.video.snippet.thumbnails.medium.url}
          alt={props.video.snippet.title}
        />
        <p>{props.video.snippet.title}</p>
      </a>
    </li>
  );
}

function YoutubeList(props) {
  return (
    <div className="youtube__list">
      <ul>
        {props.video.map((video, index) => (
          <YoutubeItem key={index} video={video} />
        ))}
      </ul>
    </div>
  );
}

function YoutubeCont(props) {
  return (
    <div className="youtube__cont">
      <div className="container">
        <div className="youtube__inner">
          <ul>
            <YoutubeList video={props.youtubes} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default YoutubeCont;
