# Finance tracker

## Table of Contents
- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## About
This program helps people track spending on utilities and grocery shopping.  

It allows users to record spending instances with details such as date, cost, purchase author, utility type, grocery store, and usage amount (depending on the instance type).  

The **Monthly statistics** section summarizes spending, showing:
- How much each person has spent  
- Total spent on utilities  
- Total spent on groceries  
- Overall total  
- Last month’s totals for comparison  

The **Utilities** and **Food** sections can be:
- Filtered by store or author  
- Sorted by date (ascending/descending)  
- Sorted by cost (ascending/descending)  

## Installation

### Prerequisites
Make sure you have Node.js (project coded using v22.17.0) and npm installed:

```bash
node -v
npm -v
```

```bash
# clone the repo
git clone https://github.com/AinisALaur/Finance-tracker.git

# go into the project
cd Finance-tracker

# install dependencies
npm install

# run in development mode
npm start
```

## Usage
To add a new instance, click the "+" button on the bottom left, a menu will appear with all of the possible selections and inputs. Once every field is filled in, a "Submit" button will appear, allowing the user to record the instance. The instance will appear in its chosen category. On hover, you can either "edit" or "delete" the instance. If any additional coding or maintenance is needed and the records are at risk, there are export (↑) and import (↓) buttons.

## License
This project currently has no license assigned. All rights reserved until a license is chosen.
