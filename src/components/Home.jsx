import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameTrainer } from '../store/slice/nameTrainer.slice'
import './pokedex/style/home.css'
const Home = () => {

   const dispatch = useDispatch()
   const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        const inputValue = e.target.name.value.trim()
        if(inputValue.length !== 0){
            dispatch(setNameTrainer(inputValue))
            navigate('/pokedex')
        }
        e.target.name.value = ""
    }

  return (
    <div className='home'>
      <section className="home__card">
        <h1 className='home__title font_bold_ultra'>Hello Trainer</h1>
        <p className='home__paragraph font_bold'>To Start give me your trainer name</p>
        <form className='home__user' onSubmit={handleSubmit}>
            <input className='home__input' id='name' type="text" placeholder="Enter your name" />
            <button className='home__btn font_bold'>Let's Go</button>
        </form>
      </section>
    </div>
  )
}

export default Home