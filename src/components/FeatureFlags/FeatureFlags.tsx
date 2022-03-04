import React from 'react';
import { FeatureFlagSection } from './components/FeatureFlagSection/FeatureFlagSection';
import { schema } from './schema'

import './FeatureFlags.css';

export const FeatureFlags = () => {
  return <div>
      <div className="general-flags">
        <FeatureFlagSection {...schema.general} />
      </div>
      <div className="three-columns">
        <FeatureFlagSection {...schema.profileSettings} />
        <FeatureFlagSection {...schema.accountSettings} />
        <FeatureFlagSection {...schema.alerts} />
      </div>
    </div>
}
