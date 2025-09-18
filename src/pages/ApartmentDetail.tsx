import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Users, Star, Wifi, Car, Coffee, Phone, MessageCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ReviewCard } from "@/components/ReviewCard";
import { SearchWidget } from "@/components/SearchWidget";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import apartment1 from "@/assets/apartment-1.jpg";
import apartment2 from "@/assets/apartment-2.jpg";
import apartment3 from "@/assets/apartment-3.jpg";

const ApartmentDetail = () => {
  const { id } = useParams();

  // Mock data - в реальном приложении данные загружались бы по ID
  const apartment = {
    id: "1",
    title: "Роскошные апартаменты в центре",
    images: [apartment1, apartment2, apartment3],
    price: 8500,
    location: "Тверская, 15, Москва",
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    area: 85,
    rating: 4.9,
    reviewCount: 127,
    amenities: [
      { name: "WiFi", icon: Wifi },
      { name: "Парковка", icon: Car },
      { name: "Кофе-машина", icon: Coffee },
    ],
    description: "Элегантные апартаменты с панорамным видом на город в самом сердце Москвы. Полностью оборудованная кухня, просторная гостиная, две спальни с удобными кроватями. Идеально подходит для деловых поездок и отдыха.",
    fullAmenities: [
      "Бесплатный WiFi",
      "Кондиционер",
      "Отопление",
      "Кухня",
      "Холодильник",
      "Микроволновая печь",
      "Стиральная машина",
      "Телевизор",
      "Парковочное место",
      "Балкон",
      "Лифт",
      "Круглосуточная охрана"
    ],
    rules: [
      "Заезд: 15:00 - 22:00",
      "Выезд: до 12:00",
      "Курение запрещено",
      "Размещение с животными не допускается",
      "Максимальное количество гостей: 4",
      "Тихие часы: 22:00 - 08:00",
      "Вечеринки и мероприятия запрещены"
    ]
  };

  const reviews = [
    {
      name: "Анна Петрова",
      rating: 5,
      comment: "Потрясающие апартаменты! Все было именно как на фотографиях. Чистота, комфорт и отличное расположение. Хозяин очень отзывчивый.",
      date: "2 недели назад"
    },
    {
      name: "Михаил Сергеев",
      rating: 5,
      comment: "Отличный сервис и внимание к деталям. Квартира в прекрасном состоянии, все удобства на высшем уровне. Рекомендую!",
      date: "1 месяц назад"
    },
    {
      name: "Elena Komarova",
      rating: 4,
      comment: "Wonderful location and beautiful apartment. Everything was clean and well-maintained. The host was very helpful with recommendations.",
      date: "3 недели назад"
    }
  ];

  if (!apartment) {
    return <div>Апартамент не найден</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <section className="py-6 border-b">
        <div className="container mx-auto px-4">
          <Link 
            to="/apartments" 
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Назад к каталогу
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images and Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <img 
                    src={apartment.images[0]} 
                    alt={apartment.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {apartment.images.slice(1).map((image, index) => (
                    <div key={index} className="aspect-video rounded-xl overflow-hidden">
                      <img 
                        src={image} 
                        alt={`${apartment.title} ${index + 2}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Apartment Info */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h1 className="text-3xl font-bold text-foreground">{apartment.title}</h1>
                    <Badge variant="secondary" className="bg-warm">
                      <Star className="h-4 w-4 mr-1 fill-luxury text-luxury" />
                      {apartment.rating} ({apartment.reviewCount} отзывов)
                    </Badge>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground mb-6">
                    <MapPin className="h-5 w-5 mr-2" />
                    {apartment.location}
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-4 bg-surface rounded-lg">
                      <Users className="h-6 w-6 mx-auto mb-2 text-luxury" />
                      <div className="font-semibold">{apartment.guests}</div>
                      <div className="text-sm text-muted-foreground">Гостей</div>
                    </div>
                    <div className="text-center p-4 bg-surface rounded-lg">
                      <div className="font-semibold">{apartment.bedrooms}</div>
                      <div className="text-sm text-muted-foreground">Спальни</div>
                    </div>
                    <div className="text-center p-4 bg-surface rounded-lg">
                      <div className="font-semibold">{apartment.bathrooms}</div>
                      <div className="text-sm text-muted-foreground">Ванные</div>
                    </div>
                    <div className="text-center p-4 bg-surface rounded-lg">
                      <div className="font-semibold">{apartment.area}м²</div>
                      <div className="text-sm text-muted-foreground">Площадь</div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Description */}
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Описание</h2>
                  <p className="text-muted-foreground leading-relaxed">{apartment.description}</p>
                </div>

                <Separator />

                {/* Amenities */}
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Удобства</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {apartment.fullAmenities.map((amenity, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-surface rounded-lg">
                        <div className="w-2 h-2 bg-luxury rounded-full flex-shrink-0" />
                        <span className="text-sm text-foreground">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Rules */}
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Правила проживания</h2>
                  <div className="space-y-2">
                    {apartment.rules.map((rule, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-muted rounded-full flex-shrink-0 mt-2" />
                        <span className="text-muted-foreground">{rule}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Widget */}
            <div className="space-y-6">
              <Card className="sticky top-24 shadow-floating">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-foreground">
                        {apartment.price.toLocaleString()}₽
                      </div>
                      <div className="text-muted-foreground">за ночь</div>
                    </div>

                    <SearchWidget className="border rounded-xl p-4" />

                    <div className="space-y-3">
                      <Button className="w-full bg-gradient-luxury text-luxury-foreground hover:shadow-luxury">
                        <Phone className="h-4 w-4 mr-2" />
                        Позвонить
                      </Button>
                      <Button variant="outline" className="w-full border-luxury text-luxury hover:bg-luxury hover:text-luxury-foreground">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Написать
                      </Button>
                    </div>

                    <div className="text-center text-sm text-muted-foreground">
                      Поддержка 24/7 • Быстрый ответ
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Отзывы гостей</h2>
              <div className="flex items-center justify-center space-x-2">
                <Star className="h-5 w-5 fill-luxury text-luxury" />
                <span className="text-xl font-semibold">{apartment.rating}</span>
                <span className="text-muted-foreground">• {apartment.reviewCount} отзывов</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <ReviewCard key={index} {...review} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApartmentDetail;