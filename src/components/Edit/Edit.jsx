import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateHeroAction, editTurnAction } from '../../store/list/actions'
import './Edit.css'

const Edit = props => {
    const { heroToEdit: { hero, index } } = props

    const [editedHero, setEditedHero] = useState(hero)

    const [disabled, setDisabled] = useState('disabled')

    useEffect(() => {
        setEditedHero(hero)
    }, [hero])

    useEffect(() => {
        const { supername, realname, gender, powers, comic } = editedHero
        if ((supername !== '' && supername.length <= 20) &&
            (realname !== '' && realname.length <= 20) &&
            (gender !== '' && gender.length <= 20) &&
            (powers !== '' && powers.length <= 20) &&
            (comic !== '' && comic.length <= 20)) {
            setDisabled('')
        } else {
            setDisabled('disabled')
        }
    }, [editedHero])

    const handlerOnChange = ({ target: { value, name } }) => {
        setEditedHero({ ...editedHero, [name]: value })
    }

    const handlerUpdate = () => {
        props.updateHero({ hero: editedHero, index })
        props.editTurn(false)
    }

    return (
        <div className='editComponent'>
            <input value={editedHero.supername} onChange={handlerOnChange} name='supername' placeholder={'SuperHero Name'} maxlength="20"></input>
            <input value={editedHero.realname} onChange={handlerOnChange} name='realname' placeholder={'Real Name'} maxlength="20"></input>
            <input value={editedHero.gender} onChange={handlerOnChange} name='gender' placeholder={'Gender'} maxlength="20"></input>
            <input value={editedHero.powers} onChange={handlerOnChange} name='powers' placeholder={'Powers'} maxlength="20"></input>
            <input value={editedHero.comic} onChange={handlerOnChange} name='comic' placeholder={'Comic'} maxlength="20"></input>
            <button disabled={disabled} onClick={handlerUpdate}>Update SuperHero!</button>
        </div>
    )
}

const mapStateToProps = state => ({
    ...state.superHeroes,
});

const mapDispatchToProps = dispatch => ({
    updateHero: payload => dispatch(updateHeroAction(payload)),
    editTurn: payload => dispatch(editTurnAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit)

