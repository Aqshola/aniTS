import React from "react";
import { Button, ButtonProps, useBreakpointValue } from "@chakra-ui/react";

interface Props extends ButtonProps {
  children: React.ReactNode;
  variant: "ghost" | "outline";
}
export default function LinkButton({ children, variant, ...rest }: Props) {
  const buttonSize = useBreakpointValue({ base: "xs", sm: "xs", md: "sm" });
  return (
    <Button variant={variant} size={buttonSize} {...rest}>
      {children}
    </Button>
  );
}
