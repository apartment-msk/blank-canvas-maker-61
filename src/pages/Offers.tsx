import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Gift, Calendar, Percent, Star, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Offers = () => {
  const offers = [
    {
      icon: Gift,
      title: "Скидка для новых гостей",
      discount: "5%",
      code: "Online5",
      description: "Скидка 5% при первом бронировании по промокоду",
      color: "bg-gradient-to-r from-green-500 to-emerald-600",
      isPromo: true
    },
    {
      icon: Calendar,
      title: "Длительное проживание 14+ суток",
      discount: "10%",
      description: "Автоматическая скидка при бронировании от 14 суток",
      color: "bg-gradient-to-r from-blue-500 to-blue-600",
      isPromo: false
    },
    {
      icon: Clock,
      title: "Недельное проживание 7+ суток",
      discount: "5%",
      description: "Автоматическая скидка при бронировании от 7 суток",
      color: "bg-gradient-to-r from-purple-500 to-purple-600",
      isPromo: false
    },
    {
      icon: Heart,
      title: "Короткий отдых 2+ суток",
      discount: "3%",
      description: "Автоматическая скидка при бронировании от 2 суток",
      color: "bg-gradient-to-r from-pink-500 to-rose-600",
      isPromo: false
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: "Гарантия лучшей цены",
      description: "Если найдете аналогичное предложение дешевле, мы сделаем скидку"
    },
    {
      icon: Gift,
      title: "Подарки для гостей",
      description: "Комплименты от HomeStay при заселении"
    },
    {
      icon: Percent,
      title: "Накопительная программа",
      description: "Дополнительные скидки для постоянных гостей"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Спецпредложения
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выгодные предложения для комфортного отдыха. Экономьте больше при длительном проживании.
            </p>
          </div>
        </div>
      </section>

      {/* Main Offers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Актуальные предложения
              </h2>
              <p className="text-lg text-muted-foreground">
                Специальные условия для наших гостей
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {offers.map((offer, index) => (
                <Card key={index} className="border-0 shadow-card hover:shadow-floating transition-all duration-300 overflow-hidden">
                  <div className={`h-2 ${offer.color}`}></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-luxury rounded-xl flex items-center justify-center">
                          <offer.icon className="h-6 w-6 text-luxury-foreground" />
                        </div>
                        <CardTitle className="text-xl">{offer.title}</CardTitle>
                      </div>
                      <Badge variant="secondary" className="text-2xl font-bold px-4 py-2">
                        -{offer.discount}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {offer.description}
                    </p>
                    {offer.isPromo && (
                      <div className="bg-surface p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-2">Промокод:</p>
                        <div className="flex items-center space-x-2">
                          <code className="bg-gradient-luxury text-luxury-foreground px-3 py-1 rounded font-mono font-bold">
                            {offer.code}
                          </code>
                          <span className="text-sm text-muted-foreground">
                            Введите при бронировании
                          </span>
                        </div>
                      </div>
                    )}
                    {!offer.isPromo && (
                      <div className="bg-surface p-4 rounded-lg">
                        <p className="text-sm font-medium text-green-600">
                          ✓ Применяется автоматически
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Дополнительные преимущества
              </h2>
              <p className="text-lg text-muted-foreground">
                Еще больше выгод для наших гостей
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center border-0 shadow-card">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-luxury rounded-2xl flex items-center justify-center">
                      <benefit.icon className="h-8 w-8 text-luxury-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Как воспользоваться предложениями
              </h2>
              <p className="text-lg text-muted-foreground">
                Простые шаги для получения скидки
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-luxury rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-luxury-foreground">1</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Выберите апартаменты
                </h3>
                <p className="text-muted-foreground">
                  Найдите подходящие апартаменты и даты проживания
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-luxury rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-luxury-foreground">2</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Укажите промокод
                </h3>
                <p className="text-muted-foreground">
                  Введите код "Online5" при первом бронировании или получите автоматическую скидку
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-luxury rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-luxury-foreground">3</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Наслаждайтесь отдыхом
                </h3>
                <p className="text-muted-foreground">
                  Экономьте средства и получайте максимум удовольствия от проживания
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Готовы забронировать?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Не упустите возможность сэкономить на комфортном проживании
            </p>
            
            <Link to="/apartments">
              <Button size="lg" className="bg-gradient-luxury text-luxury-foreground hover:shadow-luxury hover:scale-105">
                Посмотреть апартаменты
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Offers;