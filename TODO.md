# TODO
My giga dev portfolio

# Global components
Theme: black and green (terminal like:P)
Font: Whatever fits the bets for recruiters to watch my portfolio
Layout:
- **left part (sidebar)**:  ABOUT ME (togglable sandwich): a pic of me on top center. Name below. Other about me infos there (like contacts...)
- **right part**: at the top there's a CENTERED navbar relative to the right part (not full width but rather 75% and rounded). 

# First section: What I do
Content:

- OOP driven app (+db) conception 
- Mobile app with hybrid dev (non native),
- Reprise de code (mostly from open source) + optimization 
- Competitive programing (leetcode).

**Left part:**
- vertically scrollable list of cards (title + icon of what I do)

**Right part:**
- bigger card of the actual selected card (default is the first element)
- title + description 
- Bonus: big Floating icon at the top right of the main card (like discord website home section), but for devs (like </> icon). With z-index bigger than the main card.

---

# Second section: Where I've worked on (on the navbar: Experience & involvement)
**Left part:**
- vertical line, like a "frise chronologique". After an element at the left, the next one is at the right. Latest one is on top ofc
- Content of an element: Date + Title.
- Most recent element (no date): Your project could be the next step here, contact me

**Right part:**
- big card describing that element *(should be a whole HTMLReactDomElement if there's no default description string ?)*

---

# Third section: projects
**Left part:**
- list of languages/business logic (theme) that will work as filters
- ex: C, C++, ERP...
- Each filter are
    - buttons without background 
    - but borders only of different colors 

**Right part:**
- the list of projects
- A project: Might have pics, might haven't, but must have title and description

---

# TODO
- [x] Design
     - NOTE: TODO: NOT FORGETTING *parallax*, it's too cool, it has to be used

- [x] Project structure
    - [x] Folder structure (Real data variables emplacement, ...)
    - [x] Global components
        - [x] Front
        - [x] Variables/Interfaces
        - [x] Dummy data for test
        - [x] Responsiveness


- [x] Frontend Variables settings
    - [x] Colors
    - [x] Font
    - [x] Fix exisitng ones

- [x] Sidebar
    - Already a global component
    - [x] Real data
    - [x] Scrollable sidebar on mobile/full content should be seen

- [x] First section
    - [x] Variables/Interfaces
    - [x] Dummy data for test
    - [x] Expected Front
    - [x] Real data
    - [x] Definitive Front
    - [x] Responsiveness
    - [x] Add swiping here for the description (+ the buttons), and add max height

- [x] Second section
    - [x] Variables/Interface
    - [x] Dummy data for test
    - [x] Expected Front
    - [x] Real data
    - [x] Definitive Front
    - [x] Responsiveness
    - [x] Add swiping for the description too, + max height

- [x] Third section
    - [x] Variables/Interface
    - [x] Dummy data for test
    - [x] Expected Front
    - [x] Real data
    - [x] Definitive Front
    - [x] Responsiveness

- [ ] Check
    - [ ] Issues
        - After asking for feedbar [here](https://www.reddit.com/r/webdev/s/KKk7Hccv90)
            - [x] Color choice: `60, 30, 10`
            - Text
                - [x] 2 fonts max, also responsive
                - [x] Structure: `h1, h3, p` 
            - Responsivity
                - [x] Modals' initial container on max-h: *"Read more"*
                - [x] Unresponsive items
            - [x] Background of xp section should be the whole app's ?
            - [x] Sidebar when not full window
            - [ ] Add a section for recommendations (ie, devs who gave feedback)
        - [ ] Navbar navigation
    - [ ] Refactor

- [ ] Setup next TODO