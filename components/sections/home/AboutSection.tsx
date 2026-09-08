import Image from 'next/image';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
      <section className={styles.aboutSection}>
        <div className={styles.r1}>
          <div className={styles.r2}>
            <div className={styles.dektop}>
              <div className={styles.tag} data-border="true">
                <div className={styles.icon}>
                  <div className={styles.r6}>
                    <Image className={styles.r7} src="/assets/media/kXzKnSo8AYBBiRWPv9cmra68Z38.svg" alt="Icon" width={20} height={20} />
                  </div>
                </div>
                <div className={styles.text}>
                  <p className={styles.r9}>
                    About us
                  </p>
                </div>
              </div>
              <div className={styles.textContainer}>
                <div className={styles.heading}>
                  <h2 className={styles.r12}>
                    About SunguraLabs
                  </h2>
                </div>
                <div className={styles.paragraph}>
                  <p className={styles.r14}>
                    SunguraLabs is a two-person AI-integrated software studio in Dar es Salaam, Tanzania, building production-grade AI systems for East African businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.container}>
            <div className={styles.r1}>
              <div className={styles.image}>
                <div className={styles.r18}>
                  <Image className={styles.r19} src="/assets/media/cLYzyomAKkuIY6hVgkscLfTmpQ.jpg" alt="About Us Image" width={545} height={363} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container2}>
            <div className={styles.subContainer2}>
              <div className={styles.card}>
                <div className={styles.textContainer2}>
                  <div className={styles.heading2}>
                    <h3 className={styles.r25}>
                      2
                    </h3>
                  </div>
                  <div className={styles.text2}>
                    <h4 className={styles.r27}>
                      Builders on every project
                    </h4>
                  </div>
                </div>
                <div className={styles.line} />
                <div className={styles.paragraph2}>
                  <p className={styles.r30}>
                    You work directly with Ahmad and Sultan — the two people actually writing the code.
                  </p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.textContainer2}>
                  <div className={styles.heading2}>
                    <h3 className={styles.r25}>
                      6
                    </h3>
                  </div>
                  <div className={styles.text2}>
                    <h4 className={styles.r27}>
                      AI services from $700
                    </h4>
                  </div>
                </div>
                <div className={styles.line} />
                <div className={styles.paragraph2}>
                  <p className={styles.r30}>
                    Six fixed-price AI services — chatbots, automation, document processing, content, knowledge assistants and custom builds.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.subContainer2}>
              <div className={styles.card}>
                <div className={styles.textContainer2}>
                  <div className={styles.heading2}>
                    <h3 className={styles.r25}>
                      78%
                    </h3>
                  </div>
                  <div className={styles.text2}>
                    <h4 className={styles.r27}>
                      of SMEs sell through WhatsApp
                    </h4>
                  </div>
                </div>
                <div className={styles.line} />
                <div className={styles.paragraph2}>
                  <p className={styles.r30}>
                    Sub-Saharan SMEs sell primarily through WhatsApp — but handle it manually.
                  </p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.textContainer2}>
                  <div className={styles.heading2}>
                    <h3 className={styles.r25}>
                      1–4
                    </h3>
                  </div>
                  <div className={styles.text2}>
                    <h4 className={styles.r27}>
                      Weeks to ship
                    </h4>
                  </div>
                </div>
                <div className={styles.line} />
                <div className={styles.paragraph2}>
                  <p className={styles.r30}>
                    Production-grade AI delivered in weeks, built in focused 1–2 week sprints.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
