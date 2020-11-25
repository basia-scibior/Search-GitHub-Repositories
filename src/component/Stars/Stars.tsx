import { FC } from "react";
import * as React from "react";
import starUrl from "../../images/star.png";
import { Rating, Star, StarsNumber } from "./Stars.styles";

interface SearchItemProps {
  number?: number;
}

export const Stars: FC<SearchItemProps> = ({ number }) => (
  <Rating>
    <Star src={starUrl} />
    <StarsNumber>{number}</StarsNumber>
  </Rating>
);
