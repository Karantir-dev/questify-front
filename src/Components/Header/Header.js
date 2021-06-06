import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import s from './Header.module.css'
import Icon from '../../Components/Icon'
import authSelectors from '../../Redux/auth/auth-selectors'
import authOperations from '../../Redux/auth/auth-operations'

export default function Header() {
  const dispatch = useDispatch()
  const name = useSelector(authSelectors.getUserName)

  const onLogOut = () => {
    dispatch(authOperations.logOut())
  }

  return (
    <header className={s.Header}>
      <div className={s.Logo}>Questify</div>
      <div className={s.MenuImgNameLogout}>
        <div className={s.MenuImg}>
          <span className={s.avatarLeter}>
            {name ? name.substr(0, 1).toUpperCase() : 'N'}
          </span>
        </div>
        <span className={s.MenuName}>{name ? name : 'Name'}'s Quest Log</span>
      </div>
      <button
        type="button"
        onClick={onLogOut}
        className={s.IconButton}
        aria-label="Logout"
      >
        <Icon className={s.Icon} name={'logout'} size={22} />
      </button>
    </header>
  )
}
