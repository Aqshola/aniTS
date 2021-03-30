import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

interface Props extends ButtonProps {
  children: React.ReactNode;
  variant: "ghost" | "outline";
}
export default function LinkButton({ children, variant, ...rest }: Props) {
  return (
    <Button variant={variant} size="sm" {...rest}>
      {children}
    </Button>
  );
}
