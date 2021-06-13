import { useState } from 'react'
import StaticCard from '../StaticCard/StaticCard'
import CreateEditCard from '../../Components/CreateEditCard/CreateEditCard'
import PropTypes from 'prop-types'

function Card({
  id,
  isChallenge,
  difficulty,
  category,
  deadline,
  text,
  isCompleted,
}) {
  const [editFormShow, setEditFormShow] = useState(false)

  return editFormShow ? (
    <CreateEditCard
      cardId={id}
      isChallengeProp={isChallenge}
      isCompletedProp={isCompleted}
      textProp={text}
      difficultyProp={difficulty}
      categoryProp={category}
      deadlineProp={deadline}
      handleHideCard={() => setEditFormShow(false)}
    />
  ) : (
    <button type="button" onClick={() => setEditFormShow(true)}>
      <StaticCard
        id={id}
        isChallenge={isChallenge}
        difficulty={difficulty}
        category={category}
        deadline={deadline}
        text={text}
        isCompleted={isCompleted}
      />
    </button>
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
