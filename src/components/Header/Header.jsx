import { useEffect, useRef, useState } from "react";
import Container from "../Container/Container";
import { navigation } from "../../data/navigation";
import "./Header.scss";

const resumeUrl = "/documents/Sanchit_Kumar_ATS_Resume_Updated.pdf";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window === "undefined"
      ? false
      : window.matchMedia("(min-width: 64rem)").matches,
  );
  const menuButtonRef = useRef(null);
  const navigationRef = useRef(null);
  const firstLinkRef = useRef(null);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 16);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 64rem)");
    const updateNavigationMode = (event) => {
      setIsDesktop(event.matches);
      if (event.matches) {
        setIsMenuOpen(false);
      }
    };

    desktopQuery.addEventListener("change", updateNavigationMode);

    return () =>
      desktopQuery.removeEventListener("change", updateNavigationMode);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const previousRootOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const handleMenuKeydown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = [
        menuButtonRef.current,
        ...(navigationRef.current?.querySelectorAll("a[href]") ?? []),
      ].filter(Boolean);
      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleMenuKeydown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousRootOverflow;
      document.removeEventListener("keydown", handleMenuKeydown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const isNavigationVisible = isDesktop || isMenuOpen;
  const headerClasses = ["header", isScrolled && "header--scrolled"]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClasses}>
      <Container className="header__container">
        <a
          className="header__brand"
          href="#home"
          aria-label="Sanchit Kumar, home"
          onClick={closeMenu}
        >
          <span aria-hidden="true">SK</span>
          <span>Sanchit Kumar</span>
        </a>

        <button
          ref={menuButtonRef}
          className="header__menu-button"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>

        <div
          ref={navigationRef}
          className={`header__navigation-wrap ${
            isMenuOpen ? "header__navigation-wrap--open" : ""
          }`}
          aria-hidden={!isNavigationVisible}
          inert={isNavigationVisible ? undefined : ""}
        >
          <nav
            id="primary-navigation"
            className="header__navigation"
            aria-label="Primary navigation"
          >
            <ul className="header__links">
              {navigation.map(({ label, href }, index) => (
                <li key={href}>
                  <a
                    ref={index === 0 ? firstLinkRef : undefined}
                    className="header__link"
                    href={href}
                    onClick={closeMenu}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              className="header__resume"
              href={resumeUrl}
              aria-label="Download Sanchit Kumar resume PDF"
              download
              onClick={closeMenu}
            >
              Download Resume
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;
