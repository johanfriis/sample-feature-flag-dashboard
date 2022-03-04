import React from 'react'
import { Section } from '../../types'
import { FeatureFlagBlock } from '../FeatureFlagBlock/FeatureFlagBlock'
import { FeatureFlagsProvider } from '../../context/featureFlagsContext'

import './FeatureFlagSection.css'

type Props = Section

export const FeatureFlagSection = ({
  id,
  label,
  gap,
  fillBackground,
  blocks,
}: Props) => {
  return (
    <div className="feature-flag-section">
      <h2>{label}</h2>
      <div
        className={`
      feature-flag-section__blocks
      ${gap ? 'feature-flag-section__blocks--gap' : ''}
      ${fillBackground ? 'feature-flag-section--fill-background' : ''}
    `}
      >
        {blocks.map((block, idx) => (
          <FeatureFlagsProvider key={idx}>
            <FeatureFlagBlock block={block} sectionId={id} />
          </FeatureFlagsProvider>
        ))}
      </div>
    </div>
  )
}
