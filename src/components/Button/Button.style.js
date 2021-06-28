import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../../utils/style/variables";

const getColors = (color) => {
  const colorData = {
    primary: colors.primary,
    secondary: colors.secondary,
  };

  return colorData[color] || "green";
};

const BaseButton = styled.button`
  ${css`
    label: BaseButton;
  `}
  color: ${({ color }) => getColors(color)};

  :focus {
    color: white;
  }
`;

export default BaseButton;
