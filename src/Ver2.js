import React, { useMemo, useState } from 'react'

export const User2 = () => {
  const [nickname, setNickname] = useState('')
  const nicknameLength = useMemo(() => nickname.length, [nickname])

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