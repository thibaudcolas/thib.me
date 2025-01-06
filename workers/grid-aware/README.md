# Grid-aware mode activation

The thought process to decide in what scenarios to activate grid-aware modifications is complex. There’s a balance to strike between setting the bar so high that in the end the site is almost always in grid-aware mode, to the point that it could just be built that way from the get-go. And setting the bar so low that the environmental benefits are questionable.

Depending on what modifications grid-aware mode entails, there’s also a question of equity when users of some countries might effectively always be in grid-aware mode, while users in other countries might never be.

## Current WIP approaches

The approaches currently drafted are to activate grid-aware mode in one of the following situations:

1. Current carbon intensity is higher than the country’s yearly average.
2. Current carbon intensity is higher than a set limit.
3. Current grid electricity mix is below a set percentage of renewable energy.
4. Current grid electricity mix is below a set percentage of low-carbon energy (renewable + nuclear).

## Picking one (or three)

From my perspective, when deciding which of those approaches to focus on, I consider:

1. Stakeholder engagement. Which approaches are more likely to be accepted? An important aspect is clarity of the outcomes.
2. Environmental impact. Which approaches are more likely to have a positive impact on the environment?
3. Equity. Which approaches are more likely to be fair to users in different countries?

In this respect, "carbon intensity higher than country average" scores reasonably well in all three counts. Alternatively, I believe it would work well to use an approach derived from overall carbon emissions goals for the site. We could call it "web carbon budgets" by analogy with web carbon budgets.

For example – we could set a goal of reaching an "A+" [digital carbon rating](https://sustainablewebdesign.org/digital-carbon-ratings/) for the 95th percentile of requests. That corresponds to 0.05gCO2e/pageview. We could then design a version of the website which can meet this rating for grid carbon intensities ranging from carbon intensities of 30 gCO2e/kWh all the way to 600 gCO2e/kWh.

## Open questions

- Seasonal patterns in renewables?
- Energy usage of different website patterns?

### Mental model

Beyond the code, what’s been the hardest for me is having a good mental model of the "grid-aware" mindset, and deciding based on what criteria to switch between the "regular" and "low-footprint" versions of a page. I wanted to ask if anyone’s already thought about this / written on the topic? I’m wondering about things like:

How to communicate this with stakeholders who might or might not be aware of the grid energy mix or carbon intensity.
Whether / how much to try to align this with any website goals (say a KPI on carbon intensity per page view, or overall Net Zero goals)
How much to grapple with any social equity considerations. There are a lot of configuration options where the "grid aware" mode would kick in 100% of the time for people in countries with carbon-intensive energy grids. I’m not sure if that’s a good thing or not.

I’ve arrived at those questions when trying to choose between the different ways to switch between the "vanilla" and "low footprint" versions of the site – specifically choosing between he "power breakdown" and "grid intensity" methods derived from Electricity Maps, and within those two, choosing between "low-carbon" and "renewable" electricity mix, and "average" or "limit" grid intensity. I feel like there’ll be lots of people asking themselves which of those to choose from based on their needs.

### Terminology for the methodology

One other thing I’ve struggled with a bit is terminology, whether we’re using "grid-aware" to refer to the behavior of a website that adapts based on the grid, or whether "grid-aware" is the state of a website only when it is being adapted for a high-intensity grid. Semantics… Not sure this is super crucial but through all of this I’m trying to think hard of how I would pitch this to stakeholders and CMS site implementers, so the clearer the better. And for site users, how we would communicate what version of the site they’re looking at (Branch Magazine uses the term "Grid intensity view" which can be "Live", "Low", "Moderate", "High").

### Design philosophy

I think the last conceptual element I grappled with was when comparing the two modes on the site, which one to consider as the "default", if any. For example in Responsive Web Design, there was a switch towards a Mobile First design and coding approach. In front-end dev, there’s the progressive enhancement and the graceful degradation philosophies.

## Work in progress

https://workers.thibaudcolas.workers.dev/
