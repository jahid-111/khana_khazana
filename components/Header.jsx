"use client";

import NavSection from "@/components/NavSection";
import HeroSection from "@/components/HeroSection";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const visibleRoutes = ["/"];
  const isHeroSectionVisible = visibleRoutes.includes(pathname);

  return (
    <header>
      <NavSection />
      {isHeroSectionVisible && <HeroSection />}
    </header>
  );
};

export default Header;
