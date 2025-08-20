import { useGoogleMap } from "@/components/container/googleLocation/locationMarker";
import { Spinner } from "@radix-ui/themes";

export const ContactMap = () => {
  const { isLoaded, GoogleMapComponent } = useGoogleMap({
    center: { lat: 59.41318, lng: 24.66145 }, // Tallinn
    zoom: 18,
  });

  if (!isLoaded) return <Spinner size="3" />;

  return <div className="contact__map-inner">{GoogleMapComponent}</div>;
};
