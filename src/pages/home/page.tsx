import Story from './story.tsx';
import { StoryProvider } from './story-context.tsx';
import type { Section } from './story-section.tsx';

export default function HomePage({ sections }: { sections: Section[] }) {
  return (
    <div>
      <StoryProvider>
        <Story sections={sections} />
      </StoryProvider>
    </div>
  )
}
