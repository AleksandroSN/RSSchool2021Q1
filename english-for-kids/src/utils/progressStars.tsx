interface PropsProgressStar {
  isCorrect: boolean;
}

export const ProgressStar = ({ isCorrect }: PropsProgressStar): JSX.Element => {
  if (isCorrect) {
    return (
      <li>
        <img src="/img/donut-win.svg" alt="WinStar" className="progress__img" />
      </li>
    );
  }
  return (
    <li>
      <img src="/img/donut.svg" alt="LoseStar" className="progress__img" />
    </li>
  );
};
