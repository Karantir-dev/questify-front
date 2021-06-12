import React from 'react'
import { useState } from 'react'
import StaticCard from '../StaticCard/StaticCard'
import CreateEditCard from '../../Components/CreateEditCard/CreateEditCard'
import PropTypes from 'prop-types'

function Card(
  id,
  isChallenge,
  difficulty,
  category,
  deadline,
  text,
  isCompleted,
) {
  const [editFormShow, setEditFormShow] = useState(false)
  return editFormShow ? (
    <CreateEditCard
      id={id}
      isChallenge={isChallenge}
      difficulty={difficulty}
      category={category}
      deadline={deadline}
      text={text}
      isCompleted={isCompleted}
      onCloseEditMode={setEditFormShow}
    />
  ) : (
    <StaticCard
      id={id}
      isChallenge={isChallenge}
      difficulty={difficulty}
      category={category}
      deadline={deadline}
      text={text}
      isCompleted={isCompleted}
    />
  )
}

Card.propTypes = {
  id: PropTypes.string,
  isChallenge: PropTypes.bool,
  difficulty: PropTypes.string,
  category: PropTypes.string,
  deadline: PropTypes.string,
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
}

export default Card
