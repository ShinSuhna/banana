import { useEffect, useState } from 'react';
import { ShoppingBag, Shield, Clock, Eye } from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 30, seconds: 0 });
  const [viewers, setViewers] = useState(497);
  const [stock, setStock] = useState(20);
  const [notifications, setNotifications] = useState<Array<{ id: number; name: string; city: string }>>([]);
  const [videoWatched, setVideoWatched] = useState(false);
  const [buttonUnlocked, setButtonUnlocked] = useState(false);
  const [secondsWatched, setSecondsWatched] = useState(0);

  const mozambicanNames = [
    { name: 'Helena', city: 'Maputo' },
    { name: 'Sandra', city: 'Nampula' },
    { name: 'Maria', city: 'Beira' },
    { name: 'Ana', city: 'Matola' },
    { name: 'Carla', city: 'Tete' },
    { name: 'Beatriz', city: 'Quelimane' },
    { name: 'Sofia', city: 'Lichinga' },
    { name: 'Luísa', city: 'Pemba' },
    { name: 'Rosa', city: 'Inhambane' },
    { name: 'Teresa', city: 'Xai-Xai' }
  ];

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Viewer count fluctuation
  useEffect(() => {
    const timer = setInterval(() => {
      setViewers(prev => prev + Math.floor(Math.random() * 10) - 5);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Stock countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setStock(prev => (prev > 3 ? prev - 1 : prev));
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  // Notification system
  useEffect(() => {
    const timer = setInterval(() => {
      const randomPerson = mozambicanNames[Math.floor(Math.random() * mozambicanNames.length)];
      const newNotif = {
        id: Date.now(),
        name: randomPerson.name,
        city: randomPerson.city
      };
      setNotifications(prev => [...prev.slice(-2), newNotif]);
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== newNotif.id));
      }, 5000);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  // Video watch timer (7 minutes = 420 seconds)
  useEffect(() => {
    if (!buttonUnlocked) {
      const timer = setInterval(() => {
        setSecondsWatched(prev => {
          if (prev >= 420) {
            setButtonUnlocked(true);
            return prev;
          }
          return prev + 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [buttonUnlocked]);

  const comments = [
    {
      name: 'Emília Yager',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      comment: 'Perdi 18kg sem passar fome nem fazer dietas malucas! Obrigada, Dra Laura Gutiérrez — mudou a minha vida!',
      time: 'há 2 horas'
    },
    {
      name: 'Juliana Aparecida',
      image: 'https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      comment: 'Graças à receita da Dra Laura hoje consigo me sentir muito melhor com o meu corpo.',
      time: 'há 3 horas'
    },
    {
      name: 'Maria do Rosário',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      comment: 'Sou de Maputo, podem confirmar se funciona mesmo?',
      time: 'há 4 horas'
    },
    {
      name: 'Rosana Almeida',
      image: 'https://images.pexels.com/photos/3775087/pexels-photo-3775087.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      comment: 'Sou de Maputo, usei durante 2 meses e perdi 15kg!',
      time: 'há 4 horas'
    },
    {
      name: 'Maira Laura',
      image: 'https://images.pexels.com/photos/1848565/pexels-photo-1848565.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      comment: 'Muito obrigada, vou experimentar 🙏🙏',
      time: 'há 5 horas'
    },
    {
      name: 'Cristina Machado',
      image: 'https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      comment: 'Funcionou mesmo! Já eliminei 12kg em 6 semanas. Recomendo!',
      time: 'há 6 horas'
    },
    {
      name: 'Beatriz Sitoe',
      image: 'https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      comment: 'Estava muito cética, mas decidi tentar. Melhor decisão da minha vida!',
      time: 'há 7 horas'
    },
    {
      name: 'Fernanda Costa',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      comment: 'Obrigada Dra Laura! Finalmente consegui emagrecer sem sofrer.',
      time: 'há 8 horas'
    },
    {
      name: 'Sónia Macamo',
      image: 'https://images.pexels.com/photos/3264235/pexels-photo-3264235.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      comment: 'De Nampula aqui! Já perdi 9kg e ainda estou no primeiro mês.',
      time: 'há 9 horas'
    },
    {
      name: 'Paula Nhantumbo',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      comment: 'Minha autoestima voltou! Obrigada mesmo!',
      time: 'há 10 horas'
    },
    {
      name: 'Mariana Silva',
      image: 'https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      comment: 'Incredível! Já são 14kg a menos e me sinto maravilhosa!',
      time: 'há 11 horas'
    },
    {
      name: 'Lurdes Manjate',
      image: 'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      comment: 'Depois de tantas tentativas frustradas, finalmente algo que funciona!',
      time: 'há 12 horas'
    },
    {
      name: 'Graça Mondlane',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      comment: 'Estava com medo de ser mentira, mas não é! Estou muito feliz!',
      time: 'há 13 horas'
    },
    {
      name: 'Elisa Matavel',
      image: 'https://images.pexels.com/photos/4172887/pexels-photo-4172887.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      comment: 'De Beira! Confirmado, funciona mesmo! Já eliminei 11kg.',
      time: 'há 14 horas'
    },
    {
      name: 'Carla Tembe',
      image: 'https://images.pexels.com/photos/3621953/pexels-photo-3621953.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      comment: 'Meu marido ficou impressionado com os resultados! 😍',
      time: 'há 15 horas'
    },
    {
      name: 'Angelina Chissano',
      image: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      comment: 'Valeu cada centavo! Recomendo de olhos fechados.',
      time: 'há 16 horas'
    },
    {
      name: 'Isabel Cossa',
      image: 'https://images.pexels.com/photos/4555321/pexels-photo-4555321.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      comment: 'Sou de Matola e estou adorando os resultados!',
      time: 'há 17 horas'
    },
    {
      name: 'Rita Mahanjane',
      image: 'https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      comment: 'Simples, natural e eficaz. O que mais posso pedir?',
      time: 'há 18 horas'
    },
    {
      name: 'Fátima Muianga',
      image: 'https://images.pexels.com/photos/3812753/pexels-photo-3812753.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      comment: 'Já indiquei para todas as minhas amigas!',
      time: 'há 19 horas'
    },
    {
      name: 'Célia Matsinhe',
      image: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      comment: 'Perdi 16kg em 3 meses! Mudou completamente minha vida.',
      time: 'há 20 horas'
    },
    {
      name: 'Amélia Zunguze',
      image: 'https://images.pexels.com/photos/3727459/pexels-photo-3727459.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      comment: 'Sem efeitos colaterais, só resultados positivos!',
      time: 'há 21 horas'
    },
    {
      name: 'Marta Nhabomba',
      image: 'https://images.pexels.com/photos/3807753/pexels-photo-3807753.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      comment: 'De Quelimane! Pessoal, pode comprar sem medo!',
      time: 'há 22 horas'
    },
    {
      name: 'Joana Bila',
      image: 'https://images.pexels.com/photos/4587987/pexels-photo-4587987.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      comment: 'Finalmente uma solução que realmente funciona!',
      time: 'há 23 horas'
    },
    {
      name: 'Vitória Chongo',
      image: 'https://images.pexels.com/photos/3796810/pexels-photo-3796810.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      comment: 'Obrigada Dra Laura! Você mudou minha vida! ❤️',
      time: 'há 1 dia'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Promo Header */}
      <div className="bg-red-600 text-white py-3 px-4 text-center">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <img
            src="https://flagcdn.com/w80/mz.png"
            alt="Bandeira de Moçambique"
            className="w-8 h-6 object-cover rounded shadow-sm"
          />
          <span className="font-semibold">Promoção válida para Moçambique por:</span>
          <div className="flex gap-2 font-bold text-lg">
            <span className="bg-white text-red-600 px-3 py-1 rounded">
              {String(timeLeft.hours).padStart(2, '0')}h
            </span>
            <span className="bg-white text-red-600 px-3 py-1 rounded">
              {String(timeLeft.minutes).padStart(2, '0')}m
            </span>
            <span className="bg-white text-red-600 px-3 py-1 rounded">
              {String(timeLeft.seconds).padStart(2, '0')}s
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 leading-tight">
          🚨 URGENTE: Nutricionista revela fórmula natural que elimina até 17kg
        </h1>
        <p className="text-xl text-center text-gray-700 mb-6">
          Sem dieta. Sem exercícios. Sem sofrimento.
        </p>

        {/* Viewer Count */}
        <div className="flex items-center justify-center gap-2 mb-6 text-gray-600">
          <Eye className="w-5 h-5" />
          <span className="font-semibold">{viewers} pessoas estão assistindo agora</span>
        </div>

        {/* Video Container */}
        <div className="bg-black rounded-lg overflow-hidden mb-6 shadow-2xl">
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <iframe
              id="panda-video"
              src="https://scripts.converteai.net/5c3c166f-7066-46d8-9cce-371214eda90b/players/68f64a0a34a13e0c8011be39/v4/embed.html"
              style={{
                border: 'none',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
              allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Stock Alert */}
        <div className={`text-center mb-6 p-4 rounded-lg ${stock < 5 ? 'bg-red-100 animate-pulse' : 'bg-yellow-100'}`}>
          <p className={`font-bold text-lg ${stock < 5 ? 'text-red-700' : 'text-yellow-800'}`}>
            ⚠️ Restam apenas {stock} produtos
          </p>
        </div>

        {/* Main CTA Button */}
        <div className="mb-8">
          {buttonUnlocked ? (
            <a
              href="https://pay.lojou.app/p/Jtik1"
              className="block w-full bg-green-500 hover:bg-green-600 text-white text-2xl font-bold py-6 px-8 rounded-lg text-center shadow-lg transform hover:scale-105 transition-all"
            >
              🛍️ Adquirir Agora
            </a>
          ) : (
            <div className="block w-full bg-gray-400 text-white text-2xl font-bold py-6 px-8 rounded-lg text-center shadow-lg cursor-not-allowed relative overflow-hidden">
              <div className="absolute inset-0 bg-gray-500 opacity-50 flex items-center justify-center">
                <Clock className="w-8 h-8 mr-2" />
              </div>
              <span className="relative z-10">
                🔒 Aguarde {Math.floor((420 - secondsWatched) / 60)}:{String((420 - secondsWatched) % 60).padStart(2, '0')} para desbloquear
              </span>
            </div>
          )}
        </div>

        {/* Guarantee Section */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8 border border-gray-200">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Shield className="w-8 h-8 text-green-600" />
            <h3 className="text-xl font-bold text-gray-900">Garantia de Satisfação</h3>
          </div>
          <p className="text-center text-gray-700">
            Você tem até <strong>30 dias</strong> para experimentar. Se não ficar satisfeita, devolvemos seu dinheiro!
          </p>
          <p className="text-center text-gray-600 mt-2 text-sm">
            🔒 Pagamento seguro via métodos locais
          </p>
        </div>

        {/* Comments Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Comentários ({comments.length})</h3>
          <div className="space-y-4">
            {comments.map((comment, index) => (
              <div key={index} className="flex gap-3 pb-4 border-b border-gray-100">
                <img
                  src={comment.image}
                  alt={comment.name}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-gray-900">{comment.name}</h4>
                    <span className="text-xs text-gray-500">{comment.time}</span>
                  </div>
                  <p className="text-gray-700">{comment.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed Bottom CTA */}
      {buttonUnlocked && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 p-4 shadow-2xl z-50">
          <div className="max-w-4xl mx-auto">
            <a
              href="https://pay.lojou.app/p/Jtik1"
              className="block w-full bg-green-500 hover:bg-green-600 text-white text-xl font-bold py-4 px-6 rounded-lg text-center shadow-lg transform hover:scale-105 transition-all"
            >
              🛍️ Adquirir Agora
            </a>
          </div>
        </div>
      )}

      {/* Notifications */}
      <div className="fixed bottom-20 left-4 space-y-2 z-40">
        {notifications.map(notif => (
          <div
            key={notif.id}
            className="bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg animate-slide-in flex items-center gap-2"
          >
            <span className="text-lg">🎉</span>
            <span className="font-semibold">{notif.name} de {notif.city}</span>
            <span>acabou de comprar!</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
