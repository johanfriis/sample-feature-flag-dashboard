import React, { useContext } from "react"
import { Block } from "../../types"

import "./FeatureFlagBlock.css"
import { FeatureFlag } from "../FeatureFlag/FeatureFlag"
import { FeatureFlagsContext } from "../.."

type Props = {
  block: Block
  sectionId: string
}

export const FeatureFlagBlock = ({ sectionId, block }: Props) => {

  const {
    isFlagOpen
  } = useContext(FeatureFlagsContext)

  const blocks = Array.isArray(block) ? block : [block]

  return <div className="feature-flag-block">
    {blocks.map((flag, idx) =>
      <React.Fragment key={idx}>
        <FeatureFlag
          {...flag}
          id={`${sectionId}-${flag.id}`}
        />
        {flag.flags && flag.flags.length > 0
          && isFlagOpen(`${sectionId}-${flag.id}`)
          && flag.flags.map((childFlag, idx) =>
            <FeatureFlag
              {...childFlag}
              id={`${sectionId}-${flag.id}-${childFlag.id}`}
              key={idx}
              nested />
          )
        }
      </React.Fragment>
    )}
  </div>
}
