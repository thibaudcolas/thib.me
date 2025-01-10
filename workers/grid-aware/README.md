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

## Work in progress

https://workers.thibaudcolas.workers.dev/

## Possible improvements

- Investigate if it’s possible to use more granular [Electricity Maps zones](https://api.electricitymap.org/v3/zones) than countries
