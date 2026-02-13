import { FaCogs, FaTruck, FaShieldAlt, FaHeadset } from "react-icons/fa";

const HERO_IMAGE =
  "https://images.pexels.com/photos/1579356/pexels-photo-1579356.jpeg?auto=compress&cs=tinysrgb&w=900";

const strengths = [
  {
    icon: FaCogs,
    title: "OEM-Quality Parts",
    image:
      "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "We source and supply genuine and aftermarket parts that meet or exceed original equipment specifications.",
  },
  {
    icon: FaTruck,
    title: "Fast Delivery",
    image:
      "https://images.pexels.com/photos/13923406/pexels-photo-13923406.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Minimizing downtime is critical. We maintain large inventories and ship parts quickly to keep your operations running.",
  },
  {
    icon: FaShieldAlt,
    title: "Trusted Reliability",
    image:
      "https://images.pexels.com/photos/12236053/pexels-photo-12236053.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Every part is inspected for quality. We stand behind our products with warranties and dedicated support.",
  },
  {
    icon: FaHeadset,
    title: "Expert Support",
    image:
      "https://images.pexels.com/photos/14651/pexels-photo-14651.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Our team of industry specialists can help you identify the right parts for your specific equipment and application.",
  },
];

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-slate-800 text-4xl font-bold text-center mb-12">
        About Us
      </h1>

      <div className="flex flex-col lg:flex-row justify-between items-center mb-16">
        <div className="lg:w-1/2 w-full">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Your Trusted Partner in Heavy Equipment Parts
          </h2>
          <p className="text-lg mb-4 text-justify text-slate-700">
            SolydShop is a specialized supplier of heavy-duty machinery parts and
            industrial equipment components. We serve the construction, mining,
            agriculture, and manufacturing sectors with premium parts for
            excavators, loaders, bulldozers, cranes, and more.
          </p>
          <p className="text-lg mb-4 text-justify text-slate-700">
            With years of experience in the heavy equipment industry, we
            understand that downtime costs money. That&apos;s why we maintain
            extensive inventories of engine components, hydraulic parts, undercarriage
            systems, and wear parts — ready to ship when you need them most.
          </p>
          <p className="text-lg text-justify text-slate-700">
            Whether you&apos;re maintaining a fleet of excavators or sourcing parts for
            a single machine, SolydShop delivers the quality, reliability, and
            service your operations demand.
          </p>
        </div>

        <div className="lg:w-1/2 w-full lg:ml-10 mt-6 lg:mt-0">
          <img
            src={HERO_IMAGE}
            alt="Aerial view of excavator, road roller, and bulldozer on construction site"
            className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      <div className="py-10 space-y-8">
        <h2 className="text-slate-800 text-3xl font-bold text-center">
          Why Choose SolydShop
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-6">
          {strengths.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <item.icon className="text-yellow-500 text-3xl mb-3" />
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
