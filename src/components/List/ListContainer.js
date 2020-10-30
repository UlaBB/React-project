import { connect } from 'react-redux';
import List from './List';
import { getColumnsForList, createActionAddColumn } from '../../redux/columnsRedux';

// export const getColumnsForList = ({ columns }, listId) => columns.filter(column => column.listId == listId);

//poniższa funkcja dodaje propsy komponentu List
const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),
});


const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({ //props addColumn zawiera funkcję przyjmującą jeden argument
    listId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);