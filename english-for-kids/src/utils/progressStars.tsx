export const loseStar = (): JSX.Element => {
  return (
    <li>
      <img src="/img/donut.svg" alt="LoseStar" className="progress__img" />
    </li>
  );
};

export const winStar = (): JSX.Element => {
  return (
    <li>
      <img src="/img/donut-win.svg" alt="WinStar" className="progress__img" />
    </li>
  );
};
