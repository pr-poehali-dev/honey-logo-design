import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const products = [
    {
      id: 1,
      name: 'Цветочный мёд',
      description: 'Натуральный мёд из луговых цветов. Нежный вкус и аромат лета.',
      price: '450 ₽',
      image: 'https://cdn.poehali.dev/projects/9bd846a8-143b-4a28-a6d5-8748ced864de/files/133219de-62b7-4779-a4e5-1d9b7efeb92b.jpg'
    },
    {
      id: 2,
      name: 'Липовый мёд',
      description: 'Мёд из липового цвета. Обладает целебными свойствами.',
      price: '520 ₽',
      image: 'https://cdn.poehali.dev/projects/9bd846a8-143b-4a28-a6d5-8748ced864de/files/133219de-62b7-4779-a4e5-1d9b7efeb92b.jpg'
    },
    {
      id: 3,
      name: 'Гречишный мёд',
      description: 'Тёмный мёд с насыщенным вкусом. Богат микроэлементами.',
      price: '480 ₽',
      image: 'https://cdn.poehali.dev/projects/9bd846a8-143b-4a28-a6d5-8748ced864de/files/133219de-62b7-4779-a4e5-1d9b7efeb92b.jpg'
    },
    {
      id: 4,
      name: 'Акациевый мёд',
      description: 'Светлый прозрачный мёд. Не кристаллизуется долгое время.',
      price: '550 ₽',
      image: 'https://cdn.poehali.dev/projects/9bd846a8-143b-4a28-a6d5-8748ced864de/files/133219de-62b7-4779-a4e5-1d9b7efeb92b.jpg'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/projects/9bd846a8-143b-4a28-a6d5-8748ced864de/files/aba2f48e-e065-4a76-8892-99fb09fbdc30.jpg" 
              alt="Логотип" 
              className="h-12 w-12 rounded-full object-cover"
            />
            <h1 className="text-2xl font-bold text-primary">Медовый Дом</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#products" className="text-foreground hover:text-primary transition-colors">Продукция</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      <section 
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://cdn.poehali.dev/projects/9bd846a8-143b-4a28-a6d5-8748ced864de/files/35f0edda-6a25-40b1-860c-40da384fe26b.jpg')`
        }}
      >
        <div className="text-center text-white animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Натуральный мёд</h2>
          <p className="text-xl md:text-2xl mb-8">Прямо с наших пасек к вашему столу</p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
            Выбрать мёд
          </Button>
        </div>
      </section>

      <section id="products" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Наша продукция</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Мы производим только натуральный мёд без добавок. Каждая банка – это кусочек лета и забота о вашем здоровье.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="overflow-hidden hover:shadow-lg transition-shadow animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button size="sm" variant="outline" className="group">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Купить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Icon name="Leaf" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% натуральный</h3>
              <p className="text-muted-foreground">Без добавок и консервантов</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                <Icon name="Award" size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Проверенное качество</h3>
              <p className="text-muted-foreground">Сертифицированная продукция</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Icon name="Heart" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">С любовью</h3>
              <p className="text-muted-foreground">Семейное производство</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">Свяжитесь с нами</h2>
          <p className="text-center text-muted-foreground mb-12">
            Есть вопросы? Напишите нам, и мы обязательно ответим!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Icon name="MapPin" size={24} className="text-primary" />
                Наш адрес
              </h3>
              <p className="text-muted-foreground mb-6">
                Московская область<br />
                Пасека "Медовый Дом"<br />
                График работы: ПН-ВС 9:00-18:00
              </p>

              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Icon name="Phone" size={24} className="text-primary" />
                Телефон
              </h3>
              <p className="text-muted-foreground mb-6">
                +7 (999) 123-45-67
              </p>

              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Icon name="Mail" size={24} className="text-primary" />
                Email
              </h3>
              <p className="text-muted-foreground">
                info@medovydom.ru
              </p>
            </Card>

            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Ваше имя
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ivan@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Напишите ваш вопрос..."
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Отправить сообщение
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img 
              src="https://cdn.poehali.dev/projects/9bd846a8-143b-4a28-a6d5-8748ced864de/files/aba2f48e-e065-4a76-8892-99fb09fbdc30.jpg" 
              alt="Логотип" 
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="text-xl font-bold">Медовый Дом</span>
          </div>
          <p className="text-white/80">© 2024 Медовый Дом. Натуральный мёд с наших пасек.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
