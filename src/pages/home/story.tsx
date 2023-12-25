import { useContext } from 'react';
import StorySection from './story-section.tsx';
import { StoryContext } from './story-context.tsx';
import { twMerge } from 'tailwind-merge';
import type { Section } from './story-section.tsx';

export default function Story({ sections }: { sections: Section[] }) {
  const { background } = useContext(StoryContext)

  return (
    <div className={twMerge(background)} style={{
      backgroundImage: "url('/imgs/background.svg')"
    }}>
      <StorySection
        sections={sections}>
      </StorySection>
    </div>
  )
}
