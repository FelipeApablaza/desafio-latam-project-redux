import React, { useState } from 'react';
import { connect } from 'react-redux';
import './Filter.css'

const defaultState = {
    supername: '',
    realname: '',
    gender: '',
    powers: '',
    comic: '',
}
const Filter = props => {

    const [state, setState] = useState(defaultState)

    const handlerOnChange = ({ target: { value, name } }) => {
        setState({ ...state, [name]: value })
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


export default connect(null, null)(Filter)