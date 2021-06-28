import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mq, colors } from "../utils/style/variables";

const Title = styled.h1`
  ${css`
    label: title;
  `}
  background-color: ${colors.primary};

  ${mq({
    color: [colors.secondary, "red", "gray"],
    fontSize: [30, 18, 16],
  })}
`;

export default Title;
