import { FunctionComponent, createContext, useState } from "react";

const storyBackground = {
  dark: "bg-[#282c34]/75",
  blue: "bg-[#61dafb]/50",
  yellow: "bg-[#f4d03f]/50",
  christmas: "bg-[#e74c3c]/75",
  transparent: "bg-transparent",
} as const

export type StoryBackground = keyof typeof storyBackground

type StoryContext = { background: string, setStoryBackground: (color: StoryBackground) => void }

export const StoryContext = createContext({
  background: "bg-transparent",
  setStoryBackground (color: StoryBackground) {
    this.background = color
  },
} satisfies StoryContext)

export const StoryProvider: FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<{ background: string }>({ background: "bg-transparent" })

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
