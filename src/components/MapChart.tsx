import React from 'react';
import { Annotation, ComposableMap, Geographies, Geography, Graticule } from 'react-simple-maps';

const geoUrl = 'src/assets/map.json';

const markers = [
  {
    markerOffset: -15,
    name: 'Grenoble',
    coordinates: [5.7245, 45.1885], // Coordonnées de Grenoble
    orientation: 'start',
  },
  {
    markerOffset: 25,
    name: 'Montréal',
    coordinates: [-73.5673, 45.5017], // Coordonnées de Montréal
    orientation: 'end',
  },
];

export const MapChart = () => {
  console.log(geoUrl); // Assuming geoUrl is defined elsewhere

  return (
    <ComposableMap
      projectionConfig={{
        scale: 150,
      }}
      width={1000}
      height={400}
      style={{ width: '100%', height: 'auto' }}
    >
      <Graticule stroke="lightgray" />
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} />)
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset, orientation }) => (
        <Annotation
          subject={[coordinates[0], coordinates[1]]}
          dx={-15}
          dy={-5}
          connectorProps={{
            stroke: '#FF5533',
            strokeWidth: 3,
            strokeLinecap: 'round',
          }}
          key={name} // Ensure a unique key for each Annotation
        >
          <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#F53">
            {name}
          </text>
        </Annotation>
      ))}
    </ComposableMap>
  );
};
