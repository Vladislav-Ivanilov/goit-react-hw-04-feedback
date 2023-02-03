import { useState } from 'react';
import ButtonItem from './ButtonItem';
import StatisticItem from './StatisticItem';

import {
  Container,
  Title,
  ButtonBlock,
  TitleStatistic,
  StatisticList,
} from './Feedback.styled';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = value => {
    switch (value) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    (good * 100) / countTotalFeedback();

  return (
    <Container>
      <Title>Please Leave feedback</Title>
      <ButtonBlock>
        {['good', 'neutral', 'bad'].map(label => {
          return (
            <ButtonItem
              key={label}
              title={label}
              onClick={() => handleIncrement(label)}
            />
          );
        })}
      </ButtonBlock>
      <TitleStatistic>Statistic</TitleStatistic>

      {countTotalFeedback() ? (
        <div>
          <StatisticList>
            <StatisticItem
              feedbackState={{ good: good, neutral: neutral, bad: bad }}
            />
          </StatisticList>
          <p>Total:{countTotalFeedback()}</p>
          <p>Total:{countPositiveFeedbackPercentage().toFixed(2)}%</p>
        </div>
      ) : (
        <span>No feedback given </span>
      )}
    </Container>
  );
};

export default Feedback;
