# The DORA AI Paradox: Facilitator Guide

**Duration**: 6 weeks total (3 meetings + 1 checkpoint)
**Meeting Frequency**: Every 2 weeks
**Format**: 60-minute discussions

## Overall Theme & Learning Objectives

**Core Tension**: AI's immediate benefits versus its complex downstream consequences.

**Guiding Question**: How can we maximize the organizational and individual benefits of AI adoption while proactively managing the unexpected trade-offs, particularly the $\downarrow -7.2\%$ drop in software delivery stability?

### Learning Objectives:

*   Establish baseline understanding of current AI usage and delivery friction.
*   Critically analyze the AI Paradox: improved processes leading to worse outcomes.
*   Identify and test the core drivers: Batch Size and Stable Priorities.
*   Commit to actionable experiments using DORA's continuous improvement framework.

## Timeline Overview

| Week    | Activity                                  | Duration       |
| :------ | :---------------------------------------- | :------------- |
| Week 0  | Kickoff invite + Pre-meeting reflection   | 5 min homework |
| Week 1  | Meeting 0: Baseline Assessment            | 30 min         |
| Week 2-3 | Reading for Meeting 1                     | Self-paced     |
| Week 3  | Meeting 1: AI's Benefits & the Individual Paradox | 60 min         |
| Week 4-5 | Reading for Meeting 2                     | Self-paced     |
| Week 5  | Meeting 2: Downstream Detriments & Strategy | 60 min         |
| Week 5-9 | Team experiments in action                | Ongoing        |
| Week 9  | Meeting 3: Lessons from Experiments (Optional) | 30 min         |

## Meeting 0: Baseline Assessment & Kickoff

**Date**: [Date] | **Duration**: 30 min

### Discussion Flow

*   **Introduction (5 min)**: Set the context—this is about critical analysis, not praise. The report identified major trade-offs.
*   **Pre-Work Review (15 min)**: Capture collective answers on the whiteboard. Focus on question #2: Where is the greatest current friction in delivery?
*   **Core Metric Definition (10 min)**: As a team, decide on one quantitative metric (e.g., Change Failure Rate or PR Size) that the group will track over the course of the book club.

### Facilitator Preparation

*   [ ] Ensure the 4 key questions are visible.
*   [ ] Prepare reading assignment handout (Pgs 17-38).

## Meeting 1: AI's Benefits & the Individual Paradox

**Date**: [Date] | **Duration**: 60 min

### Discussion Flow

*   **Review Benefits (15 min)**: Discuss individual gains (flow, productivity) and process improvements (code quality, docs).
*   **The Vacuum Hypothesis (20 min)**: Discuss the $\downarrow -2.6\%$ time on valuable work drop. Where is this time going locally? (Use the diagram from the Visual Summary).
*   **The Stability Contradiction (25 min)**: Introduce the major finding: Stability $\downarrow -7.2\%$. Why would faster reviews and better code quality lead to worse outcomes? This should be the most contentious part of the meeting.

### Facilitator Preparation

*   [ ] Send reading reminder 1 week before with page numbers.
*   [ ] Have whiteboard ready for the Vacuum Hypothesis diagram (from the Visual Summary).
*   [ ] Prepare Figure 7 (p. 32) from the PDF to share (Impact on Delivery Metrics).

## Meeting 2: Downstream Detriments & Strategy

**Date**: [Date] | **Duration**: 60 min

### Discussion Flow

*   **Batch Size Check (15 min)**: Discuss the Leading Hypothesis (AI $\to$ Larger Changelists $\to$ Lower Stability). Are our PRs getting bigger? Use the Batch Size diagram from the Visual Summary.
*   **User-Centricity/Stable Priorities (25 min)**: Discuss the two key non-AI differentiators. Which of these is our greater organizational weakness? (Refer to the Four behaviors that define user-centric teams from the Quick Reference).
*   **Experiment Commitment (20 min)**: Use the Experiment Template. The experiment must be designed to test a mitigation strategy for the AI Paradox (e.g., limit PR size) or one of the foundational issues (e.g., stabilize a priority).

### Facilitator Preparation

*   [ ] Send reading reminder 1 week before (Pgs 57-68, 69-76).
*   [ ] Prepare Figure 15 (p. 60) and Figure 17 (p. 67) from the PDF to share (User-Centricity and Priority Stability).
*   [ ] Have the Experiment Template ready in a shared, editable document.

## Recommended Follow-Up Actions

**After Meeting 2:**

*   **MANDATORY**: Document the experiment commitment clearly, including the specific DORA metric being tracked.
*   Set calendar reminder for check-in/Meeting 3.
*   Begin tracking agreed-upon metrics (e.g., average PR size, change failure rate).
