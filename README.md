# TV basic POC test (Expermintal)

This project is aimed to test the core functionality needed to integrate VOD apps with web-based TV platforms.

## Objectivs

[ ] Not Implemented, [-] Inprogress, [X] Done

1. [ ] Build a test for CSS3 compatibility
2. [ ] Build a test for native media support
3. [-] Build a test for DRM and non-native HLS media support
4. [-] Build a test for Network policies
5. [ ] Writing unit tests (Better if we use TDD)

## Get started

1. clone `$ git clone https://github.com/owaiskreifeh/tv-poc-test.git`
2. install packages `$ yarn`
3. start project locally `$ yarn start`

## Code structure

1. Views: Pages/Screens (@TODO: Add description)
2. Components: UI Fragments (@TODO: Add description)
3. Lib: Functions needed to run the tests

## Code guide

* All the files should be .ts/tsx files.
* No implicit `any` type is allowed.
* Should not use `any` as a type except where it should
* code format is a must.
* Views and Components should not hold any test logic or test functions should have any UI.
* Use HTML5 semantic tags as possible.
* Use CSS carefully. (Just enough to make the app usable in basic shape).
* For custom interfaces use _I(Interface)_ style ex: _Class => Player, interface => IPlayer_
* Use underscore to define `private` and `local` properties and methods.
* !!! Document everything !!! Do not leave anything w/out doc blocks
