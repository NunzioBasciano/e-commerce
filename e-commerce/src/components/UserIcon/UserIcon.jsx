import classNames from 'classnames';
function UserIcon({ image, className }) {
    return (
        <img className={className} src={image} alt="your-avatar" />
    )
}

export default UserIcon