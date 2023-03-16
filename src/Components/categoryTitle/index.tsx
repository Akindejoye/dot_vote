import { BallotContent } from '../../../interfaces';
import './style.css';

const CategoryTitle = ({ title }: {
  title: string;
} ) => {
  return ( 
    <div className="categoryTitle">
        <h2>{title}</h2>
    </div>
   );
}
 
export default CategoryTitle;