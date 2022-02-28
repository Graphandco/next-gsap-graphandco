import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import useInput from "../../hooks/useInput"
import LinkButton from "../../ui/LinkButton"

const ContactForm = () => {
    const [name, resetName, nameAttribs] = useInput("name", "")
    const [email, resetEmail, emailAttribs] = useInput("email", "")
    const [message, resetMessage, messageAttribs] = useInput("message", "")

    const [error, setError] = useState("")

    const nameRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()
    const errorRef = useRef()

    useEffect(() => {
        setError("")
    }, [name, email, message])

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("Okayyyyy !!")
        resetName()
        resetEmail()
        resetMessage()
    }
    return (
        <section className="contact-form container">
            <p>
                N'hésitez pas à nous contacter pour toute demande d'information
                ! Nous nous ferons un plaisir de revenir vers vous rapidement.
            </p>

            <div className="contact-form__wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Votre nom:</label>
                        <input
                            type="text"
                            id="username"
                            ref={nameRef}
                            autoComplete="off"
                            {...nameAttribs}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Votre email:</label>
                        <input
                            type="text"
                            id="useremail"
                            ref={emailRef}
                            autoComplete="off"
                            {...emailAttribs}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Votre message:</label>
                        <textarea
                            type="text"
                            id="usermessage"
                            rows="8"
                            ref={messageRef}
                            autoComplete="off"
                            {...messageAttribs}
                            required
                        />
                    </div>
                    <LinkButton name="Envoyer" />
                </form>
                <div className="contact-form__image">
                    <Image
                        className="op5"
                        width={400}
                        height={250}
                        src="/img/contact.svg"
                    />
                </div>
            </div>
        </section>
    )
}

export default ContactForm
