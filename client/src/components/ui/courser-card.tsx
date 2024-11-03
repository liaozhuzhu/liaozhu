"use client";
import { animate, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import { Image } from "lucide-react";

export function CourserCard() {
  return (
    <Card>
      <CardSkeletonContainer>
        <Skeleton />
      </CardSkeletonContainer>
      {/* <CardDescription>
        A card that showcases a set of tools that you use to create your
        product.
      </CardDescription> */}
    </Card>
  );
}

const Skeleton = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [
      ".circle-1",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-2",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-3",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-4",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-5",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    // @ts-ignore
    animate(sequence, {
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);
  return (
    <div className="overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
          <Container className="h-8 w-8 circle-1">
            <PineconeLogo className="h-4 w-4 " />
          </Container>
          <Container className="h-12 w-12 circle-2">
            <MongoLogo className="h-6 w-6 text-white object-cover" />
          </Container>
          <Container className="circle-3">
            <ReactLogo className="h-8 w-8 text-white object-cover" />
          </Container>
          <Container className="h-12 w-12 circle-4">
            <OpenAILogo className="h-6 w-6 " />
          </Container>
          <Container className="h-8 w-8 circle-5">
            <TailwindLogo className="h-4 w-4 object-contain" />
          </Container>
      </div>

      <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-zinc-50 to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};
const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-zinc-50"
        ></motion.span>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-white py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-neutral-400 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[15rem] md:h-[20rem] rounded-xl z-40",
        className,
        showGradient &&
          " [mask-image:radial-gradient(80%_80%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};

export const PineconeLogo = ({ className }: { className?: string }) => {
  return (
    // return an image of java logo
    <img
      className={className}
      src="/images/pinecone.png"
      alt="pinecone Logo"
      width={100}
      height={100}
    />
  );
};

export const MongoLogo = ({ className }: { className?: string }) => {
  return (
    <img
      className={className}
      src="/images/mongo.png"
      alt="mongo Logo"
      width={100}
      height={100}
    />
  );
};
export const ReactLogo = ({ className }: { className?: string }) => {
  return (
    <img
      className={className}
      src="/images/react.png"
      alt="React Logo"
      width={100}
      height={100}
    />
  );
};
export const OpenAILogo = ({ className }: { className?: string }) => {
  return (
    <img
      className={className}
      src="/images/openai.png"
      alt="openai Logo"
      width={100}
      height={100}
    />
  );
};

export const TailwindLogo = ({ className }: { className?: string }) => {
  return (
    <img
      className={className}
      src="/images/tailwind.png"
      alt="tailwind Logo"
      width={100}
      height={100}
    />
  );
};