import { Link } from "react-router-dom";
import { Building2, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-surface border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/src/assets/logo-volshebno-tut.png" 
                alt="Волшебно тут - Апартаменты Москвы" 
                className="h-8"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('navigation.home')}
                </Link>
              </li>
              <li>
                <Link to="/apartments" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('navigation.apartments')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('navigation.about')}
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('navigation.contacts')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t('footer.contactInfo')}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-luxury" />
                <span className="text-muted-foreground">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-luxury" />
                <span className="text-muted-foreground">info@volshebno-tut.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-luxury" />
                <span className="text-muted-foreground">Поддержка 24/7</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t('footer.documents')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.terms')}
                </Link>
              </li>
              <li>
                <Link to="/owners" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('navigation.owners')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Волшебно тут. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}