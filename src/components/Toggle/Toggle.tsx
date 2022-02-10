import React from "react"
import "./Toggle.css"

type Props = {
  id: string
  checked?: boolean
  onToggle: () => void
}

export const Toggle = ({id, checked, onToggle: handleChange }: Props) => {
  return (
    <React.Fragment>
      <input className="toggle" id={id} type="checkbox" onChange={handleChange} checked={checked} />
      <label className="toggle-button" htmlFor={id} />
    </React.Fragment>
  )
}
