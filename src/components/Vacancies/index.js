import React from 'react';

import VacanciesTopBlock from '@/components/VacanciesTopBlock'

export default class Vacancies extends React.PureComponent {
    constructor(props) {
        super(props)
        this.html = document.getElementsByTagName('html')[0]
        this.html.classList.add('scroll-x-hidden')
        this.state = {}
        document.body.scrollTop = 0 // for safari
        this.html.scrollTop = 0
    }

    render() {
        return (
        <div className='vacancies' >
            <VacanciesTopBlock />
            <section className='description' >
                <div className='container' >
                    <div className='container-text' >
                        <div className='about-client' >
                            <h1>About client:</h1>
                            <p>
                                Our Customer is a leading payment gateway provider
                                that provides multi-channel payment solutions, allowing 
                                merchants to accept various local and international payments
                                through credit and debit cards, bank channels (ATMs, iBanking and mBanking)
                                and cash acceptance via payment counters.
                            </p>
                        </div>
                        <div className='block' >
                            <h1>Main responsibilities:</h1>
                            <ul>
                                <li>Develop solutions and algorithms according to technical specifications or other requirements documentation; use standard algorithms in the applicable cases</li>
                                <li>New functionality design</li>
                                <li>Write program code according to the defined application architecture</li>
                                <li>Structure and format the source code, comment and mark up the code, as well as name variables, functions, classes, data structures, and files according to the company conventions and industry best practices</li>
                                <li>Use version control systems to track code optimization progress, as well as to merge or split code entities. Commit changes according to version control rules</li>
                            </ul>
                        </div>
                        <div className='block' >
                            <h1>Mandatory requirements:</h1>
                            <ul>
                                <li>4+ years of experience with .NET/C#</li>
                                <li>At least 1 year of commercial experience with .NET Core</li>
                                <li>OOP, SOLID</li>
                                <li>Good knowledge of MSSQL</li>
                                <li>Multithreading, synchronization</li>
                                <li>Strong сommunication skills</li>
                                <li>Upper intermediate level of English</li>
                            </ul>
                        </div>
                        <div className='block' >
                            <h1>Would be a plus:</h1>
                            <ul>
                                <li>Knowledge of Front End</li>
                                <li>Experience with containers</li>
                                <li>Jira management</li>
                            </ul>
                        </div>
                        <div className='block' >
                            <h1>What you will get with Borvo:</h1>
                            <ul>
                                <li>Above average compensation and competitive Social package</li>
                                <li>Close cooperation with a customer</li>
                                <li>Business trips</li>
                                <li>Challenging tasks</li>
                                <li>Competence development</li>
                                <li>Ability to influence project technologies</li>
                                <li>Project from scratch</li>
                                <li>Team of professionals</li>
                                <li>Dynamic environment with low level of bureaucracy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        )
    }
}
