import React from 'react';
import './Map.css';
// import MapHTML from 'raw-loader!./MapHTML.html';
// import MapHTML from 'raw-loader!./MapHTML.html';
// import { default as MapHTML } from './MapHTML.html';
//const MapHtml = require('raw-loader!./MapHTML.html');
/* eslint import/no-webpack-loader-syntax: off */

const mapHTML = require('raw-loader!./MapHTML.html');

function Map() {
  return (
    <div dangerouslySetInnerHTML={{ __html: mapHTML }} />
  );
}

export default Map;