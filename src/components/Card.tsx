import React, { FC, useState } from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface ICardProps {
  width?: string;
  height?: string;
  children?: React.ReactNode;
  variant: CardVariant;
  onClick: (num: number) => void;
}

const Card: FC<ICardProps> = ({
  width,
  height,
  children,
  variant,
  onClick,
}) => {
  const [state, setState] = useState(0);

  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? "1px solid grey" : "none",
        background: variant === CardVariant.primary ? "lightgray" : "",
      }}
      onClick={() => onClick(state)}
    >
      {children}
    </div>
  );
};

export default Card;
