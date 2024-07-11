import React from 'react'
import classNames from 'classnames';
import styles from './showBox.module.css';


function ShowBox({ imgUrl }) {
    return (
        <div className={classNames(styles.showBox)}>
            <img src={imgUrl} />
        </div>
    )
}

export default ShowBox