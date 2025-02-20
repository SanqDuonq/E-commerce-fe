import { Button } from "./ui/button";
import { LoaderCircle } from "lucide-react";

interface IButtonComponent {
  name: string;
  isLoading?: boolean;
  onClick?: () => void;
}

const ButtonComponent = (props: IButtonComponent) => {
  return (
    <>
      <button
        className="bg-black text-white font-light px-8 py-2 mt-4 w-full"
        disabled={props.isLoading}
        onClick={props.onClick}
      >
        {props.isLoading ? (
          <div>
            <LoaderCircle className="animate-spin" />
            Please wait
          </div>
        ) : (
          props.name
        )}
      </button>
    </>
  );
};

export default ButtonComponent;
