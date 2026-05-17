---
layout: ../../layouts/Base.astro
title: "Date & Time Functions | Data with Duke Fundamentals Lesson 4"
date: 2026-02-08
summary: "In this lesson we break down how **dates and times actually work** in Google Sheets and Excel, including serial values, time as decimals, `TODAY()` vs `NOW()`, and why timestamps can silently betray you. We also cover building dates properly with `DATE()`, extracting components, and formatting dates as text — plus the *very important* warning about when a date stops being a date at all."
track: "Spreadsheet Fundamentals"
season: 01
chapterNumber: 03
tags: ["spreadsheets","google sheets","microsoft excel","date time functions","date functions","time functions","today function","now function","spreadsheet basics","excel basics","google sheets tutorial","data types","data cleaning","data quality","data literacy","learn spreadsheets"]
youtubeId: "lM6TbClmhk8"
category: "Spreadsheets"
---
## Watch the video on YouTube
[![Watch the video](https://img.youtube.com/vi/lM6TbClmhk8/0.jpg)](https://youtu.be/lM6TbClmhk8)


---
### Show Notes (summarised by AI)

### Date & Time Functions in Spreadsheets

*Google Sheets, Excel, and friends*

Dates in spreadsheets look friendly. Reassuring. Familiar.
They are none of those things.

In this lesson, we unpack one of the most important (and most misunderstood) spreadsheet concepts: **dates and times are just numbers in disguise**.

### Dates are serial numbers (wearing a convincing costume)

When you enter a date like **9 February 2026**, it *looks* like a date — but behind the scenes it’s actually a serial number.
Each day increments by **1**, starting from a fixed origin date defined by the spreadsheet system.

That’s why:

* 29 Aug 1997 → `35671`
* 28 Aug 1997 → `35670`

One day earlier = one less in the serial value.

This matters because once dates are numbers, you can **do maths with them**:

* `=TODAY() + 1` → tomorrow
* `=NOW() + 1.5` → 36 hours from now

Powerful… but dangerous if you don’t know what’s happening underneath.

### Time is the decimal part

Times work the same way — just as **fractions of a day**:

* Whole number = date
* Decimal = time

So:

* `0.5` = 12 hours
* `0.25` = 6 hours

This is why:

* Adding `0.5` shifts time by half a day
* Adding `1` always advances the date by exactly one day

### TODAY() vs NOW() — and why NOW() bites people

* `TODAY()` returns the current date
* `NOW()` returns date **and** time

But here’s the catch:
**NOW() recalculates every time the sheet changes.**

That means it’s *not* a safe timestamp unless you deliberately freeze it.
We’ll deal with that properly in a later lesson — but for now, caution is advised.

### Building dates properly with `DATE()`

Instead of typing dates manually, you can (and often should) build them explicitly:

```
=DATE(2025, 1, 31)
```

Why this matters:

* Avoids UK vs US date-format disasters
* Prevents silent data quality errors
* Makes imported data far safer to work with

You can also rebuild dates from components:

* Year column
* Month column
* Day column

### Extracting parts of a date or time

Once you have a proper date/time value, you can extract:

* `YEAR()`
* `MONTH()`
* `DAY()`
* `HOUR()`
* `MINUTE()`
* `SECOND()`

These all work because the underlying value is still numeric.

### Formatting dates as text (and the big warning)

Using formatting codes (like `TEXT()`), you can control exactly how a date appears:

* `MM` → 11
* `MMM` → Nov
* `MMMM` → November
* `DDD` → Sat
* `DDDD` → Saturday

You can even build fully custom formats:

```
Saturday, 05 November 1955 - 10:04
```

But once you do this…

⚠️ **It is no longer a date.**
⚠️ **It is now text.**

You cannot:

* Extract the year
* Add days
* Use date maths

We’ll deal with error handling later — for now, just remember:

> Formatting changes *how it looks*, not *what it is* — until you convert it to text.

### Key takeaways

* Dates are numbers
* Times are decimals
* TODAY and NOW are volatile
* DATE and TIME give you control
* TEXT formatting is powerful but destructive

Have a play. Break things safely.
And keep an eye out for the next lesson.

— Duke

---

