import React from 'react';
import PropTypes from 'prop-types';
import YoutubeIcon from './icons/YoutubeIcon';
import WebIcon from './icons/WebIcon';
import VkIcon from './icons/VkIcon';
import TwitterIcon from './icons/TwitterIcon';
import TwitchIcon from './icons/TwitchIcon';
import TelegramIcon from './icons/TelegramIcon';

function insertSvg(name) {
    const icons = {
        telegram: <TelegramIcon/>,
        twitch: <TwitchIcon/>,
        twitter: <TwitterIcon/>,
        vk: <VkIcon/>,
        web: <WebIcon/>,
        youtube: <YoutubeIcon/>
    };
    return icons[name];
}

const Profile = ({ userInfo, errorMsg, isLoading }) => {
    if (isLoading) {
        return <p className="page-content">Загружаю...</p>;
    }
    return errorMsg ? <p className="popup-error">{errorMsg}</p> : (
        <div className="page-content">
            <section className="profile">
                <h2 className="profile__title">Профиль</h2>
                <div className="profile__info">
                    <p className="profile__info-label">Город: {userInfo.city}</p>
                </div>
                <div className="profile__info">
                    <p className="profile__info-label">Знание языков:</p>
                    <ul className="profile__list">
                        {userInfo.languages.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="profile__info">
                    <p className="profile__info-label">Ссылки:</p>
                    <ul className="social">
                        {userInfo.social.map((item) => (
                            <li key={item.label}>
                                <a className="social__link" href={item.link} target="_blank">{item.label}
                                    {insertSvg(item.label)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
};

Profile.propTypes = {
    userInfo: PropTypes.shape({
        city: PropTypes.string,
        languages: PropTypes.array.isRequired,
        social: PropTypes.array.isRequired
    }).isRequired,
    errorMsg: PropTypes.string,
    isLoading: PropTypes.bool.isRequired
};

export default Profile;

