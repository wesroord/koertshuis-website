"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Reset previous
    document.querySelectorAll(".sr-hidden, .sr-visible").forEach((el) => {
      el.classList.remove("sr-hidden", "sr-visible");
      (el as HTMLElement).style.transitionDelay = "";
    });

    const timer = setTimeout(() => {
      const sections = document.querySelectorAll("main section");
      const targets: Element[] = [];

      sections.forEach((section, sectionIdx) => {
        if (sectionIdx === 0) return;
        // Animate each direct child separately with stagger
        const children = Array.from(section.children);
        children.forEach((child, childIdx) => {
          (child as HTMLElement).style.transitionDelay = `${childIdx * 0.12}s`;
          child.classList.add("sr-hidden");
          targets.push(child);
        });
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("sr-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
      );

      targets.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
