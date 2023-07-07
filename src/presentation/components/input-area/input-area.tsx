import { InputWrapper, TextArea } from "./input-area.styles";
import { IInputArea } from "./input-area.types";

export const InputArea: React.FC<IInputArea> = ({
    variant = "default",
    ...rest
}) => {
    return (
        <InputWrapper variant={variant}>
            <TextArea {...rest} />
        </InputWrapper>
    );
};
