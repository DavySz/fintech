export type TInputVariant = "default" | "error" | "success";

export interface IInputArea
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    variant?: TInputVariant;
}

export interface IInputWrapper {
    variant: TInputVariant;
}
