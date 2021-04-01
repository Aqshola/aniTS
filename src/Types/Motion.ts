import React from "react";
import { HTMLChakraProps } from "@chakra-ui/react";
import { HTMLMotionProps } from "framer-motion";

type Merge<P, T> = Omit<P, keyof T> & T;

export type MotionBoxProps = Merge<
  HTMLChakraProps<"div">,
  HTMLMotionProps<"div">
>;

export type MotionImgProps = Merge<
  HTMLChakraProps<"img">,
  HTMLMotionProps<"img">
>;
