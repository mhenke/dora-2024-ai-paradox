# Meeting 3: Execution, Mitigation, and Transformation

## Overview
This meeting addresses the **team-level execution capabilities** required to manage AI-induced instability, build trust, and ensure AI accelerates us in the right direction. We focus on engineering discipline (small batches, version control), trust strategies (including the 131% adoption lift from dedicated learning time), and the user-centric mandate.

## Reading Required (Est. <25 min - HYPER-SPECIFIC)

### Source 1: State of AI-Assisted Software Development

- **DORA AI Capabilities (continued) (pp. 58-62)**:
  - **Working in Small Batches (pp. 58-59)**:
    - Definition paragraph
    - **Figure 39**: Amplifies product performance, reduces friction - *Look for: The positive slope.*
  - **Strong Version Control Practices (pp. 60-61)**:
    - Definition paragraph (focus on rollback capability)
    - **Figure 40**: Amplifies team performance - *Look for: The "Psychological Safety Net" concept.*
  - **User-Centric Focus (pp. 62-63)**:
    - Definition paragraph
    - **Figure 43 (CRITICAL)**: Shows absence = NEGATIVE impact on team performance - *Look for: The dip below the line (harm) when user focus is low.*

### Source 2: Impact of Gen AI in Software Development

- **Fostering Developers' Trust in Gen AI (pp. 23-29)**:
  - **Scan headers**: Five strategies for fostering trust
  - **Read**: "Trust but verify" approach paragraph (p. 23)
  - **Key strategies**:
    - Establishing clear policies
    - Doubling down on fast, high-quality feedback loops
    - Providing exposure/training

- **Helping Developers Adopt Gen AI (pp. 30-37)**:
  - **Scan headers**: Four practical strategies
  - **Figure (p. 33) - CRITICAL**: 131% increase in adoption from dedicated learning time - *Look for: The massive bar compared to other strategies.*
  - **Read**: "Allowing ample time" section - *Look for: The mention of "communities of practice" and "hack-a-thons" (structured time).*

**Total**: 3 figures + 9 strategy headers + 2 detailed sections = **~20-23 minutes**

## Facilitator Preparation
**Date**: [Date] | **Duration**: 60 min

*   [ ] Print Figure 43 (User-Centric Focus - shows negative impact risk)
*   [ ] Print or highlight the **131% adoption increase** finding
*   [ ] Prepare flip chart: "Discipline vs. AI's Natural Output"
*   [ ] Prepare SMART commitment template
*   [ ] Schedule 3-month check-in placeholder (Week 18)
*   [ ] Send reading reminder 1 week before with SPECIFIC figure numbers

## Agenda

### Phase I: Managing AI-Induced Instability (25 min)

**Preamble** (3 min):
- **Recap**: Meeting 1 showed instability paradox. Meeting 2 showed systemic enablers.
- **Today**: Team-level **execution disciplines** that counter AI velocity

**Part A: The Discipline vs. Speed Conflict** (12 min)

**Present the conflict** (5 min):
> "AI generates code FAST. This creates a natural temptation to:
> - Generate large code changes (1000+ line PRs)
> - Skip incremental testing
> - Deploy big batches
> 
> **But the DORA research shows**: Working in small batches amplifies product performance and reduces friction."

**Structured Discussion** (7 min):
1. **Question**: "How can we enforce small batch discipline when AI incentivizes the opposite?"
2. **Brainstorm** (5 min): Capture concrete guardrails:
   - Automated PR size limits (<400 lines)?
   - Review process changes (reject large AI-generated PRs)?
   - Team agreements ("I will limit AI PRs to X lines")?
3. **Vote** (2 min): Which guardrail to try first?

**Facilitator captures** on flip chart

**Part B: The Psychological Safety Net** (10 min)

**Present the finding** (3 min):
- **Strong version control practices** (especially **rollback capability**) amplify team performance
- **Why?** Acts as a psychological safety net in an accelerated environment
- **Figure 40**: Shows the amplification effect

**Discussion** (7 min):
- **Question 1**: "How confident are we in our ability to rollback a bad deployment?" (5-point scale)
- **Question 2**: "If rollback is hard, how does that change our appetite for risk?"
- **Key insight**: Fast rollback enables fast experimentation. Slow rollback forces caution.

### Phase II: Fostering Trust and Adoption (20 min)

**Part A: Trust Strategies** (10 min)

**Present the finding** (3 min):
- 30% of developers have little to no trust in AI-generated code
- This is **healthy skepticism**: "Trust but verify" approach
- **Strategies that work**:
  1. Establishing clear acceptable use policies
  2. **Doubling down on fast, high-quality feedback loops** (code reviews, automated testing)
  3. Providing exposure and training

**Discussion** (7 min):
- **Question**: "Which of our existing feedback loops need to get FASTER to support AI?"
  - Examples: Code review SLA? Test automation coverage? Deploy frequency?
- **Capture**: One feedback loop to accelerate

**Part B: The 131% Adoption Lift** (10 min) - ANCHOR FOR RESISTANCE

