# Zaya Odontologia Humanizada

Business design system for the landing page.

## Brand

- Name: Zaya
- Tagline: Odontologia Humanizada
- Instagram: [odontologiazaya](https://www.instagram.com/odontologiazaya/?hl=en)
- Clinic: São Miguel Paulista, Av. Coca, 751, Vila Curuçá
- Responsible dentist: Dra. Adrielle Lucena Mota, CROSP 148412
- Clinic registration: Zaya Odontologia, CROSP-PJ 029914
- WhatsApp: [wa.me/message/SZXSDXWXDTAOO1](https://wa.me/message/SZXSDXWXDTAOO1)

Voice is calm, warm, and direct. The promise is humanized dental care.

## Logo

File: [logo.jpg](logo.jpg)

Lockup, left to right: line-art quatrefoil mark, then the wordmark `ZAYA`, with `ODONTOLOGIA HUMANIZADA` in small tracked capitals under the wordmark.

Use the full lockup on black or on white. Do not recolor the mark, stretch it, or set the wordmark in another face.

## Color

| Token | Hex | Use |
| --- | --- | --- |
| Sand | `#d3c5bc` | Brand accent, fills, dividers |
| White | `#ffffff` | Page surface, text on dark |
| Stone | `#878787` | Secondary text, logo ink on black |

`#d3c5bc` is too light to use as text on white. Use it as a fill or as an accent on a dark ground. The supplied logo sits on black, with the mark and letters in stone.

## Type

One brand face: **Bodoni Moda**. It is the closest match to the `ZAYA` wordmark: high-contrast serif, sharp apex on the A, crossbar that dips in the center.

- Source: [Bodoni Moda on Google Fonts](https://fonts.google.com/specimen/Bodoni+Moda)
- Wordmark and headings: regular weight, open letter-spacing
- Do not use italic or black weight

The line under the wordmark is not the serif. Set `ODONTOLOGIA HUMANIZADA` and other small labels in **Montserrat** light, all capitals, with wide letter-spacing.

```css
--color-sand: #d3c5bc;
--color-white: #ffffff;
--color-stone: #878787;
--font-display: "Bodoni Moda", serif;
--font-label: "Montserrat", sans-serif;
```
