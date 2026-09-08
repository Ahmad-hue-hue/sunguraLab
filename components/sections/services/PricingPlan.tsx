'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './PricingPlan.module.css';

export default function PricingPlan() {
  const [yearly, setYearly] = useState(false);

  return (
      <section className={styles.pricingPlan}>
        <div className={styles.r1}>
          <div className={styles.r2}>
            <div className={styles.dektop}>
              <div className={styles.tag} data-border="true">
                <div className={styles.icon}>
                  <div className={styles.r6}>
                    <Image className={styles.r7} src="/assets/media/9DTJ5GS139lzKgnpozoPGAy2i0.svg" alt="Icon" width={20} height={20} />
                  </div>
                </div>
                <div className={styles.text}>
                  <p className={styles.r9}>
                    Pricing plans
                  </p>
                </div>
              </div>
              <div className={styles.textContainer}>
                <div className={styles.heading}>
                  <h2 className={styles.r12}>
                    SunguraLabs&apos; Fixed-Price Builds
                  </h2>
                </div>
                <div className={styles.paragraph}>
                  <p className={styles.r14}>
                    Every project is quoted at a one-time fixed price agreed up front — no hourly billing. Built in 1–4 weeks, grounded in your real data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.r1}>
          <div className={styles.r15}>
            <div className={styles.desktopMonthly}>
              <div className={styles.container} data-yearly={yearly}>
                <div className={styles.monthly} onClick={() => setYearly(false)}>
                  <p className={styles.r19}>
                    One-time
                  </p>
                </div>
                <div
                  className={styles.toggle}
                  data-border="true"
                  role="switch"
                  aria-checked={yearly}
                  aria-label="Show per-project pricing"
                  tabIndex={0}
                  onClick={() => setYearly((v) => !v)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setYearly((v) => !v);
                    }
                  }}
                >
                  <div className={styles.ellipse2} />
                </div>
                <div className={styles.yearly} onClick={() => setYearly(true)}>
                  <p className={styles.r23}>
                    Per project
                  </p>
                </div>
                <div className={styles.abstractDesign}>
                  <div className={styles.text2}>
                    <p className={styles.r26}>
                      ( fixed per project )
                    </p>
                  </div>
                  <div className={styles.design}>
                    <div className={styles.r28}>
                      <Image className={styles.r29} src="/assets/media/f0JiZEf5UFSnsTGx0XVn3jcB5s.svg" alt="Design Image" width={52} height={40} />
                    </div>
                  </div>
                  <div className={styles.design2}>
                    <div className={styles.r31}>
                      <Image className={styles.r32} src="/assets/media/NwxZKIsJvtFCFMFxK2Xgq9pVjAg.svg" alt="Design Image" width={11} height={12} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.container2}>
                <div className={styles.card} data-border="true">
                  <div className={styles.textContainer2}>
                    <div className={styles.heading2}>
                      <h3 className={styles.r37}>
                        AI Chatbot & Customer Support
                      </h3>
                    </div>
                    <div className={styles.line} />
                    <div className={styles.text3}>
                      <p className={styles.r40}>
                        Chatbots wired to your inventory, booking system or CRM — across WhatsApp, Instagram DMs and your website.
                      </p>
                    </div>
                  </div>
                  <div className={styles.textContainer3}>
                    <div className={styles.number}>
                      <p className={`${styles.r43} ${styles.priceValue}`}>
                        {yearly ? '$900' : '$900'}
                      </p>
                    </div>
                    <div className={styles.text4}>
                      <p className={styles.r45}>
                        one-time fixed price
                      </p>
                    </div>
                  </div>
                  <div className={styles.itemsContainer}>
                    <div className={styles.r47}>
                      <div className={styles.pointer1} data-border="true">
                        <div className={styles.iconWrap}>
                          <div className={styles.icon2}>
                            <div className={styles.r51}>
                              <Image className={styles.r52} src="/assets/media/EwgbXikcCY3tz44KnCvHTil6Uk.svg" alt="Tick Icon" width={18} height={18} />
                            </div>
                          </div>
                        </div>
                        <div className={styles.text5}>
                          <p className={styles.r54}>
                            Instant, accurate replies grounded in your own records.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.r47}>
                      <div className={styles.pointer1} data-border="true">
                        <div className={styles.iconWrap}>
                          <div className={styles.icon2}>
                            <div className={styles.r51}>
                              <Image className={styles.r52} src="/assets/media/EwgbXikcCY3tz44KnCvHTil6Uk.svg" alt="Tick Icon" width={18} height={18} />
                            </div>
                          </div>
                        </div>
                        <div className={styles.text5}>
                          <p className={styles.r54}>
                            Fixed price — no hourly billing
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.r55}>
                    <Link className={styles.hoverArrow} data-border="true" href="/contact">
                      <div className={styles.text6}>
                        <p className={styles.r58}>
                          Get Started
                        </p>
                      </div>
                      <div className={styles.iconRight}>
                        <div className={styles.icon}>
                          <div className={styles.r6}>
                            <Image className={styles.r60} src="/assets/media/lJSvGFGPhRLFfxcyPg1nppxYdA.svg" alt="" width={20} height={20} aria-hidden="true" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className={styles.card2} data-border="true">
                  <div className={styles.textContainer4}>
                    <div className={styles.heading2}>
                      <h3 className={styles.r37}>
                        AI-Powered Internal Tools & Automation
                      </h3>
                    </div>
                    <div className={styles.line} />
                    <div className={styles.text7}>
                      <p className={styles.r64}>
                        Connect your spreadsheets, CRM and inventory to an AI layer that summarises activity and flags anomalies.
                      </p>
                    </div>
                  </div>
                  <div className={styles.textContainer3}>
                    <div className={styles.number}>
                      <p className={`${styles.r43} ${styles.priceValue}`}>
                        {yearly ? '$1,400' : '$1,400'}
                      </p>
                    </div>
                    <div className={styles.text4}>
                      <p className={styles.r45}>
                        one-time fixed price
                      </p>
                    </div>
                  </div>
                  <div className={styles.itemsContainer2}>
                    <div className={styles.r47}>
                      <div className={styles.pointer1} data-border="true">
                        <div className={styles.iconWrap}>
                          <div className={styles.icon2}>
                            <div className={styles.r51}>
                              <Image className={styles.r52} src="/assets/media/EwgbXikcCY3tz44KnCvHTil6Uk.svg" alt="Tick Icon" width={18} height={18} />
                            </div>
                          </div>
                        </div>
                        <div className={styles.text5}>
                          <p className={styles.r54}>
                            Less manual reporting, earlier warning on what matters.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.r47}>
                      <div className={styles.pointer1} data-border="true">
                        <div className={styles.iconWrap}>
                          <div className={styles.icon2}>
                            <div className={styles.r51}>
                              <Image className={styles.r52} src="/assets/media/EwgbXikcCY3tz44KnCvHTil6Uk.svg" alt="Tick Icon" width={18} height={18} />
                            </div>
                          </div>
                        </div>
                        <div className={styles.text5}>
                          <p className={styles.r54}>
                            Fixed price — no hourly billing
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.r47}>
                      <div className={styles.pointer1} data-border="true">
                        <div className={styles.iconWrap}>
                          <div className={styles.icon2}>
                            <div className={styles.r51}>
                              <Image className={styles.r52} src="/assets/media/EwgbXikcCY3tz44KnCvHTil6Uk.svg" alt="Tick Icon" width={18} height={18} />
                            </div>
                          </div>
                        </div>
                        <div className={styles.text5}>
                          <p className={styles.r54}>
                            Grounded in your real systems
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.r47}>
                      <div className={styles.pointer1} data-border="true">
                        <div className={styles.iconWrap}>
                          <div className={styles.icon2}>
                            <div className={styles.r51}>
                              <Image className={styles.r52} src="/assets/media/EwgbXikcCY3tz44KnCvHTil6Uk.svg" alt="Tick Icon" width={18} height={18} />
                            </div>
                          </div>
                        </div>
                        <div className={styles.text5}>
                          <p className={styles.r54}>
                            Auto-generated reports
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.r55}>
                    <Link className={styles.hoverArrow} data-border="true" href="/contact">
                      <div className={styles.text6}>
                        <p className={styles.r58}>
                          Get Started
                        </p>
                      </div>
                      <div className={styles.iconRight}>
                        <div className={styles.icon}>
                          <div className={styles.r6}>
                            <Image className={styles.r60} src="/assets/media/lJSvGFGPhRLFfxcyPg1nppxYdA.svg" alt="" width={20} height={20} aria-hidden="true" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className={styles.card3} data-border="true">
                  <div className={styles.textContainer4}>
                    <div className={styles.heading2}>
                      <h3 className={styles.r37}>
                        AI Document & Data Processing
                      </h3>
                    </div>
                    <div className={styles.line} />
                    <div className={styles.text7}>
                      <p className={styles.r64}>
                        OCR plus AI extraction turns invoices, receipts, contracts and forms into structured, usable data.
                      </p>
                    </div>
                  </div>
                  <div className={styles.textContainer3}>
                    <div className={styles.number}>
                      <p className={`${styles.r43} ${styles.priceValue}`}>
                        {yearly ? '$1,200' : '$1,200'}
                      </p>
                    </div>
                    <div className={styles.text4}>
                      <p className={styles.r45}>
                        one-time fixed price
                      </p>
                    </div>
                  </div>
                  <div className={styles.itemsContainer3}>
                    <div className={styles.r47}>
                      <div className={styles.pointer1} data-border="true">
                        <div className={styles.iconWrap}>
                          <div className={styles.icon2}>
                            <div className={styles.r51}>
                              <Image className={styles.r52} src="/assets/media/EwgbXikcCY3tz44KnCvHTil6Uk.svg" alt="Tick Icon" width={18} height={18} />
                            </div>
                          </div>
                        </div>
                        <div className={styles.text5}>
                          <p className={styles.r54}>
                            Documents in, clean structured data out — no re-typing.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.r47}>
                      <div className={styles.pointer1} data-border="true">
                        <div className={styles.iconWrap}>
                          <div className={styles.icon2}>
                            <div className={styles.r51}>
                              <Image className={styles.r52} src="/assets/media/EwgbXikcCY3tz44KnCvHTil6Uk.svg" alt="Tick Icon" width={18} height={18} />
                            </div>
                          </div>
                        </div>
                        <div className={styles.text5}>
                          <p className={styles.r54}>
                            Fixed price — no hourly billing
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.r47}>
                      <div className={styles.pointer1} data-border="true">
                        <div className={styles.iconWrap}>
                          <div className={styles.icon2}>
                            <div className={styles.r51}>
                              <Image className={styles.r52} src="/assets/media/EwgbXikcCY3tz44KnCvHTil6Uk.svg" alt="Tick Icon" width={18} height={18} />
                            </div>
                          </div>
                        </div>
                        <div className={styles.text5}>
                          <p className={styles.r54}>
                            Grounded in your real data
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.r47}>
                      <div className={styles.pointer1} data-border="true">
                        <div className={styles.iconWrap}>
                          <div className={styles.icon2}>
                            <div className={styles.r51}>
                              <Image className={styles.r52} src="/assets/media/EwgbXikcCY3tz44KnCvHTil6Uk.svg" alt="Tick Icon" width={18} height={18} />
                            </div>
                          </div>
                        </div>
                        <div className={styles.text5}>
                          <p className={styles.r54}>
                            Cuts the $15–40 per-invoice manual entry cost
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.r47}>
                      <div className={styles.pointer1} data-border="true">
                        <div className={styles.iconWrap}>
                          <div className={styles.icon2}>
                            <div className={styles.r51}>
