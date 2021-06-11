import PropTypes from 'prop-types'
import s from './CustomRadioList.module.css'

export default function CustomRadioList({
  isChallenge,
  type,
  options,
  value,
  handleOptionsChange,
}) {
  const isDifficultyType = type === 'difficulty'
  const containerStyle =
    isChallenge && isDifficultyType
      ? [s[type + '_container'], s.dark_container].join(' ')
      : s[type + '_container']
  const radioStyle =
    isChallenge && isDifficultyType
      ? s[type + '_dark_radio']
      : s[type + '_radio']

  return (
    <ul className={containerStyle}>
      {options.map(option => (
        <li key={option}>
          <label className={s[type + '_label']}>
            <input
              type="radio"
              checked={value === option}
              name={type}
              value={option}
              onChange={handleOptionsChange}
              className={radioStyle}
            />
            {isDifficultyType ? (
              <>
                <span className={s.radio_outline}></span>
                <span className={[s[type + '_text'], s[option]].join(' ')}>
                  {option}
                </span>
              </>
            ) : (
              <span className={s[type + '_text']}>{option}</span>
            )}
          </label>
        </li>
      ))}
    </ul>
  )
}

CustomRadioList.propTypes = {
  isChallenge: PropTypes.bool,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  handleOptionsChange: PropTypes.func.isRequired,
}
