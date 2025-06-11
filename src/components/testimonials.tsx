import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Dev Jain",
    username: "@devjain",
    body: "Claudio's intent recognition for DevOps is next-level. It helped us automate our cloud workflows in minutes.",
    img: "/profile/Dev-Jain.jpg",
  },
  {
    name: "Ethne",
    username: "@ethne",
    body: "The DeepDesign feature refined our architecture for scalability and exported ready-to-use Terraform code. Brilliant!",
    img: "/profile/Ethne.jpg",
  },
  {
    name: "Mike",
    username: "@mike",
    body: "Claudio's conversational assistant explained microservices patterns in a way my whole team could understand.",
    img: "/profile/mike.png",
  },
  {
    name: "Sam",
    username: "@sam",
    body: "The cost analysis and projections from DeepAnalysis gave us real business insights. Highly recommended!",
    img: "/profile/sam.png",
  },
  {
    name: "Pan",
    username: "@pan",
    body: "I love how Claudio integrates with our existing cloud stack and provides instant, actionable recommendations.",
    img: "/profile/Pan.jpg",
  },
  {
    name: "Zeradam",
    username: "@zeradam",
    body: "Claudio's ability to search and apply best-practice patterns saved us weeks of research and trial-and-error.",
    img: "/profile/Zeradam.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl bg-transparent transition-transform duration-300 ease-in-out hover:scale-105",
        "hover:z-10",
        "p-4"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-[14px] font-light text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-[14px] font-light">{body}</blockquote>
    </figure>
  );
};

const MarqueeDemo = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-x-hidden">
      <Marquee pauseOnHover className="[--duration:20s] w-full">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s] w-full">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeDemo; 