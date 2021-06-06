import React from "react";
import { Layout } from "components";

const Contact = () => {
    return (
        <Layout>
            <h1>Contact us</h1>
            <form action="https://formspree.io/f/myylwaln" method="POST">
                <div>
                    <label>
                        <span>Your email</span>
                        <input type="email" required name="email" />
                    </label>
                </div>
                <div>
                    <label>
                        <span>Your message</span>
                        <textarea required name="message" />
                    </label>
                </div>
                <button type="submit">Send</button>
            </form>
        </Layout>
    );
};

export default Contact;
