import { animated, useSpring } from 'react-spring';
import React, { useEffect, useState } from 'react';
import { useAgile } from '@agile-ts/react';
import core from '../../../../../../core';
import styles from './styles.module.css';
import clsx from 'clsx';
import AstronautDark from './astronauts/AstronautDark';
import AstronautLight from './astronauts/AstronautLight';

type Props = { className?: string };

const Astronaut: React.FC<Props> = (props) => {
  const { className } = props;
  const [timing] = useState(200);
  const [isRaised, setIsRaised] = useState(false);
  const [isOnAstronaut, setIsOnAstronaut] = useState(false);
  const animated_Astronaut = useSpring({
    transform: isRaised ? `translateY(-${30}px)` : `translateY(0px)`,
    config: {
      mass: 1,
      tension: 400,
      friction: 15,
    },
  });
  const dark = useAgile(core.ui.ASTRONAUT_DARK);

  useEffect(() => {
    if (!isRaised) return;

    const timeoutId = setTimeout(() => {
      core.ui.toggleAstronautColor(!dark);
      setIsRaised(false);
    }, timing);

    return () => clearTimeout(timeoutId);
  }, [isRaised, timing]);

  const onMouseEnter = () => {
    if (!isOnAstronaut) {
      setIsOnAstronaut(true);
      setIsRaised(true);
    }
  };

  const onMouseLeave = () => {
    // to prevent endless bouncer
    setTimeout(() => {
      setIsOnAstronaut(false);
    }, 1100);
  };

  return (
    <div className={clsx(styles.Container, className)}>
      <animated.div
        style={animated_Astronaut}
        className={styles.ImageContainer}>
        {dark ? (
          <AstronautDark
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        ) : (
          <AstronautLight
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        )}
      </animated.div>
      <div className={styles.Text}>Poke me 👆 to mutate my color State.</div>
    </div>
  );
};

export default Astronaut;
