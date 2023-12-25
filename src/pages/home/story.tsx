import { useContext } from 'react';
import StorySection from './story-section.tsx';
import { StoryContext } from './story-context.tsx';

export default function Story() {
  const { background } = useContext(StoryContext)

  return (
    <div className={background}>
      <StorySection background="dark"
        sections={[
          {
            text: "Thank you for all you've done for me"
          },
          {
            text: "It brings the utmost joy to my heart"
          }
        ]}>
      </StorySection>
      {/*
      <StorySection background="light"></StorySection>
      <StorySection background="light">That I want to wish you</StorySection>
      <StorySection background="christmas">A Merry Christmas</StorySection>
    */}
    </div >
  )
}
