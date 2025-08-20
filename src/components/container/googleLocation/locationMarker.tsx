import { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

type UseGoogleMapProps = {
  center: google.maps.LatLngLiteral;
  zoom?: number;
};
export function useGoogleMap({ center, zoom = 14 }: UseGoogleMapProps) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env
      .VITE_GOOGLE_MAPS_API_KEY as string as string, // <-- keep key in env
    libraries: ["places"],
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback((mapInstance: google.maps.Map) => {
    setMap(mapInstance);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return {
    isLoaded,
    map,
    GoogleMapComponent: (
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "300px",
          borderRadius: "12px",
        }}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={center} />
      </GoogleMap>
    ),
  };
}
