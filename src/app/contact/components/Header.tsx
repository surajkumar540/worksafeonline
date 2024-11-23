interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="relative bg-gray-800 text-white py-10">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        {subtitle && <p className="mt-2 text-lg">{subtitle}</p>}
      </div>
    </div>
  );
};

export default Header;
