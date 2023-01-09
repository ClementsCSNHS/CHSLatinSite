import React from 'react';
import styles from './InfiniteScroll.module.scss';

export default function InfiniteScroll({ surroundingBackup = 4, outerStyle, innerStyle, children}) {
  const contentRef = React.useRef(null);
  const scrollRef = React.useRef(null);
  const [height, setHeight] = React.useState(0);

  const backupHeight = height * surroundingBackup;

  const handleScroll = React.useCallback(() => {
      if (scrollRef.current) {
          const scroll = scrollRef.current.scrollTop;
          if (scroll < backupHeight || scroll >= backupHeight + height) {
              scrollRef.current.scrollTop = backupHeight + (scroll % height);
          }
      }
  }, [height]);

  React.useLayoutEffect(() => {
      if (contentRef.current) {
          setHeight(contentRef.current.offsetHeight);
          scrollRef.current.scrollTop = backupHeight;
      }
  });

  return (
      <div className={styles.infiniteScrollLoop_outer} style={outerStyle}>
          <div
              className={styles.infiniteScrollLoop_inner}
              ref={scrollRef}
              style={{
                  height,
                  ...innerStyle
              }}
              onScroll={handleScroll}
          >
              {Array(surroundingBackup)
                  .fill()
                  .map(() => (
                      <div>{children}</div>
                  ))}
              <div ref={contentRef}>{children}</div>
              {Array(surroundingBackup)
                  .fill()
                  .map(() => (
                      <div>{children}</div>
                  ))}
          </div>
      </div>
  );
}