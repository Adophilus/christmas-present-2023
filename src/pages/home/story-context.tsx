import { FunctionComponent, createContext, useState } from "react";

const storyBackground = {
  dark: "bg-[#282c34]",
  light: "bg-[#61dafb]",
  christmas: "bg-[#e74c3c]",
  transparent: "bg-transparent",
}

export type StoryBackground = keyof typeof storyBackground

type StoryContext = { background: string, setStoryBackground: (color: StoryBackground) => void }

export const StoryContext = createContext({
  background: "bg-transparent",
  setStoryBackground: (color: StoryBackground) => { },
} satisfies StoryContext)

export const StoryProvider: FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<{ background: StoryBackground }>({ background: "bg-transparent" })

  return (
    <StoryContext.Provider value={{
      ...state,
      setStoryBackground: (color: StoryBackground) => {
        setState({ background: storyBackground[color] })
      }
    }}>
      {children}
    </StoryContext.Provider>
  )
}

export type { StoryBackground }

