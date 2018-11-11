import BuildNewSVG from './BuildNewSVG';
import React from 'react';


export class FacebookIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {height, width, color, size, fill1, fill2, viewBox} = this.props;
    return (
      <BuildNewSVG color={color} height={height} viewBox={viewBox} width={width} size={size}
      path1="M166.1 52h-47.4c-5.6 0-11.9 7.4-11.9 17.2v34.3h59.3v48.8h-59.3V299h-56V152.3H0v-48.8h50.8V74.7C50.8 33.5 79.4 0 118.6 0H166v52z"
      fill1={fill1} fill2={fill2} />
    );
  }
}


export class InstagramIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {height, width, color, size, fill1, fill2, viewBox, className} = this.props;
    return (
      <BuildNewSVG class={className} color={color} height={height} viewBox={viewBox} width={width} size={size}
        path1='M-411.22 1042.5h-155.56c-12.22 0-22.222 10.003-22.222 22.222v155.56c0 12.22 10.003 22.222 22.222 22.222h155.56c12.22 0 22.222-10.003 22.222-22.222v-155.56c0-12.22-10.003-22.222-22.222-22.222zm-77.946 161.4c33.97 0 61.564-27.593 61.564-61.564 0-3.76-.47-7.385-1.14-10.943h17.59v80.16c0 4.23-3.425 7.655-7.722 7.655h-140.25c-4.23 0-7.72-3.424-7.72-7.654v-80.16h17.186c-.67 3.557-1.14 7.183-1.14 10.942.066 33.97 27.592 61.564 61.63 61.564zm-38.47-61.564c0-21.215 17.255-38.47 38.47-38.47s38.47 17.188 38.47 38.47-17.255 38.47-38.47 38.47c-21.282 0-38.47-17.188-38.47-38.47zm108.69-44.243h-17.924c-4.23 0-7.72-3.49-7.72-7.72v-17.994c0-4.23 3.423-7.655 7.653-7.655h17.925c4.297 0 7.72 3.424 7.72 7.653v17.925c.068 4.297-3.356 7.788-7.653 7.788z'
        fill1={fill1} />
    );
  }
}


export class TwitterIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {height, width, color, size, fill1, fill2, viewBox, className} = this.props;
    return (
      <BuildNewSVG class={className} color={color} height={height} viewBox={viewBox} width={width} size={size}
        path1='M368.4 35.5c-13.6 6-28.1 10.1-43.4 11.9 15.6-9.4 27.6-24.2 33.2-41.8-14.6 8.7-30.8 15-48 18.3C296.4 9.2 276.8 0 255 0c-41.7 0-75.6 33.8-75.6 75.6 0 5.9.7 11.7 2 17.2-62.8-3.1-118.5-33.2-155.8-79C19.1 25 15.4 38 15.4 51.8c0 26.2 13.3 49.4 33.6 62.9-12.4-.4-24-3.8-34.2-9.4v.9c0 36.6 26.1 67.2 60.6 74.1-6.3 1.7-13 2.7-19.9 2.7-4.9 0-9.6-.5-14.2-1.4 9.6 30 37.5 51.9 70.6 52.5C86 254.4 53.4 266.5 18 266.5c-6.1 0-12.1-.4-18-1.1 33.4 21.5 73.2 34 115.9 34 139 0 215.1-115.2 215.1-215.1 0-3.3-.1-6.5-.2-9.8 14.6-10.5 27.4-23.8 37.6-39z'
        fill1={fill1} />
    );
  }
}