import s from './Header.module.css'
import defaultAvatar from './codecode.jpg'
import IconButton from './IconButton'
import Icon from '../../Components/Icon'
// import authSelectors from '../../Redux/auth/auth-selectors'
// import authOperations from '../../Redux/auth/auth-operations'

export default function Header() {
    // const email = useSelector(authSelectors.getUserEmail);
    // const emailParts = email.split('@')
    // const name = emailParts[0]

    //   const onLogOut = useCallback(() => {
    // dispatch(authOperations.logOut());
    //   }, [dispatch]);
    

    return (
        <header className={s.Header}>
            <div className={s.Logo}>
                Questify
            </div>
            <div className={s.MenuImgName}>
                <img className={s.MenuImg} src={defaultAvatar} alt="avatar" width="30" />
                <span className={s.MenuName}>name's Quest Log</span>
            </div>
            <IconButton
                // onClick={onLogout}
                aria-label="Logout">
                
                <Icon name={'logout'} size={22}/>

            </IconButton>
        </header>
    )
}