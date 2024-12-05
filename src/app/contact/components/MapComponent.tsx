interface MapProps {
  location: string;
}

const Map: React.FC<MapProps> = ({ location }) => {
  return (
    <div className="max-w-9xl mx-auto  py-8 px-4 md:px-6  lg:py-10">
      <div className="w-full px-4 md:px-6 aspect-[1/1] sm:aspect-[2/1] overflow-hidden">
        <iframe
          className="w-full h-full rounded-xl"
          src={location}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
