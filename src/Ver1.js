import React, { useEffect, useState } from 'react'

export const User = () => {
  const [nickname, setNickname] = useState('')
  const [nicknameLength, setNicknameLength] = useState(0)

  const updateNicknameLength = () => {
    setNicknameLength(nickname.length)
  }
  useEffect(updateNicknameLength, [nickname])

  const updateNickname = event => {
    const nickname = event.target.value

    setNickname(nickname)
  }

  return (
    <div>
      <input onChange={updateNickname} />
      <label>{nicknameLength}</label>
    </div>
  )
}