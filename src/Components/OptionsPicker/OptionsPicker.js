import PropTypes from 'prop-types'
import { useState } from 'react'
import Icon from '../Icon'
import PickerPopup from '../PickerPopup/PickerPopup'
import s from './OptionsPicker.module.css'

const difficulty = ['easy', 'normal', 'hard']
const category = ['stuff', 'family', 'health', 'learning', 'leisure', 'work']

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

  const options = type === 'difficulty' ? difficulty : category
  const isDifficultyType = type === 'difficulty'

  function handleOptionsChange(e) {
    setValue(e.target.value)
    getOptionValue(e.target.value)
    setShowModal(false)
  }

  const btnClasses = [s[`${type}_button`], s[value]].join(' ')

  const btnLabelClasses = [
    s[`${type}_buttonLabel`],
    s[`${type}_text`],
    s[value],
  ].join(' ')

  return (
    <>
      <button
        type="button"
        value={value}
        className={isDifficultyType ? s[`${type}_button`] : btnClasses}
        onClick={() => setShowModal(true)}
      >
        <span
          className={
            isDifficultyType ? btnLabelClasses : s[`${type}_buttonLabel`]
          }
        >
          {value}
        </span>
        <Icon name="triangle-down" size={12} />
      </button>
      {showModal && (
        <PickerPopup
          onClose={() => setShowModal(false)}
          type={type}
          options={options}
          value={value}
          handleOptionsChange={handleOptionsChange}
          isChallenge={isChallenge}
        />
      )}
    </>
  )
}
