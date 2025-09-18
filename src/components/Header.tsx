import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, Building2, Info, Phone, Users, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navigation = [
    { name: t('navigation.home'), href: "/", icon: Home },
    { name: t('navigation.apartments'), href: "/apartments", icon: Building2 },
    { name: t('navigation.about'), href: "/about", icon: Info },
    { name: t('navigation.contacts'), href: "/contacts", icon: Phone },
    { name: t('navigation.owners'), href: "/owners", icon: Users },
    { name: t('navigation.offers'), href: "/offers", icon: Gift },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-luxury">
              <Building2 className="h-5 w-5 text-luxury-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">HomeStay</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-warm text-warm-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-surface"
                  )}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t animate-slide-up">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                      isActive
                        ? "bg-warm text-warm-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-surface"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="mr-3 h-4 w-4" />
                    {item.name}
                  </Link>
                );
              })}
              <div className="px-4 py-2">
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}