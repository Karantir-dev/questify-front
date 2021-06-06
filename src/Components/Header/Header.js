import React from 'react'
// import PropTypes from 'prop-types';
import s from './Header.module.css'
import defaultAvatar from './codecode.jpg'
import Icon from '../../Components/Icon'
// import authSelectors from '../../Redux/auth/auth-selectors'
// import authOperations from '../../Redux/auth/auth-operations'

export default function Header() {
  // const email = useSelector(authSelectors.getUserEmail);
  // const name = useSelector(authSelectors.getUserName);
  // const emailParts = email.split('@')
  // const nameFromEmail = emailParts[0]

  //   const onLogOut = useCallback(() => {
  // dispatch(authOperations.logOut());
  //   }, [dispatch]);


    return (
        <header className={s.Header}>
            <div className={s.Logo}>
                Questify
            </div>
            <div className={s.MenuImgNameLogout}>
                <img className={s.MenuImg} src={defaultAvatar} alt="avatar" width="30" />
                <span className={s.MenuName}>name's Quest Log</span>
                {/* change name to {name==='Guest' ? nameFromEmail : name} */}
            </div>
             <button type="button"
                // onClick={onLogOut}
                     className={s.IconButton}
                     aria-label="Logout">
                <Icon
                    className={s.Icon}
                    name={'logout'}
                    size={22} />
                </button>
        </header>
    )

}

// Header.propTypes = {
//     onClick: PropTypes.func,
//     'aria-label': PropTypes.string.isRequired,
// }
