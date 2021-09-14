import { ButtonHTMLAttributes } from "hoist-non-react-statics/node_modules/@types/react";

import { forwardRef } from "react";
import { Button } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const ButtonDefault = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <Button {...props} ref={ref}>
        {props.title}
      </Button>
    );
  }
);

ButtonDefault.displayName = "ButtonDefault";

export default ButtonDefault;
