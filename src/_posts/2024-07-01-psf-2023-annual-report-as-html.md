---
layout: post
title: "The PSF 2023 annual report as HTML"
date: 2024-07-01 21:18:03 +0000
comments: true
categories: [Community, Django, Marketing]
---

Here is the Python Software Foundation’s 2023 annual report, as accessible HTML.

<!-- more -->

The HTML report is available here: [2023 Annual Report - Python Software Foundation](https://psf-2023-report-as-html.netlify.app/). Original: [(PDF, 16MB) 2023 PSF Annual Impact Report](https://www.python.org/psf/annual-report/2023/).

## Why I did this

It just doesn’t feel right for content that’s so important to me in my professional and volunteering work, to be so hard to access and reuse. There is a lot in there I’ve had a need to reuse, and I could only do so by linking to my sources, and it seemed inappropriate to be linking to a 16MB (!) PDF document.

Aside from the file weight, the issues with PDFs and accessibility are well documented. Here’s a great read: [Why GOV.UK content should be published in HTML and not PDF](https://gds.blog.gov.uk/2018/07/16/why-gov-uk-content-should-be-published-in-html-and-not-pdf/). My recap is:

- PDFs are hard to read on mobile as they require a lot of zooming in and out.
- PDFs are hard to navigate, as they don’t have a table of contents or a way to link to specific sections.
- They’re hard to search, heavily dependent on how the formatting was applied.
- There’s no way to customize the font size or colors, which is real useful for people with visual impairments or specific cognitive needs (read: people who want less distractions).

Oh and – all of the above is only in the best case, where the PDF has been produced as a "tagged PDF" with accessibility in mind. Most PDFs aren’t. Most PDF _software_ that developers reach for doesn’t even support creating those tags.

## How I did it

Aside from the accessibility, I was also very interested in:

1. How much there would be room to reduce the file size of the whole thing.
2. Whether AI tools could be used to speed up the process.

See the full record of the tools and files on GitHub: [thibaudcolas / psf-annual-report-2023](https://github.com/thibaudcolas/psf-annual-report-2023).

### Data extraction

- [pdftoppm](https://linux.die.net/man/1/pdftoppm) to convert whole pages to images
- [pdfimages](https://www.xpdfreader.com/pdfimages-man.html) to extract images from the PDF
- [pdftohtml](https://www.xpdfreader.com/pdftohtml-man.html) to extract text content (including links) as HTML

```bash
pdftoppm -png -r 150 PSF_Annual_report_2023_v1b.pdf psf
pdfimages -png PSF_Annual_report_2023_v1b.pdf images
pdftohtml -fmt png PSF_Annual_report_2023_v1b.pdf report.html
```

### Conversion to HTML

Using [screenshot-to-code](https://github.com/abi/screenshot-to-code) to convert PDF page images to Tailwind HTML/CSS. Why Tailwind? It works particularly well for this kind of content, where the design can change a lot from page to page. It also works very well with AI code generation tools.

Here’s a practical example of what the input and output look like in the UI:

![Screenshot of the screenshot-to-code interface with a PyCon US 2024 slide converted to HTML with similar color gradient](/images/blog/psf-2023-annual-report-as-html/screenshot-to-code-annual-report.png)

Since screenshot-to-code operates with raster screenshots, it didn’t have any awareness of where the links in the PDF went, and wasn’t able to recreate them. So this required manually adding afterwards, which I wanted to do anyway to make sure all of the content was preserved as-is. Over about 30 pages, there were maybe one or two where the AI-generated content wasn’t the same wording as the original.

### File size reduction

We started with a 16MB PDF. All of it must load regardless of whether users interact with any of it. With no dedicated optimization at all, we probably got some savings just by virtue of moving to HTML. But I also removed all custom fonts, and most decorative images (backgrounds, gradients, effects). Just taking files through [ImageOptim](https://imageoptim.com/) in lossless mode, we arrived at a 6.2MB transfer weight (5.9MB of images).

I then optimised with:

- [pngquant](https://pngquant.org/) to reduce the number of colors in the images (so _lossy_ PNG compression)
- [jpegli](https://opensource.googleblog.com/2024/04/introducing-jpegli-new-jpeg-coding-library.html) to better compress JPEGs.
- [AVIF](https://en.wikipedia.org/wiki/AVIF), a new image format, to see if new formats could take us further.

Sample commands:

```bash
avifenc --min 20 --max 30 25-2023-expenses-by-category.png 25-2023-expenses-by-category.avif
pngquant -f --quality=70-80 25-2023-expenses-by-category.png -o 25-2023-expenses-by-category-n.png
avifenc --min 20 --max 30 report-2_1.jpg report-2_1.avif
cjpegli -q 70 report-2_1.jpg report-2_1-li.jpg
```

With those options,

- Original total image weight was 5556kb
- "jpegli + pngquant" weight is 2532kb
- AVIF weight is 1616kb

I didn’t do any attempt at quantifying the quality loss so it would be identical between AVIF and established formats, just went through it by eye. Aside from the lower file size, I also really appreciate how the "single-format" AVIF approach means not having to worry about whether an image is using the best possible format for its contents or not.

## Takeaway

All in all, it took me about 10 hours to go through all of this? It was a fair bit of work but I’m very happy I went through it as it was an excellent occasion to trial those tools and techniques. I still feel like this kind of report format should be the default, but it’s clearly possible to rework it after the fact if needed.

With the techniques and tools in place – it’d probably only take 2-3 hours to go through the same process with another report of the same size. Or even better, just publish HTML from the get-go!
