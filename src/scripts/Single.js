import React, { useEffect, useState } from "react"
import data from "../randomUsers.json"

export default function(props) {
  const [name, setName] = useState("")
  const [last, setLast] = useState("")
  const [picture, setPicture] = useState("")

  useEffect(() => {
    const id = props.match.params.id

    const list = data.find(productId => productId === id)

    setName(list.name)
    setLast(list.last)
    setPicture(list.picture)
  }, [props.match.params])

  return (
    <div>
      <p>Name: {name} </p>
      <p>Last: {last} </p>
      <img src={picture} alt="blank filler" />
    </div>
  )
}
