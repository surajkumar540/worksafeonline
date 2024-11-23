interface ContactDetail {
  icon: string;
  title: string;
  description: string;
}

const ContactDetails: React.FC = () => {
  const details: ContactDetail[] = [
    {
      icon: "📍",
      title: "STORE LOCATION",
      description: "7409 Mayfield Rd, Woodhaven, NY 11421",
    },
    {
      icon: "🏢",
      title: "HEADQUARTER",
      description: "803 Blackburn Dr, Champaign, IL 61821",
    },
    {
      icon: "⏰",
      title: "OFFICE HOURS",
      description: "Monday - Friday, 8:00am - 4:00pm",
    },
    {
      icon: "☎️",
      title: "CONTACT INFO",
      description: "Tel: (984) 123-456-88\nEmail: info@example.com",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-8 px-4">
      {details.map((detail, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <div className="text-4xl">{detail.icon}</div>
          <h3 className="font-bold text-lg mt-2">{detail.title}</h3>
          <p className="mt-1 text-sm whitespace-pre-line">
            {detail.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ContactDetails;
