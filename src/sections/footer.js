import React from 'react'

export const Footer = () => {
    return (
        <section
            id='footer'
        >
            <section
                id='copyrights'
                className='col-6 text-center'
            >
                <span>
                    Copyright
                    <b>
                        ©
                    </b>
                    The Nabeel Hassan
                </span>
            </section>
            <section
                id='social'
                className='col-6 text-center'
            >
                <a
                    href='resume.thenabeelhassan.com'
                >
                    <i class="fa fa-id-card"></i>
                </a>
                <a
                    href='github.thenabeelhassan.com'
                >
                    <i class="fa fa-github-square"></i>
                </a>
                <a
                    href='facebook.thenabeelhassan.com'
                >
                    <i class="fa fa-facebook-square"></i>
                </a>
                <a
                    href='linkedin.thenabeelhassan.com'
                >
                    <i class="fa fa-linkedin"></i>
                </a>
            </section>
        </section>
    )
}
