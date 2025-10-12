---
slug: "/system/traps"
title: "Traps"
metaTitle: "Traps - Shiren Wiki"
metaDescription: "Trap details for Shiren the Wanderer."
---

## Trap Info

- Traps are found on the ground and activate when stepped on.
- Naturally spawning traps only exist in rooms
  - Naturally spawning traps may can be in the corridors of mazes are those are
    considered rooms
  - Naturally spawning traps may not be inside a wall, or where a wall used to be
  - Karakuroid may create traps in hallways
  - Traps cannot be created inside a shop, even after reading a Bigroom scroll
  - They generally apply a negative effect, but some can be utilized to your advantage.
- Traps are normally hidden, and are revealed when you step on them or do a direct
  attack above them.
  - They become visible if you eat Herb of Sight or have Trap Master status.
  - Springs needed to escape rooms without hallways are always visible.
  <!-- TODO: Confirm translation? Make sure this is understood -->
- There are 11 types of trap per floor, and only those traps will appear
  - The number of traps that appear in Table Mountain, Shrine of the Food God, and
    Fei's Final Problem will increase the further you are in the dungeon
    - Floor 1-10: 1~3
    - Floor 11-20: 3~5
    - Floor 21-30: 5~7
    - Floor 31-99: 7~9
  - In the Cave behind the Scroll, the number of traps on each floor is 7~9
- Trap Scroll & Karakuroid may overwrite existing traps
- Traps are normally invisible, but may be made visible by doing a practice swing
  on a tile with an invisible trap, or by stepping on it
  - Vision Herb, Karakuroid Meat, and the Trapper Bracer will make traps visible
  - Traps created by a Karakuroid are visible
  - When performing a practice swing on a trap, there is no chance of missing
  - When transformed into a monster, you cannot detect traps
  - Traps cannot be detected when performing a practice swinging around a corner
    - Even with Kamaitachi
  - If you swing at a monster that is standing above a trap, it will not reveal
    the trap under it's feet
- If you step on a trap that is invisible, it will be guaranteed to activate
- If you walk onto a visible trap, there is a 50% chance for it to not activate
  - Using the Activate Trap command will make it trigger
- Traps may spawn in front of the entrances/exits to a room.
  - If there is only one exit of a room, Spring Traps, Log Traps, and Pitfalls may
  make it difficult to proceed
  - You may use a Pickaxe to avoid these traps
- Items may not be dropped onto a trap, whether it is visible or invisible
- When equipped with the Trapper Bracer, Shiren will not activate traps, but monsters
  will instead
  - Certain monsters will not activate traps, ghost types, Dragon Heads, and Dark
    Owls will not trigger traps
  - If an enemy with 2 Actions per turn steps onto a trap on their first turn, they
    will not take a second turn
- If you step on a throw trap such as an Arrow trap, it will pass through monsters
  and always hit the character who triggered the trap

## Trap List

How to read the trap list

- EXP: Whether experience is gained when a monster activates this trap
- Shiren: The effect of the trap when Shiren activates it
- Monster: The effect of the trap when a Monster activates it

