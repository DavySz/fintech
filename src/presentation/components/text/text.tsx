import { CustomText } from "./text.styles";
import { type IText } from "./text.types";

export const Text: React.FC<IText> = ({
    color = "neutrals-default",
    children,
    weight,
    size,
    ...rest
}) => {
    return (
        <CustomText size={size} weight={weight} color={color} {...rest}>
            {children}
        </CustomText>
    );
};
