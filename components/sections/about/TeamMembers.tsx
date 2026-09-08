import Image from 'next/image';
import styles from './TeamMembers.module.css';
import { team } from '@/data/site';

export default function TeamMembers() {
  return (
      <section className={styles.teamMembers}>
        <div className={styles.r1}>
          <div className={styles.r2}>
            <div className={styles.dektop}>
              <div className={styles.tag} data-border="true">
                <div className={styles.icon}>
                  <div className={styles.r6}>
                    <Image className={styles.r7} src="/assets/media/1za2KZAbXQ3Vdi3TPz3PO0P6IUg.svg" alt="Icon" width={24} height={24} />
                  </div>
                </div>
                <div className={styles.text}>
                  <p className={styles.r9}>
                    Team Members
                  </p>
                </div>
              </div>
              <div className={styles.textContainer}>
                <div className={styles.heading}>
                  <h2 className={styles.r12}>
                    The two builders behind SunguraLabs
                  </h2>
                </div>
                <div className={styles.paragraph}>
                  <p className={styles.r14}>
                    A focused two-person studio, based in Dar es Salaam — you work directly with the people who write the code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.subContainer}>
          {team.map((member) => (
            <div className={styles.r1} key={member.name}>
              <div className={styles.r16}>
                <div className={styles.big}>
                  <div className={styles.image} data-border="true">
                    <div className={styles.r19}>
                      <Image className={styles.r20} src={member.photo} alt={member.name} width={273} height={321} loading="lazy" />
                    </div>
                  </div>
                  <div className={styles.image} data-border="true" />
                  <div className={styles.container} data-border="true">
                    <div className={styles.textContainer2}>
                      <div className={styles.name}>
                        <h3 className={styles.r24}>
                          {member.name}
                        </h3>
                      </div>
                      <div className={styles.role}>
                        <p className={styles.r26}>
                          {member.role}
                        </p>
                      </div>
                    </div>
                    <div className={styles.r27}>
                      <a className={styles.socialButton} data-border="true" href="#" aria-label={`${member.name} on LinkedIn`}>
                        <div className={styles.icon2}>
                          <div className={styles.r30}>
                            <Image className={styles.r31} src="/assets/media/ZEV5zQXoMTYnnuaxikA9nO39gQ.svg" alt="" width={21} height={20} aria-hidden="true" />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
  );
}