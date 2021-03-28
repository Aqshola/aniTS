import { Button } from "@chakra-ui/react";

export default function SlideArrow(props: { typeArrow: "left" | "right" }) {
  return (
    <>
      <Button
        position="absolute"
        left="0"
        top="20"
        w="max"
        zIndex="1"
        // onClick={sliderRef.current?.slickPrev}
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
