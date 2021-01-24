import React from 'react'
import Modal from "./Modal";

const TermsComponent = ({onToggleTermsModal, termsModalIsOpen}) => {
    return (
        <Modal
            closeModal={onToggleTermsModal}
            show={termsModalIsOpen}
            title="Terms of agreement"
        >
            <div className="terms_content">
                <p className="terms_title">1.Gathering information</p>
                <div className="terms_text">
                    We collect information when you fill out a feedback form on the site. The information
                    may include your full name, email address, telephone number, location.
                    In addition, it is possible to automatically register your IP, browser, software,
                    hardware data and other functions.
                    By sending a message through the feedback form, you agree to the privacy policy and
                    authorize us to collect and store your data.
                </div>
                <p className="terms_title">2. Use of information</p>
                <div className="terms_text">
                    The information we collect from you may be used to:
                    Provide services tailored to your individual needs
                    Offer personalized ads
                    Improve our website
                    Contact you by email
                    Arrange a promotion, competition or research
                </div>
                <p className="terms_title">3. Protection of personal data</p>
                <div className="terms_text">
                    We are the sole owner of the information collected on this site.
                    Your personal data will not be sold or in any way transferred to third parties for any
                    reason,
                    except for the necessary data to complete a request or transaction, for example, when
                    sending an order.
                </div>
                <p className="terms_title">4. Disclosure of information to third parties</p>
                <div className="terms_text">
                    We do not sell, exchange or transfer personal data to third parties. This does not apply
                    to trusted companies that help us operate the site and conduct business, provided that
                    they agree to keep the information confidential.
                    We are ready to share information in order to prevent crimes or help in their
                    investigation when it comes to suspicion of fraud, actions that physically threaten the
                    safety of people, violations of the rules of use, or in cases where it is provided by
                    law.
                    Non-confidential information may be provided to other companies for marketing,
                    advertising, etc.
                </div>
                <p className="terms_title">5. Protection of information and use of cookies</p>
                <div className="terms_text">
                    Information protection is carried out by means of the company-provider of the website
                    constructor and hosting services.
                    From our side, only those employees who are directly related to the processing of
                    requests and support of the site have access to personal data without the right to
                    misuse and disclose it.
                    Our cookies are used to improve site access and to identify repeat visits.
                    In addition, they allow you to track the most interesting queries. Cookies are not
                </div>
                <p className="terms_title">6. Unsubscribe</p>
                <div className="terms_text">
                    We use email to provide you with information on your applications, company news, etc.
                    If you wish to unsubscribe, each email contains detailed instructions on how you can do
                    this.
                </div>
                <p className="terms_title">7. Consent</p>
                <div className="terms_text">
                    By leaving your data on our website, you automatically agree to our privacy policy.
                </div>
            </div>
        </Modal>
    )
}

export default TermsComponent;