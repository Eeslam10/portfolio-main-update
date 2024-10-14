import { useState } from "react";
import { Icon } from '@iconify/react';
import Input, { TextArea } from "../components/Inputs.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";

const ContactForm = () => {
    let [disabled, setDisabled] = useState(true)
    let [inputValue, setInputValue] = useState({ name: "", email: "", phone: "", message: "Your message" })
    let [hasError, setHasError] = useState({ name: false, email: false, phone: false })
    let [errorValue, setErrorValue] = useState({ name: "", email: "", phone: "" })
    let [formSubmitted, setFormSubmitted] = useState(false)
    let [isMailSending, setIsMailSending] = useState(false)

    let disabledColor = disabled ? "opacity-40" : ""

    const inputsAllGood = obj => Object.values(obj).every(item => item === false)
    const inputsNotEmpty = obj => {
        let {phone, ...newObj} = obj
        return Object.values(newObj).every(item => item != "")
    }

    const handleInputChange = (e) => {
        try {
            setFormSubmitted(false)
            setInputValue({...inputValue, [e.target.name]: e.target.value})
            if (e.target.value) {
                if (e.target.type === "email") {
                    if (!/(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+]*/.test(e.target.value)) {
                        throw new Error("Email address format is invalid")
                    }
                } else if (e.target.type === "text" && e.target.name.includes("name")) {
                    if (!/^[a-zA-Z- ]{3,}$/i.test(e.target.value)) throw new Error("Name issues")
                }

            }
            setHasError({ ...hasError, [e.target.name]: false })
            setErrorValue({ ...errorValue, [e.target.name]: "" })
            if (inputsAllGood({ ...hasError, [e.target.name]: false }) && inputsNotEmpty({...inputValue, [e.target.name]: e.target.value})) {
                setDisabled(false)
            } else setDisabled(true)
        } catch (err) {
            if (err.message === "Name issues") {
                if (e.target.value.length < 3) {
                    setHasError({...hasError, [e.target.name]: true})
                    setErrorValue({...errorValue, [e.target.name]: "Name cannot be less than 3 characters"})
                    err.message = "Name cannot be less than 3 characters"
                } else {
                    setHasError({...hasError, [e.target.name]: true})
                    setErrorValue({...errorValue, [e.target.name]: "This field can only contain A to Z and -"})
                    err.message = "This field can only contain A to Z and -"
                }
            } else {
                setHasError({...hasError, [e.target.name]: true})
                setErrorValue({...errorValue, [e.target.name]: err.message})
            }
            setDisabled(true)
        }
    }

    const handleTextAreaChange = (e) => {
        setInputValue({...inputValue, message: e.target.value})
        if (inputsAllGood({ ...hasError, [e.target.name]: false }) && inputsNotEmpty({...inputValue, [e.target.name]: e.target.value})) {
            setDisabled(false)
        } else setDisabled(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsMailSending(true)

        fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(inputValue),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                "Content-Type": "application/json"
            }
        })
        .then((response) => {            
            let reader = response.body.getReader()
            return new ReadableStream({
                start(controller) {
                function push() {
                    reader.read().then(({ done, value }) => {
                    if (done) {
                        controller.close();
                        return;
                    }
                    controller.enqueue(value);
                    push();
                    });
                }
                push();
                },
            });
        })
        .then((stream) => new Response(stream, { headers: { 'Content-Type': 'text/html' } }).text() )
        .then((result) => {
            result = JSON.parse(result)
            console.log(result)
            if (result.accepted.length) {
                console.log(result)
                setInputValue({ name: "", email: "", phone: "", message: "Your message" })
                setIsMailSending(false)
                setFormSubmitted(true)
            } else {
                console.log(result)
                setHasError({ ...hasError, email: true })
                setErrorValue({ ...errorValue, email: result.response })
            }
        })
        .catch(error => {
            console.log(error)
        })
    }

    let input1 = {
        type: "text",
        name: "name",
        placeholder: "Your name", 
        errorText: true,
        inputValue: inputValue.name,
        hasError: hasError.name,
        errorValue: errorValue.name,
        handleInputChange,
    }

    let input2 = {
        type: "email",
        name: "email",
        placeholder: "Your email address", 
        errorText: true,
        inputValue: inputValue.email,
        hasError: hasError.email,
        errorValue: errorValue.email,
        handleInputChange,
    }

    let input3 = {
        type: "tel",
        name: "phone",
        placeholder: "Your phone number (Not required)", 
        errorText: true,
        inputValue: inputValue.phone,
        hasError: hasError.phone,
        errorValue: errorValue.phone,
        handleInputChange,
    }

    let textarea = { name: "message", inputValue: inputValue.message, handleTextAreaChange }

    return (
        <form method="post" onSubmit={ handleSubmit } className="font-montserrat">
            <div className="flex flex-col lg:flex-row gap-1 justify-start lg:gap-6 lg:justify-between 
                items-stretch"
            >
                <div className="w-full lg:w-1/2 flex flex-col gap-1">
                    <ErrorBoundary>
                        <Input props={input1} />
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <Input props={input2} />
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <Input props={input3} />
                    </ErrorBoundary>
                </div>
                <div className="w-full lg:w-1/2">
                    <ErrorBoundary>
                        <TextArea props={textarea} />
                    </ErrorBoundary>
                </div>
            </div>
            { formSubmitted 
                ?   (<p className="text-base font-semibold text-center text-green-600 my-8">Mail Sent Successfully!</p>)
                :   ""
            }
            <div className="flex justify-center mt-8">
                <button type="submit" className={`bg-red text-[#FAFAFA] text-base leading-[100%] font-medium 
                    px-12 py-4 rounded-[10px] ${disabledColor} flex gap-3 items-center justify-center`} disabled={disabled}
                >
                    <span>Submit Form</span>
                    { isMailSending 
                    ?   (<span className="text-2xl rounded-full bg-white"><Icon icon="line-md:loading-twotone-loop" color="green" /></span>)
                    :   formSubmitted 
                    ?   (<span className="text-2xl rounded-full bg-white"><Icon icon="mdi:tick-circle" color="green" /></span>)
                    :   ""
                    }
                </button>
            </div>
        </form>
    )
}

export default ContactForm