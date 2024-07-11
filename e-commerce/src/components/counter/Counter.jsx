import styles from './counter.module.css';
import IconPlus from '../icons/IconPlus';
import IconMinus from '../icons/IconMinus';
import classNames from 'classnames';

function Counter() {
    return (
        <div className={styles.counter}>
            <button className={styles.button}>
                <IconMinus />
            </button>
            <div className={styles.count}>0</div>
            <button className={styles.button}>
                <IconPlus />
            </button>
        </div>
    )
}

export default Counter