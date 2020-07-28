import React, {useEffect} from 'react'
import './panel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faPaintBrush, faCubes, faBullhorn , faChartLine, faTasks } from '@fortawesome/free-solid-svg-icons'


const Panel = (props) => {
    let icon
    const { title , description} = props


    return (
        <div className="panel">
            <div className="panel-title">
            <h1>{title}</h1>
            {title=== 'Consult' && <FontAwesomeIcon  className="fa-icon" icon={faComments}/>}
            {title=== 'Design' && <FontAwesomeIcon className="fa-icon"icon={faPaintBrush}/>}
            {title=== 'Develop' && <FontAwesomeIcon className="fa-icon"icon={faCubes}/>}
            {title=== 'Marketing' && <FontAwesomeIcon className="fa-icon" icon={faBullhorn}/>}
            {title=== 'Manage' && <FontAwesomeIcon className="fa-icon" icon={faChartLine}/>}
            {title=== 'Evolve' && <FontAwesomeIcon className="fa-icon" icon={faTasks}/>}
            </div>
            <p>{description}</p>
        </div>
    )
}

export default Panel
