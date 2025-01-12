import { FcGoogle } from "react-icons/fc";

const SignInGoogle = () => {
    return (
        <>
            <div className="flex items-center justify-center w-full border-[1px] rounded-full h-[40px] cursor-pointer hover:border-blue-500 hover:text-blue-500 transition-colors duration-300">
                <FcGoogle className="mr-2"/>
                <button className="text-sm">Sign in with google</button>
            </div>
        </>     
    )
}

export default SignInGoogle;