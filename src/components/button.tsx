import { Button } from "./ui/button";
import { LoaderCircle } from 'lucide-react';

interface IButtonComponent {
    name: string,
    isLoading?: boolean,
    onClick?: () => void
}

const ButtonComponent = (props: IButtonComponent) => {
    return (
        <>
            <Button
                className="w-full rounded-full h-[40px]"
                disabled={props.isLoading}
                onClick={props.onClick}
            >
                {props.isLoading ? (
                    <div>
                        <LoaderCircle className="animate-spin" />
                        Please wait
                    </div>
                ) : props.name}
            </Button>
        </>
    )
}

export default ButtonComponent;