import {  useState } from "react";


export const TextArea = ({ props }) => {
    let { name, inputValue, handleTextAreaChange } = props;

    let [isFocused, setIsFocused] = useState(false);
    let borderColor = isFocused ? "border-[#2E7D32]" : "border-dark";

    const handleInputFocus = () => setIsFocused(true)

    const handleInputBlur = () => setIsFocused(false)

    return (
        <div className="w-full h-56 lg:h-full font-montserrat text-base leading-[18px] text-[#333]">
            <textarea name={ name }
                value={ inputValue }
                onChange={ handleTextAreaChange }
                onFocus={ handleInputFocus } 
                onBlur={ handleInputBlur }
                className={`w-full h-textarea bg-[#FAFAFA] border-2 ${ borderColor } 
                rounded-[8px] px-4 py-[14px] placeholder:text-ash focus:outline-none`} 
            >
                
            </textarea>
        </div>
    )
}


const Input = ({ props }) => {
    let {
        type,
        name,
        placeholder, 
        errorText,
        inputValue,
        hasError,
        errorValue,
        handleInputChange,
    } = props;

    let [isFocused, setIsFocused] = useState(false);
    let borderColor = hasError ? "border-[#EB1414]" : isFocused ? "border-[#2E7D32]" : "border-dark";

    const handleInputFocus = () => setIsFocused(true)

    const handleInputBlur = () => setIsFocused(false)

    return (
        <div className="w-full font-montserrat text-base leading-[18px] text-[#333]">
            <div className="relative w-full" >
                <label className="">
                    <input 
                        type={ type } 
                        name={ name } 
                        value={inputValue} 
                        onChange={ handleInputChange } 
                        placeholder={ placeholder } 
                        onFocus={ handleInputFocus } 
                        onBlur={ handleInputBlur }
                        className={`w-full bg-[#FAFAFA] border-2 ${ borderColor } 
                        rounded-[8px] px-4 py-[16px] placeholder:text-ash focus:outline-none`} />
                </label>
            </div>
            {errorText && 
                <div className="h-[20px]">
                    <p className={`text-[11px] text-[#EB1414] leading-[12px] my-1`}>
                        { errorValue }
                    </p> 
                </div>       
            }
        </div>
    )
}

export default Input