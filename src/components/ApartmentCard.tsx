import { Link } from "react-router-dom";
import { MapPin, Users, Star, Wifi, Car, Coffee } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

interface ApartmentCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
  location: string;
  guests: number;
  rating: number;
  amenities: string[];
  description: string;
}

export function ApartmentCard({
  id,
  title,
  image,
  price,
  location,
  guests,
  rating,
  amenities,
  description,
}: ApartmentCardProps) {
  const { t } = useTranslation();
  
  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
        return <Wifi className="h-3 w-3" />;
      case 'парковка':
        return <Car className="h-3 w-3" />;
      case 'кофе':
        return <Coffee className="h-3 w-3" />;
      default:
        return null;
    }
  };

  return (
    <Card className="group overflow-hidden border-0 shadow-glass hover:shadow-floating bg-gradient-card backdrop-blur-sm transition-all duration-500 hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4">
          <Badge className="bg-gradient-luxury text-white border-0 shadow-glass">
            <Star className="h-3 w-3 mr-1 fill-white" />
            {rating}
          </Badge>
        </div>
        <div className="absolute top-4 left-4">
          <Badge variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            {t('apartments.featured', 'Популярное')}
          </Badge>
        </div>
      </div>

      <CardContent className="p-8">
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-xl text-foreground line-clamp-1 group-hover:bg-gradient-to-r group-hover:from-luxury group-hover:to-accent-purple group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{title}</h3>
            <div className="flex items-center text-sm text-muted-foreground mt-2">
              <div className="p-1 rounded-lg bg-luxury/10 mr-2">
                <MapPin className="h-4 w-4 text-luxury" />
              </div>
              {location}
            </div>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{description}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-1 rounded-lg bg-accent-cyan/10">
                <Users className="h-4 w-4 text-accent-cyan" />
              </div>
              <span className="text-sm text-muted-foreground">{t('apartments.upTo')} {guests} {t('apartments.guests')}</span>
            </div>
            <div className="flex items-center space-x-2">
              {amenities.slice(0, 3).map((amenity, index) => (
                <div key={index} className="p-2 rounded-lg bg-surface/50 border border-white/10">
                  <div className="text-luxury">
                    {getAmenityIcon(amenity)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-white/10">
            <div>
              <span className="text-3xl font-bold bg-gradient-to-r from-luxury to-accent-purple bg-clip-text text-transparent">{price.toLocaleString()}₽</span>
              <span className="text-sm text-muted-foreground ml-2">{t('apartments.perNight')}</span>
            </div>
            <Link 
              to={`/apartment/${id}`}
              className="inline-flex items-center justify-center rounded-xl bg-gradient-luxury px-6 py-3 text-sm font-medium text-white transition-all hover:shadow-luxury hover:scale-105 duration-300"
            >
              {t('apartments.details')}
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}