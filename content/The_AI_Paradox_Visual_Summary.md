# The AI Paradox: Visual Summary

From the 2024 DORA Accelerate State of DevOps Report

## The Central Tension

AI ADOPTION CREATES TWO OPPOSING FORCES:

✓ CLEAR BENEFITS              vs.        ⚠ UNEXPECTED CONSEQUENCES
  (Individual & Process Level)              (Delivery & Stability Level: ↓ 7.2%)


## What's Working: The Benefits

### Individual Level (per 25% increase in AI adoption)

Productivity        ↑ +2.1%
Flow state          ↑ +2.6%
Job satisfaction    ↑ +2.2%

BUT: Time on valuable work ↓ −2.6%  ⚠


### Process Level

Code quality           ↑ +3.4%
Documentation quality  ↑ +7.5%
Code review speed      ↑ +3.1%
Approval speed         ↑ +1.3%
Code complexity        ↓ −1.8%


### Team & Organization Level

Team performance           ↑ +1.4%
Organizational performance ↑ +2.3%
Product performance        → +0.2% (minimal change)


## What's Broken: The Contradiction

### Delivery Performance (per 25% increase in AI adoption)

⚠ Software delivery stability  ↓ −7.2%  (MAJOR DECLINE)
⚠ Software delivery throughput ↓ −1.5%  (minor decline)


### The Paradox:
Historically, better code quality + faster reviews = better delivery performance

With AI: Better processes → WORSE delivery stability

This shouldn't happen!

### The Leading Hypothesis

AI → Faster code writing → Larger changelists → Lower stability

DORA's Basic Principle: Small batch sizes = Fast + Stable
AI may be causing us to forget this principle


### The Vacuum Hypothesis

Why does AI increase productivity but DECREASE time on valuable work?

BEFORE AI:
[████████ Valuable Work: 60%] [█████ Toil: 40%]

AFTER AI:
[███████ Valuable Work: 57%] [█████ Toil: 40%] [? Mystery: 3%]

Theory: AI helps us finish valuable work FASTER, creating a time vacuum.
That vacuum gets filled with... meetings, interruptions, context switching.
AI doesn't reduce TOIL (meetings, bureaucracy) - it just speeds up the good stuff.


### The Trust Paradox

39.2% of developers report little or no trust in AI-generated code

YET

75.9% rely on AI for at least one task

Why? Low trust doesn't stop usage - people just verify and modify the output.
"Mostly correct" code that needs tweaking is valuable enough to use.


### The Alternative Path: User-Centricity

DORA's Surprising Finding:

"When organizations focus on the user, stability and throughput of software
delivery are not a requirement for product quality." (p. 59)

Traditional Path to Success:
  Fast delivery + Stable delivery = High-performing product

Alternative Path to Success:
  Deep user understanding = High-performing product
  (even with imperfect delivery metrics)


### Four behaviors of user-centric teams:

✓ Incorporate user feedback to reprioritize features

✓ Know what users want to accomplish

✓ Believe user experience is key to business success

✓ Treat user experience as top priority

### The Priority Stability Problem

Unstable organizational priorities lead to:
  • Meaningful DECREASE in productivity
  • Substantial INCREASE in burnout

This effect persists even with:
  ✓ Strong transformational leadership
  ✓ High-quality internal documentation
  ✓ User-centric approach

Fix: Stabilize priorities (easier said than done)


## AI Adoption Statistics

### Organizations:
  • 81% have shifted priorities to increase AI incorporation
  • AI prioritization varies by org size (smaller = faster adoption)
  • No meaningful difference by industry vertical

### Individuals:
  • 75.9% rely on AI for at least one task
  • Top uses: Writing code (74.9%), Summarizing info (71.2%)
  • 75% report positive productivity gains
  • 39.2% report little/no trust in AI code quality


## The Future Outlook: Mixed Feelings

Respondents expect AI will have POSITIVE impact on:

Product quality (in 1, 5, and 10 years)

Respondents expect AI will have NEGATIVE impact on:

Their own careers (peaks at 5 years)

Society as a whole (peaks at 5 years)

The environment (peaks at 5 years)

The Disconnect: Short-term experience is positive, but long-term expectations are pessimistic.

## The DORA Continuous Improvement Cycle

1. Identify area to improve
         ↓
2. Measure baseline
         ↓
3. Develop hypotheses
         ↓
4. Commit to a plan  ← OUR BOOK CLUB ENDS HERE
         ↓
5. Do the work
         ↓
6. Measure progress
         ↓
7. REPEAT ↻


Key Insight: "The best teams are those that achieve elite improvement,
not necessarily elite performance."

## Key Questions for Discussion

### Meeting 1: Benefits & Paradox

Where does the AI-freed time actually go?

Is code quality truly better, or just easier to work with?

Why the disconnect between current gains and future pessimism?

### Meeting 2: Detriments & Strategy

Are our batch sizes increasing with AI?

Can we measure this?

How user-centric are we really?

How stable are our priorities?

What experiment will we commit to?

## The Bottom Line

AI IS TRANSFORMATIVE, BUT COMPLEX:

✓ Individuals feel more productive, satisfied, and in flow
✓ Code quality, documentation, and reviews improve
⚠ But delivery stability takes a significant hit
⚠ And valuable work time mysteriously decreases

THE CHALLENGE:
Maximize benefits while managing trade-offs through:
  • Small batch sizes (DORA's core principle)
  • User-centricity (alternative path to quality)
  • Stable priorities (foundation for well-being)
  • Continuous improvement (the only path forward)


Source: 2024 DORA Accelerate State of DevOps Report
Available at: https://dora.dev/research/2024/dora-report/