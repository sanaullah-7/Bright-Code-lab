// import { services } from "@/data/services";
import Trusted from "@/components/Services/TrustedSection";
import Services from "@/components/Services/ServicesPage";
// import { notFound } from "next/navigation";
const services = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    description:"Custom Software Development Services",
    para:"Tailored solutions designed to meet your specific business requirements and challenges.",
    image: "/services/hero.png",
    logo:"hi"
  },

  {
    slug: "web-app-development",
    title: "Web App Development",
    description:"Web Application Development Services with Next.js",
    image: "/services/hero(1).png",
     borderClass:"border-t-4 sm:border-t-8 border-darkblue mb-2 w-48 sm:w-20 md:w-24 rounded-full ",
     topClass:"mb-40"

  },


  {
  slug: "mobile-app-development",
  title: "Mobile App Development",
  description: "Mobile Application Development with React Native& Expo",
  para:"Building high-quality, cross-platform mobile applications with React Native and Expo for iOS and Android.",
  image: "/services/hero2.png",
},

{
  slug: "enterprise-app-development",
  description: "Enterprise business solutions.",
  title: "Enterprise App Development",
  image: "/services/enterprise.jpg",
},
  {
    slug: "ai-development",
    title: "AI Development",
    description:
      "AI powered systems and automation.",
    image: "/services/ai.jpg",
  },
{
  slug:"ux-ui-product-design",
  title: "Design",
  description:"",
    image: "/services/ai.jpg",

},
{
  slug:"support-and-maintenance",
  title:"Maintenance",
    image: "/services/ai.jpg",


}
];
// app/services/[slug]/page.jsx

// export async function generateStaticParams() {
//   return services.map((service) => ({
//     slug: service.slug,
//   }));
// }

export async function generateMetadata({ params }) {
  const { slug } = await params
  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Bright Code Lab`,
    description: service.description,
  };
}


export default async function Page({ params }) {
  const { slug } = await params;

  const service = services.find((item) =>
     item.slug === slug
  );

  if (!service) {
    return (
      <h1 className="text-5xl flex justify-center items-center w-full h-screen">
        Not Found <br />
        404 Error!
      </h1>
    );
  }

  return (
    <>
    <Services
      title={service.title}
      description={service.description}
      para={service.para}
      image={service.image}
      // web
      borderClass={service.borderClass}
      topClass={service.topClass}
      
    />
    <Trusted 
    logo={service.logo}
    />
    </>
  );
}