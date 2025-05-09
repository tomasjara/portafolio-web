import { useEffect, useState } from "react";

export const useActiveSection = (sectionIds, options = {}) => {
  const [visibleSection, setVisibleSection] = useState(null);

  useEffect(() => {
    const elements = sectionIds
      .map(id => document.getElementById(id))
      .filter(el => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          // console.log(visible[0].target.id)
          setVisibleSection(visible[0].target.id);
        }
      },
      {
        threshold: 0.6,
        rootMargin: '0px 0px -30%',
        ...options,
      }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds.join(",")]);

  return visibleSection;
}
