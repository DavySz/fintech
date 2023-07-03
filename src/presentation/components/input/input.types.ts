interface IInputDefaultProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

export type TInputVariant = "default" | "error" | "success";

export interface IProps extends IInputDefaultProps {
    variant?: TInputVariant;
}

export interface IInputWrapper {
    variant: TInputVariant;
}
