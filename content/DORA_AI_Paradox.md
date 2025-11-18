# The DORA AI Paradox: Book Club Guide

**Theme**: AI as an Amplifier: The Paradox of Speed vs. Stability

**Core Question**: How can we use AI to amplify our strengths rather than our weaknesses? We will explore why AI increases throughput but hurts stability (↓ -7.2%), and how to build the foundational capabilities (Platform Engineering, VSM) to fix it.

**Duration**: 6 weeks (flexible: can run in 4 weeks if weekly) | **Format**: 3 core meetings + optional Kickoff | **Meeting Frequency**: Every 1-2 weeks

## Target Audience

This book club is designed for:
- **Individual contributors** (software engineers, SREs) who use AI tools and can influence team practices
- **Tech leads** who want to guide their team's AI adoption strategy
- **Engineering managers** seeking to understand AI's organizational impact

**Time commitment**: 
- ~30 min reading every 1-2 weeks
- 60-70 min per meeting (3 meetings total)
- Optional 30-min kickoff for baseline assessment

## Learning Objectives

*   Establish baseline understanding of current AI usage and delivery friction.
*   Critically analyze the AI Paradox: improved processes leading to worse outcomes.
*   Understand AI as an **Amplifier**: magnifying both strengths and dysfunctions.
*   Identify core drivers: Batch Size, Stable Priorities, and Platform Quality.
*   Commit to actionable strategies using the **DORA AI Capabilities Model**.

## Resources
*   **Source 1**: [2024 DORA Accelerate State of DevOps Report](https://dora.dev/research/2024/dora-report/)
*   **Source 2**: [2025 DORA State of AI-Assisted Software Development](https://cloud.google.com/resources/content/2025-dora-ai-assisted-software-development-report?hl=en)

**Reading Note**: Source 1 (2024) provides foundational context on AI adoption and the initial "AI Paradox" findings. Source 2 (2025) updates these findings with the "Amplifier" concept, Team Profiles, and Capabilities Model. Page ranges are curated to minimize overlap—you won't be reading the same content twice.

## Book Club Schedule

| Week | Activity | Duration | Reading Required | Focus |
| :--- | :------- | :------- | :--------------- | :---- |
| Week 0 | **Meeting 0: Kickoff** | 30 min | None | Setting the stage, baseline assessment & questions |
| Week 1-2 | Pre-reading for Meeting 1 | Self-paced | Source 1: 17-38; Source 2: 3-6 | — |
| Week 2 | **Meeting 1: The AI Paradox** | 60 min | Source 1: 17-38; Source 2: 3-6 | The Amplifier Effect, Individual Benefits, and the Vacuum Hypothesis |
| Week 3-4 | Pre-reading for Meeting 2 | Self-paced | Source 1: 57-68; Source 2: 11-16 | — |
| Week 4 | **Meeting 2: Organizational Friction** | 60 min | Source 1: 57-68; Source 2: 11-16 | Throughput vs. Stability, Team Profiles, and Value |
| Week 5-6 | Pre-reading for Meeting 3 | Self-paced | Source 1: 69-76; Source 2: 49-64 | — |
| Week 6 | **Meeting 3: Strategy & Success** | 60 min | Source 1: 69-76; Source 2: 49-64 | Capabilities Model, Platform Engineering, and Trust |


## Enhancing Understanding

To clarify the complex interplay between AI-driven individual performance gains and organizational stability losses:

AI is currently acting like a super-efficient new tool in a factory that encourages workers to make massive parts instead of small, tested components. The individual workers (developers) feel productive and satisfied because they are generating huge amounts of output (code) very quickly. However, when these massive, quickly-generated parts are introduced into the overall production line (the software delivery pipeline), they are much harder to test and deploy reliably, leading to more defects and greater instability further down the line, ultimately harming the factory's overall speed and reliability. The solution is not to stop using the efficient tool, but to enforce the disciplined practice of manufacturing in small batch sizes so that the gains in productivity translate into stable organizational outcomes.

## Success Criteria

After 6 weeks, the book club is successful if:

**Level 1 (Participation)**:
- [ ] 80%+ attendance at core meetings
- [ ] 60%+ pre-reading completion rate

**Level 2 (Understanding)**:
- [ ] Team can articulate the "AI as Amplifier" concept
- [ ] Team identifies their profile from the 7 Team Profiles
- [ ] Team assesses themselves against the 7 Capabilities

**Level 3 (Action)**:
- [ ] Core metric tracked for full 6 weeks (Meeting 0)
- [ ] 3+ specific commitments documented (Meeting 3)
- [ ] 3-month check-in scheduled

**Level 4 (Impact)** - Measured at 3-month check-in:
- [ ] Core metric shows improvement OR team understands why not
- [ ] Team references DORA concepts in retrospectives/planning
- [ ] At least 1 commitment has been implemented

### About the Core Metric

**What if the metric gets worse?** This is valuable data, not failure. If your metric degrades:
1. Review which of the 7 Capabilities you're missing
2. Check if you're working in small batches (most common issue)
3. Assess if AI is amplifying existing dysfunctions
4. Use this as input for your Meeting 3 commitments

**The metric is a learning tool**, not a success/fail test.

## General Meeting Structure

Most meetings will follow a similar flow to ensure consistency and productive discussion:

1.  **Welcome & Check-in (5-10 min)**: Briefly review the previous meeting's outcomes or pre-work.
2.  **Core Discussion (30-40 min)**: Dive into the main topics, guided by key questions and relevant DORA report sections. Facilitate open discussion and critical analysis.
3.  **Key Takeaways & Decisions (5-10 min)**: Summarize main insights, identify actionable items, and assign owners.
4.  **Next Steps & Pre-work (5 min)**: Outline reading assignments or tasks for the next meeting.