# The AI Paradox: Visual Summary

From the 2024 DORA Accelerate State of DevOps Report

## The Central Tension

<div class="comparison">
  <div class="comparison__side">
    <div class="comparison__title">✓ Clear Benefits</div>
    <div class="comparison__content">Individual &amp; Process Level improvements across the board</div>
  </div>
  <div class="comparison__divider">vs.</div>
  <div class="comparison__side">
    <div class="comparison__title">⚠ Unexpected Consequences</div>
    <div class="comparison__content">Delivery &amp; Stability Level: <strong class="stat-row__value--negative">↓ 7.2%</strong></div>
  </div>
</div>


## What's Working: The Benefits

### Individual Level (per 25% increase in AI adoption)

<div class="stat-block">
  <div class="stat-block__header">Individual Developer Impact</div>
  <div class="stat-row">
    <span class="stat-row__label">Productivity</span>
    <span class="stat-row__value stat-row__value--positive">
      <span class="metric-arrow metric-arrow--up">↑</span> +2.1%
    </span>
  </div>
  <div class="stat-row">
    <span class="stat-row__label">Flow state</span>
    <span class="stat-row__value stat-row__value--positive">
      <span class="metric-arrow metric-arrow--up">↑</span> +2.6%
    </span>
  </div>
  <div class="stat-row">
    <span class="stat-row__label">Job satisfaction</span>
    <span class="stat-row__value stat-row__value--positive">
      <span class="metric-arrow metric-arrow--up">↑</span> +2.2%
    </span>
  </div>
  <div class="stat-row">
    <span class="stat-row__label">Time on valuable work</span>
    <span class="stat-row__value stat-row__value--warning">
      <span class="metric-arrow metric-arrow--down">↓</span> −2.6% ⚠
    </span>
  </div>
</div>

### Process Level

<div class="stat-block">
  <div class="stat-block__header">Code &amp; Process Quality</div>
  <div class="stat-row">
    <span class="stat-row__label">Code quality</span>
    <span class="stat-row__value stat-row__value--positive">
      <span class="metric-arrow metric-arrow--up">↑</span> +3.4%
    </span>
  </div>
  <div class="stat-row">
    <span class="stat-row__label">Documentation quality</span>
    <span class="stat-row__value stat-row__value--positive">
      <span class="metric-arrow metric-arrow--up">↑</span> +7.5%
    </span>
  </div>
  <div class="stat-row">
    <span class="stat-row__label">Code review speed</span>
    <span class="stat-row__value stat-row__value--positive">
      <span class="metric-arrow metric-arrow--up">↑</span> +3.1%
    </span>
  </div>
  <div class="stat-row">
    <span class="stat-row__label">Approval speed</span>
    <span class="stat-row__value stat-row__value--positive">
      <span class="metric-arrow metric-arrow--up">↑</span> +1.3%
    </span>
  </div>
  <div class="stat-row">
    <span class="stat-row__label">Code complexity</span>
    <span class="stat-row__value stat-row__value--positive">
      <span class="metric-arrow metric-arrow--down">↓</span> −1.8%
    </span>
  </div>
</div>

### Team &amp; Organization Level

<div class="stat-block">
  <div class="stat-block__header">Organizational Impact</div>
  <div class="stat-row">
    <span class="stat-row__label">Team performance</span>
    <span class="stat-row__value stat-row__value--positive">
      <span class="metric-arrow metric-arrow--up">↑</span> +1.4%
    </span>
  </div>
  <div class="stat-row">
    <span class="stat-row__label">Organizational performance</span>
    <span class="stat-row__value stat-row__value--positive">
      <span class="metric-arrow metric-arrow--up">↑</span> +2.3%
    </span>
  </div>
  <div class="stat-row">
    <span class="stat-row__label">Product performance</span>
    <span class="stat-row__value stat-row__value--neutral">
      → +0.2% (minimal change)
    </span>
  </div>
</div>


## What's Broken: The Contradiction

### Delivery Performance (per 25% increase in AI adoption)

