import { Target, Eye, Lightbulb, Shield, TrendingUp, Users, Heart } from 'lucide-react';
import { Card, CardContent } from '@/app/components/ui/card';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ChatbotWidget } from '@/app/components/ChatbotWidget';

export function AboutPage() {
  const values = [
    {
      icon: <Lightbulb className="w-10 h-10 text-[#0D9488]" />,
      title: 'Clarity',
      description: 'We believe in simple, clear communication. No jargon, no confusion—just straightforward solutions that make sense.',
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-[#0D9488]" />,
      title: 'Innovation',
      description: 'We stay ahead of digital trends, bringing cutting-edge solutions like AI and business intelligence to SMEs.',
    },
    {
      icon: <Shield className="w-10 h-10 text-[#0D9488]" />,
      title: 'Transparency',
      description: 'Honest pricing, realistic timelines, and clear expectations. We tell you what is possible and what is not.',
    },
    {
      icon: <Target className="w-10 h-10 text-[#0D9488]" />,
      title: 'Measurable Impact',
      description: 'Every website we build should drive real business results - whether that is leads, sales, or insights.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#06B6D4] font-semibold text-sm uppercase tracking-wider">About NIXRIX</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
              Building Digital Solutions That Matter
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We're on a mission to make business data understandable and digital platforms functional for SMEs.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#06B6D4] font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
                From an Idea to a Vision
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  NIXRIX was founded with a simple idea—businesses deserve websites that do more than just look good. 
                  We believe digital platforms should provide clarity, insight, and real value.
                </p>
                <p>
                  Too many SMEs struggle with complex technology, expensive consultants, and platforms they can't 
                  understand. We wanted to change that by creating intelligent, functional websites that actually 
                  help businesses grow.
                </p>
                <p>
                  Starting in Leeds, UK, we're building digital solutions for businesses that want clarity over 
                  complexity, function over flash, and results over promises.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1652212976547-16d7e2841b8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGJsdWUlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2ODMxMjYzN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Abstract Technology"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#06B6D4]/20 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#0D9488]/10 rounded-2xl flex items-center justify-center mr-4">
                    <Target className="w-8 h-8 text-[#0D9488]" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To make business intelligence and modern web technology accessible to small and medium-sized businesses. 
                  Every SME should have the tools to understand their data and make informed decisions—without the complexity or cost.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#06B6D4]/10 rounded-2xl flex items-center justify-center mr-4">
                    <Eye className="w-8 h-8 text-[#06B6D4]" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be the go-to digital partner for UK SMEs who want clarity, functionality, and measurable results. 
                  We're building a future where every business has access to intelligent, data-driven websites.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder-Led Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#06B6D4] font-semibold text-sm uppercase tracking-wider">How We Work</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
              Founder-Led, Client-Focused
            </h2>
          </div>

          <Card className="border-2 border-gray-200 shadow-xl">
            <CardContent className="p-10">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-[#0D9488]/10 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                  <Users className="w-8 h-8 text-[#0D9488]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Small Team, Big Impact</h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      NIXRIX is a founder-led company based in Leeds, UK. We're not a big agency with sales teams 
                      and account managers. When you work with us, you work directly with the people building your project.
                    </p>
                    <p>
                      This hands-on approach means clearer communication, faster decisions, and solutions that actually 
                      fit your needs—not templated packages pushed by sales targets.
                    </p>
                    <p>
                      We keep our client list intentionally small. This isn't about volume—it's about quality, attention 
                      to detail, and building relationships that last.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#0D9488] rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Quality Over Volume</h4>
                    <p className="text-sm text-gray-600">We focus on doing fewer projects exceptionally well.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#0D9488] rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Hands-On Delivery</h4>
                    <p className="text-sm text-gray-600">Direct involvement from start to finish.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#0D9488] rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">No Sales Teams</h4>
                    <p className="text-sm text-gray-600">Just honest conversations about what's possible.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#0D9488] rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Long-Term Partnerships</h4>
                    <p className="text-sm text-gray-600">We're invested in your ongoing success.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#06B6D4] font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
              What We Stand For
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every project we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-[#0D9488] transition-all hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="mb-6">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Don't Do */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What We Don't Do
            </h2>
            <p className="text-lg text-gray-600">
              We believe in transparency. Here's what we won't promise:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'We Don\'t Build Custom BI Tools',
                description: 'We use Power BI because it\'s enterprise-grade and proven. No need to reinvent the wheel.',
              },
              {
                title: 'We Don\'t Promise Overnight Results',
                description: 'Real business intelligence and quality websites take time to implement properly.',
              },
              {
                title: 'We Don\'t Hide Behind Sales Teams',
                description: 'You work directly with the people building your project. No middlemen.',
              },
              {
                title: 'We Don\'t Lock You In',
                description: 'You own your data, dashboards, and website. Leave anytime, no questions asked.',
              },
            ].map((item, index) => (
              <Card key={index} className="border-l-4 border-orange-500 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0D9488] to-[#06B6D4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 text-white/80 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Want to Work Together?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's have an honest conversation about whether we're the right fit for your business.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#0D9488] px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            Start a Conversation
          </a>
        </div>
      </section>

      {/* Chatbot Widget */}
      <ChatbotWidget />
    </div>
  );
}