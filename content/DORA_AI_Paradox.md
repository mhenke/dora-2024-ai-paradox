# The DORA AI Paradox: Schedule & Quick Reference

**Theme**: AI's Productivity Gains vs. Stability Collapse: The Great DORA Paradox

**Core Question**: How can we maximize AI's benefits while actively reducing its negative impact on software delivery stability ($\downarrow -7.2\%$), by returning to core DORA principles (small batch sizes, user-centricity, stable priorities)?

## Meeting Schedule

| Meeting                 | Date    | Duration | Reading Required (Targeted) | Focus                                                              |
| :---------------------- | :------ | :------- | :-------------------------- | :----------------------------------------------------------------- |
| Meeting 0: Kickoff      | Week 1  | 30 min   | None                        | Baseline assessment & Current AI reliance                          |
| Meeting 1: AI's Dual Impact | Week 3  | 60 min   | Pages 17-26, 27-38          | The Paradox: Benefits (Flow, Productivity) vs. The Major Detriment (Stability Drop) |
| Meeting 2: Solution & Strategy | Week 5  | 60 min   | Pages 57-68, 69-76          | The Hypotheses: Batch Size, Vacuum, and the Power of User-Centricity/Stable Priorities |
| Meeting 3: Lessons      | Week 9  | 30 min   | Experiment data             | Review experiment results & next steps                             |

## Meeting 0: Baseline Assessment (Week 1)

**Duration**: 30 minutes | **Reading**: None

### Pre-Work (Send 2-3 days before)

Take 5 minutes to note:

*   One task you used AI for this week (code, writing, summary).
*   The last major production incident we had and its root cause (1-2 sentences).
*   How stable do our org priorities feel? (1-5 scale)

### Key Questions

*   What AI tools are we relying on today (and why)?
*   Where is our greatest current friction point in delivery (the real bottleneck)?
*   What is the current team-wide consensus on trust in AI-generated code?

**Immediate Action**: We must define one metric to track AI impact (e.g., PR size, deployment frequency).

### Outcome

Establish baseline understanding of team's current state with AI and delivery performance.

## Quick Reference: Key Concepts

### The Vacuum Hypothesis

AI increases productivity but DECREASES time on valuable work.

**Result**: A "vacuum" of time that gets filled with non-valuable work (meetings, interruptions).

### The Stability Contradiction (The Paradox)

**Observed**: Better processes (code quality, documentation, reviews)

**Observed**: WORSE delivery stability ($\downarrow -7.2\%$)

**Leading Hypothesis**: AI enables larger batch sizes (changelists), which DORA consistently shows is the primary driver for low stability.

### User-Centricity

Four behaviors that define user-centric teams:

*   Incorporate user feedback to reprioritize features.
*   Know what users want to accomplish.
*   Believe user experience is key to business success.
*   Treat user experience as top priority.

**Insight**: When teams do this well, they can achieve high product quality even without perfect delivery metrics.

### Experiment Template (for Meeting 2)

**EXPERIMENT COMMITMENT**

**Problem**: [What we're trying to improve, e.g., "The average size of our Pull Requests is increasing."]

**Hypothesis**: If we [action, e.g., "enforce a 100-line limit on AI-generated code snippets in a single PR"], then we expect [outcome, e.g., "our change failure rate to decrease by 5%"].

**Measurement**: We'll track [metric] and consider it successful if [criteria].

**Duration**: [timeframe - recommend 2-4 weeks]

**Owner**: [Who's coordinating this?]

**Check-in**: [When will we review progress?]

## Resources

Full PDF: 

$$Link to DORA report$$

DORA Quick Check: https://dora.dev/quickcheck

DORA Capabilities: https://dora.dev/capabilities

Discussion Space: 

$$Slack channel / Teams link$$

## Contact

Facilitator: 

$$Your name$$

Questions: 

$$Contact method$$

"The best teams are those that achieve elite improvement, not necessarily elite performance." - DORA Report 2024