---
title: "Finfetch"
description: "Download CSVs from all your banks at once"
date: "Mar 1 2025"
draft: true
---

I run a small [online business](https://synthase.cc). Given that it's both small and online, our financial books are pretty simple, roughly summarized like this:

<iframe width="560" height="315" src="https://www.youtube.com/embed/cKEwnhc8ItY?si=wTuDeRFN3O005Za6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

There's no inventory. No loans. Nothing depreciates. Nothing vests. Money comes. Money goes.

For a couple of years I paid for Quickbooks. Quickbooks is double-entry bookkeeping software that both a) requires you to know double-entry boookkeeping, and b) very awkwardly tries to abstract away any double-entry bookkeeping. At some point it occurred to me that at the heart of my paid Quickbooks account was a very simple database and some pretty simple queries.

I began to wonder if there was another way.

It turns out that there's a special place for everyone who has this realization and follows its logic: the world of Plain-Text Accounting. It dates back at least as far as 2003 with the open-source CLI tool [Ledger](https://ledger-cli.org/), which is still actively maintained.

The premise of Plain Text Accounting is this: _it's perfectly possible and sufficiently robust to keep your books in a text document that both humans and machines can read._

That document looks something like this:

```
2025-02-27  stripe payout
    assets:bank:checking      $98.17
    revenue:services

2025-02-28  notion
    expenses:software         $200
    liabilities:credit card
```

I dug into the slightly more modern Haskell port of Ledger called [hledger](https://hledger.org/). It had everything I needed. But there was one thing I wanted. Something that Quickbooks gave me: an easy way to sync my bank and credit card transactions.

Hledger already has a convenient CSV import function, but no native way to get the actual transactions. I knew that logging into all of my accounts and downloading/importing separate CSVs would create enough friction that I would have trouble keeping the books up to date.

The Plain Text Accounting community has been [mulling on this for awhile](https://www.reddit.com/r/plaintextaccounting/comments/fytyhp/how_do_you_automate_downloading_bank_details/) and has found or created some solutions, like [plaid2qif](https://github.com/ebridges/plaid2qif) which can also produce CSVs.

---

Drafty stuff:

Some tools rely on OFX which is getting dropped by banks.

Plaid is designed for this stuff.

Plaid2Qif Problems:

- stateless (you have to keep track of all your account ids and access tokens in files and feed them into the CLI as parameters)
- GNUCash focused
- you have a bunch of unencrypted access tokens sitting on your hard drive

Requirements:

- SQLite database for storing account information
- encryption on the access tokens in that database
- UI for seeing which accounts you have linked and adding/removing
- big ol button to download

Occurred to me that there's nothing inherently double-entry about this: iot would be equally useful to people who keep their finances in spreadsheets.
