import { motion, useAnimation, useScroll } from 'framer-motion';
import * as styles from './styles.css.ts';
import { StyleRule, style } from '@vanilla-extract/css'
import { FunctionComponent, useEffect } from 'react';
import { StoryBackground } from './story';
import { twMerge } from 'tailwind-merge'
import { useState } from 'react';
import { Transition } from '@headlessui/react';

const StorySection: FunctionComponent<{
  background: StoryBackground
  sections: { text: string }[]
}> = ({ background, sections }) => {
  const [activeSection, setActiveSection] = useState(0)

  const controls = useAnimation()
  const { scrollYProgress } = useScroll();
  scrollYProgress.on("change", (y) => {
    if (y >= 0 && y < 0.25) {
      setActiveSection(0)
    }
    else if (y > 0.25 && y < 0.5) {
      setActiveSection(1)
    }
    else if (y > 0.5 && y < 0.75) {
      setActiveSection(2)
    }
    else if (y > 0.75 && y <= 1) {
      setActiveSection(3)
    }
  })

  return (
    <div className="w-full h-[10000px]">
      {sections.map(({ text }, index) => (
        <Transition
          show={activeSection === index}
          className="grid place-content-center h-[1000px]"
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            initial={{ opacity: 0, translateY: '-50px' }}
            whileInView={{ opacity: 1, translateY: '0px' }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <header
              className="fixed text-5xl font-bold tracking-widest font-Rubik"
              key={text}>
              {text}
            </header>
          </div>
        </Transition>
      ))}
    </div>
  );
};

export default StorySection;
