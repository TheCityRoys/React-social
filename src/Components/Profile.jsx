import React from 'react';

const Profile = () => {
    return (
        <div className='content'>
        <div className='banner-wrapper'>
          <img src="https://pbs.twimg.com/media/EyN6oRNUYAECVaN.jpg" className='banner'></img>
        </div>
        <div className='profile'>
          <div className='profile__avatar'>
            <img className='avatar' src='https://i.pinimg.com/736x/b8/10/4a/b8104acde16f312a19028d519ed9a2f3.jpg'></img>
          </div>
          <div className='profile__info'>
            <div className='profile__name'>Yevhen Ryabenko</div>
            <div className='profile__age'>19 years</div>
            <div className='profile__post'>Front-end developer</div>
          </div>
        </div>
      </div>
    );
}


export default Profile;