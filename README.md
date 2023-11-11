# cColor

---

Utility for console text color. Based on [3-bit, 4-bit color chart](https://en.wikipedia.org/wiki/ANSI_escape_code#:~:text=The%20chart%20below%20shows%20the%20default%20values) from Wikipedia.

### Description

---

**Method:** <u>cColor</u>
\
**Type:**

```typescript
(text: string, initial: StringColorInitial | ObjectColorInitial) => string;
```

**Type:** <u>StringColorInitial</u>
\
**Description:** Has a value from the [table](#table) of color full initials.

**Type:** <u>ObjectColorInitial</u>

```typescript
{
  F?: ColorInitials;
  B?: ColorInitials;
}
```

**Description:** An object consisting of two keys F and B, denoting the position of the Foreground and Background colors and having a value from the color initials [table](#table).

**<a name="table"></a>Table:** Colored initials that you can see here.

| Color               | Foreground | Background |
| ------------------- | :--------: | ---------- |
|                     |     F+     | B+         |
| Black               |     D      |            |
| Red                 |     R      |            |
| Green               |     G      |            |
| Yellow              |     Y      |            |
| Blue                |     B      |            |
| Magenta             |     M      |            |
| Cyan                |     C      |            |
| White               |     W      |            |
| Bright Black (Gray) |     BD     |            |
| Bright Red          |     BR     |            |
| Bright Green        |     BG     |            |
| Bright Yellow       |     BY     |            |
| Bright Blue         |     BB     |            |
| Bright Magenta      |     BM     |            |
| Bright Cyan         |     BC     |            |
| Bright White        |     BW     |            |

**Example:**

```typescript
import cColor from 'ccolor';

cColor('Some text', 'FY');
cColor('Some text', 'BM');
cColor('Some text', { F: 'Y', B: 'BM' });
```