<div class="callout callout--danger">
  <div class="callout__title">⚠ Critical Delivery Decline</div>
  <div class="stat-row">
    <span class="stat-row__label">Software delivery stability</span>
    <span class="stat-row__value stat-row__value--negative">
      <span class="metric-arrow metric-arrow--down">↓</span> −7.2% <strong>(MAJOR DECLINE)</strong>
    </span>
  </div>
  <div class="stat-row">
    <span class="stat-row__label">Software delivery throughput</span>
    <span class="stat-row__value stat-row__value--negative">
      <span class="metric-arrow metric-arrow--down">↓</span> −1.5% (minor decline)
    </span>
  </div>
</div>

### The Paradox

<div class="callout callout--warning">
  <div class="callout__title">This Shouldn't Happen!</div>
  <p><strong>Historically:</strong> Better code quality + Faster reviews = Better delivery performance</p>
  <p><strong>With AI:</strong> Better processes → WORSE delivery stability</p>
</div>

### The Leading Hypothesis

<div class="flow-diagram">
  <div class="flow-step">AI Tools Available</div>
  <div class="flow-arrow">↓</div>
  <div class="flow-step">Faster Code Writing</div>
  <div class="flow-arrow">↓</div>
  <div class="flow-step">Larger Changelists</div>
  <div class="flow-arrow">↓</div>
  <div class="flow-step">Lower Stability</div>
</div>

<div class="callout callout--info">
  <div class="callout__title">DORA's Basic Principle</div>
  <p><strong>Small batch sizes = Fast + Stable</strong></p>
  <p>AI may be causing us to forget this core principle.</p>
</div>

### The Vacuum Hypothesis

<div class="callout callout--info">
  <div class="callout__title">Why does AI increase productivity but DECREASE time on valuable work?</div>
</div>

<div class="visual-bar">
  <div class="visual-bar__label">BEFORE AI:</div>
  <div class="visual-bar__container">
    <div class="visual-bar__segment visual-bar__segment--valuable visual-bar__segment--width-60">
      Valuable Work: 60%
    </div>
    <div class="visual-bar__segment visual-bar__segment--toil visual-bar__segment--width-40">
      Toil: 40%
    </div>
  </div>
</div>

<div class="visual-bar">
  <div class="visual-bar__label">AFTER AI:</div>
  <div class="visual-bar__container">
    <div class="visual-bar__segment visual-bar__segment--valuable visual-bar__segment--width-57">
      Valuable Work: 57%
    </div>
    <div class="visual-bar__segment visual-bar__segment--toil visual-bar__segment--width-40">
      Toil: 40%
    </div>
    <div class="visual-bar__segment visual-bar__segment--mystery visual-bar__segment--width-3">
      ?: 3%
    </div>
  </div>
</div>

<div class="callout callout--warning">
  <p><strong>Theory:</strong> AI helps us finish valuable work FASTER, creating a time vacuum.</p>
  <p>That vacuum gets filled with meetings, interruptions, and context switching.</p>
  <p><strong>AI doesn't reduce TOIL</strong> (meetings, bureaucracy) - it just speeds up the good stuff.</p>
</div>


### The Trust Paradox

<div class="comparison">
  <div class="comparison__side">
    <div class="comparison__title">Low Trust</div>
    <div class="comparison__content"><strong>39.2%</strong> report little or no trust in AI-generated code</div>
  </div>
  <div class="comparison__divider">YET</div>
  <div class="comparison__side">
    <div class="comparison__title">High Usage</div>
    <div class="comparison__content"><strong>75.9%</strong> rely on AI for at least one task</div>
  </div>
</div>

<div class="callout callout--info">
  <p><strong>Why?</strong> Low trust doesn't stop usage - people just verify and modify the output.</p>
  <p>"Mostly correct" code that needs tweaking is valuable enough to use.</p>
</div>


### The Alternative Path: User-Centricity

<div class="callout callout--success">
  <div class="callout__title">DORA's Surprising Finding</div>
  <blockquote>"When organizations focus on the user, stability and throughput of software delivery are not a requirement for product quality." <em>(p. 59)</em></blockquote>
</div>

<div class="comparison">
  <div class="comparison__side">
    <div class="comparison__title">Traditional Path</div>
    <div class="comparison__content">Fast delivery + Stable delivery = High-performing product</div>
  </div>
  <div class="comparison__divider">vs.</div>
  <div class="comparison__side">
    <div class="comparison__title">Alternative Path</div>
    <div class="comparison__content">Deep user understanding = High-performing product <em>(even with imperfect delivery metrics)</em></div>
  </div>
