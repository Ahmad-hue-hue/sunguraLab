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
                    <Image className={styles.r7} src="/assets/media/9Fy6OwpnyuD8RM2TG1VObnDX4.svg" alt="Icon" width={21} height={20} />
                  </div>
                </div>
                <div className={styles.text}>
                  <p className={styles.r9}>
                    FAQ
                  </p>
                </div>
              </div>
              <div className={styles.textContainer}>
                <div className={styles.heading}>
                  <h2 className={styles.r12}>
                    Got questions? We have answers
                  </h2>
                </div>
                <div className={styles.paragraph}>
                  <p className={styles.r14}>
                    Still have questions? Email hello@sunguralabs.com and we&apos;ll get back within one business day.
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
                      Getting Started
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
                          aria-expanded={faqOpen === 'How fast will you get back to me?'}
                          onClick={() => setFaqOpen(faqOpen === 'How fast will you get back to me?' ? null : 'How fast will you get back to me?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'How fast will you get back to me?' ? null : 'How fast will you get back to me?');
                            }
                          }}
                        >
                          <div className={styles.r26}>
                            <h3 className={styles.r27}>
                              How fast will you get back to me?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'How fast will you get back to me?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'How fast will you get back to me?' && (
                          <p className={styles.faqAnswer}>
                            {'Reach us at hello@sunguralabs.com — we aim to respond within one business day.'}
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
                          aria-expanded={faqOpen === 'What happens after I reach out?'}
                          onClick={() => setFaqOpen(faqOpen === 'What happens after I reach out?' ? null : 'What happens after I reach out?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'What happens after I reach out?' ? null : 'What happens after I reach out?');
                            }
                          }}
                        >
                          <div className={styles.r37}>
                            <h3 className={styles.r38}>
                              What happens after I reach out?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'What happens after I reach out?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'What happens after I reach out?' && (
                          <p className={styles.faqAnswer}>
                            {'You\u2019ll be invited to a free 30–45 minute scoping call covering your workflow, data sources and systems to integrate, after which you\u2019ll get a fixed-price quote with confirmed scope.'}
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
                          aria-expanded={faqOpen === 'Can we meet in person?'}
                          onClick={() => setFaqOpen(faqOpen === 'Can we meet in person?' ? null : 'Can we meet in person?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'Can we meet in person?' ? null : 'Can we meet in person?');
                            }
                          }}
                        >
                          <div className={styles.r37}>
                            <h3 className={styles.r38}>
                              Can we meet in person?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'Can we meet in person?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'Can we meet in person?' && (
                          <p className={styles.faqAnswer}>
                            {'We\u2019re based in Dar es Salaam, Tanzania and happy to meet locally — we also work fully remotely with clients across East Africa and beyond.'}
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
                          aria-expanded={faqOpen === 'Which businesses do you typically work with?'}
                          onClick={() => setFaqOpen(faqOpen === 'Which businesses do you typically work with?' ? null : 'Which businesses do you typically work with?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'Which businesses do you typically work with?' ? null : 'Which businesses do you typically work with?');
                            }
                          }}
                        >
                          <div className={styles.r26}>
                            <h3 className={styles.r27}>
                              Which businesses do you typically work with?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'Which businesses do you typically work with?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'Which businesses do you typically work with?' && (
                          <p className={styles.faqAnswer}>
                            {'East African SMEs — retail, real-estate and property management, logistics, service businesses — and early-stage startups and founders who need an AI-integrated MVP built quickly and affordably.'}
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
                          aria-expanded={faqOpen === 'What do I need to prepare for the first call?'}
                          onClick={() => setFaqOpen(faqOpen === 'What do I need to prepare for the first call?' ? null : 'What do I need to prepare for the first call?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'What do I need to prepare for the first call?' ? null : 'What do I need to prepare for the first call?');
                            }
                          }}
                        >
                          <div className={styles.r37}>
                            <h3 className={styles.r38}>
                              What do I need to prepare for the first call?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'What do I need to prepare for the first call?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'What do I need to prepare for the first call?' && (
                          <p className={styles.faqAnswer}>
                            {'Nothing formal. If it\u2019s convenient, have an idea of where your data lives — CRM, spreadsheets, WhatsApp groups, booking systems — and the process you\u2019d most like to automate.'}
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
                      Working with SunguraLabs
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
                          aria-expanded={faqOpen === 'How much does a custom AI build cost?'}
                          onClick={() => setFaqOpen(faqOpen === 'How much does a custom AI build cost?' ? null : 'How much does a custom AI build cost?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'How much does a custom AI build cost?' ? null : 'How much does a custom AI build cost?');
                            }
                          }}
                        >
                          <div className={styles.r37}>
                            <h3 className={styles.r38}>
                              How much does a custom AI build cost?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'How much does a custom AI build cost?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'How much does a custom AI build cost?' && (
                          <p className={styles.faqAnswer}>
                            {'Pricing is fixed per project. AI Chatbot & Customer Support is $900, AI-Powered Internal Tools & Automation is $1,400, AI Document & Data Processing is $1,200, AI Content & Marketing Automation is $700, and a Custom AI Knowledge Assistant (RAG) is $1,800. Custom web apps and SaaS are quoted individually. No hourly billing.'}
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
                          aria-expanded={faqOpen === 'How long does a project take?'}
                          onClick={() => setFaqOpen(faqOpen === 'How long does a project take?' ? null : 'How long does a project take?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'How long does a project take?' ? null : 'How long does a project take?');
                            }
                          }}
                        >
                          <div className={styles.r37}>
                            <h3 className={styles.r38}>
                              How long does a project take?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'How long does a project take?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'How long does a project take?' && (
                          <p className={styles.faqAnswer}>
                            {'Most projects are delivered in 1–4 weeks depending on scope, built in focused 1–2 week sprints — including mapping your data sources so the AI is grounded in your real records.'}
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
                          aria-expanded={faqOpen === 'Do you offer support after launch?'}
                          onClick={() => setFaqOpen(faqOpen === 'Do you offer support after launch?' ? null : 'Do you offer support after launch?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'Do you offer support after launch?' ? null : 'Do you offer support after launch?');
                            }
                          }}
                        >
                          <div className={styles.r37}>
                            <h3 className={styles.r38}>
                              Do you offer support after launch?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'Do you offer support after launch?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'Do you offer support after launch?' && (
                          <p className={styles.faqAnswer}>
                            {'Yes. Every project includes post-launch support, and you can move onto an optional Monthly Maintenance & Support Retainer at $200/mo whenever it suits you.'}
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
                          aria-expanded={faqOpen === 'Are we paying hourly or per project?'}
                          onClick={() => setFaqOpen(faqOpen === 'Are we paying hourly or per project?' ? null : 'Are we paying hourly or per project?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'Are we paying hourly or per project?' ? null : 'Are we paying hourly or per project?');
                            }
                          }}
                        >
                          <div className={styles.r42}>
                            <h3 className={styles.r43}>
                              Are we paying hourly or per project?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'Are we paying hourly or per project?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'Are we paying hourly or per project?' && (
                          <p className={styles.faqAnswer}>
                            {'Per project, at a fixed price agreed up front. You get a clear quote and confirmed scope before development starts, so there are no surprise costs.'}
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
                          aria-expanded={faqOpen === 'Who actually works on our project?'}
                          onClick={() => setFaqOpen(faqOpen === 'Who actually works on our project?' ? null : 'Who actually works on our project?')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFaqOpen(faqOpen === 'Who actually works on our project?' ? null : 'Who actually works on our project?');
                            }
                          }}
                        >
                          <div className={styles.r37}>
                            <h3 className={styles.r38}>
                              Who actually works on our project?
                            </h3>
                          </div>
                          <div className={styles.iconContainer}>
                            <div className={`${styles.plusIcon} ${faqOpen === 'Who actually works on our project?' ? styles.faqIconOpen : ''}`}>
                              <div className={styles.r30}>
                                <Image className={styles.r31} src="/assets/media/leohuAtxHXf3P9ABFpoZKAm5U.svg" alt="Plus Icon" width={24} height={24} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {faqOpen === 'Who actually works on our project?' && (
                          <p className={styles.faqAnswer}>
                            {'You work directly with SunguraLabs\u2019 two-person team — Ahmad on development and technical architecture, Sultan Rais on client communication and operations. No account managers relaying messages.'}
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