<!-- TODO: Confirm names of traps -->
<table class="trapTable">
  <thead>
    <tr>
      <th>Name</th>
      <th>EXP</th>
      <th>Shiren</th>
      <th>Monster</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Stumble</td>
      <td>✅</td>
      <td>Trip and drop up to 5 items (pots can break).</td>
      <td>Receive 1 damage.</td>
    </tr>
    <tr>
      <td>Rust</td>
      <td>❌</td>
      <td>Reduces shield strength by 1. Can be prevented by
        rust-proof Bracers and plating</td>
      <td>
        Defense down to Flame Priests<br>
        Instant-death to Face-First Warriors<br>
        Slow to TanksLevel up to Midoro
      </td>
    </tr>
    <tr>
      <td>Removal</td>
      <td>❌</td>
      <td>Removes equipped items, including cursed items</td>
      <td>Seals special attacks</td>
    </tr>
    <tr>
      <td>Rotten</td>
      <td>❌</td>
      <td>Any rice balls not inside a pot are turned into
        Rotten Rice Balls</td>
      <td>Turns enemy into a Rotten Rice ball</td>
    </tr>
    <tr>
      <td>Alarm</td>
      <td>❌</td>
      <!-- TODO: define this status -->
      <td>Lightly sleeping monster and paralyzed monsters
        are woken up on the floor.</td>
      <td>Lightly sleeping monster and paralyzed monsters
        are woken up on the floor.</td>
    </tr>
    <tr>
      <td>Summoning</td>
      <td>❌</td>
      <td>Summons up to 4 monsters that appear on this floor
        around the trap</td>
      <td>Summon 4 monsters of the same type around the trap</td>
    </tr>
    <tr>
      <td>Trap</td>
      <td>❌</td>
      <td>Traps will spawn throughout the floor,
        the trap underneath you will not change</td>
      <td>Traps will spawn throughout the floor.
        There is a chance it will spawn a trap underneath you</td>
    </tr>
    <tr>
      <td>Pitfall</td>
      <td>❌</td>
      <td>Deal 7-8 damage (reduced by defense) and move to
        the next Floor.
        If there is no floor below, only damage is dealt</td>
      <td>Instant death</td>
    </tr>
    <tr>
      <td>Spring</td>
      <td>❌</td>
      <td>Sent to another location on the floor</td>
      <td>Sent to another location on the floor</td>
    </tr>
    <tr>
      <td>Reinforced Spring</td>
      <td>❌</td>
      <td>Same as above, but activates 100% of the time,
        and when Shiren is wearing the trapper bracer</td>
      <td>Monsters will not step on this special trap</td>
    </tr>
    <tr>
      <td>Log</td>
      <td>✅</td>
      <td>Knocked back ~10 squares in the opposing direction,
        deals 5 damage</td>
      <td>Knocked back ~10 squares in the opposing direction,
        deals 5 damage</td>
    </tr>
    <tr>
      <td>Tiger</td>
      <td>❌</td>
      <td>Cannot move for 5 turns</td>
      <td>Cannot move for 9 turns</td>
    </tr>
    <tr>
      <td>Confuse</td>
      <td>❌</td>
      <td>Become confused for 10 turns</td>
      <td>Become confused for 10 turns</td>
    </tr>
    <tr>
      <td>Delusion</td>
      <td>❌</td>
      <td>Become Delusional for 10 turns</td>
      <td>Become Delusional permanently</td>
    </tr>
    <tr>
      <td>Sleeping</td>
      <td>❌</td>
      <td>Sleep for 5 turns</td>
      <td>Sleep for 5 turns</td>
    </tr>
    <tr>
      <td>Slow</td>
      <td>❌</td>
      <td>Slowed for 10 turns</td>
      <td>Slowed permanently</td>
    </tr>
      <tr>
      <td>Hunger</td>
      <td>❌</td>
      <td>Satiation decreased by 10%</td>
      <td>
        Instant Death<br>
        Level up to Polygons
      </td>
    </tr>
      <tr>
      <td>Poison Arrow</td>
      <td>✅</td>
      <td>Deals 7\~8 damage & Strength is reduced by 1</td>
      <td>
        Deals 26~30(?) damage<br>
        Does nothing to Flame Priests<br>
        Instant death to Face-first Warriors
      </td>
    </tr>
      <tr>
      <td>Landmine</td>
      <td>❌</td>
      <td>
        Explodes, hitting the 8 tiles surrounding it and
        reducing Shiren's HP by half. If Shiren has 1 HP,
        he dies
      </td>
      <td>
        Instant Death<br>
        Turns Chickens into Meat<br>
        Splits a Flame Priest into 2
      </td>
    </tr>
      <tr>
      <td>Landmine</td>
      <td>❌</td>
      <td>Explodes, hitting the 8 tiles surrounding it and
        reducing Shiren's HP to 1. Even if Shiren steps on
        it with 1 HP, he will not die</td>
      <td>
        Instant Death<br>
        Turns Chickens into Meat<br>
        Splits a Flame Priest into 2
      </td>
    </tr>
      <tr>
      <td>Rock</td>
      <td>✅</td>
      <td>Deals 5~9 points of fixed damage</td>
      <td>Deals 5~9 points of fixed damage</td>
    </tr>
  </tbody>
</table>

### Unused Trap list

There are several traps that appear in data but are not used in the game

<table class="trapTable">
  <thead>
    <tr>
      <th>Name</th>
      <th>EXP</th>
      <th>Shiren</th>
      <th>Monster</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Time Bomb</td>
      <td>❓</td>
      <td>Explodes 3~6 turns after being activated</td>
      <td>Explodes instantly</td>
    </tr>
      <tr>
      <td>Bigroom</td>
      <td>❓</td>
      <td>The floor becomes a large room</td>
      <td>The floor becomes a large room</td>
    </tr>
      <tr>
      <td>Rice Ball</td>
      <td>❓</td>
      <td>Shiren is turned into a Rice Ball</td>
      <td></td>
    </tr>
      <tr>
      <td></td>
      <td>❓</td>
      <td>Unable to pick up items</td>
      <td></td>
    </tr>
      <tr>
      <td>Arrow</td>
      <td>❓</td>
      <td>Deals Damage</td>
      <td>Same as poison arrow</td>
    </tr>
  </tbody>
</table>
