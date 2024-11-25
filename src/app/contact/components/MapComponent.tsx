const Map: React.FC = () => {
  return (
    <div className="w-full px-4 md:px-6 lg:px-10 aspect-square lg:h-screen overflow-hidden">
      <iframe
        className="w-full h-full rounded-xl"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609981274!2d-74.24442053828253!3d40.6971494224906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5c6a1ed8d%3A0xf90ac4ddf5262f20!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1632031966121!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
