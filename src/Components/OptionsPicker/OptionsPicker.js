import PropTypes from 'prop-types'
import { useState } from 'react'
import CustomRadioList from '../CustomRadioList/CustomRadioList'
import Icon from '../Icon'
import PickerPopup from '../PickerPopup/PickerPopup'
import s from './OptionsPicker.module.css'

const DIFFICULTY = ['easy', 'normal', 'hard']
const CATEGORY = ['stuff', 'family', 'health', 'learning', 'leisure', 'work']

OptionsPicker.defaultProps = {
  type: 'category',
  isChallenge: false,
}

OptionsPicker.propTypes = {
  type: PropTypes.string,
  getOptionValue: PropTypes.func.isRequired,
  initialValue: PropTypes.string.isRequired,
  isChallenge: PropTypes.bool,
}

export default function OptionsPicker({
  type,
  getOptionValue,
  initialValue,
  isChallenge,
}) {
  const [value, setValue] = useState(initialValue)
  const [showModal, setShowModal] = useState(false)

  const options = type === 'difficulty' ? DIFFICULTY : CATEGORY
  const isDifficultyType = type === 'difficulty'

  function handleOptionsChange(e) {
    setValue(e.target.value)
    getOptionValue(e.target.value)
    setShowModal(false)
  }

  const btnClasses = isDifficultyType
    ? s[type + '_button']
    : [s[type + '_button'], s[value]].join(' ')

  const btnLabelClasses =
    isChallenge && isDifficultyType
      ? [s[type + '_buttonLabel'], s[type + '_buttonLabel_challenge']].join(' ')
      : s[type + '_buttonLabel']

  return (
    <>
      <button
        type="button"
        value={value}
        className={btnClasses}
        onClick={() => setShowModal(true)}
      >
        {isDifficultyType && <span className={s['d_level_' + value]}></span>}
        <span className={btnLabelClasses}>{value}</span>
        <Icon className={s.Icon} name="triangle-down" size={12} />
      </button>

      {showModal && (
        <PickerPopup onClose={() => setShowModal(false)}>
          <CustomRadioList
            isChallenge={isChallenge}
            type={type}
            options={options}
            value={value}
            handleOptionsChange={handleOptionsChange}
          />
        </PickerPopup>
      )}
    </>
  )
}
