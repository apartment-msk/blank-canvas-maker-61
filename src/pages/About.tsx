import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, Clock, MapPin, Users, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
const About = () => {
  const stats = [{
    number: "2500+",
    label: "Довольных гостей"
  }, {
    number: "4.9/5",
    label: "Средний рейтинг"
  }, {
    number: "24/7",
    label: "Поддержка"
  }];
  const values = [{
    icon: Heart,
    title: "Забота о каждом госте",
    description: "Мы относимся к каждому гостю как к близкому другу, обеспечивая персональный подход и внимание к деталям."
  }, {
    icon: Shield,
    title: "Честность и прозрачность",
    description: "Все фотографии соответствуют действительности. Никаких скрытых платежей или неприятных сюрпризов."
  }, {
    icon: Star,
    title: "Качество превыше всего",
    description: "Мы тщательно отбираем каждые апартаменты и поддерживаем высокие стандарты чистоты и комфорта."
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              О нас
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы создаем незабываемый опыт проживания, объединяя комфорт премиальных апартаментов 
              с персональным сервисом и честным подходом к бизнесу.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-luxury mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Наша история
              </h2>
              <p className="text-lg text-muted-foreground">
                Как мы пришли к созданию сервиса премиальной аренды апартаментов
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Все началось с простой идеи: сделать краткосрочную аренду жилья честной, 
                  прозрачной и по-настоящему комфортной. Мы сами часто путешествовали и 
                  сталкивались с разочарованием, когда реальность не соответствовала ожиданиям.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  В 2020 году мы решили создать сервис, который бы решал эти проблемы. 
                  Мы начали с тщательного отбора апартаментов, честной фотосъемки и 
                  внедрения стандартов качества, которые гарантируют отличный опыт каждому гостю.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Сегодня HomeStay — это команда профессионалов, которая продолжает расти 
                  и развиваться, оставаясь верной своим принципам качества и честности.
                </p>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-luxury rounded-2xl p-8 text-luxury-foreground">
                  <blockquote className="text-lg italic">
                    "Мы верим, что каждое путешествие должно начинаться с комфортного 
                    и безопасного места, где можно чувствовать себя как дома."
                  </blockquote>
                  <footer className="mt-4">
                    <cite className="font-semibold">— Анастасия Безбородова, основатель HomeStay</cite>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Наши ценности
              </h2>
              <p className="text-lg text-muted-foreground">
                Принципы, которыми мы руководствуемся в своей работе
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => <Card key={index} className="text-center border-0 shadow-card hover:shadow-floating transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-luxury rounded-2xl flex items-center justify-center">
                      <value.icon className="h-8 w-8 text-luxury-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>;
};
export default About;