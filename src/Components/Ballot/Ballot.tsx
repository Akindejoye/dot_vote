import { useState, useEffect } from 'react';
import { axios } from '../../request';
import { DataBallot, BallotContent, BallotDetails } from './../../../interfaces';
import Category from '../category';
import BasicModal from '../result';
import './style.css';

const Ballot: React.FC = () => {
  const [ballotData, setBallotData] = useState<DataBallot | undefined>();
  const [selectedVotes, setSelectedVotes] = useState<string[]>([]);
  const [categoriesId, setCategoriesId] = useState<string[] | undefined>([]);
  const [open, setOpen] = useState<boolean>(false);

  //Fetching Data From API
  useEffect(() => {
    const fetchBallotData = async () => {
      try {
        const response = await axios.get(`/api/getBallotData`);
        const data = response.data;
        setBallotData(data);
      } catch (error) {
      }
    }
    fetchBallotData();
  }, [])

  //Getting Category Id's for Selection Purpose
  useEffect(() => {
    const categoryIds = ballotData?.items?.map(({id}) => id);
    setCategoriesId(categoryIds);
  }, [ballotData])

  //Vote submission with Modal pop up
  const handleShowVote = () => {
    setOpen(true);
  }

  //Ensuring a complete selection before submiting the vote.
  const disableVote = categoriesId?.length === 0;

  return (
    <div className='ballot'>
      {ballotData?.items?.map((contents: BallotContent, index:number) => (
        <Category 
          key={index} 
          contentId={contents.id}
          contents={contents}
          selectedVotes={selectedVotes}
          setSelectedVotes={setSelectedVotes}
          setCategoriesId={setCategoriesId}
          categoriesId={categoriesId}
        />
      ))}
      <div className="ballot-btnBox">
        <button 
        className="ballot-btn" 
        onClick={handleShowVote}
        disabled={!disableVote}
      >
          Submit Vote
        </button>
      </div>
      <BasicModal 
        setOpen={setOpen} 
        open={open}
        selectedVotes={selectedVotes} 
      />
    </div>
  )
}

export default Ballot;