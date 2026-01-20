import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Minimize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';

interface Message {
  type: 'bot' | 'user';
  text: string;
  timestamp: Date;
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial greeting after a short delay
      setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setMessages([
            {
              type: 'bot',
              text: "👋 Hi! I'm the NIXRIX AI Assistant. I can help answer questions about our services, pricing, and process.",
              timestamp: new Date()
            }
          ]);
          
          // Follow-up message
          setTimeout(() => {
            setIsTyping(true);
            setTimeout(() => {
              setIsTyping(false);
              setMessages(prev => [...prev, {
                type: 'bot',
                text: "What can I help you with today?",
                timestamp: new Date()
              }]);
            }, 1000);
          }, 1500);
        }, 1500);
      }, 500);
    }
  }, [isOpen]);

  const quickReplies = [
    "What services do you offer?",
    "How much does a website cost?",
    "Tell me about AI chatbots",
    "How long does it take?"
  ];

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('service') || lowerMessage.includes('offer')) {
      return "We offer 5 main service groups:\n\n✓ Website Design (from £249)\n✓ AI Chatbots (from £499)\n✓ Intelligent Websites with Dashboards\n✓ Automation & SEO\n✓ Custom Solutions\n\nWhich would you like to know more about?";
    }
    
    if (lowerMessage.includes('cost') || lowerMessage.includes('price') || lowerMessage.includes('much')) {
      return "Our projects start from £249 for simple websites. Final pricing depends on:\n\n• Features and complexity\n• Number of pages\n• Integrations (CRM, chatbot, dashboards)\n• Custom requirements\n\nWould you like a custom quote?";
    }
    
    if (lowerMessage.includes('chatbot') || lowerMessage.includes('ai')) {
      return "Our AI chatbots are great for:\n\n🤖 24/7 customer support\n💬 Lead capture & qualification\n📚 FAQ automation\n🌐 Multi-language support\n\nThey're custom-trained on your business content. Pricing starts from £499 for website + chatbot integration.";
    }
    
    if (lowerMessage.includes('time') || lowerMessage.includes('long') || lowerMessage.includes('fast')) {
      return "Our typical timeline:\n\n⏱️ Discovery Call: 30-60 mins\n📋 Planning: 3-5 days\n💻 Development: 4-7 days\n🚀 Launch: 1-2 days\n\nTotal: 10-14 days for full websites. We can start within 1-2 weeks after our call!";
    }
    
    if (lowerMessage.includes('dashboard') || lowerMessage.includes('kpi') || lowerMessage.includes('power bi')) {
      return "Our Intelligent Websites include:\n\n📊 Power BI dashboard embedding\n📈 Real-time data updates\n💡 Plain-language KPI explanations\n🔔 Automated alerts\n\nPerfect for data-driven businesses. Want to see a demo?";
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('call') || lowerMessage.includes('speak')) {
      return "Great! You can reach us at:\n\n📧 hello@nixrix.com\n📍 Leeds, UK\n⏰ We respond within 24 hours\n\nOr click 'Get Started' to book a free consultation!";
    }
    
    if (lowerMessage.includes('demo')) {
      return "You're already experiencing one of our demos! 😊\n\nThis chatbot itself is an example of what we build. Check out our other demos:\n\n• Dashboard Demo\n• Website Showcase\n• Full Feature Examples";
    }
    
    return "That's a great question! For detailed information, I recommend:\n\n1️⃣ Browsing our Services page\n2️⃣ Checking out live demos\n3️⃣ Booking a free consultation\n\nOr ask me something specific about our website design, AI chatbots, or dashboards!";
  };

  const handleSend = () => {
    if (!message.trim()) return;

    // Add user message
    const userMessage: Message = {
      type: 'user',
      text: message,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setMessage('');

    // Show typing indicator
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      setIsTyping(false);
      const botResponse: Message = {
        type: 'bot',
        text: getBotResponse(message),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickReply = (reply: string) => {
    setMessage(reply);
    setTimeout(() => handleSend(), 100);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#0D9488] text-white rounded-full p-4 shadow-2xl hover:bg-[#0c8479] transition-colors relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {!isOpen && (
            <motion.span
              className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden z-50 border-2 border-gray-200"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ maxHeight: '600px' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0D9488] to-[#06B6D4] p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
                  </div>
                  <div>
                    <h3 className="font-semibold">NIXRIX AI Assistant</h3>
                    <p className="text-xs text-white/80 flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      Online - Knowledge-based
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <Minimize2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="h-96 p-4 space-y-4 overflow-y-auto bg-gray-50">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className={`flex ${msg.type === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.type === 'bot' 
                      ? 'bg-white text-gray-800 shadow-sm border border-gray-200' 
                      : 'bg-[#0D9488] text-white'
                  }`}>
                    <p className="text-sm whitespace-pre-line leading-relaxed">{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.type === 'bot' ? 'text-gray-400' : 'text-white/70'}`}>
                      {msg.timestamp.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="max-w-[80%] p-3 rounded-2xl bg-white shadow-sm border border-gray-200">
                    <div className="flex gap-1">
                      <motion.span
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.span
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.span
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Quick Replies */}
              {messages.length <= 2 && !isTyping && (
                <div className="flex flex-col gap-2 pt-2">
                  <p className="text-xs text-gray-500 text-center mb-1">Quick questions:</p>
                  {quickReplies.map((reply, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="text-sm p-2 bg-white border border-gray-200 rounded-lg hover:border-[#0D9488] hover:bg-[#0D9488]/5 transition-all text-left"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {reply}
                    </motion.button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t bg-white">
              <div className="flex gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && message) {
                      handleSend();
                    }
                  }}
                />
                <Button 
                  size="icon" 
                  className="bg-[#0D9488] hover:bg-[#0c8479]"
                  onClick={handleSend}
                  disabled={!message.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                AI Chatbot – Live Example (Knowledge-based)
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
