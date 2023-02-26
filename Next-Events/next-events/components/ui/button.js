import Link from 'next/link'

import classes from './button.module.css'


function Button(props) {
    return (
                <a href = {props.link} className={classes.btn}>{props.children}</a>
         
    )
}
export default Button
