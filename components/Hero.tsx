import { FadeIn } from "./FadeIn";
import { Button } from "./ui/button";
import { CalendarDays } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative h-screen">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/regulen-drone-footage.mov"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center text-white">
          <h1 className="text-4xl font-medium tracking-tight sm:text-6xl">
            Global Pharma Made
            <br />
            Fast & Simple
          </h1>
          <FadeIn>
            <p className="mt-6 text-xl leading-8">
              Looking to penetrate new markets with your medical products or
              devices? We are your end-to-end regulatory partners from initial
              idea to market approval and throughout your product&apos;s entire
              lifecycle.
            </p>
          </FadeIn>
          <div className="mt-12 flex justify-center">
            <a href="https://calendly.com/your-calendly-link" target="_blank" rel="noopener noreferrer">
              <Button variant="bookCall" className="flex items-center">
                <CalendarDays className="mr-2" />
                Schedule a Call
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
