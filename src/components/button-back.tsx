import { ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";

const ButtonBack = ({onBack}: {onBack:() => void}) => {
    return (
        <Button variant='ghost' size='icon' onClick={onBack}>
            <ChevronLeft/>
        </Button>
    )
}

export default ButtonBack;