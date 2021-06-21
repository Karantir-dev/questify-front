import { useState } from 'react'
import PropTypes from 'prop-types'

import StaticCard from '../StaticCard/StaticCard'
import CreateEditCard from '../../Components/CreateEditCard/CreateEditCard'

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
  const [isDeleteModalShown, setIsDeleteModalShown] = useState(false)

  function onStaticCardClick() {
    if (isCompleted && !isDeleteModalShown) {
      setIsDeleteModalShown(true)
    } else if (!isCompleted) {
      setEditFormShow(true)
    }
  }

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
    <div onClick={onStaticCardClick}>
      <StaticCard
        cardId={id}
        isChallenge={isChallenge}
        difficulty={difficulty}
        category={category}
        deadline={deadline}
        text={text}
        isCompleted={isCompleted}
        isDeleteModalShown={isDeleteModalShown}
        onCancelDelete={() => setIsDeleteModalShown(false)}
      />
    </div>
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
