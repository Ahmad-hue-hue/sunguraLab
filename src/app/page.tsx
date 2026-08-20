import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Reveal } from "@/components/motion/Reveal";
import { services, stats } from "@/data/site";

/* ─── Inline data for redesigned sections ────────────────────── */
const buildCards = [
  {
    num: "01",
    category: "AI Chatbot",
    title: "Conversational AI, every channel",
    description:
      "Chatbots wired to your inventory, bookings or CRM — on WhatsApp, Instagram and your site. Every answer grounded in your real data.",
  },
  {
    num: "02",
    category: "Internal Tools",
    title: "Automation that never sleeps",
    description:
      "Connect your data to an AI layer that summarises activity, flags anomalies and auto-generates reports. Your team stops doing it by hand.",
  },
  {
    num: "03",
    category: "Data Processing",
    title: "Reporting that writes itself",
    description:
      "Invoices, receipts and contracts become structured, usable data automatically — cutting the manual entry that costs $15–40 per invoice.",
  },
  {
    num: "04",
    category: "RAG Assistant",
    title: "Answers from your own docs",
    description:
      "Your company's documents become a queryable AI assistant. Answers grounded in your knowledge, not the open internet.",
  },
];

const threeReasons = [
  {
    stat: "80%",
    claim: "Less than agency pricing",
    detail:
      "Fixed project fees, no retainers, no hourly surprises — priced for East African businesses.",
  },
  {
    stat: "1–4",
    claim: "Weeks to ship",
    detail:
      "Production-grade AI systems shipped in weeks, not quarters. We stay small so we move fast.",
  },
  {
    stat: "2",
    claim: "Builders, not managers",
    detail:
      "You work directly with Ahmad and Sultan — the people actually writing the code and training the models.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ──────────────────────────────────────────────────────────────
          HERO
      ─────────────────────────────────────────────────────────────── */}
      <Box
        component="section"
        sx={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          pb: { xs: 8, md: 12 },
          pt: { xs: 18, md: 22 },
          bgcolor: "#0a0a0a",
          overflow: "hidden",
        }}
      >
        {/* Background photo */}
        <Image
          src="/images/hero-robot.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center", opacity: 0.22 }}
        />
        {/* Bottom fade */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, #0a0a0a 25%, rgba(10,10,10,0.6) 60%, transparent 100%)",
            pointerEvents: "none",
          }}
        />
        {/* Grain */}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            opacity: 0.4,
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "240px 240px",
            mixBlendMode: "overlay",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 10 }}>
          <Reveal>
            {/* Headline */}
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: "2.8rem", sm: "4.2rem", md: "5.8rem", lg: "7rem" },
                fontWeight: 900,
                letterSpacing: "-0.045em",
                lineHeight: 0.95,
                color: "#ffffff",
                maxWidth: 820,
                mb: 4.5,
              }}
            >
              We build{" "}
              <Box component="span" sx={{ color: "#16a34a", fontStyle: "italic" }}>
                AI
              </Box>{" "}
              into
              <br />
              your real
              <br />
              operations.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                color: "rgba(255,255,255,0.45)",
                maxWidth: 440,
                lineHeight: 1.7,
                mb: 5.5,
              }}
            >
              Fixed prices. Delivered in weeks. Grounded in the systems
              East African businesses already run.
            </Typography>

            <Stack direction="row" sx={{ gap: 2, flexWrap: "wrap" }}>
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: "#ffffff",
                    color: "#0a0a0a",
                    fontWeight: 700,
                    "&:hover": { bgcolor: "#d4d4d8" },
                  }}
                >
                  Start a project
                </Button>
              </Link>
              <Link href="/services" style={{ textDecoration: "none" }}>
                <Button
                  size="large"
                  sx={{
                    color: "rgba(255,255,255,0.5)",
                    fontWeight: 500,
                    "&:hover": { color: "#fff", bgcolor: "transparent" },
                  }}
                >
                  See services →
                </Button>
              </Link>
            </Stack>
          </Reveal>

          {/* Stats */}
          <Box
            sx={{
              mt: { xs: 9, md: 13 },
              pt: 5,
              borderTop: "1px solid rgba(255,255,255,0.09)",
              display: "grid",
              gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(3,1fr)" },
              gap: 4,
            }}
          >
            {stats.map((s, i) => (
              <Reveal key={s.value} delay={i * 0.07}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: { xs: "2.4rem", md: "3.2rem" },
                      fontWeight: 900,
                      letterSpacing: "-0.045em",
                      color: "#fff",
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      color: "rgba(255,255,255,0.32)",
                      mt: 1.2,
                      lineHeight: 1.55,
                      maxWidth: 170,
                    }}
                  >
                    {s.label}
                  </Typography>
                </Box>
              </Reveal>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Trusted by ────────────────────────────────────────────── */}
      <TrustedBy />

      {/* ──────────────────────────────────────────────────────────────
          SERVICES  —  editorial full-width list
      ─────────────────────────────────────────────────────────────── */}
      <Box component="section" sx={{ bgcolor: "#ffffff", py: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <Reveal>
            <Box
              sx={{
                display: "flex",
                alignItems: { sm: "flex-end" },
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 3,
                mb: 9,
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.13em",
                    textTransform: "uppercase",
                    color: "#a1a1aa",
                    mb: 2,
                  }}
                >
                  What we do
                </Typography>
                <Typography
                  component="h2"
                  sx={{
                    fontSize: { xs: "2rem", sm: "2.8rem", md: "3.6rem" },
                    fontWeight: 900,
                    letterSpacing: "-0.04em",
                    color: "#0a0a0a",
                    lineHeight: 1.02,
                    maxWidth: 480,
                  }}
                >
                  Five ways we put AI to work.
                </Typography>
              </Box>
              <Link href="/services" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#e4e4e7",
                    color: "#3f3f46",
                    fontWeight: 600,
                    "&:hover": { borderColor: "#0a0a0a", bgcolor: "transparent" },
                  }}
                >
                  All services →
                </Button>
              </Link>
            </Box>
          </Reveal>

          <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
            {services.map((service, i) => (
              <Reveal key={service.slug}>
                <Box
                  component="li"
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "36px 1fr", md: "48px 1fr 300px 36px" },
                    alignItems: "center",
                    gap: { xs: 2, md: 5 },
                    py: { xs: 3.5, md: 4.5 },
                    borderTop: i === 0 ? "1px solid #f4f4f5" : "none",
                    borderBottom: "1px solid #f4f4f5",
                    mx: { xs: -2, md: -3 },
                    px: { xs: 2, md: 3 },
                    borderRadius: "8px",
                    transition: "background 0.18s",
                    cursor: "default",
                    "&:hover": {
                      bgcolor: "#fafafa",
                      "& .sn": { color: "#16a34a" },
                      "& .st": { color: "#16a34a" },
                      "& .sa": { transform: "translateX(6px)", color: "#16a34a" },
                    },
                  }}
                >
                  <Typography
                    className="sn"
                    sx={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.07em",
                      color: "#d4d4d8",
                      transition: "color 0.18s",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </Typography>

                  <Box>
                    <Typography
                      className="st"
                      sx={{
                        fontSize: { xs: "1.05rem", md: "1.3rem" },
                        fontWeight: 700,
                        letterSpacing: "-0.015em",
                        color: "#0a0a0a",
                        transition: "color 0.18s",
                      }}
                    >
                      {service.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.82rem",
                        color: "#a1a1aa",
                        mt: 0.4,
                        lineHeight: 1.5,
                        display: { xs: "block", md: "none" },
                      }}
                    >
                      {service.short}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "0.85rem",
                      color: "#a1a1aa",
                      lineHeight: 1.55,
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    {service.short}
                  </Typography>

                  <Typography
                    className="sa"
                    sx={{
                      fontSize: "1.1rem",
                      color: "#d4d4d8",
                      display: { xs: "none", md: "block" },
                      transition: "transform 0.18s, color 0.18s",
                      textAlign: "right",
                    }}
                  >
                    →
                  </Typography>
                </Box>
              </Reveal>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ──────────────────────────────────────────────────────────────
          WHAT WE BUILD  —  2×2 grid, huge ghost numbers
      ─────────────────────────────────────────────────────────────── */}
      <Box component="section" sx={{ bgcolor: "#0a0a0a", py: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <Reveal>
            <Typography
              sx={{
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                color: "#3f3f46",
                mb: 2,
              }}
            >
              What we build
            </Typography>
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.8rem", md: "3.6rem" },
                fontWeight: 900,
                letterSpacing: "-0.04em",
                color: "#ffffff",
                lineHeight: 1.02,
                maxWidth: 540,
                mb: 8,
              }}
            >
              A full suite of AI, in one studio.
            </Typography>
          </Reveal>

          <Grid
            container
            sx={{
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            {buildCards.map((card, i) => (
              <Grid key={card.title} size={{ xs: 12, sm: 6 }}>
                <Reveal delay={(i % 2) * 0.06}>
                  <Box
                    sx={{
                      position: "relative",
                      p: { xs: 4, md: 5.5 },
                      minHeight: { sm: 270 },
                      overflow: "hidden",
                      borderRight: {
                        sm: i % 2 === 0 ? "1px solid rgba(255,255,255,0.07)" : "none",
                      },
                      borderBottom:
                        i < buildCards.length - 2
                          ? "1px solid rgba(255,255,255,0.07)"
                          : "none",
                      transition: "background 0.25s",
                      "&:hover": { bgcolor: "rgba(255,255,255,0.025)" },
                    }}
                  >
                    {/* Ghost number */}
                    <Typography
                      aria-hidden
                      sx={{
                        position: "absolute",
                        bottom: -24,
                        right: -4,
                        fontSize: "10rem",
                        fontWeight: 900,
                        letterSpacing: "-0.06em",
                        color: "rgba(255,255,255,0.03)",
                        lineHeight: 1,
                        userSelect: "none",
                        pointerEvents: "none",
                      }}
                    >
                      {card.num}
                    </Typography>

                    <Chip
                      label={card.category}
                      size="small"
                      sx={{
                        bgcolor: "rgba(22,163,74,0.13)",
                        color: "#4ade80",
                        fontWeight: 700,
                        fontSize: "0.67rem",
                        letterSpacing: "0.05em",
                        height: 22,
                        mb: 3,
                        "& .MuiChip-label": { px: 1.5 },
                      }}
                    />

                    <Typography
                      sx={{
                        fontSize: { xs: "1.15rem", md: "1.35rem" },
                        fontWeight: 800,
                        letterSpacing: "-0.025em",
                        color: "#ffffff",
                        lineHeight: 1.2,
                        mb: 2,
                      }}
                    >
                      {card.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "0.875rem",
                        color: "#52525b",
                        lineHeight: 1.7,
                        maxWidth: 340,
                      }}
                    >
                      {card.description}
                    </Typography>
                  </Box>
                </Reveal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ──────────────────────────────────────────────────────────────
          WHY US  —  3 big facts with green stat numbers
      ─────────────────────────────────────────────────────────────── */}
      <Box component="section" sx={{ bgcolor: "#f5f5f7", py: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <Reveal>
            <Typography
              sx={{
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                color: "#a1a1aa",
                mb: 2,
              }}
            >
              Why us
            </Typography>
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.8rem", md: "3.6rem" },
                fontWeight: 900,
                letterSpacing: "-0.04em",
                color: "#0a0a0a",
                lineHeight: 1.02,
                maxWidth: 500,
                mb: { xs: 7, md: 11 },
              }}
            >
              Agency-grade AI, without the overhead.
            </Typography>
          </Reveal>

          <Grid container spacing={{ xs: 5, md: 8 }}>
            {threeReasons.map((item, i) => (
              <Grid key={item.claim} size={{ xs: 12, md: 4 }}>
                <Reveal delay={i * 0.09}>
                  <Box sx={{ borderTop: "2px solid #0a0a0a", pt: 4 }}>
                    <Typography
                      sx={{
                        fontSize: { xs: "3.8rem", md: "5rem" },
                        fontWeight: 900,
                        letterSpacing: "-0.05em",
                        color: "#16a34a",
                        lineHeight: 1,
                        mb: 2.5,
                      }}
                    >
                      {item.stat}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "1.1rem", md: "1.2rem" },
                        fontWeight: 700,
                        letterSpacing: "-0.015em",
                        color: "#0a0a0a",
                        mb: 1.5,
                      }}
                    >
                      {item.claim}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "0.9rem", color: "#71717a", lineHeight: 1.7 }}
                    >
                      {item.detail}
                    </Typography>
                  </Box>
                </Reveal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ──────────────────────────────────────────────────────────────
          CTA  —  dark, green glow, centered
      ─────────────────────────────────────────────────────────────── */}
      <Box
        component="section"
        sx={{
          bgcolor: "#0a0a0a",
          py: { xs: 14, md: 22 },
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            bottom: "-60px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "350px",
            background:
              "radial-gradient(ellipse at center, rgba(22,163,74,0.22) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
          <Reveal>
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: "2.4rem", sm: "3.4rem", md: "4.2rem" },
                fontWeight: 900,
                letterSpacing: "-0.045em",
                color: "#ffffff",
                lineHeight: 1.02,
                mb: 3,
              }}
            >
              Ready to build something real?
            </Typography>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.38)",
                fontSize: "1rem",
                lineHeight: 1.65,
                mb: 5.5,
              }}
            >
              Free 30-minute scoping call. You leave with a fixed-price quote and a clear plan.
            </Typography>
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "#16a34a",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  px: 5,
                  "&:hover": { bgcolor: "#15803d" },
                }}
              >
                Start a project
              </Button>
            </Link>
          </Reveal>
        </Container>
      </Box>
    </>
  );
}
