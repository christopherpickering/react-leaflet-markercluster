(self.webpackChunk_christopherpickering_react_leaflet_markercluster=self.webpackChunk_christopherpickering_react_leaflet_markercluster||[]).push([[765],{"./.storybook/stories/Configure.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Configure});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),MapContainer=__webpack_require__("./node_modules/react-leaflet/lib/MapContainer.js"),TileLayer=__webpack_require__("./node_modules/react-leaflet/lib/TileLayer.js"),Marker=__webpack_require__("./node_modules/react-leaflet/lib/Marker.js"),leaflet_src=__webpack_require__("./node_modules/leaflet/dist/leaflet-src.js"),leaflet_src_default=__webpack_require__.n(leaflet_src),generic=__webpack_require__("./node_modules/@react-leaflet/core/lib/generic.js");__webpack_require__("./node_modules/leaflet.markercluster/dist/leaflet.markercluster-src.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["children"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}const react_leaflet_markercluster=(0,generic.Au)((function createMarkerCluster(_ref,context){_ref.children;var props=_objectWithoutProperties(_ref,_excluded),clusterProps={},clusterEvents={};Object.entries(props).forEach((function(_ref2){var _ref3=_slicedToArray(_ref2,2),propName=_ref3[0],prop=_ref3[1];return propName.startsWith("on")?clusterEvents[propName]=prop:clusterProps[propName]=prop}));var instance=new(leaflet_src_default().MarkerClusterGroup)(clusterProps);return Object.entries(clusterEvents).forEach((function(_ref4){var _ref5=_slicedToArray(_ref4,2),eventAsProp=_ref5[0],callback=_ref5[1],clusterEvent="cluster".concat(eventAsProp.substring(2).toLowerCase());instance.on(clusterEvent,callback)})),{instance,context:_objectSpread(_objectSpread({},context),{},{layerContainer:instance})}}));var MAP_CENTER_COORDINATES=[51,19],BasicExample=function BasicExample(){return(0,jsx_runtime.jsxs)(MapContainer.h,{className:"markercluster-map",center:MAP_CENTER_COORDINATES,zoom:4,maxZoom:18,children:[(0,jsx_runtime.jsx)(TileLayer.I,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),(0,jsx_runtime.jsxs)(react_leaflet_markercluster,{children:[(0,jsx_runtime.jsx)(Marker.J,{position:[49.8397,24.0297]}),(0,jsx_runtime.jsx)(Marker.J,{position:[52.2297,21.0122]}),(0,jsx_runtime.jsx)(Marker.J,{position:[51.5074,-.0901]})]})]})};BasicExample.displayName="BasicExample";const basic=BasicExample;BasicExample.__docgenInfo={description:"",methods:[],displayName:"BasicExample"};var Popup=__webpack_require__("./node_modules/react-leaflet/lib/Popup.js"),addon_actions_dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),logAction=function logAction(actionName){for(var _console,_len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];return(_console=console).warn.apply(_console,[actionName].concat(args)),(0,addon_actions_dist.aD)(actionName).apply(void 0,args)},EventListeners=function EventListeners(){return(0,jsx_runtime.jsxs)(MapContainer.h,{className:"markercluster-map",center:MAP_CENTER_COORDINATES,zoom:4,maxZoom:18,children:[(0,jsx_runtime.jsx)(TileLayer.I,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),(0,jsx_runtime.jsxs)(react_leaflet_markercluster,{onClusterClick:function onClusterClick(cluster){return logAction("cluster-click",cluster,cluster.layer.getAllChildMarkers())},children:[(0,jsx_runtime.jsx)(Marker.J,{position:[49.8397,24.0297],onClick:function onClick(marker){return logAction("marker-click",marker,marker.target.getLatLng())}}),(0,jsx_runtime.jsx)(Marker.J,{position:[52.2297,21.0122],onClick:function onClick(marker){return logAction("marker-click",marker,marker.target.getLatLng())}}),(0,jsx_runtime.jsx)(Marker.J,{position:[51.5074,-.0901],children:(0,jsx_runtime.jsx)(Popup.G,{minWidth:200,closeButton:!1,onClose:function onClose(popup){return logAction("popup-close",popup)},children:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("b",{children:"Hello world!"}),(0,jsx_runtime.jsx)("p",{children:"I am a lonely popup."})]})})})]})]})};EventListeners.displayName="EventListeners";const event_listeners=EventListeners;EventListeners.__docgenInfo={description:"",methods:[],displayName:"EventListeners"};var createClusterCustomIcon=function createClusterCustomIcon(cluster){return leaflet_src_default().divIcon({html:"<span>".concat(cluster.getChildCount(),"</span>"),className:"marker-cluster-custom",iconSize:leaflet_src_default().point(40,40,!0)})},MarkerClusterOptions=function MarkerClusterOptions(){return(0,jsx_runtime.jsxs)(MapContainer.h,{className:"markercluster-map",center:MAP_CENTER_COORDINATES,zoom:4,maxZoom:18,children:[(0,jsx_runtime.jsx)(TileLayer.I,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),(0,jsx_runtime.jsxs)(react_leaflet_markercluster,{showCoverageOnHover:!1,spiderfyDistanceMultiplier:2,iconCreateFunction:createClusterCustomIcon,children:[(0,jsx_runtime.jsx)(Marker.J,{position:[49.8397,24.0297]}),(0,jsx_runtime.jsx)(Marker.J,{position:[50.4501,30.5234]}),(0,jsx_runtime.jsx)(Marker.J,{position:[52.2297,21.0122]}),(0,jsx_runtime.jsx)(Marker.J,{position:[50.0647,19.945]}),(0,jsx_runtime.jsx)(Marker.J,{position:[48.9226,24.7111]}),(0,jsx_runtime.jsx)(Marker.J,{position:[48.7164,21.2611]}),(0,jsx_runtime.jsx)(Marker.J,{position:[51.5,-.09]}),(0,jsx_runtime.jsx)(Marker.J,{position:[51.5,-.09]}),(0,jsx_runtime.jsx)(Marker.J,{position:[51.5,-.09]})]})]})};MarkerClusterOptions.displayName="MarkerClusterOptions";const marker_cluster_options=MarkerClusterOptions;MarkerClusterOptions.__docgenInfo={description:"",methods:[],displayName:"MarkerClusterOptions"};const red_filled_marker_namespaceObject=__webpack_require__.p+"static/media/red-filled-marker.f96aeb96.svg";var redMarker=leaflet_src_default().icon({iconUrl:red_filled_marker_namespaceObject,iconSize:[40,40],iconAnchor:[20,40]}),MarkerOptions=function MarkerOptions(){return(0,jsx_runtime.jsxs)(MapContainer.h,{className:"markercluster-map",center:MAP_CENTER_COORDINATES,zoom:4,maxZoom:18,children:[(0,jsx_runtime.jsx)(TileLayer.I,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),(0,jsx_runtime.jsxs)(react_leaflet_markercluster,{children:[(0,jsx_runtime.jsx)(Marker.J,{position:[49.8397,24.0297],icon:redMarker}),(0,jsx_runtime.jsx)(Marker.J,{position:[50.4501,30.5234]}),(0,jsx_runtime.jsx)(Marker.J,{position:[52.2297,21.0122],title:"Warszawa title on hover"}),(0,jsx_runtime.jsx)(Marker.J,{position:[50.0647,19.945]}),(0,jsx_runtime.jsx)(Marker.J,{position:[48.9226,24.7111],title:"San Frankivsko title on hover"}),(0,jsx_runtime.jsx)(Marker.J,{position:[48.7164,21.2611]}),(0,jsx_runtime.jsx)(Marker.J,{position:[51.5,-.09],icon:redMarker,title:"London title on hover"})]})]})};MarkerOptions.displayName="MarkerOptions";const marker_options=MarkerOptions;MarkerOptions.__docgenInfo={description:"",methods:[],displayName:"MarkerOptions"};var marker_popup_redMarker=leaflet_src_default().icon({iconUrl:red_filled_marker_namespaceObject,iconSize:[40,40],iconAnchor:[20,40]}),MarkerPopup=function MarkerPopup(){return(0,jsx_runtime.jsxs)(MapContainer.h,{className:"markercluster-map",center:MAP_CENTER_COORDINATES,zoom:4,maxZoom:18,children:[(0,jsx_runtime.jsx)(TileLayer.I,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),(0,jsx_runtime.jsxs)(react_leaflet_markercluster,{children:[(0,jsx_runtime.jsx)(Marker.J,{position:[49.8397,24.0297],icon:marker_popup_redMarker,children:(0,jsx_runtime.jsx)(Popup.G,{children:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("b",{children:"Hello world!"}),(0,jsx_runtime.jsx)("p",{children:"I am a clustered popup."})]})})}),(0,jsx_runtime.jsx)(Marker.J,{position:[50.4501,30.5234]}),(0,jsx_runtime.jsx)(Marker.J,{position:[52.2297,21.0122]}),(0,jsx_runtime.jsx)(Marker.J,{position:[50.0647,19.945]}),(0,jsx_runtime.jsx)(Marker.J,{position:[48.9226,24.7111]}),(0,jsx_runtime.jsx)(Marker.J,{position:[48.7164,21.2611]}),(0,jsx_runtime.jsx)(Marker.J,{position:[51.5,-.09],children:(0,jsx_runtime.jsx)(Popup.G,{minWidth:200,closeButton:!1,children:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("b",{children:"Hello world!"}),(0,jsx_runtime.jsx)("p",{children:"I am a lonely popup."})]})})})]})]})};MarkerPopup.displayName="MarkerPopup";const marker_popup=MarkerPopup;MarkerPopup.__docgenInfo={description:"",methods:[],displayName:"MarkerPopup"};var Tooltip=__webpack_require__("./node_modules/react-leaflet/lib/Tooltip.js"),MarkerTooltip=function MarkerTooltip(){return(0,jsx_runtime.jsxs)(MapContainer.h,{className:"markercluster-map",center:MAP_CENTER_COORDINATES,zoom:4,maxZoom:18,children:[(0,jsx_runtime.jsx)(TileLayer.I,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),(0,jsx_runtime.jsxs)(react_leaflet_markercluster,{children:[(0,jsx_runtime.jsx)(Marker.J,{position:[49.8397,24.0297],children:(0,jsx_runtime.jsx)(Tooltip.u,{children:(0,jsx_runtime.jsx)("span",{children:"my tooltip text 1"})})}),(0,jsx_runtime.jsx)(Marker.J,{position:[50.4501,30.5234]}),(0,jsx_runtime.jsx)(Marker.J,{position:[52.2297,21.0122]}),(0,jsx_runtime.jsx)(Marker.J,{position:[50.0647,19.945]}),(0,jsx_runtime.jsx)(Marker.J,{position:[48.9226,24.7111]}),(0,jsx_runtime.jsx)(Marker.J,{position:[48.7164,21.2611]}),(0,jsx_runtime.jsx)(Marker.J,{position:[51.5,-.09],children:(0,jsx_runtime.jsx)(Tooltip.u,{direction:"bottom",children:(0,jsx_runtime.jsx)("span",{children:"my tooltip text 1"})})})]})]})};MarkerTooltip.displayName="MarkerTooltip";const marker_tooltip=MarkerTooltip;function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",a:"a",h2:"h2",hr:"hr",strong:"strong"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Documentation"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"basic-example",children:"Basic example"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Just grab your markers inside ",(0,jsx_runtime.jsx)(_components.code,{children:"<MarkerClusterGroup />"})," component, right after ",(0,jsx_runtime.jsx)(_components.code,{children:"<TileLayer />"}),":"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-javascript",children:"import { MapContainer, TileLayer, Marker } from 'react-leaflet';\nimport MarkerClusterGroup from 'react-leaflet-markercluster';\n\n<MapContainer\n  className=\"markercluster-map\"\n  center={[51.0, 19.0]}\n  zoom={4}\n  maxZoom={18}\n>\n  <TileLayer\n    url=\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n    attribution='&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors'\n  />\n\n  {/* Put <MarkerClusterGroup {...props} /> inside react-leaflet after <TileLayer /> */}\n  <MarkerClusterGroup>\n    <Marker position={[49.8397, 24.0297]} />\n    <Marker position={[52.2297, 21.0122]} />\n    <Marker position={[51.5074, -0.0901]} />\n  </MarkerClusterGroup>\n</MapContainer>;\n"})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["If you would like to pass some props to the Marker, please use ",(0,jsx_runtime.jsx)(_components.a,{href:"https://react-leaflet.js.org/docs/en/components.html#marker",target:"_blank",rel:"nofollow noopener noreferrer",children:"react-leaflet Marker component API"}),"."]}),"\n",(0,jsx_runtime.jsx)(basic,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"github-source-code",children:(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/christopherpickering/react-leaflet-markercluster/blob/master/.storybook/examples/basic.js",target:"_blank",rel:"nofollow noopener noreferrer",children:"GitHub source code"})}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"event-listeners",children:"Event listeners"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Just pass event handler into appropriate component, like:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-javascript",children:"import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';\nimport MarkerClusterGroup from 'react-leaflet-markercluster';\n\n<MapContainer\n  className=\"markercluster-map\"\n  center={[51.0, 19.0]}\n  zoom={4}\n  maxZoom={18}\n>\n  <TileLayer\n    url=\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n    attribution='&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors'\n  />\n\n  <MarkerClusterGroup\n    onClusterClick={cluster =>\n      console.warn('cluster-click', cluster, cluster.layer.getAllChildMarkers())\n    }\n  >\n    <Marker\n      position={[49.8397, 24.0297]}\n      onClick={marker =>\n        console.warn('marker-click', marker, marker.target.getLatLng())\n      }\n    />\n    <Marker\n      position={[52.2297, 21.0122]}\n      onClick={marker =>\n        console.warn('marker-click', marker, marker.target.getLatLng())\n      }\n    />\n\n    <Marker position={[51.5074, -0.0901]}>\n      <Popup\n        minWidth={200}\n        closeButton={false}\n        onClose={popup => console.warn('popup-close', popup)}\n      >\n        <div>\n          <b>Hello world!</b>\n          <p>I am a lonely popup.</p>\n        </div>\n      </Popup>\n    </Marker>\n  </MarkerClusterGroup>\n</MapContainer>;\n"})}),"\n",(0,jsx_runtime.jsx)(event_listeners,{}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/christopherpickering/react-leaflet-markercluster/blob/master/.storybook/examples/event-listeners.js",target:"_blank",rel:"nofollow noopener noreferrer",children:"GitHub source code"})}),"\n",(0,jsx_runtime.jsx)(_components.hr,{}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"cluster-custom-icon",children:"Cluster custom icon"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Leaflet.markercluster support some helpful options for clustered markers customization like: ",(0,jsx_runtime.jsx)("br",{}),"\n",(0,jsx_runtime.jsx)(_components.strong,{children:"showCoverageOnHover, maxClusterRadius"})," or ",(0,jsx_runtime.jsx)(_components.strong,{children:"iconCreateFunction."})]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Just pass whatever option you need from ",(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/Leaflet/Leaflet.markercluster#all-options",target:"_blank",rel:"nofollow noopener noreferrer",children:"All Leaflet.markercluster Options"})," to ",(0,jsx_runtime.jsx)(_components.strong,{children:"MarkerClusterGroup"})," as ",(0,jsx_runtime.jsx)(_components.strong,{children:"prop"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-javascript",children:"import L from 'leaflet';\nimport { MapContainer, TileLayer, Marker } from 'react-leaflet';\nimport MarkerClusterGroup from 'react-leaflet-markercluster';\n\n// Function for creating custom icon for cluster group\n// https://github.com/Leaflet/Leaflet.markercluster#customising-the-clustered-markers\n// NOTE: iconCreateFunction is running by leaflet, which is not support ES6 arrow func syntax\n// eslint-disable-next-line\nconst createClusterCustomIcon = function (cluster) {\n  return L.divIcon({\n    html: \\`<span>\\${cluster.getChildCount()}</span>\\`,\n    className: 'marker-cluster-custom',\n    iconSize: L.point(40, 40, true),\n  });\n};\n\n<MapContainer className=\"markercluster-map\" center={[51.0, 19.0]} zoom={4} maxZoom={18}>\n  <TileLayer\n    url=\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n    attribution='&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors'\n  />\n\n  {/* Pass Leaflet.markercluster option directly to MarkerClusterGroup as prop */}\n  <MarkerClusterGroup\n    showCoverageOnHover={false}\n    spiderfyDistanceMultiplier={2}\n    iconCreateFunction={createClusterCustomIcon}\n  >\n    <Marker position={[49.8397, 24.0297]} />\n    <Marker position={[50.4501, 30.5234]} />\n    <Marker position={[52.2297, 21.0122]} />\n    <Marker position={[50.0647, 19.9450]} />\n    <Marker position={[48.9226, 24.7111]} />\n    <Marker position={[48.7164, 21.2611]} />\n    <Marker position={[51.5, -0.09]} />\n    <Marker position={[51.5, -0.09]} />\n    <Marker position={[51.5, -0.09]} />\n  </MarkerClusterGroup>\n</MapContainer>\n"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"And do not forget about styles for your class:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-css",children:"/* Customize the Clustered Markers */\n.marker-cluster-custom {\n  background: #9370db;\n  border: 3px solid #ededed;\n  border-radius: 50%;\n  color: #ededed;\n  height: 40px;\n  line-height: 37px;\n  text-align: center;\n  width: 40px;\n}\n"})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["If you would like to pass some props to the Cluster, please check ",(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/Leaflet/Leaflet.markercluster#all-options",target:"_blank",rel:"nofollow noopener noreferrer",children:"List of all Leaflet.markercluster options"})]}),"\n",(0,jsx_runtime.jsx)(marker_cluster_options,{}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/christopherpickering/react-leaflet-markercluster/blob/master/.storybook/examples/marker-cluster-options.js",target:"_blank",rel:"nofollow noopener noreferrer",children:"GitHub source code"})}),"\n",(0,jsx_runtime.jsx)(_components.hr,{}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"marker-icon-and-title",children:"Marker icon and title"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Base on: ",(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/PaulLeCam/react-leaflet/blob/master/example/components/simple.js",target:"_blank",rel:"nofollow noopener noreferrer",children:"react-leaflet example"})," ",(0,jsx_runtime.jsx)("br",{}),"\nFor setting Marker options, please use ",(0,jsx_runtime.jsx)(_components.a,{href:"https://react-leaflet.js.org/docs/en/components.html#marker",target:"_blank",rel:"nofollow noopener noreferrer",children:"react-leaflet Marker API"})]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-javascript",children:'import L from \'leaflet\';\nimport { MapContainer, TileLayer, Marker } from \'react-leaflet\';\nimport MarkerClusterGroup from \'react-leaflet-markercluster\';\n\nimport redFilledMarker from \'./icons/red-filled-marker.svg\';\n\n// Create marker icon according to the official leaflet documentation\nconst redMarker = L.icon({\n  iconUrl: redFilledMarker,\n  iconSize: [40, 40],\n  iconAnchor: [20, 40],\n});\n\n<MapContainer\n  className="markercluster-map"\n  center={[51.0, 19.0]}\n  zoom={4}\n  maxZoom={18}\n>\n  <TileLayer\n    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"\n    attribution=\'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors\'\n  />\n\n  <MarkerClusterGroup>\n    <Marker position={[49.8397, 24.0297]} icon={redMarker} />\n    <Marker position={[50.4501, 30.5234]} />\n    <Marker position={[52.2297, 21.0122]} title="Warszawa title on hover" />\n    <Marker position={[50.0647, 19.945]} />\n    <Marker\n      position={[48.9226, 24.7111]}\n      title="San Frankivsko title on hover"\n    />\n    <Marker position={[48.7164, 21.2611]} />\n    <Marker\n      position={[51.5, -0.09]}\n      icon={redMarker}\n      title="London title on hover"\n    />\n  </MarkerClusterGroup>\n</MapContainer>;\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["If you would like to pass some props to the Cluster, please check ",(0,jsx_runtime.jsx)(_components.a,{href:"http://leafletjs.com/reference.html#marker-option",target:"_blank",rel:"nofollow noopener noreferrer",children:"List of all Leaflet Marker options"})]}),"\n",(0,jsx_runtime.jsx)(marker_options,{}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/christopherpickering/react-leaflet-markercluster/blob/master/.storybook/examples/marker-options.js",target:"_blank",rel:"nofollow noopener noreferrer",children:"GitHub source code"})}),"\n",(0,jsx_runtime.jsx)(_components.hr,{}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"marker-popup",children:"Marker popup"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Base on: ",(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/PaulLeCam/react-leaflet/blob/master/example/components/simple.js",target:"_blank",rel:"nofollow noopener noreferrer",children:"react-leaflet example"})," ",(0,jsx_runtime.jsx)("br",{}),"\nCreate Popup for Marker as easy, as to cluster all markers. ",(0,jsx_runtime.jsx)("br",{}),"\nJust pass ",(0,jsx_runtime.jsx)(_components.strong,{children:"react-leaflet Popup"})," component to the ",(0,jsx_runtime.jsx)(_components.strong,{children:"Marker"})," as a child: ",(0,jsx_runtime.jsx)("br",{})]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-javascript",children:"import L from 'leaflet';\nimport { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';\nimport MarkerClusterGroup from 'react-leaflet-markercluster';\n\nimport redFilledMarker from './icons/red-filled-marker.svg';\n\n// Create marker icon according to the official leaflet documentation\nconst redMarker = L.icon({\n  iconUrl: redFilledMarker,\n  iconSize: [40, 40],\n  iconAnchor: [20, 40],\n});\n\n<MapContainer\n  className=\"markercluster-map\"\n  center={[51.0, 19.0]}\n  zoom={4}\n  maxZoom={18}\n>\n  <TileLayer\n    url=\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n    attribution='&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors'\n  />\n\n  <MarkerClusterGroup>\n    <Marker position={[49.8397, 24.0297]} icon={redMarker}>\n      <Popup>\n        <div>\n          <b>Hello world!</b>\n          <p>I am a clustered popup.</p>\n        </div>\n      </Popup>\n    </Marker>\n\n    <Marker position={[50.4501, 30.5234]} />\n    <Marker position={[52.2297, 21.0122]} />\n    <Marker position={[50.0647, 19.945]} />\n    <Marker position={[48.9226, 24.7111]} />\n    <Marker position={[48.7164, 21.2611]} />\n\n    <Marker position={[51.5, -0.09]}>\n      <Popup minWidth={200} closeButton={false}>\n        <div>\n          <b>Hello world!</b>\n          <p>I am a lonely popup.</p>\n        </div>\n      </Popup>\n    </Marker>\n  </MarkerClusterGroup>\n</MapContainer>;\n"})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["If you would like to pass some props to the Cluster, please check ",(0,jsx_runtime.jsx)(_components.a,{href:"http://leafletjs.com/reference.html#popup-option",target:"_blank",rel:"nofollow noopener noreferrer",children:"List of all Leaflet Popup options"})]}),"\n",(0,jsx_runtime.jsx)(marker_popup,{}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/christopherpickering/react-leaflet-markercluster/blob/master/.storybook/examples/marker-popup.js",target:"_blank",rel:"nofollow noopener noreferrer",children:"GitHub source code"})}),"\n",(0,jsx_runtime.jsx)(_components.hr,{}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"marker-tooltip",children:"Marker tooltip"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Base on: ",(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/PaulLeCam/react-leaflet/blob/master/example/components/tooltip.js",target:"_blank",rel:"nofollow noopener noreferrer",children:"react-leaflet example"})," ",(0,jsx_runtime.jsx)("br",{}),"\nCreation of Tooltip for Marker as easy, as a creation of Popup. ",(0,jsx_runtime.jsx)("br",{}),"\nJust pass ",(0,jsx_runtime.jsx)(_components.strong,{children:"react-leaflet Tooltip"})," component to the ",(0,jsx_runtime.jsx)(_components.strong,{children:"Marker"})," as a child: ",(0,jsx_runtime.jsx)("br",{})]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-javascript",children:'import { MapContainer, TileLayer, Marker, Tooltip } from \'react-leaflet\';\nimport MarkerClusterGroup from \'react-leaflet-markercluster\';\n\n// Setup Tooltip according to react-leaflet documentation\n// https://react-leaflet.js.org/docs/en/examples.html\n\n<MapContainer\n  className="markercluster-map"\n  center={[51.0, 19.0]}\n  zoom={4}\n  maxZoom={18}\n>\n  <TileLayer\n    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"\n    attribution=\'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors\'\n  />\n\n  <MarkerClusterGroup>\n    <Marker position={[49.8397, 24.0297]}>\n      <Tooltip>\n        <span>my tooltip text 1</span>\n      </Tooltip>\n    </Marker>\n\n    <Marker position={[50.4501, 30.5234]} />\n    <Marker position={[52.2297, 21.0122]} />\n    <Marker position={[50.0647, 19.945]} />\n    <Marker position={[48.9226, 24.7111]} />\n    <Marker position={[48.7164, 21.2611]} />\n\n    <Marker position={[51.5, -0.09]}>\n      <Tooltip direction="bottom">\n        <span>my tooltip text 1</span>\n      </Tooltip>\n    </Marker>\n  </MarkerClusterGroup>\n</MapContainer>;\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["If you would like to pass some props to the Cluster, please check ",(0,jsx_runtime.jsx)(_components.a,{href:"http://leafletjs.com/reference.html#tooltip-option",target:"_blank",rel:"nofollow noopener noreferrer",children:"List of all Leaflet Tooltip options"})]}),"\n",(0,jsx_runtime.jsx)(marker_tooltip,{}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/christopherpickering/react-leaflet-markercluster/blob/master/.storybook/examples/marker-tooltip.js",target:"_blank",rel:"nofollow noopener noreferrer",children:"GitHub source code"})})]})}MarkerTooltip.__docgenInfo={description:"",methods:[],displayName:"MarkerTooltip"};const Configure=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);