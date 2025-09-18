import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, Star, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SearchWidget } from "@/components/SearchWidget";
import { ApartmentCard } from "@/components/ApartmentCard";
import { ReviewCard } from "@/components/ReviewCard";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/moscow-hero-placeholder.jpg";
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
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-glass backdrop-blur-sm border border-white/20 text-sm font-medium mb-6">
              <Star className="mr-2 h-4 w-4 text-accent-cyan" />
              {t('hero.badge', 'Премиум апартаменты в Москве')}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-accent-cyan to-white bg-clip-text text-transparent">
              {t('hero.title')}
              <span className="block text-4xl md:text-6xl mt-2 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-cyan bg-clip-text text-transparent">
                {t('hero.subtitle')}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
              <Link to="/apartments">
                <Button size="lg" className="bg-gradient-luxury text-white hover:shadow-neon hover:scale-105 transition-all duration-300 px-8 py-4 text-lg rounded-2xl">
                  {t('hero.findApartments')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg rounded-2xl"
              >
                <Users className="mr-2 h-5 w-5" />
                {t('hero.watchTour', 'Виртуальный тур')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Widget */}
      <section className="py-20 bg-gradient-to-br from-surface via-background to-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(217_91%_60%_/_0.1),transparent)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-glass backdrop-blur-sm border border-luxury/20 text-sm font-medium text-luxury">
                <MapPin className="mr-2 h-4 w-4" />
                {t('search.badge', 'Найдите идеальное место')}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-luxury to-accent-purple bg-clip-text text-transparent">
                {t('search.title')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('search.description')}
              </p>
            </div>
            
            <SearchWidget className="bg-gradient-card rounded-3xl p-10 shadow-floating border border-white/20 backdrop-blur-sm" />
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 via-transparent to-accent-cyan/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-glass backdrop-blur-sm border border-accent-purple/20 text-sm font-medium text-accent-purple">
              <Shield className="mr-2 h-4 w-4" />
              {t('benefits.badge', 'Наши преимущества')}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-accent-purple to-accent-cyan bg-clip-text text-transparent">
              {t('benefits.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('benefits.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-luxury rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <div className="relative text-center space-y-6 p-8 rounded-3xl bg-gradient-card border border-white/20 backdrop-blur-sm shadow-glass hover:shadow-luxury transition-all duration-300">
                <div className="w-20 h-20 mx-auto bg-gradient-luxury rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-neon transition-all duration-300">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{t('benefits.honestPhotos.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('benefits.honestPhotos.description')}
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-warm rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <div className="relative text-center space-y-6 p-8 rounded-3xl bg-gradient-card border border-white/20 backdrop-blur-sm shadow-glass hover:shadow-luxury transition-all duration-300">
                <div className="w-20 h-20 mx-auto bg-gradient-warm rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-neon transition-all duration-300">
                  <Clock className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{t('benefits.support24.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('benefits.support24.description')}
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-luxury rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <div className="relative text-center space-y-6 p-8 rounded-3xl bg-gradient-card border border-white/20 backdrop-blur-sm shadow-glass hover:shadow-luxury transition-all duration-300">
                <div className="w-20 h-20 mx-auto bg-gradient-luxury rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-neon transition-all duration-300">
                  <MapPin className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{t('benefits.bestLocations.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('benefits.bestLocations.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Apartments */}
      <section className="py-20 bg-gradient-to-br from-surface via-background to-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(262_83%_58%_/_0.1),transparent)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-glass backdrop-blur-sm border border-accent-cyan/20 text-sm font-medium text-accent-cyan">
              <Star className="mr-2 h-4 w-4" />
              {t('apartments.badge', 'Лучшие предложения')}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-accent-cyan to-accent-purple bg-clip-text text-transparent">
              {t('apartments.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('apartments.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {featuredApartments.map((apartment, index) => (
              <div key={apartment.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <ApartmentCard {...apartment} />
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/apartments">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-luxury/30 text-luxury hover:bg-gradient-luxury hover:text-white hover:border-transparent shadow-glass hover:shadow-luxury transition-all duration-300 px-8 py-4 text-lg rounded-2xl backdrop-blur-sm"
              >
                {t('apartments.viewAll')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 via-transparent to-accent-purple/5" />
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-luxury rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-warm rounded-full opacity-10 blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-glass backdrop-blur-sm border border-warm/20 text-sm font-medium text-warm">
              <Star className="mr-2 h-4 w-4" />
              {t('reviews.badge', 'Отзывы гостей')}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-warm to-accent-purple bg-clip-text text-transparent">
              {t('reviews.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('reviews.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
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
