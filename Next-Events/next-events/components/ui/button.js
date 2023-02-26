import Link from 'next/link'

import classes from './button.module.css'


function Button(props) {
   if (props.link) {
     return (
       <a href={props.link} className={classes.btn}>
         {props.children}
       </a>
     );
   }
   return (
    <button className={classes.btn} onClick={props.onClick}>
        {props.children}
    </button>
   )
}
export default Button