</div>

### Four behaviors of user-centric teams

<div class="stat-block">
  <div class="stat-block__header">User-Centricity Behaviors</div>
  <div class="stat-row">
    <span class="stat-row__label">✓ Incorporate user feedback to reprioritize features</span>
  </div>
  <div class="stat-row">
    <span class="stat-row__label">✓ Know what users want to accomplish</span>
  </div>
  <div class="stat-row">
    <span class="stat-row__label">✓ Believe user experience is key to business success</span>
  </div>
  <div class="stat-row">
    <span class="stat-row__label">✓ Treat user experience as top priority</span>
  </div>
</div>

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

<div class="flow-diagram">
  <div class="flow-step">1. Identify area to improve</div>
  <div class="flow-arrow">↓</div>
  <div class="flow-step">2. Measure baseline</div>
  <div class="flow-arrow">↓</div>
  <div class="flow-step">3. Develop hypotheses</div>
  <div class="flow-arrow">↓</div>
  <div class="flow-step flow-step--highlight">4. Commit to a plan ← <strong>OUR BOOK CLUB ENDS HERE</strong></div>
  <div class="flow-arrow">↓</div>
  <div class="flow-step">5. Do the work</div>
  <div class="flow-arrow">↓</div>
  <div class="flow-step">6. Measure progress</div>
  <div class="flow-arrow">↓</div>
  <div class="flow-step">7. REPEAT ↻</div>
</div>

<div class="callout callout--success">
  <div class="callout__title">Key Insight</div>
  <p>"The best teams are those that achieve <strong>elite improvement</strong>, not necessarily elite performance."</p>
</div>

## Key Questions for Discussion

### Meeting 1: Benefits &amp; Paradox

Where does the AI-freed time actually go?

Is code quality truly better, or just easier to work with?

Why the disconnect between current gains and future pessimism?

### Meeting 2: Detriments &amp; Strategy

Are our batch sizes increasing with AI?

Can we measure this?

How user-centric are we really?

How stable are our priorities?

What experiment will we commit to?

## The Bottom Line

<div class="callout callout--info">
  <div class="callout__title">AI IS TRANSFORMATIVE, BUT COMPLEX</div>

  <div class="stat-block">
    <div class="stat-row">
      <span class="stat-row__label">✓ Individuals feel more productive, satisfied, and in flow</span>
    </div>
    <div class="stat-row">
      <span class="stat-row__label">✓ Code quality, documentation, and reviews improve</span>
    </div>
    <div class="stat-row">
      <span class="stat-row__label">⚠ But delivery stability takes a significant hit</span>
    </div>
    <div class="stat-row">
      <span class="stat-row__label">⚠ And valuable work time mysteriously decreases</span>
    </div>
  </div>
</div>

