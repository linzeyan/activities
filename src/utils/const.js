// const
const MAPBOX_TOKEN =
  'pk.eyJ1IjoieWlob25nMDYxOCIsImEiOiJja2J3M28xbG4wYzl0MzJxZm0ya2Fua2p2In0.PNKfkeQwYuyGOTT_x9BJ4Q';
const MUNICIPALITY_CITIES_ARR = [
  '新北市',
  '台北市',
  '桃園市',
  '基隆市',
];
const MAP_LAYER_LIST = ['road-label', 'waterway-label', 'natural-line-label',
  'natural-point-label', 'water-line-label', 'water-point-label',
  'poi-label', 'airport-label', 'settlement-subdivision-label',
  'settlement-label', 'state-label', 'country-label',
];

// styling: set to `true` if you want dash-line route
const USE_DASH_LINE = true;
// styling: route line opacity: [0, 1]
const LINE_OPACITY = 0.4;
// styling: map height
const MAP_HEIGHT = 600;
//set to `false` if you want to hide the road label characters
const ROAD_LABEL_DISPLAY = true;

// IF you outside China please make sure IS_CHINESE = false
const IS_CHINESE = false;
const USE_ANIMATION_FOR_GRID = true;
const CHINESE_INFO_MESSAGE = (yearLength, year) => {
  const yearStr = year === 'Total' ? '所有' : ` ${year} `;
  return `我用 App 記錄自己跑步 ${yearLength} 年了，下麵列表展示的是${yearStr}的數據`;
}
const ENGLISH_INFO_MESSAGE = (yearLength, year) =>
  `${yearLength}-year-activity, the table shows year ${year} data`;

// not support English for now
const CHINESE_LOCATION_INFO_MESSAGE_FIRST =
  '我跑過了一些地方，希望隨著時間推移，地圖點亮的地方越來越多';
const CHINESE_LOCATION_INFO_MESSAGE_SECOND = '不要停下來，不要停下奔跑的腳步';

const INFO_MESSAGE = IS_CHINESE ? CHINESE_INFO_MESSAGE : ENGLISH_INFO_MESSAGE;

export {
  CHINESE_LOCATION_INFO_MESSAGE_FIRST,
  CHINESE_LOCATION_INFO_MESSAGE_SECOND,
  MAPBOX_TOKEN,
  MUNICIPALITY_CITIES_ARR,
  MAP_LAYER_LIST,
  IS_CHINESE,
  ROAD_LABEL_DISPLAY,
  INFO_MESSAGE,
  USE_ANIMATION_FOR_GRID,
  USE_DASH_LINE,
  LINE_OPACITY,
  MAP_HEIGHT,
};

const nike = 'rgb(224,237,94)'; // if you want change the main color change here src/styles/variables.scss

// If your map has an offset please change this line
// issues #92 and #198
export const NEED_FIX_MAP = true;
export const MAIN_COLOR = nike;
export const PROVINCE_FILL_COLOR = '#47b8e0';
