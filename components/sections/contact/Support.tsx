import Image from 'next/image';
import Link from 'next/link';
import styles from './Support.module.css';

export default function Support() {
  return (
      <section className={styles.support}>
        <div className={styles.r1}>
          <div className={styles.r2}>
            <div className={styles.dektop}>
              <div className={styles.tag} data-border="true">
                <div className={styles.icon}>
                  <div className={styles.r6}>
                    <Image className={styles.r7} src="/assets/media/HF8M5tPq0nwy3do9DLOgTcr1f2g.svg" alt="Icon" width={20} height={20} />
                  </div>
                </div>
                <div className={styles.text}>
                  <p className={styles.r9}>
                    Support
                  </p>
                </div>
              </div>
              <div className={styles.textContainer}>
                <div className={styles.heading}>
                  <h2 className={styles.r12}>
                    Three ways to reach us
                  </h2>
                </div>
                <div className={styles.paragraph}>
                  <p className={styles.r14}>
                    Every project starts the same way — an email, a short call, and a fixed-price quote with confirmed scope.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.card} data-border="true">
            <div className={styles.container}>
              <div className={styles.subContainer2}>
                <div className={styles.icon2}>
                  <div className={styles.r20}>
                    <Image className={styles.r21} src="/assets/media/AjRSp79fx1LPv4e4B1KlsLtdEZc.svg" alt="Icon" width={24} height={24} />
                  </div>
                </div>
                <div className={styles.heading2}>
                  <h3 className={styles.r23}>
                    Email us
                  </h3>
                </div>
              </div>
              <div className={styles.paragraph2}>
                <p className={styles.r25}>
                  hello@sunguralabs.com — we aim to respond within one business day.
                </p>
              </div>
            </div>
            <div className={styles.r1}>
              <div className={styles.r26}>
                <Link className={styles.hoverArrow} data-border="true" href="/contact#hero">
                  <div className={styles.text2}>
                    <p className={styles.r29}>
                      Get in Touch
                    </p>
                  </div>
                  <div className={styles.iconRight}>
                    <div className={styles.icon}>
                      <div className={styles.r6}>
                        <Image className={styles.r31} src="/assets/media/lJSvGFGPhRLFfxcyPg1nppxYdA.svg" alt="" width={20} height={20} aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.card2} data-border="true">
            <div className={styles.container2}>
              <div className={styles.subContainer3}>
                <div className={styles.icon2}>
                  <div className={styles.r20}>
                    <Image className={styles.r35} src="/assets/media/JTpykLKaHYU0B6cgqBPTa5MAoM.svg" alt="Icon" width={25} height={24} />
                  </div>
                </div>
                <div className={styles.heading3}>
                  <h3 className={styles.r37}>
                    Where we&apos;re based
                  </h3>
                </div>
              </div>
              <div className={styles.paragraph3}>
                <p className={styles.r39}>
                  Dar es Salaam, Tanzania — remote-friendly, working with clients across East Africa and beyond.
                </p>
              </div>
            </div>
            <div className={styles.r1}>
              <div className={styles.r40}>
                <Link className={styles.hoverArrow2} data-border="true" href="/contact#hero">
                  <div className={styles.text2}>
                    <p className={styles.r29}>
                      Get in Touch
                    </p>
                  </div>
                  <div className={styles.iconRight}>
                    <div className={styles.icon}>
                      <div className={styles.r6}>
                        <Image className={styles.r31} src="/assets/media/lJSvGFGPhRLFfxcyPg1nppxYdA.svg" alt="" width={20} height={20} aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.card} data-border="true">
            <div className={styles.container}>
              <div className={styles.subContainer4}>
                <div className={styles.icon2}>
                  <div className={styles.r20}>
                    <Image className={styles.r35} src="/assets/media/2txGmcOBXehPQnYosck02lNP5DM.svg" alt="Icon" width={25} height={24} />
                  </div>
                </div>
                <div className={styles.heading2}>
                  <h3 className={styles.r23}>
                    Start with a scoping call
                  </h3>
                </div>
              </div>
              <div className={styles.paragraph2}>
                <p className={styles.r25}>
                  A free 30–45 minute call covering your workflow and data sources, then a fixed-price quote with confirmed scope.
                </p>
              </div>
            </div>
            <div className={styles.r1}>
              <div className={styles.r26}>
                <Link className={styles.hoverArrow} data-border="true" href="/contact#hero">
                  <div className={styles.text2}>
                    <p className={styles.r29}>
                      Get in Touch
                    </p>
                  </div>
                  <div className={styles.iconRight}>
                    <div className={styles.icon}>
                      <div className={styles.r6}>
                        <Image className={styles.r31} src="/assets/media/lJSvGFGPhRLFfxcyPg1nppxYdA.svg" alt="" width={20} height={20} aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
