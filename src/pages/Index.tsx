import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, Star, MapPin, Users, Award, Trophy, Wifi, Monitor, Sparkles, X } from "lucide-react";
import guestsChoiceAward from "@/assets/guests-choice-award.png";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SearchWidget } from "@/components/SearchWidget";
import { ApartmentCard } from "@/components/ApartmentCard";
import { ReviewCard } from "@/components/ReviewCard";
import { StructuredData, generateOrganizationData, generateWebSiteData, generateLocalBusinessData } from "@/components/StructuredData";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-apartment.jpg";
import apartment1 from "@/assets/apartment-1.jpg";
import apartment2 from "@/assets/apartment-2.jpg";
import apartment3 from "@/assets/apartment-3.jpg";
import certificate202297 from "@/assets/certificate-2022-97.jpg";
import certificate202296 from "@/assets/certificate-2022-96.jpg";
import certificate202310 from "@/assets/certificate-2023-10.jpg";
import certificate202399a from "@/assets/certificate-2023-99a.jpg";
import certificate202399b from "@/assets/certificate-2023-99b.jpg";
import certificate202398_1 from "@/assets/certificate-2023-98-1.jpg";
import certificate202397_2 from "@/assets/certificate-2023-97-2.jpg";
import certificate202498_1 from "@/assets/certificate-2024-98-1.jpg";
import certificate202498_2 from "@/assets/certificate-2024-98-2.jpg";
import certificate202498_3 from "@/assets/certificate-2024-98-3.jpg";
import certificate202499 from "@/assets/certificate-2024-99.jpg";
import certificate202498_4 from "@/assets/certificate-2024-98-4.jpg";
import certificate202498_5 from "@/assets/certificate-2024-98-5.jpg";
import certificateSilver2024 from "@/assets/certificate-silver-2024.jpg";

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
      <StructuredData data={generateOrganizationData()} />
      <StructuredData data={generateWebSiteData()} />
      <StructuredData data={generateLocalBusinessData()} />
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

      {/* Ratings & Awards Section */}
      <section className="py-12 bg-gradient-to-r from-primary/5 to-luxury/5 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 animate-scale-in">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Наши достижения и рейтинги
              </h2>
              <p className="text-muted-foreground">
                Мы гордимся доверием наших гостей и высокими оценками на ведущих платформах
              </p>
            </div>

            {/* Awards and Certificates Carousel */}
            <div className="flex justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Carousel className="w-full max-w-5xl">
                <CarouselContent>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="bg-white rounded-xl p-4 text-center shadow-card hover:shadow-lg transition-all hover:scale-105 cursor-pointer hover-scale">
                          <img 
                            src={certificateSilver2024} 
                            alt="Серебряный партнёр Суточно.ру 2024" 
                            className="w-32 h-48 mx-auto rounded-lg object-cover"
                          />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl w-full">
                        <DialogTitle className="sr-only">Серебряный партнёр Суточно.ру 2024</DialogTitle>
                        <img 
                          src={certificateSilver2024} 
                          alt="Серебряный партнёр Суточно.ру 2024" 
                          className="w-full h-auto rounded-lg"
                        />
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>

                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="bg-white rounded-xl p-4 text-center shadow-card hover:shadow-lg transition-all hover:scale-105 cursor-pointer hover-scale">
                          <img 
                            src={guestsChoiceAward} 
                            alt="Guests' Choice Award 2024" 
                            className="w-32 h-48 mx-auto rounded-lg object-cover"
                          />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl w-full">
                        <img 
                          src={guestsChoiceAward} 
                          alt="Guests' Choice Award 2024" 
                          className="w-full h-auto rounded-lg"
                        />
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>

                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="bg-white rounded-xl p-4 text-center shadow-card hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                          <img 
                            src={certificate202310} 
                            alt="Сертификат Суточно.ру 2023 - 10/10" 
                             className="w-32 h-48 mx-auto rounded-lg object-cover rotate-180"
                          />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl w-full">
                        <img 
                          src={certificate202310} 
                          alt="Сертификат Суточно.ру 2023 - 10/10" 
                           className="w-full h-auto rounded-lg rotate-180"
                        />
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>

                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="bg-white rounded-xl p-4 text-center shadow-card hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                          <img 
                            src={certificate202399a} 
                            alt="Сертификат Суточно.ру 2023 - 9.9/10" 
                             className="w-32 h-48 mx-auto rounded-lg object-cover rotate-180"
                          />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl w-full">
                        <img 
                          src={certificate202399a} 
                          alt="Сертификат Суточно.ру 2023 - 9.9/10" 
                           className="w-full h-auto rounded-lg rotate-180"
                        />
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>

                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="bg-white rounded-xl p-4 text-center shadow-card hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                          <img 
                            src={certificate202399b} 
                            alt="Сертификат Суточно.ру 2023 - 9.9/10" 
                             className="w-32 h-48 mx-auto rounded-lg object-cover rotate-180"
                          />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl w-full">
                        <img 
                          src={certificate202399b} 
                          alt="Сертификат Суточно.ру 2023 - 9.9/10" 
                          className="w-full h-auto rounded-lg rotate-180"
                        />
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>

                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="bg-white rounded-xl p-4 text-center shadow-card hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                          <img 
                            src={certificate202297} 
                            alt="Сертификат Суточно.ру 2022 - 9.7/10" 
                            className="w-32 h-48 mx-auto rounded-lg object-cover"
                          />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl w-full">
                        <img 
                          src={certificate202297} 
                          alt="Сертификат Суточно.ру 2022 - 9.7/10" 
                          className="w-full h-auto rounded-lg"
                        />
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>

                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="bg-white rounded-xl p-4 text-center shadow-card hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                          <img 
                            src={certificate202296} 
                            alt="Сертификат Суточно.ру 2022 - 9.6/10" 
                            className="w-32 h-48 mx-auto rounded-lg object-cover"
                          />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogTitle className="sr-only">Сертификат Суточно.ру 2022</DialogTitle>
                        <img 
                          src={certificate202296} 
                          alt="Сертификат Суточно.ру 2022 - 9.6/10" 
                          className="w-full h-auto"
                        />
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>

                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="bg-white rounded-xl p-4 text-center shadow-card hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                          <img 
                            src={certificate202398_1} 
                            alt="Сертификат Суточно.ру 2023 - 9.8/10" 
                            className="w-32 h-48 mx-auto rounded-lg object-cover"
                          />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogTitle className="sr-only">Сертификат Суточно.ру 2023</DialogTitle>
                        <img 
                          src={certificate202398_1} 
                          alt="Сертификат Суточно.ру 2023 - 9.8/10" 
                          className="w-full h-auto"
                        />
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>

                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="bg-white rounded-xl p-4 text-center shadow-card hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                          <img 
                            src={certificate202499} 
                            alt="Сертификат Суточно.ру 2024 - 9.9/10" 
                             className="w-32 h-48 mx-auto rounded-lg object-cover rotate-180"
                          />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl w-full">
                        <DialogTitle className="sr-only">Сертификат Суточно.ру 2024</DialogTitle>
                        <img 
                          src={certificate202499} 
                          alt="Сертификат Суточно.ру 2024 - 9.9/10" 
                           className="w-full h-auto rounded-lg rotate-180"
                        />
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>

                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="bg-white rounded-xl p-4 text-center shadow-card hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                          <img 
                            src={certificate202498_4} 
                            alt="Сертификат Суточно.ру 2024 - 9.8/10" 
                             className="w-32 h-48 mx-auto rounded-lg object-cover rotate-180"
                          />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl w-full">
                        <DialogTitle className="sr-only">Сертификат Суточно.ру 2024</DialogTitle>
                        <img 
                          src={certificate202498_4} 
                          alt="Сертификат Суточно.ру 2024 - 9.8/10" 
                           className="w-full h-auto rounded-lg rotate-180"
                        />
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>

                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="bg-white rounded-xl p-4 text-center shadow-card hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                          <img 
                            src={certificate202498_5} 
                            alt="Сертификат Суточно.ру 2024 - 9.8/10" 
                             className="w-32 h-48 mx-auto rounded-lg object-cover rotate-180"
                          />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl w-full">
                        <DialogTitle className="sr-only">Сертификат Суточно.ру 2024</DialogTitle>
                        <img 
                          src={certificate202498_5} 
                          alt="Сертификат Суточно.ру 2024 - 9.8/10" 
                           className="w-full h-auto rounded-lg rotate-180"
                        />
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12 animate-scale-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t('benefits.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('benefits.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4 group animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 mx-auto bg-gradient-luxury rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-luxury-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{t('benefits.honestPhotos.title')}</h3>
              <p className="text-muted-foreground">
                {t('benefits.honestPhotos.description')}
              </p>
            </div>

            <div className="text-center space-y-4 group animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 mx-auto bg-gradient-luxury rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Clock className="h-8 w-8 text-luxury-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{t('benefits.support24.title')}</h3>
              <p className="text-muted-foreground">
                {t('benefits.support24.description')}
              </p>
            </div>

            <div className="text-center space-y-4 group animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 mx-auto bg-gradient-luxury rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin className="h-8 w-8 text-luxury-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{t('benefits.bestLocations.title')}</h3>
              <p className="text-muted-foreground">
                {t('benefits.bestLocations.description')}
              </p>
            </div>

            <div className="text-center space-y-4 group animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 mx-auto bg-gradient-luxury rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Wifi className="h-8 w-8 text-luxury-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{t('benefits.highSpeedInternet.title')}</h3>
              <p className="text-muted-foreground">
                {t('benefits.highSpeedInternet.description')}
              </p>
            </div>

            <div className="text-center space-y-4 group animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="w-16 h-16 mx-auto bg-gradient-luxury rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Monitor className="h-8 w-8 text-luxury-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{t('benefits.smartTv.title')}</h3>
              <p className="text-muted-foreground">
                {t('benefits.smartTv.description')}
              </p>
            </div>

            <div className="text-center space-y-4 group animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="w-16 h-16 mx-auto bg-gradient-luxury rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Sparkles className="h-8 w-8 text-luxury-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{t('benefits.perfectCleanliness.title')}</h3>
              <p className="text-muted-foreground">
                {t('benefits.perfectCleanliness.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Apartments */}
      <section className="py-16 bg-surface animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12 animate-scale-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t('apartments.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('apartments.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredApartments.map((apartment, index) => (
              <div key={apartment.id} className="animate-slide-up hover-scale" style={{ animationDelay: `${index * 0.2}s` }}>
                <ApartmentCard {...apartment} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Link to="/apartments">
              <Button variant="outline" size="lg" className="border-luxury text-luxury hover:bg-luxury hover:text-luxury-foreground hover-scale">
                {t('apartments.viewAll')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12 animate-scale-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t('reviews.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('reviews.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="animate-scale-in hover-scale" style={{ animationDelay: `${index * 0.2}s` }}>
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
