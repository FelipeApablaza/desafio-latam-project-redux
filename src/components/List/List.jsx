import React from 'react';
import { connect } from 'react-redux';
import { deleteHeroAction, editHeroAction, editTurnAction } from '../../store/list/actions'
import Edit from '../Edit/Edit'
import Filter from '../Filter/Filter'
import Add from '../Add/Add'




const List = props => {

  const { superHeroesList, editOn } = props;

  const handlerEdit = ({ target: { value } }) => {
    props.editHero({ hero: superHeroesList[parseInt(value)], index: parseInt(value) })
    props.editTurn(true)
  }

  const handlerDelete = ({ target: { value } }) => {
    props.deleteHero(parseInt(value))
    props.editTurn(false)
  }

  return (
    <div>
      <Add />
      <div className='heroesList'>
        <table>
          <thead>
            <Filter />
            <tr>
              <th>SuperHero</th>
              <th>Real Name</th>
              <th>Gender</th>
              <th>Powers</th>
              <th>Comic</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              superHeroesList.map((item, index) => {
                if (!item.hide) {
                  return (
                    <tr key={index}>
                      <td>{item.supername}</td>
                      <td>{item.realname}</td>
                      <td>{item.gender}</td>
                      <td>{item.powers}</td>
                      <td>{item.comic}</td>
                      <td><button className='editButton' value={index} onClick={handlerEdit}>Edit</button></td>
                      <td><button className='deleteButton' value={index} onClick={handlerDelete}>Delete</button></td>
                    </tr>)
                } else {
                  return ([])
                }
              }
              )
            }
          </tbody>
          <tfoot>

          </tfoot>
        </table>
      </div>
      {editOn ?
        (<Edit />) :
        ([])
      }
    </div>
  );
};

const mapStateToProps = state => ({
  ...state.superHeroes,
});

const mapDispatchToProps = dispatch => ({
  deleteHero: payload => dispatch(deleteHeroAction(payload)),
  editHero: payload => dispatch(editHeroAction(payload)),
  editTurn: payload => dispatch(editTurnAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);