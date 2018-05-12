import React,{Component} from 'react';
import config from "./greeter.json";
import styles from "./Greeter.css"
class Greeter extends Component{
    render(){
        return(
            <div className={styles.root}>
             {config.content}
            </div>
        );
    }
}

export  default Greeter