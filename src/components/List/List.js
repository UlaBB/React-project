import React from 'react';
import Hero from '../Hero/Hero';
import styles from './List.scss';
import PropTypes from 'prop-types';
import Column from '../Column/Column';

class List extends React.Component {
    static PropTypes = {// definuje statyczną wlasciwość klasy= czyli List.propTypes

        title: PropTypes.node.isRequired,
        children: PropTypes.node,
    }
    static defaultProps = {
        children: <p>I can do all the things!!!</p>,
    }
    render() {
        return (

            <section className={styles.component}>
                <Hero titleText={this.props.title} image={this.props.image} />
                <div className={styles.description}>{this.props.children}</div>
                <div className={styles.columns}>
                    <Column columnTitle={'Shopping'} />
                    <Column columnTitle={'House'} />
                    <Column columnTitle={'Travel'} />
                </div>
            </section>

        )
    }
}

export default List;
