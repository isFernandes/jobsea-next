import { ButtonHTMLAttributes } from "hoist-non-react-statics/node_modules/@types/react";

import { forwardRef } from "react";
import { Button } from "./styles";

interface ButtonText extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const ButtonText = forwardRef<HTMLButtonElement, ButtonText>((props, ref) => {
  return (
    <Button {...props} ref={ref}>
      {props.title}
    </Button>
  );
});

ButtonText.displayName = "ButtonText";

export default ButtonText;
