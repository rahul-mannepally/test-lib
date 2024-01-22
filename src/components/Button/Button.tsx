import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

interface IAppButton {
  variant?: "solid" | "outline";
  title: string;
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  bgColor?: ButtonProps["bgColor"];
  w?: ButtonProps["w"];
}

export const AppButton = ({
  variant,
  title,
  type = "button",
  disabled = false,
  onClick,
  bgColor,
  w,
}: IAppButton) => {
  return (
    <Button
      type={type}
      variant={variant}
      isDisabled={disabled}
      onClick={onClick}
      bgColor={bgColor}
      w={w || "full"}
    >
      {title}
    </Button>
  );
};

export default AppButton;
