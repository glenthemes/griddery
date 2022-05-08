### GRIDDERY (v1.0)

#### Hello, as of May 2022 there's a new version of Griddery, please view [the new README](https://github.com/griddery/griddery.github.io#readme) for details!

​
​
​
​
​
​
​

---

**Instructions for old version:**

Inspired by David DeSandro's [masonry](https://masonry.desandro.com/), GRIDDERY is a script that automatically  
organizes divs of the same selector into a grid without relying on `.height()` and `position:absolute`,  
instead utilizing `table-row`, `table-cell`, and `:nth-child` to mimic a grid by sorting the divs into columns.

> If you're a theme user from tumblr and are looking to turn your theme from 1 column to 2 columns,  
  **ask your theme's maker if it's okay to do that first.**

#### [🌸  DEMO HERE  🌸](https://jsfiddle.net/glenthemes/zk9dp6oy/)  
<sup>(when you're there, scroll down the cat box to see everything)</sup>

#### HOW TO INSTALL:

Paste the following under `<head>`:

```html
<!-- jquery -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

<script src="//griddery.github.io/grid.js"></script>
<link href="//griddery.github.io/basics.css" rel="stylesheet">

<script>
$(document).ready(function(){
    griddery($(".posts"), "--Columns");
});
</script>
```

* `$(".posts")` is the selector you want to wrap into a grid
* `"--Columns"` is your CSS variable name for **how many columns you want your grid to consist of.**  
  do not remove the encasing quotation marks `""`.

Next, add this CSS somewhere between `<style>` and `</style>`:

```css
:root {
    --Columns:3;
    --Column-Spacing:15px;
    --Item-Spacing:15px;
}

.col-column + .col-column {
    padding-left:var(--Column-Spacing);
}

.col-item + .col-item {
    margin-top:var(--Item-Spacing);
}
```

You can rename any of those variables to anything you want.  
But with `--Columns`, remember to change the name here as well:  
  
<img width="300" alt="image" src="https://user-images.githubusercontent.com/97827977/149661489-df648df0-0fb7-486c-b826-fec8b0d67cb9.png">

---
If your columns are spaced too far apart even though you set a small spacing value,  
try setting `.col-column` to `width:0;` or `width:initial;`.
```css
.col-column {
    width:0;
}
```

---

##### SPECIAL NOTES:

Sadly, you can only use `griddery()` once, and cannot call it a second time.  
Currently I have no idea how to make it work, but if you have any suggestions I'm open to them.

This does not work with infinite scroll.

---

#### TROUBLESHOOTING:
💌 Discord: [discord.gg/RcMKnwz](https://discord.gg/RcMKnwz)
  > remember to include your project code when asking for help!  
    if for any reason you can't, DM me and we can figure something out.
