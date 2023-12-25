import { motion } from 'framer-motion';
import Story from './story.tsx';
import StoryContext, { StoryProvider } from './story-context.tsx';

export default function HomePage() {
  return (
    <div>
      <StoryProvider>
        <Story />
      </StoryProvider>
    </div>
  )
}
