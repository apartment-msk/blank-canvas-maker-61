import { useState } from "react";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ApartmentCard } from "@/components/ApartmentCard";
import { SearchWidget } from "@/components/SearchWidget";
import { ApartmentListWidget } from "@/components/ApartmentListWidget";
import { StructuredData, generateApartmentListData, generateBreadcrumbData } from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import apartment1 from "@/assets/apartment-1.jpg";
import apartment2 from "@/assets/apartment-2.jpg";
import apartment3 from "@/assets/apartment-3.jpg";

const Apartments = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("price-low");
  const [priceRange, setPriceRange] = useState("all");

  const apartments = [
    {
      id: "1",
      title: "Роскошные апартаменты в центре",
      image: apartment1,
      price: 8500,
      location: "Тверская, 15",
      guests: 4,
      rating: 4.9,
      amenities: ["WiFi", "Парковка", "Кофе"],
      description: "Элегантные апартаменты с панорамным видом на город в самом сердце Москвы. Полностью оборудованная кухня, просторная гостиная."
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
      description: "Уютная студия с полностью оборудованной кухней и стильным интерьером. Идеально для романтического отдыха."
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
      description: "Просторная трехкомнатная квартира идеально подходит для семейного отдыха. Две спальни, гостиная и кухня."
    },
    {
      id: "4",
      title: "Стильная квартира у метро",
      image: apartment1,
      price: 6800,
      location: "Сокольники, 12",
      guests: 3,
      rating: 4.7,
      amenities: ["WiFi", "Парковка"],
      description: "Удобная квартира в 3 минутах от метро. Современный ремонт, все необходимое для комфортного проживания."
    },
    {
      id: "5",
      title: "Апартаменты с видом на парк",
      image: apartment2,
      price: 9200,
      location: "Чистые пруды, 7",
      guests: 4,
      rating: 4.9,
      amenities: ["WiFi", "Кофе"],
      description: "Светлые апартаменты с большими окнами и видом на парк. Тихое место в центре города."
    },
    {
      id: "6",
      title: "Luxury пентхаус",
      image: apartment3,
      price: 18000,
      location: "Остоженка, 1",
      guests: 8,
      rating: 5.0,
      amenities: ["WiFi", "Парковка", "Кофе"],
      description: "Роскошный пентхаус с террасой и панорамным видом на Москву. Эксклюзивное предложение для особых случаев."
    }
  ];

  const filteredApartments = apartments.filter(apartment => {
    const matchesSearch = apartment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         apartment.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesPrice = priceRange === "all" ||
                        (priceRange === "budget" && apartment.price < 7000) ||
                        (priceRange === "mid" && apartment.price >= 7000 && apartment.price < 12000) ||
                        (priceRange === "luxury" && apartment.price >= 12000);
    
    return matchesSearch && matchesPrice;
  }).sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "guests":
        return b.guests - a.guests;
      default:
        return 0;
    }
  });

  const breadcrumbData = generateBreadcrumbData([
    { name: "Главная", url: "https://volshebno-tut.lovable.app/" },
    { name: "Апартаменты", url: "https://volshebno-tut.lovable.app/apartments" }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <StructuredData data={generateApartmentListData(apartments)} />
      <StructuredData data={breadcrumbData} />
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Наши апартаменты
            </h1>
            <p className="text-lg text-muted-foreground">
              Найдите идеальное место для вашего пребывания из нашей коллекции комфортных апартаментов
            </p>
          </div>
        </div>
      </section>

      {/* Search Widget */}
      <section className="py-12 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SearchWidget className="bg-white rounded-2xl p-8 shadow-card" />
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 items-center w-full lg:w-auto">
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Поиск по названию или району..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-full sm:w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Цена" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Любая цена</SelectItem>
                  <SelectItem value="budget">До 7,000₽</SelectItem>
                  <SelectItem value="mid">7,000₽ - 12,000₽</SelectItem>
                  <SelectItem value="luxury">От 12,000₽</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-low">Цена: по возрастанию</SelectItem>
                  <SelectItem value="price-high">Цена: по убыванию</SelectItem>
                  <SelectItem value="rating">По рейтингу</SelectItem>
                  <SelectItem value="guests">По количеству гостей</SelectItem>
                </SelectContent>
              </Select>
              
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                {filteredApartments.length} из {apartments.length}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Apartments from Widget */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <ApartmentListWidget className="w-full" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Apartments;