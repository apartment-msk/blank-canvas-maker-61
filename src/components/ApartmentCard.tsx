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
    <Card className="group overflow-hidden border-0 shadow-card hover:shadow-floating transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
            <Star className="h-3 w-3 mr-1 fill-luxury text-luxury" />
            {rating}
          </Badge>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg text-foreground line-clamp-1">{title}</h3>
            <div className="flex items-center text-sm text-muted-foreground mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              {location}
            </div>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{t('apartments.upTo')} {guests} {t('apartments.guests')}</span>
            </div>
            <div className="flex items-center space-x-1">
              {amenities.slice(0, 3).map((amenity, index) => (
                <div key={index} className="flex items-center text-muted-foreground">
                  {getAmenityIcon(amenity)}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t">
            <div>
              <span className="text-2xl font-bold text-foreground">{price.toLocaleString()}₽</span>
              <span className="text-sm text-muted-foreground ml-1">{t('apartments.perNight')}</span>
            </div>
            <Link 
              to={`/apartment/${id}`}
              className="inline-flex items-center justify-center rounded-lg bg-gradient-luxury px-4 py-2 text-sm font-medium text-luxury-foreground transition-all hover:shadow-luxury hover:scale-105"
            >
              {t('apartments.details')}
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}