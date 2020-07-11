import { Link } from 'gatsby'
import styled from 'styled-components'
import React, { useState, useEffect } from 'react'

const Container = styled.footer`
  margin: 2rem auto;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: pink;
`
const useAudio = url => {
  const [audio] = useState(new Audio(url))
  const [playing, setPlaying] = useState(false)

  const toggle = () => setPlaying(!playing)

  useEffect(() => {
    playing ? audio.play() : audio.pause()
  }, [playing])

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false))
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false))
    }
  }, [])

  return [playing, toggle]
}

const Player = ({ url }) => {
  console.log(url)
  const [playing, toggle] = useAudio(url)

  return (
    <Container>
      <div></div>
      <div>
        <button onClick={toggle}>{playing ? 'Pause' : 'Play'}</button>
      </div>
      <div>Social</div>
    </Container>
  )
}

export default Player