<Image className={styles.r52} src="/assets/media/EwgbXikcCY3tz44KnCvHTil6Uk.svg" alt="Tick Icon" width={18} height={18} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.text5}>
                      <p className={styles.r54}>
                        Handles invoices, receipts, contracts and forms
                      </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.r47}>
                      <div className={styles.pointer1} data-border="true">
                        <div className={styles.iconWrap}>
                          <div className={styles.icon2}>
                            <div className={styles.r51}>
                              <Image className={styles.r52} src="/assets/media/EwgbXikcCY3tz44KnCvHTil6Uk.svg" alt="Tick Icon" width={18} height={18} />
                            </div>
                          </div>
                        </div>
                        <div className={styles.text5}>
                          <p className={styles.r54}>
                            Built in 1–4 weeks
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.r55}>
                    <Link className={styles.hoverArrow} data-border="true" href="/contact">
                      <div className={styles.text6}>
                        <p className={styles.r58}>
                          Get Started
                        </p>
                      </div>
                      <div className={styles.iconRight}>
                        <div className={styles.icon}>
                          <div className={styles.r6}>
                            <Image className={styles.r60} src="/assets/media/lJSvGFGPhRLFfxcyPg1nppxYdA.svg" alt="" width={20} height={20} aria-hidden="true" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className={styles.card4} data-border="true">
                  <div className={styles.textContainer5}>
                    <div className={styles.heading2}>
                      <h3 className={styles.r70}>
                        Custom AI Knowledge Assistant (RAG)
                      </h3>
                    </div>
                    <div className={styles.line} />
                    <div className={styles.text8}>
                      <p className={styles.r72}>
                        Your company&apos;s documents, policies or product catalog become an assistant your team or customers query directly.
                        <br className={styles.r73} />
                        <br className={styles.r73} />
                      </p>
                    </div>
                  </div>
                  <div className={styles.text9}>
                    <p className={styles.r75}>
                      $1,800
                    </p>
                  </div>
                  <div className={styles.itemsContainer4}>
                    <div className={styles.r47}>
                      <div className={styles.pointer1} data-border="true">
                        <div className={styles.iconWrap}>
                          <div className={styles.icon2}>
                            <div className={styles.r51}>
                              <Image className={styles.r52} src="/assets/media/EwgbXikcCY3tz44KnCvHTil6Uk.svg" alt="Tick Icon" width={18} height={18} />
                            </div>
                          </div>
                        </div>
                        <div className={styles.text5}>
                          <p className={styles.r54}>
                            Your policies and catalog, answerable in plain language.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.r47}>
                      <div className={styles.pointer1} data-border="true">
                        <div className={styles.iconWrap}>
                          <div className={styles.icon2}>
                            <div className={styles.r51}>
                              <Image className={styles.r52} src="/assets/media/EwgbXikcCY3tz44KnCvHTil6Uk.svg" alt="Tick Icon" width={18} height={18} />
                            </div>
                          </div>
                        </div>
                        <div className={styles.text5}>
                          <p className={styles.r54}>
                            Fixed price — no hourly billing
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.r47}>
                      <div className={styles.pointer1} data-border="true">
                        <div className={styles.iconWrap}>
                          <div className={styles.icon2}>
                            <div className={styles.r51}>
                              <Image className={styles.r52} src="/assets/media/EwgbXikcCY3tz44KnCvHTil6Uk.svg" alt="Tick Icon" width={18} height={18} />
                            </div>
                          </div>
                        </div>
                        <div className={styles.text5}>
                          <p className={styles.r54}>
                            Grounded in your own data
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.r47}>
                      <div className={styles.pointer1} data-border="true">
                        <div className={styles.iconWrap}>
                          <div className={styles.icon2}>
                            <div className={styles.r51}>
                              <Image className={styles.r52} src="/assets/media/EwgbXikcCY3tz44KnCvHTil6Uk.svg" alt="Tick Icon" width={18} height={18} />
                            </div>
                          </div>
                        </div>
                        <div className={styles.text5}>
                          <p className={styles.r54}>
                            Answers grounded in your knowledge
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.r47}>
                      <div className={styles.pointer1} data-border="true">
                        <div className={styles.iconWrap}>
                          <div className={styles.icon2}>
                            <div className={styles.r51}>
                              <Image className={styles.r52} src="/assets/media/EwgbXikcCY3tz44KnCvHTil6Uk.svg" alt="Tick Icon" width={18} height={18} />
                            </div>
                          </div>
                        </div>
                        <div className={styles.text5}>
                          <p className={styles.r54}>
                            Built on Claude/OpenAI + LangChain
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.r47}>
                      <div className={styles.pointer1} data-border="true">
                        <div className={styles.iconWrap}>
                          <div className={styles.icon2}>
                            <div className={styles.r51}>
                              <Image className={styles.r52} src="/assets/media/EwgbXikcCY3tz44KnCvHTil6Uk.svg" alt="Tick Icon" width={18} height={18} />
                            </div>
                          </div>
                        </div>
                        <div className={styles.text5}>
                          <p className={styles.r54}>
                            Shipped in 1–4 weeks
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.r47}>
                      <div className={styles.pointer1} data-border="true">
                        <div className={styles.iconWrap}>
                          <div className={styles.icon2}>
                            <div className={styles.r51}>
                              <Image className={styles.r52} src="/assets/media/EwgbXikcCY3tz44KnCvHTil6Uk.svg" alt="Tick Icon" width={18} height={18} />
                            </div>
                          </div>
                        </div>
                        <div className={styles.text5}>
                          <p className={styles.r54}>
                            Confirmed scope before we start
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.r47}>
                      <div className={styles.pointer1} data-border="true">
                        <div className={styles.iconWrap}>
                          <div className={styles.icon2}>
                            <div className={styles.r51}>
                              <Image className={styles.r52} src="/assets/media/EwgbXikcCY3tz44KnCvHTil6Uk.svg" alt="Tick Icon" width={18} height={18} />
                            </div>
                          </div>
                        </div>
                        <div className={styles.text5}>
                          <p className={styles.r54}>
                            Optional $200/mo support retainer
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.r55}>
                    <Link className={styles.iconLeftRight} href="/contact">
                      <div className={styles.text10}>
                        <p className={styles.r79}>
                          Get Started
                        </p>
                      </div>
                      <div className={styles.iconRight2}>
                        <div className={styles.icon3}>
                          <div className={styles.r82}>
                            <Image className={styles.r83} src="/assets/media/Z4EozQtdVmroG1HDLS4zKFJeGo.svg" alt="Icon" width={20} height={20} />
                          </div>
                        </div>
                      </div>
                      <div className={styles.shine} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
