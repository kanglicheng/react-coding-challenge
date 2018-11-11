import React from 'react';

const BuildNewSVG = (props) =>{
  let bg = props.color || '#000';
  let height = props.height || props.size || '24';
  let width = props.width || props.size || '24';
  let path1 = props.path1 || 'M7 10l5 5 5-5z';
  let path2 = props.path2;
  let fill1 = props.fill1 || '';
  let fill2 = props.fill2 || 'none';
  let viewBox = props.viewBox || '0 0 24 24';

  return (
    <svg fill={bg} className={props.class} height={height} viewBox={viewBox} width={width}>
      <path d={path1} fill={fill1} />
      <path d={path2} fill={fill2} />
    </svg>
  );
};
export default BuildNewSVG;
