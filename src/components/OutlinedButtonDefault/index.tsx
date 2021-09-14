import { ButtonHTMLAttributes } from "hoist-non-react-statics/node_modules/@types/react";

import { forwardRef } from "react";
import { Button } from "./styles";

interface OutlinedButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const OutlinedButton = forwardRef<HTMLButtonElement, OutlinedButton>(
  (props, ref) => {
    return (
      <Button {...props} ref={ref}>
        {props.title}
      </Button>
    );
  }
);

OutlinedButton.displayName = "OutlinedButton";

export default OutlinedButton;
