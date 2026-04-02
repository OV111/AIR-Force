import { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react';
import './LogoLoop.css';

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2
};

const toCssLength = (value) =>
  typeof value === 'number' ? `${value}px` : (value ?? undefined);

const useResizeObserver = (callback, elements, dependencies) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      window.addEventListener('resize', callback);
      callback();
      return () => window.removeEventListener('resize', callback);
    }
    const observers = elements.map(ref => {
      if (!ref.current) return null;
      const observer = new ResizeObserver(callback);
      observer.observe(ref.current);
      return observer;
    });
    callback();
    return () => observers.forEach(o => o?.disconnect());
  }, dependencies); // eslint-disable-line react-hooks/exhaustive-deps
};

const useImageLoader = (seqRef, onLoad, dependencies) => {
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll('img') ?? [];
    if (images.length === 0) { onLoad(); return; }
    let remaining = images.length;
    const handleLoad = () => { if (--remaining === 0) onLoad(); };
    images.forEach(img => {
      if (img.complete) { handleLoad(); }
      else {
        img.addEventListener('load', handleLoad, { once: true });
        img.addEventListener('error', handleLoad, { once: true });
      }
    });
    return () => images.forEach(img => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleLoad);
    });
  }, dependencies); // eslint-disable-line react-hooks/exhaustive-deps
};

