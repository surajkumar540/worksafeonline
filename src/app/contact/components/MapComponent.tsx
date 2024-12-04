interface MapProps {
  location: string;
}

const Map: React.FC<MapProps> = ({location}) => {
  return (
    <div className="w-full px-4 md:px-6 lg:px-10 aspect-square lg:h-screen overflow-hidden">
      <iframe
        className="w-full h-full rounded-xl"
        src={location}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
