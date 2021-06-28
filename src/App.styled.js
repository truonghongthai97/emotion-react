import styled from "@emotion/styled";
import Button from "./StyledComponents/Button.styled";
import { mq, colors } from "./utils/style/variables";
import Title from "./components/Title";

const CustomButton = styled(Button)`
  padding: 15px;
`;

const App = styled.div`
  padding: 15px;
`;

const CustomTitle = styled(Title)`
  padding: 15px;

  ${mq({
    color: [, , "#fb00ff"],
    /* fontSize: [null, 18], */
  })}
`;

export { CustomButton, App, CustomTitle };
