import { GetAlldata } from "../../api/apiFetch";
import { GameContainer } from "../../components/game-container/game-container";

interface PropsGamePage {
  id: string;
}

export const GamePage = ({ id }: PropsGamePage): JSX.Element => {
  const { result, loading } = GetAlldata();

  return (
    <div className="app-game-page">
      <GameContainer key={id} id={id} result={result} loading={loading} />
    </div>
  );
};
