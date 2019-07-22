import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteHeroAction, editHeroAction } from '../../store/list/actions'
import Edit from '../Edit/Edit'
import './List.css'


const List = props => {
  const [state, setState] = useState({ edit: false })

  const { superHeroesList } = props;

  const handlerEdit = ({ target: { value } }) => {
    props.editHero(superHeroesList[value])
    setState({ edit: true })
  }

  const handlerDelete = ({ target: { value } }) => {
    props.deleteHero(parseInt(value))
    setState({ edit: false })
  }

  return (
    <div>
      <div className='listComponent'>
        <table>
          <thead>
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
              superHeroesList.map((item, index) =>
                <tr key={index}>
                  <td>{item.supername}</td>
                  <td>{item.realname}</td>
                  <td>{item.gender}</td>
                  <td>{item.powers}</td>
                  <td>{item.comic}</td>
                  <td><button value={index} onClick={handlerEdit}>Edit</button></td>
                  <td><button value={index} onClick={handlerDelete}>Delete</button></td>
                </tr>
              )
            }
          </tbody>
          <tfoot>
            
          </tfoot>
        </table>
      </div>
      <div>
        {state.edit ?
          (<Edit/>) :
          (<div></div>)
        }
      </div>
    </div >
  );
};

const mapStateToProps = state => ({
  ...state.superHeroes,
});

const mapDispatchToProps = dispatch => ({
  deleteHero: payload => dispatch(deleteHeroAction(payload)),
  editHero: payload => dispatch(editHeroAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);