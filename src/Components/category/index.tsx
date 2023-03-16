import { BallotContent, BallotDetails } from '../../../interfaces';
import Card from '../card';
import './style.css';


const Category = ({ contents, selectedVotes, setSelectedVotes, categoriesId, setCategoriesId, contentId }: {
  contentId: string,
  contents: BallotContent,
  selectedVotes: string[],
  setSelectedVotes: Function,
  categoriesId: string[] | undefined,
  setCategoriesId: Function
}) => {
  
  return ( 
    <div className="category">
      <div className="category__header">
        <h2>{contents.title}</h2>
      </div>
      <div className="category__card-box">
        {contents.items?.map((item: BallotDetails, index: number) => (
          <Card 
            key={index}
            item={item} 
            contentId={contentId}
            selectedVotes={selectedVotes}
            setSelectedVotes={setSelectedVotes}
            categoriesId={categoriesId}
            setCategoriesId={setCategoriesId} 
          />
        ))}
      </div>
    </div>
   );
}
 
export default Category;