import { useState } from 'react'
import Icon from '../Icon'
import PickerPopup from '../PickerPopup/PickerPopup'
import s from './OptionsPicker.module.css'

const difficulty = ['easy', 'normal', 'hard']

const category = ['stuff', 'family', 'health', 'learning', 'leisure', 'work']

export default function OptionsPicker({
  type,
  getOptionValue,
  initialValue,
  isChallenge,
}) {
  const [value, setValue] = useState(initialValue)
  const [showModal, setShowModal] = useState(false)

  const toggleModal = setShowModal(!showModal)

  const options = type === 'difficulty' ? difficulty : category

  function handleOptionsChange(e) {
    setValue(e.target.value)
    getOptionValue(value)
    toggleModal()
  }

  const btnLabelClasses = [s[`${type}_buttonLabel`], s[`${type}_text`]]
  //   eslint-disable-next-line default-case
  switch (value) {
    case 'easy':
      btnLabelClasses.push(s.easy)
      break
    case 'normal':
      btnLabelClasses.push(s.normal)
      break
    case 'hard':
      btnLabelClasses.push(s.hard)
      break
  }

  const btnClasses = [s[`${type}_button`]]
  //   eslint-disable-next-line default-case
  switch (value) {
    case 'stuff':
      btnClasses.push(s.stuff)
      break
    case 'family':
      btnClasses.push(s.family)
      break
    case 'health':
      btnClasses.push(s.health)
      break
    case 'learning':
      btnClasses.push(s.learning)
      break
    case 'leisure':
      btnClasses.push(s.leisure)
      break
    case 'work':
      btnClasses.push(s.work)
      break
  }

  return (
    <>
      <button
        type="button"
        value={value}
        className={
          type === 'difficulty' ? s[`${type}_button`] : btnClasses.join(' ')
        }
        onClick={toggleModal}
      >
        <span className={btnLabelClasses.join(' ')}>{value}</span>
        <Icon name="triangle-down" size={12} />
      </button>
      {showModal && (
        <PickerPopup
          onClose={toggleModal}
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
