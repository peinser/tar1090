"use strict";

// -- Title Settings --------------------------------------
PlaneCountInTitle = true;
MessageRateInTitle = true;

// -- Output Settings -------------------------------------
DisplayUnits = "metric";

// -- Map settings ----------------------------------------
DefaultZoomLvl   = 11;

autoselectCoords = [];

SiteShow    = true;
SiteCircles = true;
SiteCirclesDistances = [0.5, 1, 3, 5];
SiteCirclesColors = ['#FF0000', '#FFA500', '#FFFF00', '#00FF00'];
SiteAllowedICAO = ['e007bc'];  // Example: simulated drone.

if (SiteCircles && SiteCirclesDistances?.length > 0) {
    let distances = [...SiteCirclesDistances].sort((a,b) => a - b);
    let colors = SiteCirclesColors || [];
    distances.forEach((distance, index) => {
        AlertRanges.push({
            distance: distance,
            color: colors[index] || '#FF0000',
            sound: 'sounds/alarm.ogg',
        });
    });
}

updateLocation = true;

MapType_tar1090 = "osm";

darkModeDefault = true;

MapDim = true;
mapDimPercentage = 0.35;

defaultOverlays = [];

// -- Marker settings -------------------------------------
webglIconOpacity = 1.0;
webglIconMapMoveOpacity = 0.7;
webglIconMapMoveOpacityCrowded = 0.25;
webglIconMapMoveOpacityCrowdedThreshold = 1500;

markerZoomDivide = 11;
markerSmall = 0.9;
markerBig = 1.3;

OutlineADSBColor = '#000000';
outlineWidth = 1.2;

monochromeMarkers = false;


ColorByAlt = {
    unknown : { h: 0,   s: 0,   l: 70 },
    ground  : { h: 0,   s: 0,   l: 40 },
    air : {
        h: [ { alt: 0,     val: 240 },
             { alt: 2000,  val: 120 },
             { alt: 10000, val: 60  },
             { alt: 30000, val: 300 } ],
        s: 90,
        l: 50,
    },
    selected : { h: 0, s: -20, l: +25 },
    stale    : { h: 0, s: -30, l: +30 },
    mlat     : { h: 200, s: -20, l: -10 }
};

altitudeChartDefaultState = true;

// -- Drone / situational awareness optimizations --------
enableMouseover = true;
wideInfoBlock = true;
baseInfoBlockWidth = 280;

showPictures = true;
planespottersAPI = true;
planespottingAPI = true;

useRouteAPI = true;
routeDisplay = 'iata+city';
routeApiUrl = "https://api.adsb.lol/api/0/routeset";
registrationLinks = true;
flightawareLinks = false;

ShowFlags = true;

tempTrails = true;
tempTrailsTimeout = 300;

seenTimeout = 60;
seenTimeoutMlat = 60;

mlatTimeout = 20;

// Remove // to show; keep commented to hide
HideCols = [
    //"#icao",
    //"#country",
    //"#flight",
    //"#route",
    //"#registration",
    //"#type",
    //"#squawk",
    //"#altitude",
    //"#speed",
    //"#vert_rate",
    //"#sitedist",
    //"#track",
    "#msgs",
    //"#seen",
    //"#rssi",
    "#lat",
    "#lon",
    //"#data_source",
    //"#military",
    //"#wd", "#ws",
];

// -- Share / external links ------------------------------
shareBaseUrl = 'https://peinser.com';
BingMapsAPIKey = null;
MapboxAPIKey = null;

// -- Other -----------------------------------------------
utcTimesLive = false;
utcTimesHistoric = true;

labelZoom = 8;
labelZoomGround = 11;

enableDWD = false;

jaeroTimeout = 20 * 60;

// droneJson = "https://peinser.com/data/drones.json";  // JSON RemoteID feed.
// droneRefresh = 2;