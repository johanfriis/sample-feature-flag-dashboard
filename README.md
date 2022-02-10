# Feature Flags Dashboard

State of flags and value are stored in localstorage to mock state retention across refreshes.

## Notes on Layout

The schema could be updated to also contain the layout, leaving any keywords out
of the `FeatureFlags.tsx` file. This has not been implemented, as it is not clear what
would be optimal long term. Thus, the current column and wrapping layout is a bit "hacky".
