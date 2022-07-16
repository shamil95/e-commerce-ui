import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames';

const Header = () => {
    return (
        <header className={classNames('header', styles.container)}>
            <div>logo</div>
            <div>
                <input />
                <button />
            </div>
            <div>
                <div>Card</div>
                <div>SignIn</div>
            </div>
        </header>
    );
};

export default Header;
