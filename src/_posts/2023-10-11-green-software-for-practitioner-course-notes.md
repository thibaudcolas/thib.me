---
layout: post
title: "Green Software for Practitioners course notes"
date: 2023-10-11 01:47:03 +0100
comments: true
categories: [Open Source, Training, Sustainability]
---

A few days ago I took the [Green Software for Practitioners](https://training.linuxfoundation.org/training/green-software-for-practitioners-lfc131/) course. It was great. Here are my highlights from the course material.

<!-- more -->

## Intro

Only three activities reduce the carbon emissions of software; energy efficiency, carbon awareness, and hardware efficiency. This training will explain all of these concepts, how to apply them to your processes and how to measure them, as well as some of the international guidelines and organizations that guide and monitor this space.

Key areas:

- Carbon Efficiency: Emit the least amount of carbon possible.
- Energy Efficiency: Use the least amount of energy possible.
- Carbon Awareness: Do more when the electricity is cleaner and do less when the electricity is dirtier.
- Hardware Efficiency: Use the least amount of embodied carbon possible.
- Measurement: What you can't measure, you can't improve.
- Climate Commitments: Understand the exact mechanism of carbon reduction

Great glossary of acronyms

Useful terms:

- [**Carbon Intensity**](https://learn.greensoftware.foundation/practitioner/carbon-awareness/#carbon-intensity) - Measures the amount of greenhouse gases emitted per unit of electricity produced.
- [**Demand Shaping**](https://learn.greensoftware.foundation/practitioner/carbon-awareness/#demand-shaping) - The strategy of moving workloads to regions or times when the carbon intensity is less
- [**Greenhouse Gas protocol**](https://ghgprotocol.org/) - The most widely used and internationally recognized greenhouse gas accounting standard.
- [**Value chain emissions**](https://www.cisl.cam.ac.uk/education/graduate-study/pgcerts/value-chain-defs) - These are scope 3 emissions according to the GHG protocol, and the most significant source of emissions. They encompass the full range of activities needed to create a product or service, from conception to distribution.
- [**Energy proportionality**](https://learn.greensoftware.foundation/practitioner/energy-efficiency/#energy-proportionality) - Measures the relationship between power consumed by a computer and the rate at which useful work is done (its utilization).
- [**Static power draw**](https://learn.greensoftware.foundation/practitioner/energy-efficiency/#static-power-draw) - This refers to how much electricity is drawn when a device is in an idle state.
- [**Embodied carbon**](https://learn.greensoftware.foundation/practitioner/hardware-efficiency/#embodied-carbon) (also known as "embedded carbon") - The amount of carbon pollution emitted during the creation and disposal of a device.

## Carbon Efficiency

In the software space, the part we play in the climate solution is building carbon-efficient applications. Being carbon efficient is about building applications that add the same value for you or your users but which emit less carbon.

## Energy Efficiency

Green software practitioners take responsibility for the energy consumed by their products and design them to consume as little as possible.

### Energy Proportionality

Energy proportionality, first proposed in 2007 by engineers at Google, measures the relationship between power consumed by a computer and the rate at which useful work is done (its utilization).

Utilization measures how much of a computer's resources are used, usually given as a percentage. A fully utilized computer running at its maximum capacity has a high percentage, while an idle computer with no utilization has a lower percentage.

The relationship between power and utilization is not proportional. Mathematically speaking, proportionality between two variables means their ratios are equivalent. For example, at 0% utilization, a computer can draw 100W; at 50%, it draws 180W; and at 100%, it draws 200W. The relationship between power consumption and utilization is not linear and does not cross the origin

### Carbon awareness

Reducing the amount of electricity consumed in your applications can help decrease the energy's carbon intensity seeing as the first thing to be scaled back are fossil fuels.

### Demand shifting

Demand shifting means moving your energy consumption to different locations or times of days where the carbon intensity is lower.

> Studies show these actions can result in 45% to 99% carbon reductions depending on the number of renewables powering the grid.

### Demand shaping

Demand shaping means adapting your energy consumption around carbon intensity variability in order to consume more in periods of low intensity and less in periods of high intensity.

> As Green Software practitioners, we would consider canceling a process when the carbon intensity is high instead of demand shifting - reducing the demands of our application and the expectations of our end users.

## Hardware efficiency

> It’s better to use one server at 100% utilization than 5 servers at 20% utilization

Lower embodied carbon (FRC)

## Measurement

GHG, SCI

Scope 3: Other indirect emissions from all the other activities you are engaged in. Including all emissions from an organization's supply chain; business travel for employees, and the electricity customers may consume when using your product.

> Open-source projects typically have multiple contributors from multiple organizations. As a result, it’s unclear who should be responsible for calculating the emissions as well as who is accountable for eliminating them. When you also consider that open-source software makes up 90% of a typical enterprise stack, it is clear that there is going to be a large amount of carbon emissions that are not accounted for.

### The SCI Equation​

https://grnsft.org/sci

https://sci-guide.greensoftware.foundation/

## Targets

> To meet a net-zero target, an organization needs to eliminate 90% of its emissions by 2050

### 100% Renewable

24/7 hourly matching is one of the many strategies we need to employ to help accelerate the transition to a 100% renewable-powered grid. For example, Google and Microsoft have both committed to 24/7 hourly matching by 2030.
