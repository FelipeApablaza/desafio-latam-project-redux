import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editTurnAction, filterListAction } from '../../store/list/actions'
import './Filter.css'

const defaultState = {
    supername: '',
    realname: '',
    gender: '',
    powers: '',
    comic: '',
}
const Filter = props => {
    const { superHeroesList } = props
    const [state, setState] = useState(defaultState)

    const handlerOnChange = ({ target: { value, name } }) => {
        props.editTurn(false)
        setState({ ...state, [name]: value })
        console.log('asdasd')

        let atts = [ 'supername', 'realname', 'gender', 'powers', 'comic']
        atts = atts.filter((item) => item !== name)

        let filteredList = superHeroesList.map((item) => {
            if ( atts.map((elem)=> item[elem].includes(state[elem])).every((bool)=>bool === true)
                && item[name].includes(value)) {
                item.hide = false
                return item
            } else {
                item.hide = true
                return item
            }
        })
        props.filterList(filteredList)
    }

    return (
        <tr className='filterComponent'>
            <th><input value={state.supername} onChange={handlerOnChange} name='supername' placeholder={'Filter by SuperHero'}></input></th>
            <th><input value={state.realname} onChange={handlerOnChange} name='realname' placeholder={'Filter by Real Name'}></input></th>
            <th><input value={state.gender} onChange={handlerOnChange} name='gender' placeholder={'Filter by Gender'}></input></th>
            <th><input value={state.powers} onChange={handlerOnChange} name='powers' placeholder={'Filter by Powers'}></input></th>
            <th><input value={state.comic} onChange={handlerOnChange} name='comic' placeholder={'Filter by Comic'}></input></th>
        </tr>
    )
}

const mapStateToProps = state => ({
    ...state.superHeroes,
});

const mapDispatchToProps = dispatch => ({
    editTurn: payload => dispatch(editTurnAction(payload)),
    filterList: payload => dispatch(filterListAction(payload))
});


export default connect(mapStateToProps, mapDispatchToProps)(Filter)