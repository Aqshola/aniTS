import { Button } from "@chakra-ui/react";

export default function SlideArrow(props: {
  typeArrow: "left" | "right";
  onClick: () => void;
}) {
  return (
    <>
      <Button
        position="absolute"
        left={props.typeArrow === "left" ? "0" : "unset"}
        right={props.typeArrow === "right" ? "0" : "unset"}
        top="20"
        w="max"
        zIndex="1"
        display={["none", "none", "flex"]}
        onClick={props.onClick}
        border="1px solid black"
      >
        {props.typeArrow === "left" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="24px"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        )}
        {props.typeArrow === "right" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="24px"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        )}
      </Button>
    </>
  );
}
