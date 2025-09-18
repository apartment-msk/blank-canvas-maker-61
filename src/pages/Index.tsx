import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, Star, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SearchWidget } from "@/components/SearchWidget";
import { ApartmentCard } from "@/components/ApartmentCard";
import { ReviewCard } from "@/components/ReviewCard";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-apartment.jpg";
import apartment1 from "@/assets/apartment-1.jpg";
import apartment2 from "@/assets/apartment-2.jpg";
import apartment3 from "@/assets/apartment-3.jpg";

const Index = () => {
  const { t } = useTranslation();
  const featuredApartments = [
    {
      id: "1",
      title: "Роскошные апартаменты в центре",
      image: apartment1,
      price: 8500,
      location: "Тверская, 15",
      guests: 4,
      rating: 4.9,
      amenities: ["WiFi", "Парковка", "Кофе"],
      description: "Элегантные апартаменты с панорамным видом на город в самом сердце Москвы."
    },
    {
      id: "2", 
      title: "Современная студия с кухней",
      image: apartment2,
      price: 5500,
      location: "Арбат, 8",
      guests: 2,
      rating: 4.8,
      amenities: ["WiFi", "Кофе"],
      description: "Уютная студия с полностью оборудованной кухней и стильным интерьером."
    },
    {
      id: "3",
      title: "Просторная квартира для семьи",
      image: apartment3,
      price: 12000,
      location: "Патриаршие пруды, 3",
      guests: 6,
      rating: 5.0,
      amenities: ["WiFi", "Парковка", "Кофе"],
      description: "Просторная трехкомнатная квартира идеально подходит для семейного отдыха."
    }
  ];

  const reviews = [
    {
      name: "Анна Петрова",
      rating: 5,
      comment: "Потрясающие апартаменты! Все было именно как на фотографиях. Чистота, комфорт и отличное расположение. Обязательно вернемся!",
      date: "2 недели назад"
    },
    {
      name: "Михаил С.",
      rating: 5,
      comment: "Отличный сервис и внимание к деталям. Поддержка 24/7 действительно работает - помогли решить небольшой вопрос в течение 10 минут.",
      date: "1 месяц назад"
    },
    {
      name: "Elena K.",
      rating: 4,
      comment: "Wonderful experience! The apartment was clean, modern and in a great location. Host was very responsive and helpful.",
      date: "3 недели назад"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Booking */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="text-white mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                {t('hero.title')}
                <span className="block text-luxury">{t('hero.subtitle')}</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                {t('hero.description')}
              </p>
            </div>
            
            {/* Integrated Search Widget */}
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <SearchWidget className="bg-transparent rounded-2xl p-8 max-w-4xl mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t('benefits.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('benefits.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 mx-auto bg-gradient-luxury rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-luxury-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{t('benefits.honestPhotos.title')}</h3>
              <p className="text-muted-foreground">
                {t('benefits.honestPhotos.description')}
              </p>
            </div>

            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 mx-auto bg-gradient-luxury rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Clock className="h-8 w-8 text-luxury-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{t('benefits.support24.title')}</h3>
              <p className="text-muted-foreground">
                {t('benefits.support24.description')}
              </p>
            </div>

            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 mx-auto bg-gradient-luxury rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin className="h-8 w-8 text-luxury-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{t('benefits.bestLocations.title')}</h3>
              <p className="text-muted-foreground">
                {t('benefits.bestLocations.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Apartments */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t('apartments.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('apartments.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredApartments.map((apartment, index) => (
              <div key={apartment.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <ApartmentCard {...apartment} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/apartments">
              <Button variant="outline" size="lg" className="border-luxury text-luxury hover:bg-luxury hover:text-luxury-foreground">
                {t('apartments.viewAll')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t('reviews.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('reviews.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <ReviewCard {...review} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
