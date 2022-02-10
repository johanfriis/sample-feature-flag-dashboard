import React from 'react';
import { FeatureFlagsProvider } from './context/featureFlagsContext';
import { FeatureFlagSection } from './components/FeatureFlagSection/FeatureFlagSection';
import { schema } from './schema'

import './FeatureFlags.css';

export const FeatureFlags = () => {
  return <FeatureFlagsProvider>
    <div>
      <div className="general-flags">
        <FeatureFlagSection {...schema.general} />
      </div>
      <div className="three-columns">
        <FeatureFlagSection {...schema.profileSettings} />
        <FeatureFlagSection {...schema.accountSettings} />
        <FeatureFlagSection {...schema.alerts} />
      </div>
    </div>
    {/* {schema.map(section => (
      <FeatureFlagSection {...section} key={section.id} />
    ))} */}
  </FeatureFlagsProvider>
}
