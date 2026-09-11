"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    document.querySelectorAll(".sr-hidden").forEach((el) => {
      el.classList.remove("sr-hidden", "sr-visible");
    });

    const timer = setTimeout(() => {
      const sections = document.querySelectorAll("main section");
      sections.forEach((section, i) => {
        if (i === 0) return;
        section.classList.add("sr-hidden");
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
        { threshold: 0.06, rootMargin: "0px 0px -40px 0px" }
      );

      document.querySelectorAll(".sr-hidden").forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
