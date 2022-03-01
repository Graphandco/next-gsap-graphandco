import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import useInput from '../../hooks/useInput';
import LinkButton from '../../ui/LinkButton';
import * as emailjs from 'emailjs-com';
import { FaCheckCircle } from 'react-icons/fa';
import LottieMail from '../../animation/lottie/LottieMail';

const ContactForm = () => {
    const router = useRouter();

    const [name, resetName, nameAttribs] = useInput('name', '');
    const [email, resetEmail, emailAttribs] = useInput('email', '');
    const [object, resetObject, objectAttribs] = useInput('object', '');
    const [message, resetMessage, messageAttribs] = useInput('message', '');

    const [error, setError] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const emailRegex = /\S+@\S+\.\S+/;
    const length2Regex = /^.{2,}$/;
    const length5Regex = /^.{5,}$/;
    const length10Regex = /^.{10,}$/;

    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const objectRef = useRef();
    const errorRef = useRef();

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    useEffect(() => {
        setError('');
    }, [name, email, object, message]);

    const data = {
        name,
        email,
        object,
        message,
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(serviceID, templateID, userID);
        if (!length2Regex.test(name)) {
            setError('Merci de renseigner un nom valide (2 lettres minimum)');
        } else if (!emailRegex.test(email)) {
            setError('Merci de renseigner un email valide');
        } else if (!length5Regex.test(object)) {
            setError('Merci de renseigner un objet valide (5 lettres minimum)');
        } else if (!length10Regex.test(message)) {
            setError('Merci de renseigner un message valide (10 lettres minimum)');
        } else {
            // emailjs.send(serviceID, templateID, data, userID).then(
            //     function (response) {
            //         console.log(response.status, response.text);
            //         resetName();
            //         resetEmail();
            //         resetObject();
            //         resetMessage();
            //         setTimeout(function () {
            //             console.log('envoyé !');
            //         }, 3000);
            //     },
            //     function (err) {
            //         console.log(err);
            //     }
            // );
            console.log('ok');
            setEmailSent(true);
            setTimeout(function () {
                router.push('/');
            }, 3000);
        }
    };
    return !emailSent ? (
        <section className="contact-form container">
            <p>N'hésitez pas à nous contacter pour toute demande d'information ! Nous nous ferons un plaisir de revenir vers vous rapidement.</p>

            <div className="contact-form__wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Votre nom:</label>
                        <input type="text" id="username" ref={nameRef} autoComplete="off" {...nameAttribs} required />
                        <FaCheckCircle className={length2Regex.test(name) ? 'valid' : ''} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Votre email:</label>
                        <input type="text" id="useremail" ref={emailRef} autoComplete="off" {...emailAttribs} required />
                        <FaCheckCircle className={emailRegex.test(email) ? 'valid' : ''} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Objet du message:</label>
                        <input type="text" id="userobject" ref={objectRef} autoComplete="off" {...objectAttribs} required />
                        <FaCheckCircle className={length5Regex.test(object) ? 'valid' : ''} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Votre message:</label>
                        <textarea type="text" id="usermessage" rows="8" ref={messageRef} autoComplete="off" {...messageAttribs} required />
                        <FaCheckCircle className={length10Regex.test(message) ? 'valid' : ''} />
                    </div>
                    {error && <div className="form-error">{error}</div>}
                    <LinkButton name="Envoyer" />
                </form>
                <div className="contact-form__image">
                    <Image className="op5" width={400} height={250} src="/img/contact.svg" />
                </div>
            </div>
        </section>
    ) : (
        <section className="emailsent">
            <LottieMail />
            <div className="emailsent__message">Votre message a bien été envoyé !</div>
        </section>
    );
};

export default ContactForm;
