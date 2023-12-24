---
layout: post
title: "Assessing the Web Sustainability Guidelines (WSG) on automated testing"
date: 2023-11-04 01:47:03 +0100
comments: true
categories: [Automation, Test, WSG, Sustainability]
---

One of the issues with WCAG is how much of it is open to interpretation.
Let’s see how the new Web Sustainability Guidelines fare in that regard, and specifically how much potential there is to create fully automated testing tools.

<!-- more -->

For the [Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG22/), there have been long-standing efforts to reduce the need for interpretation.
For automated tools in particular, the most prominent effort is the [ACT Rules](https://www.w3.org/WAI/standards-guidelines/act/rules/) project.

Wouldn’t it be neat if the [WSG](https://w3c.github.io/sustyweb/) got this right from the start?
That’s where discussions of [Manual vs. automated testing](https://github.com/w3c/sustyweb/issues/29) come in.

## My results

TL;DR; I produced two documents:

- [SC-by-SC audit types classification](https://gist.github.com/thibaudcolas/589de9192a919e41b67eefc98e0f4dac#file-thibaudcolas-audit-types-md)
- [Comparison table at the guidelines level between @marvil07-adapt and @thibaudcolas](https://gist.github.com/thibaudcolas/589de9192a919e41b67eefc98e0f4dac#file-marvil07-adapt-thibaudcolas-comparison-table-md)

## My classification

Here is how I personally rated the SCs (and how many SCs I found for each rating):

1. **Static analysis (6)**: Potential to write automated code checks that would run in CI / developer IDEs. Example: [`jsx-a11y/alt-text`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/alt-text.md)
2. **Automated (35)**: "Runtime" analysis – potential to inspect the product with automated browsing or equivalent and detect issues. Example: [Axe](https://github.com/dequelabs/axe-core)
3. **Manual, quantitative (16)**: Likely manual auditing but with potential to follow a set scoring algorithm. Possible to create semi-automated tools to help with auditing. Example: [Tab stops testing](https://accessibilityinsights.io/docs/web/getstarted/fastpass/#complete-the-assisted-test-for-tab-stops)
4. **Manual, qualitative (50)**: Manual auditing with an element of interpretation. Can be done with publicly available information, reproducibility of findings a possible concern. Example: [WCAG SC 3.2.4 Consistent Identification](https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification.html)
5. **Consulting (125)**: Manual auditing requiring interpretation and internal knowledge of the project / organisation. Cannot be audited without behind-the-scenes access.

## Comparison with @marvil07-adapt

After converting this classification to the one by @marvil07-adapt, here is how we differ in the [comparison table](https://gist.github.com/thibaudcolas/589de9192a919e41b67eefc98e0f4dac#file-marvil07-adapt-thibaudcolas-comparison-table-md):

- Same assessment for 69 guidelines
- Almost the same for 21 ("partial" vs. yes or no)
- Different for 3 ("yes" vs "no")

Mapping from my classification to yes/no/partial (internal). I also used "partial" if a guideline was a mixture of "yes", "no", or "partial".

- Static analysis → yes
- Automated → yes
- Manual, quantitative → partial
- Manual, qualitative → no
- Consulting → no – internal

### Differences

| [@marvil07-adapt](https://github.com/marvil07-adapt) | [@thibaudcolas](https://github.com/thibaudcolas) | Guideline                                       |
| ---------------------------------------------------- | ------------------------------------------------ | ----------------------------------------------- |
| no – internal                                        | yes                                              | 3.4 Apply Tree Shaking To Code                  |
| no – internal                                        | yes                                              | 3.17 Manage Dependencies Appropriately          |
| no – internal                                        | yes                                              | 3.20 Avoid Using Deprecated Or Proprietary Code |

Here are my thoughts on the three guidelines where we differ:

- For _3.4 Apply Tree Shaking To Code_ – I think this is automate-able because though the guideline is called "tree shaking", the SC is only about eliminating dead code in a wider sense. We can’t quantify whether the project makes an effort to identify and eliminate dead code, but we can definitely quantify the amount of dead code, which seems good enough to me to consider this automate-able.
- For _3.17 Manage Dependencies Appropriately_ – this all seems automate-able _enough_ to me. Which dependencies are included can be checked with different methods, and same for how actively they are used.
- For _3.20 Avoid Using Deprecated Or Proprietary Code_ – I considered this automate-able at least for code sent client-side (HTML/CSS/JS/SVG/etc).

### Partial matches

Note when I reviewed the potential for automation, my focus was primarily on auditing a website or app with no internal knowledge. So for most SCs that require internal knowledge I rated them as "consulting" / "no - internal", even if there could be automation. There are a few exceptions, such as _3.22 Use The Latest Stable Language Version_.

I didn’t assess our differences here in much detail. At a high level:

- For _2. User-Experience Design_, I seem to think there’s much less room for automation
- For other areas, it’s mixture of results with no clear pattern

| [@marvil07-adapt](https://github.com/marvil07-adapt) | [@thibaudcolas](https://github.com/thibaudcolas) | Guideline                                                       |
| ---------------------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------- |
| partial – editorial                                  | no                                               | 2.7 Avoid Unnecessary Or An Overabundance Of Assets             |
| partial                                              | no                                               | 2.8 Ensure Navigation And Way-finding Is Well-structured        |
| partial                                              | no – internal                                    | 2.9 Respect The Visitor's Attention                             |
| partial                                              | no                                               | 2.11 Avoid Manipulative Patterns                                |
| partial                                              | no                                               | 2.21 Support Non-Graphic Ways To Interact With Content          |
| partial – internal                                   | yes                                              | 3.3 Use Code-splitting Within Projects                          |
| partial                                              | yes                                              | 3.8 Use HTML Elements Correctly                                 |
| yes – editorial                                      | partial                                          | 3.9 Resolve Render Blocking Content                             |
| partial – editorial, semantics                       | yes                                              | 3.12 Use Metadata Correctly                                     |
| partial – editorial                                  | yes                                              | 3.13 Adapt to User Preferences                                  |
| partial                                              | no                                               | 3.14 Develop A Mobile-first Layout                              |
| partial – internal                                   | yes                                              | 3.16 Ensure Your Scripts Are Secure                             |
| partial – editorial                                  | yes                                              | 4.2 Optimize Browser Caching                                    |
| no – editorial                                       | partial                                          | 4.4 Use Error Pages And Redirects Carefully                     |
| no – editorial                                       | partial                                          | 4.7 Maintain a Relevant Refresh Frequency                       |
| no – editorial                                       | partial                                          | 4.9 Enable Asynchronous Processing And Communication            |
| yes                                                  | partial                                          | 4.10 Use Edge Computing                                         |
| partial – internal                                   | no – internal                                    | 5.5 Estimate A Product Or Service's Environmental Impact        |
| no – internal                                        | partial                                          | 5.19 Use Justice, Equity, Diversity, Inclusion (JEDI) Practices |
| no – internal                                        | partial                                          | 5.22 Promote Responsible Emerging Technology Practices          |
| partial – internal                                   | no – internal                                    | 5.27 Define Performance And Environmental Budgets               |

## Audit types by success criterion

This is my full review of the SCs, with the audit types I found for each.

## Audit types by success criterion table

| Audit type           | Success Criterion                                                                 |
| -------------------- | --------------------------------------------------------------------------------- |
|                      | **2. User-Experience Design**                                                     |
|                      | **2.1 Undertake Systemic Impacts Mapping**                                        |
| consulting           | External Variables                                                                |
|                      | **2.2 Assess And Research Visitor Needs**                                         |
| consulting           | Identify And Define                                                               |
| consulting           | Visitor Constraints                                                               |
| consulting           | Barriers And Access                                                               |
| consulting           | Barrier Removal                                                                   |
|                      | **2.3 Research Non-visitors Needs**                                               |
| consulting           | Non-Human Impact                                                                  |
|                      | **2.4 Consider Sustainability In Early Ideation**                                 |
| consulting           | Wireframes And Prototypes                                                         |
|                      | **2.5 Account For Stakeholder Issues**                                            |
| consulting           | Human-Centered Brainstorming                                                      |
| consulting           | Ecological Brainstorming                                                          |
|                      | **2.6 Create a Frictionless Lightweight Experience By Default**                   |
| consulting           | Performance By Default                                                            |
| manual, quantitative | Efficient Paths                                                                   |
| manual, qualitative  | Patterns For Efficiency                                                           |
| manual, qualitative  | Distraction-Free Design                                                           |
| manual, qualitative  | Eliminate The Non-Essential                                                       |
| manual, quantitative | User-Initiated Actionable Content                                                 |
|                      | **2.7 Avoid Unnecessary Or An Overabundance Of Assets**                           |
| manual, qualitative  | Decorative Design                                                                 |
|                      | **2.8 Ensure Navigation And Way-finding Is Well-structured**                      |
| manual, qualitative  | Navigation And Search                                                             |
| manual, qualitative  | Navigable Sitemaps                                                                |
| manual, qualitative  | New Content                                                                       |
|                      | **2.9 Respect The visitors Attention**                                            |
| manual, qualitative  | Respecting Attention                                                              |
| consulting           | Avoid Distraction                                                                 |
| manual, qualitative  | Avoid Attention-keeping                                                           |
|                      | **2.10 Use Recognized Design Patterns**                                           |
| manual, qualitative  | Design Patterns                                                                   |
|                      | **2.11 Avoid Manipulative Patterns**                                              |
| manual, qualitative  | Dark Patterns                                                                     |
| manual, qualitative  | Using Advertisements                                                              |
| manual, qualitative  | Page Tracking                                                                     |
|                      | **2.12 Document And Share Project Outputs**                                       |
| consulting           | Deliverables Reusability                                                          |
| consulting           | Deliverables Documentation                                                        |
|                      | **2.13 Use A Design System To Prioritize Interface Consistency**                  |
| consulting           | Design System                                                                     |
|                      | **2.14 Write With Purpose, In An Accessible, Easy To Understand Format**          |
| manual, qualitative  | Write Clearly                                                                     |
| manual, qualitative  | Content Formatting                                                                |
| static analysis      | Search Engine Optimization (SEO)                                                  |
|                      | **2.15 Take a More Sustainable Approach To Image Assets**                         |
| automated            | Need For Images                                                                   |
| automated            | Optimize Images                                                                   |
| static analysis      | Lazy Loading                                                                      |
| manual, qualitative  | Sizing And Deactivation                                                           |
| consulting           | Management And Usage                                                              |
|                      | **2.16 Take a More Sustainable Approach To Media Assets**                         |
| automated            | Need For Media                                                                    |
| automated            | Optimize Media                                                                    |
| manual, qualitative  | Labels And Choice                                                                 |
| consulting           | Management And Usage                                                              |
|                      | **2.17 Take a More Sustainable Approach To Animation**                            |
| manual, qualitative  | Need For Animation                                                                |
| manual, qualitative  | Avoid Overburdening                                                               |
| manual, qualitative  | Control Animation                                                                 |
|                      | **2.18 Take a More Sustainable Approach To Typefaces**                            |
| static analysis      | Default Typefaces                                                                 |
| static analysis      | Font Optimization                                                                 |
|                      | **2.19 Provide Suitable Alternatives To Web Assets**                              |
| manual, quantitative | Open Formats                                                                      |
| manual, quantitative | Font Subsetting                                                                   |
| automated            | Alternative Text                                                                  |
| manual, quantitative | Audio Alternatives                                                                |
| manual, quantitative | Video Alternatives                                                                |
|                      | **2.20 Provide Accessible, Usable, Minimal Web Forms**                            |
| manual, qualitative  | Form Simplicity                                                                   |
| manual, qualitative  | Form Functionality                                                                |
|                      | **2.21 Support Non-Graphic Ways To Interact With Content**                        |
| manual, qualitative  | Alternative Interactions                                                          |
|                      | **2.22 Give Useful Notifications To Improve The visitors Journey**                |
| manual, qualitative  | Notification Justification                                                        |
| manual, qualitative  | Notification Control                                                              |
| manual, qualitative  | Prompts And Responses                                                             |
|                      | **2.23 Reduce The Impact Of Downloadable Or Physical Documents**                  |
| manual, quantitative | Printing Documents                                                                |
| manual, quantitative | Optimize Documents                                                                |
| manual, quantitative | Labels And Choice                                                                 |
|                      | **2.24 Create A Stakeholder-focused Testing & Prototyping Policy**                |
| consulting           | New Features And Perspectives                                                     |
| consulting           | Resourcing And Viability                                                          |
| consulting           | Training And Onboarding                                                           |
| consulting           | Testing And Validation                                                            |
|                      | **2.25 Conduct Regular Audits, Regression, And Non-regression Tests**             |
| consulting           | Regular Issue Testing                                                             |
| consulting           | Non-Regression Tests                                                              |
| consulting           | Regression Tests                                                                  |
|                      | **2.26 Analyze The Performance Of The Visitor Journey**                           |
| consulting           | Measurement And Compliance                                                        |
|                      | **2.27 Incorporate Value Testing Into Each Major Release-cycle**                  |
| consulting           | Usage Changes                                                                     |
|                      | **2.28 Incorporate Usability Testing Into Each Minor Release-cycle**              |
| consulting           | Usability Testing                                                                 |
|                      | **2.29 Incorporate Compatibility Testing Into Each Release-cycle**                |
| consulting           | Compatibility Policy                                                              |
| consulting           | Maintaining Compatibility                                                         |
| manual, quantitative | Frequent Testing                                                                  |
| consulting           | Mobile Friendly                                                                   |
| consulting           | Progressive Web Application's (PWA)'s                                             |
|                      | **3. Web Development**                                                            |
|                      | **3.1 Identify Relevant Technical Indicators**                                    |
| consulting           | Performance Goals                                                                 |
|                      | **3.2 Minify Your HTML, CSS, And JavaScript**                                     |
| automated            | Minify Code                                                                       |
|                      | **3.3 Use Code-splitting Within Projects**                                        |
| automated            | Code Splitting                                                                    |
|                      | **3.4 Apply Tree Shaking To Code**                                                |
| automated            | Remove Redundancy                                                                 |
|                      | **3.5 Ensure Your Solutions Are Accessible**                                      |
| automated            | Accessibility Compliance                                                          |
| static analysis      | Enhancing For Accessibility                                                       |
| consulting           | Electronic Inequalities                                                           |
| manual, qualitative  | Carbon Aware Design                                                               |
|                      | **3.6 Avoid Code Duplication**                                                    |
| consulting           | Remove Or Simplify                                                                |
| consulting           | Iteration Over Recreation                                                         |
| consulting           | Organize Code Arrangement                                                         |
|                      | **3.7 Rigorously Assess Third-party Services**                                    |
| consulting           | Assess Third-parties                                                              |
| consulting           | Third-party Implementation                                                        |
| consulting           | Libraries And Frameworks                                                          |
| consulting           | Self-Hosting                                                                      |
| consulting           | Avoiding Dependency                                                               |
|                      | **3.8 Use HTML Elements Correctly**                                               |
| automated            | Semantic Code                                                                     |
| static analysis      | Avoid Non-standard Code                                                           |
| manual, qualitative  | Custom Code                                                                       |
|                      | **3.9 Resolve Render Blocking Content**                                           |
| automated            | Asynchronous Code                                                                 |
| manual, qualitative  | Priority Loading                                                                  |
|                      | **3.10 Provide Code-based Way-finding Mechanisms**                                |
| automated            | Metadata And Microdata                                                            |
| automated            | Search Engines                                                                    |
| manual, qualitative  | Accessibility Aids                                                                |
|                      | **3.11 Validate Form Errors And External Input**                                  |
| manual, qualitative  | Error Validation                                                                  |
| manual, qualitative  | Label Elements                                                                    |
| automated            | Allow Paste                                                                       |
|                      | **3.12 Use Metadata Correctly**                                                   |
| automated            | Required Elements                                                                 |
| automated            | Meta Tags                                                                         |
| automated            | Structured Data                                                                   |
|                      | **3.13 Use CSS Preference And Media Queries**                                     |
| automated            | CSS Preference Queries                                                            |
|                      | **3.14 Develop A Mobile-first Layout**                                            |
| manual, qualitative  | Mobile-First                                                                      |
| manual, qualitative  | Responsive Design                                                                 |
| manual, qualitative  | Alternative Browsing                                                              |
|                      | **3.15 Use Beneficial JavaScript And Its API's**                                  |
| consulting           | Beneficial JavaScript                                                             |
| manual, qualitative  | API Requests                                                                      |
|                      | **3.16 Ensure Your Scripts Are Secure**                                           |
| automated            | Script Security                                                                   |
|                      | **3.17 Manage Dependencies Appropriately**                                        |
| automated            | Dependency Management                                                             |
| automated            | Dependency Necessity                                                              |
| automated            | Dependency Updates                                                                |
|                      | **3.18 Include Files That Are Automatically Expected**                            |
| automated            | Expected File Formats                                                             |
|                      | **3.19 Use Plaintext Formats When Appropriate**                                   |
| automated            | Beneficial File Formats                                                           |
|                      | **3.20 Avoid Using Deprecated Or Proprietary Code**                               |
| automated            | Deprecated Code                                                                   |
| automated            | Outdated Code                                                                     |
|                      | **3.21 Align Technical Requirements With Sustainability Goals**                   |
| consulting           | Identify Requirements                                                             |
| consulting           | Optimized Methodology                                                             |
| consulting           | Expandability Considerations                                                      |
| consulting           | Interface Impact                                                                  |
|                      | **3.22 Use The Latest Stable Language Version**                                   |
| automated            | Versioning                                                                        |
|                      | **3.23 Take Advantage Of Native Features**                                        |
| manual, qualitative  | Native Over Custom                                                                |
|                      | **3.24 Run Fewer, Simpler Queries As Possible**                                   |
| manual, qualitative  | Database Queries                                                                  |
|                      | **4. Hosting, Infrastructure And Systems**                                        |
|                      | **4.1 Choose A Sustainable Hosting Provider**                                     |
| consulting           | Monitor Metrics                                                                   |
| consulting           | Equipment Longevity                                                               |
| consulting           | Recycling Waste                                                                   |
| automated            | Renewable Electricity                                                             |
| consulting           | Remaining Emissions                                                               |
|                      | **4.2 Optimize Browser Caching**                                                  |
| automated            | Server-side Caching                                                               |
| automated            | Offline Access                                                                    |
|                      | **4.3 Compress Your Files**                                                       |
| automated            | Server-side Compression                                                           |
| automated            | Media Compression                                                                 |
|                      | **4.4 Use Error Pages And Redirects Carefully**                                   |
| manual, quantitative | Error Pages                                                                       |
| manual, qualitative  | Redirection                                                                       |
|                      | **4.5 Limit Usage Of Additional Environments**                                    |
| consulting           | Unused Environments                                                               |
|                      | **4.6 Automate To Fit The Needs**                                                 |
| consulting           | Automate Tasks                                                                    |
| consulting           | Necessitate Tasks                                                                 |
| consulting           | Automated Scaling                                                                 |
| consulting           | Security Tooling                                                                  |
|                      | **4.7 Frequency For Refresh Is Relevant To Visitor Needs**                        |
| manual, quantitative | Refresh Frequency                                                                 |
|                      | **4.8 Be Mindful Of Duplicate Data**.                                             |
| consulting           | Data Backups                                                                      |
|                      | **4.9 Enable Asynchronous Processing And Communication**                          |
| consulting           | Batch Processing                                                                  |
| automated            | Protocol Usage                                                                    |
|                      | **4.10 Use Edge Computing**                                                       |
| automated            | Content Delivery Network's (CDN's)                                                |
| automated            | Sustainability Commitment                                                         |
| manual, qualitative  | Local Servers                                                                     |
| manual, quantitative | Avoid Dynamic Resources                                                           |
|                      | **4.11 Use The Lowest Infrastructure Tier Meeting Business Requirements**         |
| consulting           | Lowest Requirements                                                               |
|                      | **4.12 Store Data According To Visitor Needs**                                    |
| consulting           | Reduce Redundancy                                                                 |
| consulting           | Expiration Dates                                                                  |
| consulting           | Classify And Tag                                                                  |
| consulting           | Justify Storage                                                                   |
| consulting           | Optimize Logging                                                                  |
| consulting           | Compress Storage                                                                  |
|                      | **5. Business Strategy And Product Management**                                   |
|                      | **5.1 Have An Ethical And Sustainability Product Strategy**                       |
| manual, quantitative | Statement Availability                                                            |
| manual, qualitative  | Achievements And Compliance                                                       |
| manual, qualitative  | Governance Over Time                                                              |
| consulting           | Onboarding New Members                                                            |
| manual, qualitative  | Documentation                                                                     |
| manual, qualitative  | Renewable Showcasing                                                              |
|                      | **5.2 Assign A Sustainability Representative**                                    |
| consulting           | Ecological Referee                                                                |
|                      | **5.3 Raise Awareness And Inform**                                                |
| consulting           | Inform And Train                                                                  |
| consulting           | Active Participation                                                              |
|                      | **5.4 Communicate The Ecological Impact Of User Choices**                         |
| manual, qualitative  | Impact Communication                                                              |
|                      | **5.5 Estimate A Product Or Service's Environmental Impact**                      |
| consulting           | Life-cycle Analysis                                                               |
| consulting           | Competitor Analysis                                                               |
|                      | **5.6 Define Clear Organizational Sustainability Goals And Metrics**              |
| manual, qualitative  | Sustainability Goals                                                              |
|                      | **5.7 Verify Your Efforts Using Established Third-party Business Certifications** |
| consulting           | Certification Achievement                                                         |
| consulting           | Certification Maintenance                                                         |
|                      | **5.8 Implement Sustainability Onboarding Guidelines**                            |
| consulting           | Training Materials                                                                |
| consulting           | Progress Incentivisation                                                          |
| consulting           | Negative Variables                                                                |
|                      | **5.9 Support Mandatory Disclosures And Reporting**                               |
| consulting           | Policies And Practices                                                            |
| manual, qualitative  | Impact Report                                                                     |
| manual, qualitative  | Standards And Policies                                                            |
| consulting           | Impact Reduction                                                                  |
|                      | **5.10 Create One Or More Impact Business Models**                                |
| consulting           | Theory Of Change                                                                  |
|                      | **5.11 Follow A Product Management And Maintenance Strategy**                     |
| consulting           | Management And Maintenance                                                        |
| consulting           | Planning Strategy                                                                 |
| consulting           | Resourcing Products                                                               |
| consulting           | Resource Measurement                                                              |
|                      | **5.12 Implement Continuous Improvement Procedures**                              |
| consulting           | Continuous Improvement                                                            |
| consulting           | Agile Reviews                                                                     |
| consulting           | Iterative Consideration                                                           |
| consulting           | Functionality Decisions                                                           |
| consulting           | Security Updates                                                                  |
| consulting           | Skills And Maintenance                                                            |
|                      | **5.13 Document Future Updates And Evolutions**                                   |
| consulting           | Feature Changes                                                                   |
|                      | **5.14 Establish If A Digital Product Or Service Is Necessary**                   |
| consulting           | Sustainable Development Goals                                                     |
| consulting           | Creation Evaluation                                                               |
| consulting           | Avoid Duplication                                                                 |
| consulting           | Obstacle Consideration                                                            |
|                      | **5.15 Determine The Functional Unit**                                            |
| consulting           | Life-cycle Assessment                                                             |
|                      | **5.16 Create A Supplier Standards Of Practice**                                  |
| consulting           | Vetting Potential Partners                                                        |
| consulting           | Collaborative Measurement                                                         |
| consulting           | Informative Partner Promotion                                                     |
|                      | **5.17 Share Economic Benefits**                                                  |
| consulting           | Living Wage                                                                       |
| consulting           | Incentivisation                                                                   |
| consulting           | Employee Benefits                                                                 |
| consulting           | Legislation Advocation                                                            |
|                      | **5.18 Share Decision-making Power With Appropriate Stakeholders**                |
| consulting           | Decision-Making                                                                   |
|                      | **5.19 Use Justice, Equity, Diversity, Inclusion (JEDI) Practices**               |
| consulting           | JEDI Practices                                                                    |
| manual, quantitative | Accessibility Policy                                                              |
| consulting           | JEDI Training                                                                     |
| consulting           | JEDI Improvements                                                                 |
| consulting           | JEDI Legislation                                                                  |
|                      | **5.20 Promote Responsible Data Practices**                                       |
| manual, qualitative  | Privacy Policy                                                                    |
| consulting           | Data Ownership                                                                    |
| consulting           | Data Protection                                                                   |
|                      | **5.21 Implement Appropriate Data Management Procedures**                         |
| consulting           | Outdated Content                                                                  |
| manual, qualitative  | Data Controllers                                                                  |
|                      | **5.22 Promote Responsible Emerging Technology Practices**                        |
| manual, quantitative | Emerging Technologies                                                             |
| consulting           | Disruptive Technology                                                             |
| consulting           | Technology Legislation                                                            |
|                      | **5.23 Include Responsible Financial Policies**                                   |
| consulting           | Fuel Divestment                                                                   |
| consulting           | Responsible Finance                                                               |
|                      | **5.24 Include Organizational Philanthropy Policies**                             |
| consulting           | Philanthropy Policy                                                               |
| consulting           | Success Criterion Voluntary Work                                                  |
|                      | **5.25 Plan For A Digital Product Or Service's Care And End-Of-Life**             |
| consulting           | End-of-life Care                                                                  |
|                      | **5.26 Include E-waste, Right-to-repair, And Recycling Policies**                 |
| consulting           | E-Waste Policy                                                                    |
| consulting           | Recycling And Repairing                                                           |
| consulting           | Refurbishment Strategy                                                            |
|                      | **5.27 Define Performance And Environmental Budgets**                             |
| consulting           | Environmental Budget                                                              |
| consulting           | Performance Budget                                                                |
| consulting           | Measurable Improvements                                                           |
| consulting           | Capacity And Maintenance                                                          |
|                      | **5.28 Use Open Source Tools**                                                    |
| consulting           | Open Source Policy                                                                |
| consulting           | Collaboration                                                                     |
| consulting           | Contribution                                                                      |
