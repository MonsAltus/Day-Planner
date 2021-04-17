# Day-Planner
## A simple day planner to manage your time.

### Description:
This page is designed to be a simple day planner.
The current date and time is displayed at the top of the page.
Beneath is the series of rows for common work hours.
The task blocks are color coded to show the past hours, current hour, and future hours.
Click on a task block to enter a task, then click the save button on the right to save that task.

### Acceptance criteria:
- GIVEN I am using a daily planner to create a schedule
- WHEN I open the planner
- THEN the current day is displayed at the top of the calendar
- WHEN I scroll down
- THEN I am presented with timeblocks for standard business hours
- WHEN I view the timeblocks for that day
- THEN each timeblock is color coded to indicate whether it is in the past, present, or future
- WHEN I click into a timeblock
- THEN I can enter an event
- WHEN I click the save button for that timeblock
- THEN the text for that event is saved in local storage
- WHEN I refresh the page
- THEN the saved events persist

### Links:
[Website preview](./assets/preview.png)<br>
[Link to deployed website](https://monsaltus.github.io/Day-Planner/)

### Changelog:
#### index.html:
#### style.css:
#### script.js:
- added an interval timer for styleRows so that the color changes dynamically as the hours pass.