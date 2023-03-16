import { useState } from 'react';
import { BallotDetails } from '../../../interfaces';
import './style.css';

const Card = ({ item, selectedVotes, setSelectedVotes, categoriesId, setCategoriesId, contentId }: {
  contentId: string,
  item: BallotDetails,
  selectedVotes: string[],
  setSelectedVotes: Function,
  categoriesId: string[] | undefined,
  setCategoriesId: Function
}) => {

  const [highlighted, setHighlighted] = useState<boolean>(false)

  const handleClick = () => {
    setHighlighted(true);
    setSelectedVotes((prevState: string[]) => [...prevState, item.title])
    setCategoriesId(categoriesId?.filter((id: string) => id !== contentId));
  }

  const validVote = !selectedVotes?.includes(item.title) && 
        !categoriesId?.includes(contentId)

  return ( 
    <div className={highlighted ? 'card-highlighted' : 'card'}>
      <h3 className='card-title'>{item.title}</h3>
      <div className="card-imgBox">
        <img src={item.photoUrL} alt={item.title} className="card-img" />
      </div>
      <button 
        className="card-btn" 
        onClick={handleClick}
        disabled={validVote}
      >
        Vote
      </button>
    </div>
   );
}
 
export default Card;