import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RenovationSlider } from "@/components/RenovationSlider";
import { Shield, Clock, Star, DollarSign, Home, Users, Wrench, Paintbrush } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const renovationServices = [
  {
    icon: Wrench,
    title: "Работаем с любым состоянием",
    description: "От голых стен до капитального ремонта - мы подготовим ваш объект под ключ"
  },
  {
    icon: Paintbrush,
    title: "Полный цикл подготовки",
    description: "Дизайн, ремонт, меблировка и запуск в аренду за 60-90 дней"
  },
  {
    icon: Star,
    title: "Окупаемость инвестиций",
    description: "Затраты на подготовку окупаются за 18-24 месяца благодаря премиальной аренде"
  }
];

const benefits = [
  {
    icon: Shield,
    title: "Гарантии",
    description: "Страхование и защита вашей собственности"
  },
  {
    icon: Clock,
    title: "Управление",
    description: "Полное управление арендой и обслуживанием"
  },
  {
    icon: Star,
    title: "Доходность",
    description: "Высокая загрузка и стабильный доход"
  }
];

const features = [
  {
    icon: DollarSign,
    title: "Увеличение дохода до 40%",
    description: "Профессиональное управление позволяет максимизировать доходность вашей недвижимости"
  },
  {
    icon: Home,
    title: "Уход за недвижимостью",
    description: "Регулярная уборка, техническое обслуживание и контроль состояния вашей квартиры"
  },
  {
    icon: Users,
    title: "Проверенные гости",
    description: "Тщательная верификация всех гостей и круглосуточная поддержка"
  }
];

const Owners = () => {

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Собственникам квартир
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Присоединяйтесь к нашей платформе и получайте стабильный доход 
              от сдачи своих апартаментов с нашей поддержкой и управлением.
            </p>
          </div>
        </div>
      </section>

      {/* Renovation Services Section */}
      <motion.section 
        className="py-16 bg-gradient-warm"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-foreground"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Готовим объекты с нуля
              </motion.h2>
              <motion.p 
                className="text-lg text-muted-foreground max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Даже если у вас голые стены или требуется капитальный ремонт - мы возьмем на себя 
                весь процесс подготовки до премиальных апартаментов для краткосрочной аренды
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <RenovationSlider />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {renovationServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="text-center border-0 shadow-card hover:shadow-floating transition-all hover:scale-105">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 mx-auto mb-6 bg-gradient-luxury rounded-2xl flex items-center justify-center">
                        <service.icon className="h-8 w-8 text-luxury-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center pt-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Link to="/contacts">
                  <Button size="lg" className="bg-gradient-luxury text-luxury-foreground hover:shadow-luxury hover:scale-105">
                    Получить расчет стоимости подготовки
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Почему выбирают нас
              </h2>
              <p className="text-lg text-muted-foreground">
                Профессиональное управление вашей недвижимостью
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center border-0 shadow-card hover:shadow-floating transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-luxury rounded-2xl flex items-center justify-center">
                      <benefit.icon className="h-8 w-8 text-luxury-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Что мы предлагаем
              </h2>
              <p className="text-lg text-muted-foreground">
                Полный спектр услуг для управления вашей недвижимостью
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mb-4 bg-gradient-luxury rounded-xl flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-luxury-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Как это работает
              </h2>
              <p className="text-lg text-muted-foreground">
                Простой процесс сотрудничества
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-luxury rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-luxury-foreground">1</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Оценка квартиры
                </h3>
                <p className="text-muted-foreground">
                  Наш специалист проведет бесплатную оценку доходности вашей недвижимости
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-luxury rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-luxury-foreground">2</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Подготовка к сдаче
                </h3>
                <p className="text-muted-foreground">
                  Профессиональная фотосъемка, создание описания и размещение на платформах
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-luxury rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-luxury-foreground">3</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Получение дохода
                </h3>
                <p className="text-muted-foreground">
                  Ежемесячные выплаты без участия в операционных процессах
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
              Готовы стать партнером?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами для консультации и оценки доходности вашей недвижимости
            </p>
            
            <Link to="/contacts">
              <Button size="lg" className="bg-gradient-luxury text-luxury-foreground hover:shadow-luxury hover:scale-105">
                Стать партнером
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Owners;