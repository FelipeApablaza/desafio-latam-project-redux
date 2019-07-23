import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateHeroAction } from '../../store/list/actions'
import './Edit.css'

const Edit = props => {
    const { heroToEdit: { hero, index } } = props

    const [editedHero, setEditedHero] = useState(hero)

    useEffect(() => {
        setEditedHero(hero)
    }, [hero])

    const handlerOnChange = ({ target: { value, name } }) => {
        setEditedHero({ ...editedHero, [name]: value })
    }

    const handlerUpdate = () => {
        props.updateHero({ hero: editedHero, index})
    }

    return (
        <div className='editComponent'>
            <input value={editedHero.supername} onChange={handlerOnChange} name='supername' placeholder={'SuperHero Name'}></input>
            <input value={editedHero.realname} onChange={handlerOnChange} name='realname' placeholder={'Real Name'}></input>
            <input value={editedHero.gender} onChange={handlerOnChange} name='gender' placeholder={'Gender'}></input>
            <input value={editedHero.powers} onChange={handlerOnChange} name='powers' placeholder={'Powers'}></input>
            <input value={editedHero.comic} onChange={handlerOnChange} name='comic' placeholder={'Comic'}></input>
            <button onClick={handlerUpdate}>Update SuperHero!</button>
        </div>
    )
}

const mapStateToProps = state => ({
    ...state.superHeroes,
});

const mapDispatchToProps = dispatch => ({
    updateHero: payload => dispatch(updateHeroAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit)

