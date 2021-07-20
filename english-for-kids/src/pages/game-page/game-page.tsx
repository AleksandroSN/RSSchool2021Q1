import { GetAlldata } from "../../api/apiFetch";
import { GameContainer } from "../../components/game-container/game-container";

interface PropsGamePage {
  id: string;
}

const GamePage = ({ id }: PropsGamePage): JSX.Element => {
  const { result, loading } = GetAlldata();

  return (
    <div className="app-game-page">
      <GameContainer id={id} result={result} loading={loading} />
    </div>
  );
};

export default GamePage;
