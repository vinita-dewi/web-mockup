import React, { useState, useEffect } from 'react'
import { Animated } from 'react-animated-css'
import { InView } from 'react-intersection-observer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import './highlight.css'
import './newsletter.css'

import Panel from '../panel/panel'

const MySwal = withReactContent(Swal)
const Highlight = () => {
    const text = [
        {
            num: 1,
            title: 'Consult',
            description: 'Co-create, design thinking; strengthen infrastructure resist granular. Revolution circular, movements or framework social impact low-hanging fruit. Save the world compelling revolutionary progress.',
            icon: ['far', 'coffee']
        },
        {
            num: 2,
            title: 'Design',
            description: 'Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable.',
            icon: ['far', 'coffee']
        },
        {
            num: 3,
            title: 'Develop',
            description: 'Revolutionary circular, movements a or impact framework social impact low-hanging. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunities of thought provoking.',
            icon: ['far', 'coffee']
        },
        {
            num: 4,
            title: 'Marketing',
            description: 'Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile, replicable, effective altruism youth. Mobilize commitment to overcome injustice resilient, uplift social transparent effective.',
            icon: ['far', 'coffee']
        },
        {
            num: 5,
            title: 'Manage',
            description: 'Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize vibrant boots on the ground sustainable. Optimism, effective altruism invest optimism corporate social.',
            icon: ['far', 'coffee']
        },
        {
            num: 6,
            title: 'Evolve',
            description: 'Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism. Thought leadership mass incarceration. Outcomes big data, fairness, social game-change. ',
            icon: ['far', 'coffee']
        },

    ]
    let check = false;
    const [visible, setVisible] = useState(false)
    const [styleEmail, setStyleEmail] = useState('inputemail-row')
    const [styleSubmit, setStyleSubmit] = useState('inputsubmit-row')
    const [styleForm, setStyleForm] = useState('form-row')
    const [email , setEmail] =useState('')

    useEffect(() => {

        if (localStorage.getItem('visibility')) {
            setVisible(false)
            console.log(visible)
            hideTimeOut()
        }
    }, [])

    useEffect(() => {

        if(window.innerWidth <= 700){
            setStyleEmail('inputemail-column')
            setStyleForm('form-column')
            setStyleSubmit('inputsubmit-column')
        }

        function resizeWindow() {
            if(window.innerWidth <= 700){
                setStyleEmail('inputemail-column')
                setStyleForm('form-column')
                setStyleSubmit('inputsubmit-column')
            }else{
                setStyleEmail('inputemail-row')
                setStyleForm('form-row')
                setStyleSubmit('inputsubmit-row')
            }
        }
        window.addEventListener('resize', resizeWindow)

        // if(window.innerWidth ){

        // }
    })
    const hideTimeOut = () => {
        setInterval(() => {
            localStorage.removeItem('visibility')
            setVisible(true)
        }, 600000)
    }

    const hideNews = () => {
        setVisible(false)
        localStorage.setItem('visibility', 'not visible')
        hideTimeOut()
    }

    const scrollView = (inView) => {
        // console.log(` inView : ${inView}`);
        if (inView === true && !localStorage.getItem('visibility') && check=== false) {
            setVisible(true)
            check = true
        }
    }

    const submitNews = (e) => {
        e.preventDefault()

        if(email === null) {
            MySwal.fire({
                title: 'Sorry',
                text: 'Please Fill in Your Email!',
                icon : 'error'
            })

        }else if(!email.includes('@')){
            MySwal.fire({
                title:'Error!',
                text: 'Please Fill in with Email Adress!',
                icon: 'error'
            })
        }else{
            MySwal.fire({
                title : 'Thank You!',
                text : 'You Have Signed Up to the Newsletter!',
                icon: 'success'
            })
            hideTimeOut()
        }
    }

    const fillEmail = (e) =>{
        setEmail(e.target.value)
        console.log(email);
    }
    return (
        <InView as="div" onChange={scrollView} className="highlight">
            <div className="highlight-header">
                {/* <h1>{inView}</h1> */}
                <h1>How Can I Help You?</h1>
                <p>Our work then targeted, best practices outcomes social innovation synergy.
                Venture philanthropy, revolutionary inclusive policymaker relief. User-centered
                program areas scale.</p>
            </div>
            <div className="highlight-panel">
                {
                    text.map(each => {
                        return (
                            <Panel icon={each.icon} key={each.num} title={each.title} description={each.description} />
                        )
                    })
                }
            </div>
            <Animated animationOut="fadeOutDown" isVisible={visible}>
                <div className="news">
                    <button className="x-btn" onClick={hideNews}><FontAwesomeIcon icon={faTimes} /></button>

                    <h2>Get latest updates in web technologies</h2>
                    <p>
                        I write articles related to web technologies, such as design trends, development
                        tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get
                        them all.
                    </p>
                    <form className={styleForm} action="submit">
                        <input onChange={fillEmail} className={styleEmail} type="email" placeholder="Email address" />
                        <button className={styleSubmit} onClick={submitNews}>Count Me In!</button>
                    </form>
                </div>
            </Animated>
        </InView>
    )
}

export default Highlight;