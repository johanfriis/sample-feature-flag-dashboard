import React, { createContext, useCallback, useState } from 'react'

type Flag = {
  checked: boolean
  open?: boolean
  // TODO: this should be refactored to use only values of the types we allow in InputValues
  value?: any
}

type FlagState = Record<string, Flag>

export type FeatureFlagContextType = {
  toggleFlagChecked: (flagId: string) => void
  toggleFlagOpen: (flagId: string) => void
  isFlagChecked: (flagId: string) => boolean
  isFlagOpen: (flagId: string) => boolean
  updateValue: (flagId: string, value: any) => void
  readValue: (flagId: string) => any
}

export const FeatureFlagsContext = createContext<FeatureFlagContextType>({} as FeatureFlagContextType)

export const FeatureFlagsProvider: React.FC = ({ children }) => {
  const [flagState, setState] = useState<FlagState>(() => {
    const storedFeatureFlags = localStorage.getItem('featureFlags')
    if (storedFeatureFlags) {
      return JSON.parse(storedFeatureFlags) as FlagState
    } else {
      return {} as FlagState
    }
  })

  const setFlagState = useCallback((flagId: string, flag: Partial<Flag>): void => {
    setState(prevState => {
      const newFlag = { ...prevState[flagId], ...flag }
      const newState = { ...prevState, [flagId]: newFlag }
      localStorage.setItem('featureFlags', JSON.stringify(newState))

      return newState
    })
  }, [])

  const toggleFlagChecked = useCallback((flagId: string): void => {
    // when toggling flag, reset value and open/close flag
    const checked = !flagState[flagId]?.checked
    const open = checked
    const value = ''

    if (!checked) {
      setState(prevState => {
        // map over all keys of prevState and if they start with flagId, remove them
        // this is a hacky way to remove all child flags when toggling a parent flag
        const newState = Object.keys(prevState)
          .filter(key => !key.startsWith(flagId))
          .reduce((acc, key) => ({ ...acc, [key]: prevState[key] }), {})
        localStorage.setItem('featureFlags', JSON.stringify(newState))
        return newState
      })
    }

    setFlagState(flagId, { checked, open, value })
  }, [flagState, setFlagState])

  const toggleFlagOpen = useCallback((flagId: string): void => {
    const open = !flagState[flagId]?.open
    setFlagState(flagId, { open })
  }, [flagState, setFlagState])

  const isFlagChecked = useCallback((flagId: string): boolean => {
    return flagState[flagId]?.checked ?? false
  }, [flagState])

  const isFlagOpen = useCallback((flagId: string): boolean => {
    return flagState[flagId]?.open ?? false
  }, [flagState])

  const updateValue = useCallback((flagId: string, value: any): void => {
    setFlagState(flagId, { value })
  }, [setFlagState])

  const readValue = useCallback((flagId: string): any => {
    return flagState[flagId]?.value ?? undefined
  }, [flagState])


  const value: FeatureFlagContextType = {
    toggleFlagChecked,
    toggleFlagOpen,
    isFlagChecked,
    isFlagOpen,
    updateValue,
    readValue,
  }

  return (<FeatureFlagsContext.Provider value={value}>{children}</FeatureFlagsContext.Provider>)
}
