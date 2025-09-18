import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ReviewCardProps {
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}

export function ReviewCard({ name, rating, comment, date, avatar }: ReviewCardProps) {
  return (
    <Card className="h-full border-0 shadow-glass hover:shadow-floating bg-gradient-card backdrop-blur-sm transition-all duration-500 group">
      <CardContent className="p-8">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              {avatar ? (
                <img 
                  src={avatar} 
                  alt={name}
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-luxury/20 group-hover:ring-luxury/40 transition-all duration-300"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-gradient-luxury flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glass">
                  <span className="text-white font-bold text-xl">
                    {name.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-lg text-foreground">{name}</h4>
              <div className="flex items-center space-x-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 transition-colors duration-300 ${
                      i < rating 
                        ? "fill-warm text-warm group-hover:fill-accent-cyan group-hover:text-accent-cyan" 
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">{date}</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -left-2 top-0 text-4xl text-luxury/20 font-serif">"</div>
            <p className="text-muted-foreground leading-relaxed text-lg pl-6 italic">{comment}</p>
            <div className="absolute -right-2 bottom-0 text-4xl text-luxury/20 font-serif rotate-180">"</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}