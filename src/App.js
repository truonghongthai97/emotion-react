import { Global, css, ClassNames } from "@emotion/react";
import globalStyles from "./utils/style/global";

import * as S from "./App.styled";

import Button from "./components/Button";
import CssProp from "./components/CssProp";
import Title from "./components/Title";

const SpanButton = S.CustomButton.withComponent("span");

let SomeComponent = (props) => (
  <div className={props.wrapperClassName}>
    in the wrapper!
    <div className={props.className}>{props.children}</div>
  </div>
);

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <S.App className="App">
        Learn React
        <hr />
        <CssProp />
        <hr />
        <Button>Regular Button</Button>
        <Button color="secondary">Secondary Button</Button>
        <Button color="primary">Primary Button</Button>
        <SpanButton>Span Button</SpanButton>
        <Title>this is a title</Title>
        <S.CustomButton as="span">Custom Button</S.CustomButton>
        <S.CustomTitle>this is a CustomTitle</S.CustomTitle>
        <hr />
        <ClassNames>
          {({ css, cx }) => (
            <SomeComponent
              wrapperClassName={css({ color: "green" })}
              className={css`
                color: hotpink;
              `}
            >
              from children!!
            </SomeComponent>
          )}
        </ClassNames>
      </S.App>
    </>
  );
}

export default App;
