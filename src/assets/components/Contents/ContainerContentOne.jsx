import ContentOne from "./ContentOne";import roket from "../../svg/roket.svg";
import lightning from "../../svg/lightning.svg";
import love from "../../svg/love.svg";

const contentOne = [
  {
    url: roket,
    title: "From Zero to One",
    desription:
      "We are an Information and Communication Technology (ICT) company specialized in the design and development of management systems. We combine vertical market expertise with the advantages from innovative technologies, such as Big Data, Social Networking, Cloud Computing, to optimize and integrate processes, applications and devices for customer service.",
  },
  {
    url: lightning,
    title: "Our Level Up",
    desription:
      "The presence of professionalism coming from the consulting sector and from the most established system integrators, with experience of know-how and complementary backgrounds, has allowed us to create a close, dynamic and reactive team. We believe that innovation is a key for increasing knowledge and developing new business opportunities.",
  },
  {
    url: love,
    title: "Your Satisfaction",
    desription:
      "We experiment with innovative technologies in our industry to create intuitive, user-friendly tools that enhance the user experience. We support companies in reimagining the network, helping them discover new business models and equipping them with a range of modern solutions available today.",
  },
];

export default function ContainerContentOne() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3">
            <ContentOne contentOne={contentOne}/>
        </div>
    )
}