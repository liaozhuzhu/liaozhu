"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          if (idx === 4 || idx === 5 || idx === 6) {
            if (idx === 6) {
              return (
                <motion.span
                  key={word + idx}
                  className="text-yellow-400 opacity-0"
                >
                  {word.substring(0, word.length - 1)}
                  <motion.span className="text-zinc-500 opacity-0">
                    .{" "}
                  </motion.span>
                </motion.span>
              );
            }
            return (
              <motion.span
                key={word + idx}
                className="text-yellow-400 opacity-0"
              >
                {word}{" "}
              </motion.span>
            );
          } else if (idx === 10 || idx === 11) {
            return (
              <motion.span key={word + idx} className="text-blue-800 opacity-0">
                {word}{" "}
              </motion.span>
            );
          } else if (idx === 13 || idx === 14 || idx === 15) {
            return (
              <motion.span
                key={word + idx}
                className="text-orange-400 opacity-0"
              >
                {word}{" "}
              </motion.span>
            );
          }
          return (
            <motion.span
              key={word + idx}
              className="text-zinc-500 opacity-0"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("", className)}>
      <div className="mt-4 text-center mx-4">
        <div className="text-xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
