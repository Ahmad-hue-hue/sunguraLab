import Image from 'next/image';
import styles from './OurStory.module.css';

export default function OurStory() {
  return (
      <section className={styles.ourStory}>
        <div className={styles.r1}>
          <div className={styles.r2}>
            <div className={styles.dektop}>
              <div className={styles.tag} data-border="true">
                <div className={styles.icon}>
                  <div className={styles.r6}>
                    <Image className={styles.r7} src="/assets/media/nHQWAkLjayQoAbLHLxTToqw5Yc.svg" alt="Icon" width={21} height={20} />
                  </div>
                </div>
                <div className={styles.text}>
                  <p className={styles.r9}>
                    Our Story
                  </p>
                </div>
              </div>
              <div className={styles.textContainer}>
                <div className={styles.heading}>
                  <h2 className={styles.r12}>
                    Our Story in Facts
                  </h2>
                </div>
                <div className={styles.paragraph}>
                  <p className={styles.r14}>
                    SunguraLabs is a two-person studio in Dar es Salaam, Tanzania, building production-grade AI systems grounded in real business data at fixed, affordable prices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.subContainer}>
            <div className={styles.container2}>
              <div className={styles.card} data-border="true">
                <div className={styles.number}>
                  <p className={styles.r20}>
                    01
                  </p>
                </div>
                <div className={styles.container3}>
                  <div className={styles.heading2}>
                    <h3 className={styles.r23}>
                      Founded in Dar es Salaam
                    </h3>
                  </div>
                  <div className={styles.text2}>
                    <p className={styles.r25}>
                      Built and run by two builders — Ahmad on Development &amp; Technical Architecture, Sultan Rais on Client Communication &amp; Operations.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.card2} data-border="true">
                <div className={styles.number2}>
                  <p className={styles.r28}>
                    02
                  </p>
                </div>
                <div className={styles.container4}>
                  <div className={styles.heading3}>
                    <h3 className={styles.r31}>
                      6 services priced from $700
                    </h3>
                  </div>
                  <div className={styles.text3}>
                    <p className={styles.r33}>
                      Six fixed-price AI services — chatbots, automation, document processing, content, knowledge assistants and custom builds — starting at $700.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.card} data-border="true">
                <div className={styles.number}>
                  <p className={styles.r20}>
                    03
                  </p>
                </div>
                <div className={styles.container3}>
                  <div className={styles.heading2}>
                    <h3 className={styles.r23}>
                      12 tools across our stack
                    </h3>
                  </div>
                  <div className={styles.text2}>
                    <p className={styles.r25}>
                      React, Next.js, TypeScript, Supabase, Python and Claude/OpenAI are among the twelve tools behind every build.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.progressBar}>
              <div className={styles.line} />
              <div className={styles.circle} />
              <div className={styles.line2} />
              <div className={styles.circle} />
              <div className={styles.line2} />
              <div className={styles.circle} />
              <div className={styles.line} />
            </div>
          </div>
        </div>
      </section>
  );
}
