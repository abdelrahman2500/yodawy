import React from 'react'
import Branches from '../branches/Branches'

import "./index.scss"

export default function Footer() {
    return (
        <div className="footer text-center">
            <div className="need-help bg-dark text-white p-3">
                <div className="row">
                    <div className="col-12 col-md-6 mb-3">
                        <h2 className="h5 fw-bold my-3 mx-0">need help?</h2>
                        <h3 className="h2 fw-bold my-3 mx-0">15005</h3>
                    </div>
                    <div className="col-12 col-md-6">
                        <p className="lead">We are at your disposal 7 days a week for 24 hours!</p>
                        <button className="btn btn-warning p-3 ">hello@yodawy.com</button>
                        <div className="icons mt-3">
                            <span>
                                <a href="https://www.facebook.com/">
                                <i className="fab fa-facebook-f"></i>
                                </a>
                            </span>
                            <span>
                                <a href="https://www.instagram.com/">
                                <i className="fab fa-instagram"></i>
                                </a>
                            </span>
                            <span>
                                <a href="https://www.linkedin.com/">
                                <i className="fab fa-linkedin-in"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Branches nothome={false} className="m-0" />
            <p className="lead fw-bold bg-dark text-white p-3 border-top">
                Copyright © {new Date().getFullYear()} ITI Yodawy team. All Rights Reserved
            </p>
        </div>
    )
}
