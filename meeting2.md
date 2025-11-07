# Meeting 2: Downstream Detriments & Strategy

## Overview
This meeting focuses on the downstream detriments of AI adoption, particularly its impact on software delivery stability and throughput. We will explore the leading hypothesis linking AI to larger changelists and lower stability, and discuss the critical roles of user-centricity and stable priorities in mitigating these negative effects. The session will conclude with a commitment to actionable experiments.

## Reading Required
Pages 57-68, 69-76 of the 2024 DORA Accelerate State of DevOps Report.

## Facilitator Guide Details
**Date**: [Date] | **Duration**: 60 min

### Facilitator Preparation
*   [ ] Send reading reminder 1 week before (Pgs 57-68, 69-76).
*   [ ] Prepare Figure 15 (p. 60) from the PDF to share (User-Centricity and Product Performance).
*   [ ] Prepare Figure 17 (p. 67) from the PDF to share (Priority Stability and Software Delivery Stability).
*   [ ] Have the Experiment Template ready in a shared, editable document.

### Agenda
Delivery Performance (10 min)
*   Review the observed decline in software delivery stability ($\downarrow -7.2\%$) and throughput ($\downarrow -1.5\%$) with increased AI adoption (Visual Summary).
*   Discuss why, historically, better code quality and faster reviews led to better delivery performance, but with AI, this trend is reversed (p. 27).

---

The Leading Hypothesis: AI, Changelists, and Stability (15 min)
*   Discuss the hypothesis: AI → Faster code writing → Larger changelists → Lower stability (Visual Summary).
*   Explore the idea that AI may be causing us to forget DORA's basic principle: Small batch sizes = Fast + Stable.
*   Are our Pull Requests (PRs) getting bigger with AI assistance? Can we measure this?

---

User-Centricity as a Mitigation Strategy (15 min)
*   Discuss DORA's surprising finding: "When organizations focus on the user, stability and throughput of software delivery are not a requirement for product quality." (p. 59). Product quality will be high as long as the user experience is at the forefront.
*   Review the four behaviors of user-centric teams (p. 58). Which of these is our greater organizational weakness?
*   Discuss how user-centered approaches increase productivity, job satisfaction, and reduce burnout (p. 59).
*   Reference: Visual Summary - "The Alternative Path: User-Centricity" section.
*   Facilitator Note: Prepare Figure 15 (p. 60) from the PDF to share (Product performance and delivery throughput across 3 levels of user centricity).

---

The Priority Stability Problem (10 min)
*   Discuss how unstable organizational priorities lead to meaningful decreases in productivity and substantial increases in burnout (p. 65).
*   Explore the finding that strong leaders, good documentation, and user-centered approaches *cannot* mitigate the burnout caused by unstable priorities (p. 65).
*   How stable are our priorities currently? What can organizations do to stabilize priorities or shield employees from constant shifts? (p. 68).
*   Reference: Visual Summary - "The Priority Stability Problem" section.
*   Facilitator Note: Prepare Figure 17 (p. 67) from the PDF to share (Software delivery stability as a function of adding AI-powered experiences).

---

Experiment Commitment (10 min)
*   Use the Experiment Template to design a mitigation strategy for the AI Paradox (e.g., limiting PR size, stabilizing a priority).
*   Define the problem, hypothesis, measurement, duration, owner, and check-in for the experiment.
*   Reference: Quick Reference - "Experiment Template (for Meeting 2)".

### Key Questions
*   Are our Pull Requests (PRs) getting bigger with AI assistance? Can we measure this?
*   How user-centric are we really as a team/organization?
*   How stable are our organizational priorities currently?
*   What experiment will we commit to in order to mitigate the AI Paradox or address foundational issues?

## Meeting Resources
*   Deep Dive Podcast: `https://your-unique-bucket-name.s3.your-aws-region.amazonaws.com/meeting2/podcast.mp3`
*   PDF Slides: `https://your-unique-bucket-name.s3.your-aws-region.amazonaws.com/meeting2/slides.pdf`
*   Video: `https://your-unique-bucket-name.s3.your-aws-region.amazonaws.com/meeting2/video.mp4`

### Facilitator Post Meeting
*   [ ] Send out meeting summary and the documented experiment commitment.
*   [ ] Set calendar reminder for check-in/Meeting 3.
*   [ ] Distribute reading materials for Meeting 3 (Experiment data).
*   [ ] Schedule Meeting 3.
