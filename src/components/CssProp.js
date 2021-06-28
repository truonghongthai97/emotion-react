/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";

// refer: https://dev.to/arisa_dev/migrating-react-17-emotion-11-pragma-and-pragmafrag-cannot-be-set-when-runtime-is-automatic-kpa
const CssProp = () => {
  return (
    <div css={{ color: "green", "& .name": { color: "orange" } }}>
      CSS Props
      <div className="name">This is orange</div>
    </div>
  );
};

export default CssProp;
