import styles from './button.module.css';

// Per poter utilizzare classNames occore installare la dipendenza 'classnames' attraverso npm install classnames
// Attraverso classNames, è possibile concatenare più classi usando la sintassi className={classNames(classe1, classe2)}
// senza dover utilizzare l'interpolazione
import classNames from 'classnames';


function Button({ children, text = 'Add to cart' }) {
    return (
        <button className={classNames(styles.button)}>
            {children}
            {text}
        </button>
    )
}

export default Button;