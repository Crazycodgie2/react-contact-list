import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import data from "../randomUsers.json"

export default function(props) {
  return (
    <ul>
      {data.map(list => (
        <li>
          <Link key={list.id} to={`/List/${list.id}`}>
            {list.name.title} {list.name.first} {list.name.last}{" "}
            <img src={list.picture.medium}></img>
          </Link>
        </li>
      ))}
    </ul>
  )
}
