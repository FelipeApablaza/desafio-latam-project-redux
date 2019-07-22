import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addHeroAction } from '../../store/list/actions'
import './Add.css'

const defaultState = {
    supername: '',
    realname: '',
    gender: '',
    powers: '',
    comic: '',
}
const Add = props => {

    const [newHero, setNewHero] = useState(defaultState)

    const handlerOnChange = ({ target: { name, value } }) => {
        setNewHero({ ...newHero, [name]: value })
    }
    const handlerAdd = () => {
        props.addHero(newHero)
        setNewHero(defaultState)
    }
    return (
        <div className='addComponent'>
            <input value={newHero.supername} onChange={handlerOnChange} name='supername' placeholder={'SuperHero Name'}></input>
            <input value={newHero.realname} onChange={handlerOnChange} name='realname' placeholder={'Real Name'}></input>
            <input value={newHero.gender} onChange={handlerOnChange} name='gender' placeholder={'Gender'}></input>
            <input value={newHero.powers} onChange={handlerOnChange} name='powers' placeholder={'Powers'}></input>
            <input value={newHero.comic} onChange={handlerOnChange} name='comic' placeholder={'Comic'}></input>
            <button onClick={handlerAdd}>Add a SuperHero!</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addHero: payload => dispatch(addHeroAction(payload))
});

export default connect(null, mapDispatchToProps)(Add)

