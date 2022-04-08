export type ButtonProps = {
    color?: string;
    backgroundColor?: string;
    children: any;
    onClick?: (e: MouseEvent)=>void;
    disabled?: boolean;
}