<div class="callout callout--success">
  <div class="callout__title">THE CHALLENGE</div>
  <p><strong>Maximize benefits while managing trade-offs through:</strong></p>
  <ul>
    <li><strong>Small batch sizes</strong> (DORA's core principle)</li>
    <li><strong>User-centricity</strong> (alternative path to quality)</li>
    <li><strong>Stable priorities</strong> (foundation for well-being)</li>
    <li><strong>Continuous improvement</strong> (the only path forward)</li>
  </ul>
</div>

---

## The 7 Team Profiles (2025 Update)

From Source 2: 2025 DORA State of AI-Assisted Software Development

<div class="stat-block">
  <div class="stat-block__header">How Teams Perform with AI</div>
  
  <div class="stat-row">
    <span class="stat-row__label">🏆 **Harmonious high-achievers**</span>
    <span class="stat-row__value">High performance, low friction, low burnout - the ideal state</span>
  </div>
  
  <div class="stat-row">
    <span class="stat-row__label">⚖️ **Pragmatic performers**</span>
    <span class="stat-row__value">Balanced across most factors - solid middle ground</span>
  </div>
  
  <div class="stat-row">
    <span class="stat-row__label">🐢 **Stable and methodical**</span>
    <span class="stat-row__value">Very stable but slower throughput - quality over speed</span>
  </div>
  
  <div class="stat-row">
    <span class="stat-row__label">🎯 **High impact, low cadence**</span>
    <span class="stat-row__value">Strong product quality, low deployment frequency</span>
  </div>
  
  <div class="stat-row">
    <span class="stat-row__label">⚙️ **Constrained by process**</span>
    <span class="stat-row__value">High friction and burnout from inefficient processes</span>
  </div>
  
  <div class="stat-row">
    <span class="stat-row__label">🔥 **Legacy bottleneck**</span>
    <span class="stat-row__value">Constant firefighting, unstable systems</span>
  </div>
  
  <div class="stat-row">
    <span class="stat-row__label">⚠️ **Foundational challenges**</span>
    <span class="stat-row__value">Low across all performance indicators - needs fundamental change</span>
  </div>
</div>

<div class="callout callout--info">
  <div class="callout__title">Key Insight</div>
  <p>Most teams start in "Constrained by process" or "Legacy bottleneck" when adopting AI. The goal is to move toward "Harmonious high-achievers" by addressing the 7 Capabilities.</p>
</div>

---

## DORA AI Capabilities Model (2025)

These 7 capabilities **amplify** AI's benefits:

<div class="stat-block">
  <div class="stat-block__header">The 7 Capabilities</div>
  
  <div class="stat-row">
    <span class="stat-row__label">1. **Clear and Communicated AI Stance**</span>
    <span class="stat-row__value">Organization's official position on AI use is clear and widely communicated</span>
  </div>
  
  <div class="stat-row">
    <span class="stat-row__label">2. **Healthy Data Ecosystems**</span>
    <span class="stat-row__value">Quality, accessible, unified internal data systems</span>
  </div>
  
  <div class="stat-row">
    <span class="stat-row__label">3. **AI-Accessible Internal Data**</span>
    <span class="stat-row__value">AI tools are connected to internal company systems and data</span>
  </div>
  
  <div class="stat-row">
    <span class="stat-row__label">4. **Strong Version Control Practices**</span>
    <span class="stat-row__value">Frequent commits and robust rollback capability</span>
  </div>
  
  <div class="stat-row">
    <span class="stat-row__label">5. **Working in Small Batches**</span>
    <span class="stat-row__value">Breaking changes into manageable, reviewable units</span>
  </div>
  
  <div class="stat-row">
    <span class="stat-row__label">6. **User-Centric Focus**</span>
    <span class="stat-row__value">Keeping end users at the center of development decisions</span>
  </div>
  
  <div class="stat-row">
    <span class="stat-row__label">7. **Quality Internal Platforms**</span>
    <span class="stat-row__value">High-quality developer experience infrastructure</span>
  </div>
</div>

<div class="callout callout--success">
  <div class="callout__title">The Amplifier Effect</div>
  <p>Teams that invest in these capabilities see <strong>greater benefits from AI</strong>. Without them, AI can amplify existing dysfunctions (e.g., large batch sizes → more instability).</p>
</div>

---

## Success Criteria Framework

<div class="stat-block">
  <div class="stat-block__header">4 Levels of Book Club Success</div>
  
  <div class="stat-row">
    <span class="stat-row__label">**Level 1: Participation**</span>
    <span class="stat-row__value">80%+ attendance, 60%+ pre-reading completion</span>
  </div>
  
  <div class="stat-row">
    <span class="stat-row__label">**Level 2: Understanding**</span>
    <span class="stat-row__value">Can articulate "AI as Amplifier", identify Team Profile, assess Capabilities</span>
  </div>
  
  <div class="stat-row">
    <span class="stat-row__label">**Level 3: Action**</span>
    <span class="stat-row__value">Core metric tracked for 6 weeks, commitments documented, check-in scheduled</span>
  </div>
  
  <div class="stat-row">
    <span class="stat-row__label">**Level 4: Impact** (3-month check-in)</span>
    <span class="stat-row__value">Metric improves OR team understands why not, concepts used in retrospectives</span>
  </div>
</div>

<div class="callout callout--info">
  <div class="callout__title">Using This Page</div>
  <p><strong>Print this page as a 1-2 page reference handout</strong> for book club participants. It provides a quick visual summary of key concepts from both the 2024 and 2025 DORA reports.</p>
</div>

---

**Sources:**  
- 2024 DORA Accelerate State of DevOps Report - https://dora.dev/research/2024/dora-report/  
- 2025 DORA State of AI-Assisted Software Development - https://cloud.google.com/resources/content/2025-dora-ai-assisted-software-development-report