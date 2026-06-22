// import { services } from "@/data/services";
import Services from "@/components/Services/ServicesPage";
// import { notFound } from "next/navigation";
const services = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    description:
      "Build scalable custom software solutions.",
    image: "/services/custom.jpg",
  },

  {
    slug: "web-app-development",
    title: "Web App Development",
    description:
      "Modern web applications using Next.js.",
    image: "/services/web.jpg",
  },

  {
    slug: "ai-development",
    title: "AI Development",
    description:
      "AI powered systems and automation.",
    image: "/services/ai.jpg",
  },
  {
  slug: "mobile-app-development",
  title: "Mobile App Development",
  description: "Build iOS and Android apps.",
  image: "/services/mobile.jpg",
},

{
  slug: "enterprise-app-development",
  title: "Enterprise App Development",
  description: "Enterprise business solutions.",
  image: "/services/enterprise.jpg",
},
{
  slug:"ux-ui-product-design",
  title: "Design",
},
{
  slug:"support-and-maintenance",
  title:"Maintenance"

}
];

export default async function Page({ params }) {
  const { slug } = await params;

  const service = services.find((item) =>{ return item.slug === slug
});

  if (!service) {
     return <h1 className=" text-5xl flex justify-center items-center  w-full h-screen">Not found <br />302 Error!</h1>;
  }

  return (
    <>
      <Services
        title={service.title}
        description={service.description}
        image={service.image}
      />
    </>
  );
}