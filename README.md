# Symptom Tracker

This is a simple Symptom Tracker app built in Expo according to the description in the given case-study.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rameezh88/SymptomTracker.git
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

## Usage

Run the project using the following command.

```bash
expo start
```

or

```bash
npx expo start
```

Then, once the Metro bundler starts, press `i` to start up the `iOS` app in the Simulator, or press `a` to run the application in the Android emulator.

## Features

- Home Screen

Here is where you all the tracked symptoms are listed. A placeholder message is displayed when there are none available.

There is a `+` button in the bottom to open up the Symptom Tracker screen.

- SymptomTracker Screen

This is a modal screen that has the following steps:

1. Name Entry:

Where you enter a valid and descriptive string of what you're feeling. Eg: Pain, Nausea, etc

2. Date and Time Entry:

There are two fields that will show a date and time respectively. Each of the fields, when clicked, will open up a date/time picker dialog, accordingly.

3. Symptom Severity:

There are 5 levels of severity that are displayed, along with colours and emojis that signify the severity. Each is a button that can be selected.

4. Description:

Shows a text-field in which a free-text description can be written to describe the symptoms further.

5. Done step:

This is the step shown after all the fields have been filled. There is a relevant animation that is displayed.

There are two buttons at the bottom to navigate between previous and next steps. The next button is disabled until the field has been filled, unless it isn't mandatory. Only the description is not mandatory in this case.

There is a progress bar at the top that shows the progress.

Animations have been added to most components as specified in the case study.

## Potential Improvements

1. Better handling of keyboard events in relation to the animations. The animations are jittery sometimes on Android when the keyboard hides.
2. Usage of `redux` or `mobx` for state management and persisting of the symptom data.
3. Better UI design and fonts.
4. Better animation for the date-picker dialog.
5. Better handling of the default date and time. Now the time defaults to `00:00` at times.
6. Better handling of keyboard buttons in relation to next button in the symptom tracker. For example, the keyboard "done" button would take you to the next step.

## Future Features

1. Ability to edit and delete a symptoms, which could be done using the list items in the home screen. Preferably by adding a swipe-left-to-reveal feature to show the corresponding "edit" and "delete" buttons.
2. Integration with an API to with CRUD capabilities.
