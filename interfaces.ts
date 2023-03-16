export interface DataBallot {
  items: BallotContent[];
}

export interface BallotContent {
  id: string;
  title: string;
  items: BallotDetails[];
}

export interface BallotDetails {
  title: string;
  photoUrL: string;
  id: string;
}
