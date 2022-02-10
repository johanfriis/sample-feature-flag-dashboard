# Feature Flags Dashboard

Base app is a slightly modified Typescript CRA.

State of flags and value are stored in localstorage to mock state retention across refreshes.

## Notes on Input Types

At the moment only numeric input types have been implemented

## Notes on Layout

The schema could be updated to also contain the layout, leaving any keywords out
of the `FeatureFlags.tsx` file. This has not been implemented, as it is not clear what
would be optimal long term. Thus, the current column and wrapping layout is a bit "hacky".
