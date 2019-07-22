import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './Edit.css'



const Edit = props => {
    const [hero, setHero] = useState(props.editHero)

    // useEffect(() => {
    //     setHero(props.editHero)
    // }, [])

    const handlerOnChange = ({target: {value, name}}) => {
        setHero({ ...hero, [name]: value})
    }

    const handlerAdd = () => {
        console.log(props)
    }

    return (
        <div className='editComponent'>
            <input value={hero.supername} onChange={handlerOnChange} name='supername' placeholder={'SuperHero Name'}></input>
            <input value={hero.realname} onChange={handlerOnChange} name='realname' placeholder={'Real Name'}></input>
            <input value={hero.gender} onChange={handlerOnChange} name='gender' placeholder={'Gender'}></input>
            <input value={hero.powers} onChange={handlerOnChange} name='powers' placeholder={'Powers'}></input>
            <input value={hero.comic} onChange={handlerOnChange} name='comic' placeholder={'Comic'}></input>
            <button onClick={handlerAdd}>Add a SuperHero!</button>
        </div>
    )
}

const mapStateToProps = state => ({
    ...state.superHeroes,
  });
  

export default connect(mapStateToProps, null)(Edit)

