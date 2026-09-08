'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Faq.module.css';

export default function Faq() {
  const [faqOpen, setFaqOpen] = useState<string | null>(null);

  return (
      <section className={styles.faqS}>
        <div className={styles.r1}>
          <div className={styles.r2}>
            <div className={styles.dektop}>
              <div className={styles.tag} data-border="true">
                <div className={styles.icon}>
                  <div className={styles.r6}>
                    <Image className={styles.r7} src="/assets/media/n806fLLfwVbcz99FKpeYvQPlYU.svg" alt="Icon" width={21} height={20} />
                  </div>
                </div>
                <div className={styles.text}>
                  <p className={styles.r9}>
                    FAQ’s
                  </p>
                </div>
              </div>
              <div className={styles.textContainer}>
                <div className={styles.heading}>
                  <h2 className={styles.r12}>
                    Questions? We Have Answers
                  </h2>
                </div>
                <div className={styles.paragraph}>
                  <p className={styles.r14}>
                    Still have questions? Email us at hello@sunguralabs.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.r1}>
            <div className={styles.r16}>
              <div className={styles.big} data-border="true">
                <div className={styles.subContainer2} data-border="true">
                  <div className={styles.heading2}>
                    <p className={styles.r20}>
                      Build & Project Questions
                    </p>
                  </div>
                </div>
                <div className={styles.container}>
                  <div className={styles.r22}>
                    <div className={styles.bigClosed}>
                      <div className={styles.container2}>
                        <div
                          className={`${styles.question} ${styles.faqRow}`}
                          role="button"
                          tabIndex={0}
                          aria-expanded={faqOpen === 'What is your process for starting a new project?'}
                          onClick={() => setFaqOpen(faqOpen === 'What is your process for starting a new project?' ? null : 'What is your process for starting a new project?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'What is your process for starting a new project?' ? null : 'What is your process for starting a new project?');
                            }
                          }}
                        >
                          <div className={styles.r26}>
                            <h3 className={styles.r27}>
                              What is your process for starting a new project?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'What is your process for starting a new project?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'What is your process for starting a new project?' && (
                          <p className={styles.faqAnswer}>
                            {'A lightweight scoping call, then a fixed-price quote with confirmed scope, development in 1–2 week sprints, testing and delivery with a usage walkthrough, and post-launch support.'}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.r33}>
                    <div className={styles.bigClosed2}>
                      <div className={styles.container3}>
                        <div
                          className={`${styles.question2} ${styles.faqRow}`}
                          role="button"
                          tabIndex={0}
                          aria-expanded={faqOpen === 'Is the chatbot limited to WhatsApp?'}
                          onClick={() => setFaqOpen(faqOpen === 'Is the chatbot limited to WhatsApp?' ? null : 'Is the chatbot limited to WhatsApp?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'Is the chatbot limited to WhatsApp?' ? null : 'Is the chatbot limited to WhatsApp?');
                            }
                          }}
                        >
                          <div className={styles.r37}>
                            <h3 className={styles.r38}>
                              Is the chatbot limited to WhatsApp?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'Is the chatbot limited to WhatsApp?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'Is the chatbot limited to WhatsApp?' && (
                          <p className={styles.faqAnswer}>
                            {'No. We go beyond Meta\u2019s free native WhatsApp AI agent by connecting your bot to your inventory, booking system or CRM \u2014 and extending it to Instagram DMs and your website, grounded in your own business data.'}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.r33}>
                    <div className={styles.bigClosed2}>
                      <div className={styles.container3}>
                        <div
                          className={`${styles.question2} ${styles.faqRow}`}
                          role="button"
                          tabIndex={0}
                          aria-expanded={faqOpen === 'Which services are included in the fixed prices?'}
                          onClick={() => setFaqOpen(faqOpen === 'Which services are included in the fixed prices?' ? null : 'Which services are included in the fixed prices?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'Which services are included in the fixed prices?' ? null : 'Which services are included in the fixed prices?');
                            }
                          }}
                        >
                          <div className={styles.r37}>
                            <h3 className={styles.r38}>
                              Which services are included in the fixed prices?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'Which services are included in the fixed prices?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'Which services are included in the fixed prices?' && (
                          <p className={styles.faqAnswer}>
                            {'AI Chatbot & Customer Support ($900), AI-Powered Internal Tools & Automation ($1,400), AI Document & Data Processing ($1,200), AI Content & Marketing Automation ($700), and Custom AI Knowledge Assistant (RAG) ($1,800). Custom web apps & SaaS are quoted individually.'}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.r22}>
                    <div className={styles.bigClosed}>
                      <div className={styles.container2}>
                        <div
                          className={`${styles.question} ${styles.faqRow}`}
                          role="button"
                          tabIndex={0}
                          aria-expanded={faqOpen === 'Can I get a custom web app or SaaS build?'}
                          onClick={() => setFaqOpen(faqOpen === 'Can I get a custom web app or SaaS build?' ? null : 'Can I get a custom web app or SaaS build?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'Can I get a custom web app or SaaS build?' ? null : 'Can I get a custom web app or SaaS build?');
                            }
                          }}
                        >
                          <div className={styles.r26}>
                            <h3 className={styles.r27}>
                              Can I get a custom web app or SaaS build?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'Can I get a custom web app or SaaS build?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'Can I get a custom web app or SaaS build?' && (
                          <p className={styles.faqAnswer}>
                            {'Yes. Custom Web Apps & SaaS is a dedicated service with individual quotes \u2014 full product builds, API integrations and ongoing maintenance.'}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.r33}>
                    <div className={styles.bigClosed2}>
                      <div className={styles.container3}>
                        <div
                          className={`${styles.question2} ${styles.faqRow}`}
                          role="button"
                          tabIndex={0}
                          aria-expanded={faqOpen === 'What tech stack do you build with?'}
                          onClick={() => setFaqOpen(faqOpen === 'What tech stack do you build with?' ? null : 'What tech stack do you build with?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'What tech stack do you build with?' ? null : 'What tech stack do you build with?');
                            }
                          }}
                        >
                          <div className={styles.r37}>
                            <h3 className={styles.r38}>
                              What tech stack do you build with?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'What tech stack do you build with?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'What tech stack do you build with?' && (
                          <p className={styles.faqAnswer}>
                            {'React, Next.js, TypeScript, Tailwind CSS, TanStack Query, Supabase, Python, Claude/OpenAI, LangChain, WhatsApp Business API, Vercel, and Stripe/Flutterwave for payments.'}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.r1}>
            <div className={styles.r39}>
              <div className={styles.big2} data-border="true">
                <div className={styles.subContainer2} data-border="true">
                  <div className={styles.heading2}>
                    <p className={styles.r20}>
                      Pricing, Payments & Support
                    </p>
                  </div>
                </div>
                <div className={styles.container4}>
                  <div className={styles.r33}>
                    <div className={styles.bigClosed2}>
                      <div className={styles.container3}>
                        <div
                          className={`${styles.question2} ${styles.faqRow}`}
                          role="button"
                          tabIndex={0}
                          aria-expanded={faqOpen === 'Why are your prices so much lower than agencies?'}
                          onClick={() => setFaqOpen(faqOpen === 'Why are your prices so much lower than agencies?' ? null : 'Why are your prices so much lower than agencies?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'Why are your prices so much lower than agencies?' ? null : 'Why are your prices so much lower than agencies?');
                            }
                          }}
                        >
                          <div className={styles.r37}>
                            <h3 className={styles.r38}>
                              Why are your prices so much lower than agencies?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'Why are your prices so much lower than agencies?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'Why are your prices so much lower than agencies?' && (
                          <p className={styles.faqAnswer}>
                            {'Developer-built AI projects typically run $1,000\u2013$5,000+ globally and agency builds start at $5,000. As a focused two-person studio with East African cost structures, we deliver the same core capability at the affordable end of the range.'}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.r33}>
                    <div className={styles.bigClosed2}>
                      <div className={styles.container3}>
                        <div
                          className={`${styles.question2} ${styles.faqRow}`}
                          role="button"
                          tabIndex={0}
                          aria-expanded={faqOpen === 'How do payments work?'}
                          onClick={() => setFaqOpen(faqOpen === 'How do payments work?' ? null : 'How do payments work?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'How do payments work?' ? null : 'How do payments work?');
                            }
                          }}
                        >
                          <div className={styles.r37}>
                            <h3 className={styles.r38}>
                              How do payments work?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'How do payments work?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'How do payments work?' && (
                          <p className={styles.faqAnswer}>
                            {'Fixed-price per project with scope confirmed up front, so you know the total cost before development starts.'}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.r33}>
                    <div className={styles.bigClosed2}>
                      <div className={styles.container3}>
                        <div
                          className={`${styles.question2} ${styles.faqRow}`}
                          role="button"
                          tabIndex={0}
                          aria-expanded={faqOpen === 'Do you charge hourly?'}
                          onClick={() => setFaqOpen(faqOpen === 'Do you charge hourly?' ? null : 'Do you charge hourly?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'Do you charge hourly?' ? null : 'Do you charge hourly?');
                            }
                          }}
                        >
                          <div className={styles.r37}>
                            <h3 className={styles.r38}>
                              Do you charge hourly?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'Do you charge hourly?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'Do you charge hourly?' && (
                          <p className={styles.faqAnswer}>
                            {'No hourly billing \u2014 you pay a fixed price per project, agreed and confirmed up front.'}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.r33}>
                    <div className={styles.bigClosed2}>
                      <div className={styles.container3}>
                        <div
                          className={`${styles.question2} ${styles.faqRow}`}
                          role="button"
                          tabIndex={0}
                          aria-expanded={faqOpen === 'Which payment providers do you support?'}
                          onClick={() => setFaqOpen(faqOpen === 'Which payment providers do you support?' ? null : 'Which payment providers do you support?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'Which payment providers do you support?' ? null : 'Which payment providers do you support?');
                            }
                          }}
                        >
                          <div className={styles.r42}>
                            <h3 className={styles.r43}>
                              Which payment providers do you support?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'Which payment providers do you support?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'Which payment providers do you support?' && (
                          <p className={styles.faqAnswer}>
                            {'Payments are handled via Stripe and Flutterwave.'}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.r33}>
                    <div className={styles.bigClosed2}>
                      <div className={styles.container3}>
                        <div
                          className={`${styles.question2} ${styles.faqRow}`}
                          role="button"
                          tabIndex={0}
                          aria-expanded={faqOpen === 'What does the monthly retainer cover?'}
                          onClick={() => setFaqOpen(faqOpen === 'What does the monthly retainer cover?' ? null : 'What does the monthly retainer cover?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'What does the monthly retainer cover?' ? null : 'What does the monthly retainer cover?');
                            }
                          }}
                        >
                          <div className={styles.r37}>
                            <h3 className={styles.r38}>
                              What does the monthly retainer cover?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'What does the monthly retainer cover?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'What does the monthly retainer cover?' && (
                          <p className={styles.faqAnswer}>
                            {'The $200/mo retainer covers ongoing maintenance and support after launch. It is optional \u2014 you can move onto it whenever you\u2019re ready.'}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
