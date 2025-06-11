import { ArrowRightIcon } from "lucide-react";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/ui/badge";
import StarBorder from "./StarBorder";

import Section from "@/components/sections/hero/default";
import BlurText from "./BlurText";

interface HeroButtonProps {
  href: string;
  text: string;
  variant?: string;
  icon?: ReactNode;
  iconRight?: ReactNode;
}

interface HeroProps {
  title?: string;
  description?: string;
  mockup?: ReactNode | false;
  badge?: ReactNode | false;
  buttons?: HeroButtonProps[] | false;
  className?: string;
}

export default function Hero({
  title = "Design scalable cloud & backend solutions in seconds.",
  description =
    "Claudio turns your ideas into production-ready cloud architecture in seconds. it builds intelligent diagrams, CDK/SDK code, and cross-cloud integrations for AWS, Azure, and GCP — all from a single prompt.",

  badge = (
    <Badge variant="outline">
      <span className="text-muted-foreground">
        Claudio v0.1 beta will be relesed soon!
      </span>
      <a href="#" className="flex items-center gap-1">
        Join Waitlist
        <ArrowRightIcon className="size-3" />
      </a>
    </Badge>
  ),
  buttons = [
    {
      href: "#waitlist",
      text: "Waitlist",
      variant: "glow",
    },
  ],
  className,
}: HeroProps) {
  return (
    <Section
      className={cn(
        "fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0 font-[var(--font-lato)]",
        className,
      )}
    >
      <div className="max-w-container mx-auto flex flex-col gap-12 pt-32 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {badge !== false && badge}
          {(() => {
            const handleAnimationComplete = () => {
              console.log('Animation completed!');
            };
            return (
              <BlurText
                text={title}
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="relative z-10 inline-block text-center w-full text-2xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight font-semibold text-balance text-white drop-shadow-2xl font-[var(--font-lato)] tracking-tight dark:text-white"
                animationFrom={undefined}
                animationTo={undefined} 
              />
            );
          })()}
          <p className="relative z-10 max-w-[740px] font-medium text-balance text-muted-foreground text-[14px]">
            {description}
          </p>
          {buttons !== false && buttons.length > 0 && (
            <div className="relative z-10 flex justify-center gap-4">
              {buttons.map((button, index) => (
                <StarBorder
                  as="a"
                  key={index}
                  href={button.href}
                  className="font-[var(--font-lato)] text-[14px] px-6 py-[6px]"
                  color="cyan"
                  speed="5s"
                >
                  {button.icon}
                  {button.text}
                  {button.iconRight}
                </StarBorder>
              ))}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
} 