const useAnimationLoop = (trackRef, targetVelocity, seqWidth, seqHeight, isHovered, hoverSpeed, isVertical) => {
  const rafRef = useRef(null);
  const lastTimestampRef = useRef(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const seqSize = isVertical ? seqHeight : seqWidth;
    if (seqSize > 0) {
      offsetRef.current = ((offsetRef.current % seqSize) + seqSize) % seqSize;
      track.style.transform = isVertical
        ? `translate3d(0, ${-offsetRef.current}px, 0)`
        : `translate3d(${-offsetRef.current}px, 0, 0)`;
    }
    const animate = (timestamp) => {
      if (lastTimestampRef.current === null) lastTimestampRef.current = timestamp;
      const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;
      const target = isHovered && hoverSpeed !== undefined ? hoverSpeed : targetVelocity;
      const easing = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
      velocityRef.current += (target - velocityRef.current) * easing;
      if (seqSize > 0) {
        let next = ((offsetRef.current + velocityRef.current * deltaTime) % seqSize + seqSize) % seqSize;
        offsetRef.current = next;
        track.style.transform = isVertical
          ? `translate3d(0, ${-next}px, 0)`
          : `translate3d(${-next}px, 0, 0)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTimestampRef.current = null;
    };
  }, [targetVelocity, seqWidth, seqHeight, isHovered, hoverSpeed, isVertical]);
};

const LogoLoop = memo(({
  logos,
  speed = 120,
  direction = 'left',
  width = '100%',
  logoHeight = 28,
  gap = 32,
  pauseOnHover,
  hoverSpeed,
  fadeOut = false,
  fadeOutColor,
  scaleOnHover = false,
  renderItem,
  ariaLabel = 'Partner logos',
  className,
  style
}) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const seqRef = useRef(null);

  const [seqWidth, setSeqWidth] = useState(0);
  const [seqHeight, setSeqHeight] = useState(0);
  const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES);
  const [isHovered, setIsHovered] = useState(false);

  const isVertical = direction === 'up' || direction === 'down';

  const effectiveHoverSpeed = useMemo(() => {
    if (hoverSpeed !== undefined) return hoverSpeed;
    if (pauseOnHover === true) return 0;
    if (pauseOnHover === false) return undefined;
    return 0;
  }, [hoverSpeed, pauseOnHover]);

  const targetVelocity = useMemo(() => {
    const mag = Math.abs(speed);
    const dir = isVertical ? (direction === 'up' ? 1 : -1) : (direction === 'left' ? 1 : -1);
    return mag * dir * (speed < 0 ? -1 : 1);
  }, [speed, direction, isVertical]);

  const updateDimensions = useCallback(() => {
    const containerWidth = containerRef.current?.clientWidth ?? 0;
    const rect = seqRef.current?.getBoundingClientRect?.();
    const sw = rect?.width ?? 0;
    const sh = rect?.height ?? 0;
    if (isVertical) {
      const parentHeight = containerRef.current?.parentElement?.clientHeight ?? 0;
      if (containerRef.current && parentHeight > 0) {
        containerRef.current.style.height = `${Math.ceil(parentHeight)}px`;
      }
      if (sh > 0) {
        setSeqHeight(Math.ceil(sh));
        const viewport = containerRef.current?.clientHeight ?? parentHeight ?? sh;
        setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, Math.ceil(viewport / sh) + ANIMATION_CONFIG.COPY_HEADROOM));
      }
    } else if (sw > 0) {
      setSeqWidth(Math.ceil(sw));
      setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, Math.ceil(containerWidth / sw) + ANIMATION_CONFIG.COPY_HEADROOM));
    }
  }, [isVertical]);

  useResizeObserver(updateDimensions, [containerRef, seqRef], [logos, gap, logoHeight, isVertical]);
  useImageLoader(seqRef, updateDimensions, [logos, gap, logoHeight, isVertical]);
  useAnimationLoop(trackRef, targetVelocity, seqWidth, seqHeight, isHovered, effectiveHoverSpeed, isVertical);

  const cssVariables = useMemo(() => ({
    '--logoloop-gap': `${gap}px`,
    '--logoloop-logoHeight': `${logoHeight}px`,
    ...(fadeOutColor && { '--logoloop-fadeColor': fadeOutColor })
  }), [gap, logoHeight, fadeOutColor]);

  const rootClassName = useMemo(() =>
    ['logoloop', isVertical ? 'logoloop--vertical' : 'logoloop--horizontal',
      fadeOut && 'logoloop--fade', scaleOnHover && 'logoloop--scale-hover', className]
      .filter(Boolean).join(' '),
    [isVertical, fadeOut, scaleOnHover, className]);

  const handleMouseEnter = useCallback(() => {
    if (effectiveHoverSpeed !== undefined) setIsHovered(true);
  }, [effectiveHoverSpeed]);

  const handleMouseLeave = useCallback(() => {
    if (effectiveHoverSpeed !== undefined) setIsHovered(false);
  }, [effectiveHoverSpeed]);

  const renderLogoItem = useCallback((item, key) => {
    if (renderItem) return (
      <li className="logoloop__item" key={key} role="listitem">{renderItem(item, key)}</li>
    );
    const isNode = 'node' in item;
    const content = isNode
      ? <span className="logoloop__node" aria-hidden={!!item.href && !item.ariaLabel}>{item.node}</span>
      : <img src={item.src} srcSet={item.srcSet} sizes={item.sizes} width={item.width}
             height={item.height} alt={item.alt ?? ''} title={item.title}
             loading="lazy" decoding="async" draggable={false} />;
    const label = isNode ? (item.ariaLabel ?? item.title) : (item.alt ?? item.title);
    const inner = item.href
      ? <a className="logoloop__link" href={item.href} aria-label={label || 'logo link'}
           target="_blank" rel="noreferrer noopener">{content}</a>
      : content;
    return <li className="logoloop__item" key={key} role="listitem">{inner}</li>;
  }, [renderItem]);

  const logoLists = useMemo(() =>
    Array.from({ length: copyCount }, (_, i) => (
      <ul className="logoloop__list" key={`copy-${i}`} role="list"
          aria-hidden={i > 0} ref={i === 0 ? seqRef : undefined}>
        {logos.map((item, j) => renderLogoItem(item, `${i}-${j}`))}
      </ul>
    )), [copyCount, logos, renderLogoItem]);

  const containerStyle = useMemo(() => ({
    width: isVertical
      ? toCssLength(width) === '100%' ? undefined : toCssLength(width)
      : (toCssLength(width) ?? '100%'),
    ...cssVariables,
    ...style
  }), [width, cssVariables, style, isVertical]);

  return (
    <div ref={containerRef} className={rootClassName} style={containerStyle}
         role="region" aria-label={ariaLabel}>
      <div className="logoloop__track" ref={trackRef}
           onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {logoLists}
      </div>
    </div>
  );
});

LogoLoop.displayName = 'LogoLoop';
export default LogoLoop;
