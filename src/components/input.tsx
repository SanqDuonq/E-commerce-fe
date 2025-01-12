import { Input } from "./ui/input";
import { Label } from "./ui/label";
import ErrorComponent from "./error";

interface IInput {
    label: string,
    placeholder: string,
    type: 'text' | 'password'
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    error?: string
}

const InputComponent = (props: IInput) => {
    return (
        <>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label>{props.label}</Label>
                <Input
                    className="rounded-full h-[40px]"
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                />
                {props.error
                    ? ( <ErrorComponent 
                            error={props.error} 
                        />
                    )
                    : ( <div className="h-[20px]"></div>)
                }
            </div>
        </>
    )
}

export default InputComponent;