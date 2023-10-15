import { useState } from "react";
const ContactForm = () =>{
    const [name, setName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const handleNameChange = (e) =>{
        setName(e.target.value)
        console.log(name)
    }
    const handleEmailChange = (e) =>{
        setEmailAddress(e.target.value)
        console.log(emailAddress)

    }
    const handleSubjectChange = (e) =>{
        setSubject(e.target.value)
        console.log(subject)

    }
    const handleMessageChange = (e) =>{
        setMessage(e.target.value)
        console.log(message)

    }

    const contactSubmitButton = (messageObj) =>{
        return(
            <div id='submit-button' className="flex justify-center w-[110px] h-[40px] pt-[9px]  bg-portfolio-red rounded-[10px]">
                <p className="font-awakenning text-white text-[20px] antialiased ">Submit</p>
            </div>
        )
    }
    return(
        <div id='form-button-container' className="w-[100%] max-w-[600px] h-[auto]">
            <div id='contact-form-container' className="w-[100%] max-w-[600px] h-[500px] rounded-[10px] bg-portfolio-grey border-solid border-[1px] border-black p-[10px]">

                <div id='name-field' className="w-[100%] h-[40px] bg-white border-black border-solid border-[1px] rounded-[5px] mb-[25px]">
                    <input type='text' value={name} className="w-[100%] h-[100%] text-[32px]" onChange={handleNameChange}/>
                </div>
                <div id='email-field' className="w-[100%] h-[40px] bg-white border-black border-solid border-[1px] rounded-[5px] mb-[25px]">
                    <input type='text' value={emailAddress} className="w-[100%] h-[100%] text-[32px]" onChange={handleEmailChange}/>
                </div>
                <div id='subject-field' className="w-[100%] h-[40px] bg-white border-black border-solid border-[1px] rounded-[5px] mb-[25px]">
                    <input type='text' value={subject} className="w-[100%] h-[100%] text-[32px]" onChange={handleSubjectChange}/>
                </div>
                <div id='message-field' className="w-[100%] h-[280px] bg-white border-black border-solid border-[1px] rounded-[5px] mb-[25px]">
                    <input type='text' value={message} className="w-[100%] h-[100%] text-[32px]" onChange={handleMessageChange}/>
                </div>
            </div>
            <div id='cs-button-div' className="flex justify-end pt-[30px] w-[100%] max-w-[600px] h-[auto]">
                {contactSubmitButton()}
            </div>
        </div>

    )
}

export default ContactForm;