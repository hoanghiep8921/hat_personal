'use client';

import * as React from 'react';
import {
  type HTMLMotionProps,
  motion,
  useMotionValue,
  useSpring,
  type SpringOptions,
  type Transition,
} from 'framer-motion';

type StarLayerProps = HTMLMotionProps<'div'> & {
  count: number;
  size: number;
  transition: Transition;
  starColor: string;
  withGlow?: boolean;
};

function generateStars(count: number, starColor: string, withGlow: boolean = false) {
  const shadows: string[] = [];
  const width = 6000; // Increased width coverage
  const height = 10000;
  
  for (let i = 0; i < count; i++) {
    // Ensure more even distribution by using the full width
    const x = Math.floor(Math.random() * width) - width/2;
    const y = Math.floor(Math.random() * height) - height/2;
    
    if (withGlow && Math.random() < 0.5) { // 50% chance for a glowing star
      const glowSize = Math.floor(Math.random() * 4) + 3; // Random glow size between 3-6px
      const glowIntensity = Math.random() * 0.5 + 0.5; // Random intensity between 0.5-1
      const color = starColor.replace(')', `, ${glowIntensity})`);
      // Add multiple layers of glow for a more intense effect
      shadows.push(
        `${x}px ${y}px ${glowSize}px ${color}`,
        `${x}px ${y}px ${Math.floor(glowSize/2)}px ${starColor}`
      );
    } else {
      shadows.push(`${x}px ${y}px ${starColor}`);
    }
  }
  return shadows.join(', ');
}

function StarLayer({
  count = 2000,
  size = 1,
  transition = { repeat: Infinity, duration: 50, ease: 'linear' },
  starColor = '#fff',
  withGlow = false,
  className,
  ...props
}: StarLayerProps) {
  const [boxShadow, setBoxShadow] = React.useState<string>('');

  React.useEffect(() => {
    setBoxShadow(generateStars(count, starColor, withGlow));
  }, [count, starColor, withGlow]);

  return (
    <motion.div
      data-slot="star-layer"
      animate={{ y: [0, -2000] }}
      transition={transition}
      className={`absolute top-0 left-0 w-full h-[2000px] ${className || ''}`}
      {...props}
    >
      <div
        className="absolute bg-transparent rounded-full"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: boxShadow,
        }}
      />
      <div
        className="absolute bg-transparent rounded-full top-[2000px]"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: boxShadow,
        }}
      />
    </motion.div>
  );
}

type StarsBackgroundProps = React.ComponentProps<'div'> & {
  factor?: number;
  speed?: number;
  transition?: SpringOptions;
  starColor?: string;
  pointerEvents?: boolean;
};

function StarsBackground({
  children,
  className,
  factor = 0.05,
  speed = 50,
  transition = { stiffness: 50, damping: 20 },
  starColor = '#fff',
  pointerEvents = true,
  ...props
}: StarsBackgroundProps) {
  const offsetX = useMotionValue(1);
  const offsetY = useMotionValue(1);

  const springX = useSpring(offsetX, transition);
  const springY = useSpring(offsetY, transition);

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const newOffsetX = -(e.clientX - centerX) * factor;
      const newOffsetY = -(e.clientY - centerY) * factor;
      offsetX.set(newOffsetX);
      offsetY.set(newOffsetY);
    },
    [offsetX, offsetY, factor],
  );

  return (
    <div
      data-slot="stars-background"
      className={`relative size-full overflow-hidden bg-[radial-gradient(ellipse_at_bottom,_#262626_0%,_#000_100%)] ${className || ''}`}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <motion.div
        style={{ x: springX, y: springY }}
        className={!pointerEvents ? 'pointer-events-none' : ''}
      >
        <StarLayer
          count={2000}
          size={1}
          transition={{ repeat: Infinity, duration: speed, ease: 'linear' }}
          starColor={starColor}
        />
        <StarLayer
          count={800}
          size={2}
          transition={{
            repeat: Infinity,
            duration: speed * 1.5,
            ease: 'linear',
          }}
          starColor={starColor}
        />
        <StarLayer
          count={400}
          size={3}
          transition={{
            repeat: Infinity,
            duration: speed * 2,
            ease: 'linear',
          }}
          starColor={starColor}
        />
        {/* Glowing stars layer */}
        <StarLayer
          count={300}
          size={2}
          transition={{
            repeat: Infinity,
            duration: speed * 1.8,
            ease: 'linear',
          }}
          starColor="rgba(255, 255, 255, 0.9)"
          withGlow={true}
        />
        {/* Extra bright glowing stars layer */}
        <StarLayer
          count={100}
          size={3}
          transition={{
            repeat: Infinity,
            duration: speed * 2.2,
            ease: 'linear',
          }}
          starColor="rgba(255, 255, 255, 1)"
          withGlow={true}
        />
      </motion.div>
      {children}
    </div>
  );
}

export {
  StarLayer,
  StarsBackground,
  type StarLayerProps,
  type StarsBackgroundProps,
};