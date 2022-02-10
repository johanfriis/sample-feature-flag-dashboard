import React, { useCallback, useContext } from "react"
import { FeatureFlagsContext } from "../.."
import { InputValues } from "../../types"
import "./FeatureFlagInput.css"

type Props = {
  id: string
  disabled?: boolean
  values: InputValues[]
}

export const FeatureFlagInput = ({ id, disabled, values }: Props) => {
  const {
    updateValue,
    readValue
  } = useContext(FeatureFlagsContext)

  const selectedValue = readValue(id)

  const handleOnChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    updateValue(id, e.target.value)
  },  [id, updateValue])

  return <div className={`feature-flag-input ${disabled ? 'feature-flag-input--disabled' : ''}`}>
    <select disabled={disabled} onChange={handleOnChange} value={selectedValue}>
      {values.map(value => <option key={value as string} value={value as string}>{value}</option>)}
    </select>
  </div>
}
