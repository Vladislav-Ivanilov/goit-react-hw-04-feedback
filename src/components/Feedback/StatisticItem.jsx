import PropTypes from 'prop-types';
import { Item } from './Feedback.styled';

export default function StatisticItem({ feedbackState }) {
  return Object.entries(feedbackState).map(([name, value]) => (
    <Item key={name}>
      {name}:{value}
    </Item>
  ));
}

StatisticItem.propTypes = {
  feedbackState: PropTypes.object.isRequired,
};
