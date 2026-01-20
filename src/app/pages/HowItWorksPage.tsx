import { Calendar, ClipboardList, BarChart3, Bell, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/app/components/ui/card';
import { ChatbotWidget } from '@/app/components/ChatbotWidget';

export function HowItWorksPage() {
  const steps = [
    {
      number: '01',
      icon: <Calendar className="w-12 h-12 text-[#0D9488]" />,
      title: 'Free Discovery Call',
      description: 'We start with a 30-minute consultation to understand your business, goals, and current data situation.',
      details: [
        'Discuss your key metrics and pain points',
        'Review your current website (if any)',
        'Identify data sources and integration needs',
        'Provide honest feedback on fit and feasibility',
      ],
      timeline: '30-60 minutes',
    },
    {
      number: '02',
      icon: <ClipboardList className="w-12 h-12 text-[#0D9488]" />,
      title: 'KPI Selection',
      description: 'We work with you to choose the right metrics for your industry and business model.',
      details: [
        'Industry-standard KPIs as a starting point',
        'Custom metrics specific to your business',
        'Define targets and alert thresholds',
        'Create a dashboard wireframe for your approval',
      ],
      timeline: '3-5 days',
      whatYouProvide: ['Access to data sources', 'Feedback on wireframe', 'Target values for KPIs'],
    },
    {
      number: '03',
      icon: <BarChart3 className="w-12 h-12 text-[#0D9488]" />,
      title: 'Dashboard Build & Explanations',
      description: 'We build your Power BI dashboard and add plain-language explanations for every metric.',
      details: [
        'Connect to your data sources',
        'Build custom Power BI dashboard',
        'Add explanations: "What this means"',
        'Create recommended actions for each KPI',
      ],
      timeline: '4-7 days',
    },
    {
      number: '04',
      icon: <Bell className="w-12 h-12 text-[#0D9488]" />,
      title: 'Embed, Alerts & Automation',
      description: 'We embed the dashboard into your website and set up automated alerts and workflows.',
      details: [
        'Embed dashboard (secured if needed)',
        'Configure automated alerts via email/Slack',
        'Set up AI chatbot for FAQ + insights',
        'Create basic workflow automations',
      ],
      timeline: '2-3 days',
    },
    {
      number: '05',
      icon: <Rocket className="w-12 h-12 text-[#0D9488]" />,
      title: 'Launch + Subscription Support',
      description: 'We train your team, hand over the system, and provide 3 months of free BI hosting.',
      details: [
        'Walkthrough training session (60 min)',
        'Documentation and how-to guides',
        '3 months free Power BI hosting & maintenance',
        'Email support during handover period',
      ],
      timeline: '1-2 days',
      whatHappensNext: 'After 3 months, subscription starts at £150/month for hosting, maintenance & updates.',
    },
  ];

  return (
    <div className="min-h-screen">
      <ChatbotWidget />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0D9488]/5 to-[#06B6D4]/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our 5-step process takes you from discovery to launch in 10–14 days. Clear, transparent,
              and collaborative every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-10 top-24 w-0.5 h-24 bg-gradient-to-b from-[#0D9488] to-[#06B6D4]"></div>
                )}

                <Card className="border-2 hover:border-[#0D9488] transition-all">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Icon & Number */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="bg-gray-50 p-4 rounded-xl">{step.icon}</div>
                          <div className="absolute -top-2 -right-2 bg-[#06B6D4] text-white text-sm font-bold px-3 py-1 rounded-full">
                            {step.number}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                          </div>
                          <div className="mt-2 md:mt-0 md:ml-4">
                            <span className="inline-block bg-[#0D9488]/10 text-[#0D9488] px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                              {step.timeline}
                            </span>
                          </div>
                        </div>

                        {/* Details */}
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">What we do:</h4>
                            <ul className="space-y-1">
                              {step.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start text-sm text-gray-700">
                                  <span className="text-[#0D9488] mr-2">•</span>
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {step.whatYouProvide && (
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                              <h4 className="font-semibold text-blue-900 mb-2">What you provide:</h4>
                              <ul className="space-y-1">
                                {step.whatYouProvide.map((item, idx) => (
                                  <li key={idx} className="text-sm text-blue-800">
                                    • {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {step.whatHappensNext && (
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                              <p className="text-sm text-green-900">
                                <strong>What happens next:</strong> {step.whatHappensNext}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-l-4 border-[#0D9488]">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Total Timeline</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Full Website Package</p>
                  <p className="text-3xl font-bold text-[#0D9488]">10–14 days</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Dashboard Only Package</p>
                  <p className="text-3xl font-bold text-[#0D9488]">7–10 days</p>
                </div>
              </div>
              <p className="text-gray-700">
                Timelines assume you can provide data access and feedback within 1–2 business days at each
                stage. We'll work around your schedule and keep you updated throughout.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0D9488] to-[#06B6D4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8">
            Book a free consultation and let's discuss your project.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#0D9488] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Book Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}