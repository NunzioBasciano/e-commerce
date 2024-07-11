import styles from './thumbNail.module.css';
import classNames from 'classnames'

function ThumbNail({ isSelected = false, thumbNail = '' }) {
    return (
        <div className={classNames(styles.thumbnail, isSelected && styles.selected)}>
            <img src={thumbNail} />
            <div className={isSelected && styles.over}></div>
        </div>
    )
}

export default ThumbNail