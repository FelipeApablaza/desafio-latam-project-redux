import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addHeroAction, editTurnAction } from '../../store/list/actions'
import './Add.css'

const defaultState = {
    supername: '',
    realname: '',
    gender: '',
    powers: '',
    comic: '',
    hide: false,
}
const Add = props => {

    const [newHero, setNewHero] = useState(defaultState)

    const [disabled, setDisabled] = useState('disabled')

    const handlerOnChange = ({ target: { name, value } }) => {
        setNewHero({ ...newHero, [name]: value })
    }
    const handlerAdd = () => {
        props.editTurn(false)
        props.addHero(newHero)
        setNewHero(defaultState)
    }

    useEffect(() => {
        const { supername, realname, gender, powers, comic } = newHero
        if ((supername !== '' && supername.length <= 20) &&
            (realname !== '' && realname.length <= 20) &&
            (gender !== '' && gender.length <= 20) &&
            (powers !== '' && powers.length <= 20) &&
            (comic !== '' && comic.length <= 20)) {
            setDisabled('')
        } else {
            setDisabled('disabled')
        }
    }, [newHero])

    return (
        <div className='addComponent'>
            <input value={newHero.supername} onChange={handlerOnChange} name='supername' placeholder={'SuperHero Name (Max 20 characters)'} maxlength="20"></input>
            <input value={newHero.realname} onChange={handlerOnChange} name='realname' placeholder={'Real Name (Max 20 characters)'} maxlength="20"></input>
            <input value={newHero.gender} onChange={handlerOnChange} name='gender' placeholder={'Gender (Max 20 characters)'} maxlength="20"></input>
            <input value={newHero.powers} onChange={handlerOnChange} name='powers' placeholder={'Powers (Max 20 characters)'} maxlength="20"></input>
            <input value={newHero.comic} onChange={handlerOnChange} name='comic' placeholder={'Comic (Max 20 characters)'} maxlength="20"></input>
            <button disabled={disabled} onClick={handlerAdd}>Add a SuperHero!</button>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    addHero: payload => dispatch(addHeroAction(payload)),
    editTurn: payload => dispatch(editTurnAction(payload))
});

export default connect(null, mapDispatchToProps)(Add)

