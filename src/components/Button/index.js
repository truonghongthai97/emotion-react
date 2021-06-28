import { forwardRef } from "react";
import StyledButton from "./Button.style";

const Button = forwardRef(({ children, ...restProps }, ref) => {
  return (
    <StyledButton {...restProps} ref={ref}>
      {children}
    </StyledButton>
  );
});

export default Button;
