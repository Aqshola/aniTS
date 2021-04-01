import React from "react";
import { chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { MotionBoxProps, MotionImgProps } from "../../Types/Motion";

export const MotionBox: React.FC<MotionBoxProps> = motion(chakra.div);
export const MotionImage: React.FC<MotionImgProps> = motion(chakra.img);
