import React, { useCallback, useContext } from "react"
import { FeatureFlagInput } from "../FeatureFlagInput/FeatureFlagInput"
import { Toggle } from "../../../Toggle/Toggle"
import { FeatureFlagsContext } from "../.."
import { Flag } from "../../types"

import "./FeatureFlag.css"

type Props = Flag & {
  nested?: boolean
}

export const FeatureFlag = ({ label, id, hasInput, inputValues, flags, nested }: Props) => {

  const {
    toggleFlagChecked,
    isFlagChecked,
    toggleFlagOpen,
    isFlagOpen
  } = useContext(FeatureFlagsContext)

  const isChecked = isFlagChecked(id)
  const isOpen = isFlagOpen(id)

  const handleToggleChecked = useCallback(() => {
    toggleFlagChecked(id)
  }, [id, toggleFlagChecked])


  const handleToggleOpen = useCallback(() => {
    if (!isChecked) return
    toggleFlagOpen(id)
  }, [id, isChecked, toggleFlagOpen])

  return <div className={`feature-flag ${nested ? 'feature-flag--nested' : ''}`}>
    <div className="feature-flag-label">{label}</div>
    {hasInput && inputValues
      ? <FeatureFlagInput values={inputValues} id={id} disabled={!isChecked} />
      : null
    }
    <Toggle id={id} onToggle={handleToggleChecked} checked={isChecked} />
    {flags
      ? <div className="feature-flag-toggle-open" onClick={handleToggleOpen}>
          <span className={`
            feature-flag-toggle-open__icon
            ${isOpen
                ? 'feature-flag-toggle-open__icon--open'
                : 'feature-flag-toggle-open__icon--closed'
              }
          `} />
        </div>
      : null
    }
  </div>
}
