import styles from './header.module.css';
import MenuLink from '../data/MenuLink';
import IconLogo from '../icons/IconLogo';
import IconCart from '../icons/IconCart';
import UserIcon from '../UserIcon/UserIcon';
import avatarImage from '../../assets/images/image-avatar.png';


function Header() {

    return (
        <header className={styles.header}>
            <IconLogo />
            <ul className={styles.header_links}>
                {MenuLink.map((item, index) => (
                    <li key={index}>
                        <a className={styles.link} href={item.href}>{item.label}</a>
                    </li>
                ))}
            </ul >
            <span className={styles.container_user}>
                <IconCart fill={'var(--dark-grayish-blue)'} />
                <UserIcon
                    image={avatarImage}
                    className={styles.user_icon}
                />
            </span>

        </header>
    );
}


export default Header; 