**Present the quantitative finding** (3 min):
> **Research finding**: Providing developers **dedicated time during work hours** to explore AI tools leads to a **131% increase in team AI adoption**.
>
> **Crucial Nuance**: This isn't just "free time." The report highlights **structured social learning**: communities of practice, hack-a-thons, and lunch-n-learns.
>
> This is the highest-leverage adoption strategy measured.

**Structured Activity** (7 min):

**If there's buy-in**:
1. **Small groups** (5 min): "What would 'dedicated time' look like for us?"
   - NOT vague "20% time"
   - SPECIFIC: "Friday mornings"? "First 2 hours of sprint"? "Rotating learning days"?
2. **Share** (2 min): Each group shares one concrete idea

**If there's resistance** (CONTINGENCY):
**Anchor on Data**:
> "I hear skepticism. Let's look at the return on investment:
> 
> - **Input**: Dedicated learning time during work hours (not mandated, just allowed)
> - **Output**: 131% increase in adoption
> - **Question**: What are the risks of NOT investing in this time, given this massive return?"

**Frame the choice**: "Would you rather people learn AI on their own time (inconsistent, slow) or via **structured investment** during work hours (aligned, fast)?"

**Facilitator captures** concrete time allocation ideas

### Phase III: The User-Centric Mandate (10 min)

**Present the CRITICAL warning** (3 min):
- **User-centric focus** is a prerequisite.
- **Figure 43 (CRITICAL)**: Shows absence = NEGATIVE impact on team performance.
- **The Business Case**: Without user focus, AI simply **accelerates the creation of technical debt and waste**. We build the wrong things, faster.

**Discussion** (7 min):
1.  **Direction Check**: "Are we using AI to solve user problems, or just to write more code?"
2.  **Waste Identification**: "Where might we be accelerating 'feature factories' instead of value delivery?"

### Phase IV: Transformation and Commitment (5 min)

**SMART Commitment Activity**:

1.  **Individual** (3 min): Write ONE specific commitment.
    - **Format**: "In the next 2 weeks, I will [action] to [outcome]."
    - Must address a DORA Capability or Strategy.
2.  **Share** (2 min): Brief round-robin or pair share.

**Final Takeaway**:
> "AI adoption must be treated as an **organizational transformation**.
> The organization must evolve its systems to harness AI's speed."

## Key Discussion Questions

1. **How do we enforce small batch discipline when AI encourages large changes?**
2. **How confident are we in our rollback capability? (1-5 scale)**
3. **Which feedback loop needs to get faster to support AI verification?**
4. **What would "dedicated learning time" look like concretely for our team?**
5. **Where might we be moving fast in the wrong direction? (User-centric check)**

## Facilitator Notes

**Contingency for Resistance to Dedicated Learning Time** (FROM USER):
If participants push back on dedicating work time to AI learning:

**Anchor on Adoption Data**:
> "Let me counter that skepticism with data:
> 
> Simply giving developers **dedicated time during work hours** to explore AI tools leads to a **131% increase in team AI adoption**.
> 
> **Question for the room**: What are the RISKS of NOT investing in this dedicated time, given the massive return?"

Then force the choice:
- Option A: People learn inconsistently on their own time (slow, variable skill levels)
- Option B: Structured learning during work (fast, aligned adoption)

**Which option gets us to high-performing AI use faster?**

**If discussion stalls on Small Batches**:
- Prompt: "Last sprint, what was your largest PR size? Did it deploy cleanly?"
- Show Figure 39: Small batches amplify product performance
- Ask: "If AI makes 1000-line PRs easier, what's the organizational cost?"

**If discussion stalls on User-Centric**:
- Use the **"wrecking the car" analogy**: "AI is the fast engine. User focus is the steering wheel. What happens if you accelerate without steering?"
- Ask for specific example: "Tell me about a time we built the wrong thing quickly"

**If no one did the reading**:
- Show Figure 43 (user-centric prerequisite) - this is the most critical
- Show the 131% adoption data point
- Skip detailed trust strategies
- Focus all time on: Small batches conflict + Dedicated time discussion + User-centric warning

**If you run over time**:
- Priority: Phase III (User-Centric - 15 min) > Phase II (Trust/Adoption - 15 min) > Phase I (Discipline - 15 min) > Phase IV (Commitments)
- Phase III is NON-NEGOTIABLE—the negative impact warning is critical
- Can shorten commitments to 3 min if needed (individual write only, skip pair share)

**Handling the "AI Safety Net" discussion**:
Frame rollback capability as **enabling speed, not preventing it**:
> "Fast rollback doesn't mean we expect to fail. It means we can take smart risks.
> Slow rollback forces us to be conservative, which defeats the purpose of AI velocity."

**Time allocation adjustments**:
If commitment activity reveals deep engagement, extend Phase IV to 10 min:
- Individual: 4 min
- Pair: 3 min  
- Team: 3 min

Take the time from Phase I or II (whichever discussion resolved faster).

**Linking back to Meeting 1 paradox** (use in wrap-up):
> "In Meeting 1, we saw the paradox: individual gains, organizational instability.
> Today we learned WHY: We need discipline (small batches, version control), trust mechanisms (feedback loops, learning time), and direction (user focus).
> Without these, AI just makes us fail faster."
