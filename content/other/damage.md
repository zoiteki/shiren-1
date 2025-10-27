---
title: "Damage"
metaTitle: "Damage - Shiren 1 Wiki"
metaDescription: "Damage Calculation info for Shiren the Wanderer"
---

## Attack Formula

Monsters have a set Attack. Shiren's Attack is based on his Weapon Strength, Strength, and Level.

$$
a = \lfloor {(w+s-8)*p_l \above{1pt} 16} + {1 \above{1pt} 2} \rfloor + p_l
$$

$a$ = attack  
$w$ = weapon strength  
$s$ = strength  

Additional information

Max Attack = 255  
When throwing or using arrows: $s=0$
If using Wooden Arrows: $w=5$  
If using Iron Arrows: $w=12$  
If using Silver Arrows: $w=10$  
When throwing a weapon, the strength of the weapon is used as $w$
There is an overflow bug when throwing with a weapon with exceptionally high power

- When: $w\ge136$: $s=-256$
- Don't throw your +99 Hiken Kaburasutegi!

$l$ = Shiren's Level (Max Level = 70)

$p_l$ = power array lookup based on Shiren's level. See [EXP](../experience/)

(e.g. $p_l = 23$ when $l=10$)

## Damage Formula

$$
D= {\lceil a*[112...144]*({15\above{1pt}16})^d \rceil\above{1pt}128}*m
$$

$D$ = Damage  
$a$ = Attack (see above)  
$[112...144]$ = Random value between 112 & 144  
$d$ = Defense or Shield Strength

Max Damage is 255

m is a modifier for crits, weaknesses, and Powerup Scroll.  
$m=cwP$  
Let c, w, and P = 1  
If crit: $c=2$  
If weakness: $w=2$  
If Powerup Scroll $P={3\above{}2}n$ where n is the number of Powerup scrolls used
