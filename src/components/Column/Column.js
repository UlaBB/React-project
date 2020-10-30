import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
//import { settings } from '../../data/dataStore';
// import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';


class Column extends React.Component {
  // state = {
  //   cards: this.props.cards || [],
  // }

  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array,
    // addCard: PropTypes.func,
    icon: PropTypes.node,
  }

  // addCard(title) {
  //   this.setState((state) => ({
  //     cards: [
  //       ...state.cards,
  //       {
  //         key: state.cards.length
  //           ? state.cards[state.cards.length - 1].key + 1
  //           : 0,
  //         title,
  //       },
  //     ],
  //   }));
  // }

  render() {
    const { title, icon, cards } = this.props;

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.Icon}>
            <Icon name={icon} /></span> {title}</h3>
        {/* <div className={styles.cards}>
          {this.state.cards.map(({ key, ...cardProps }) => (
            <Card key={key} {...cardProps} />
          ))}
        </div> */}
        {/* <div className={styles.creator}>
          <Creator
            text={settings.cardCreatorText}
            action={(title) => this.addCard(title)}
          />
        </div> */}
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
      </section>
    );
  }
}

export default Column;
