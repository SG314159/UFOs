# UFOs
UT Bootcamp Challenge Module 11 - JavaScript, HTML, CSS, and D3.

## Project Overview
The purpose of this project was to create a webpage that could display UFO sighting data and provide a user ways to filter the data displayed on the webpage. The UFO sighting data is likely a fictious set (no source was provided.)  Each observation consists of a date, city, state, and country, of a supposed UFO sighting along with the shape of the UFO, the duration of the sighting, and additional comments. 

## Results
This webpage has the picture and paragraph at the top followed by the default listing of all data points in a table. 
![webpage1](https://github.com/SG314159/UFOs/blob/main/static/images/Webpage1.PNG)

If a user wishes to filter the data, the user types a date or other field into the search boxes on the left side. There is some default text shown in gray to give examples of the form for the user to use.
![SearchBoxes](https://github.com/SG314159/UFOs/blob/main/static/images/SearchBoxes.PNG)

As the user enters information in the filters, the table of data on the right side is filtered to match the user criteria. The image below shows the filtered table after the user enters "ca" for the state and "1/4/2010" as the date.
![FilteredData](https://github.com/SG314159/UFOs/blob/main/static/images/filteredData.PNG)

## Summary
The biggest drawback of this design is that the information entered by the user to filter the data comes in as a string. This leaves a lot of room for incorrect data entry or just misleading results due to spelling errors, capitalization, etc. It can also be overwhelming if the search results are long and the user needs to reorganize the information while viewing it.

Here are some recommendations for modifications that could fix this problem.
- Have the states and countries that are available in the data be listed in a drop-down menu under "Enter State" and "Enter Country." The user would then select the item from the list rather than typing it in manually.
- Make the Shapes field be a list of checkboxes where the user could see all the possible shape options and not have to guess what they are. Making a checkbox instead of a radio button would allow the user to search for multiple values within the Shape field.
- Add sorting functionality to the table headers so that once a filtered table is displayed, the user could sort by city, date, country, etc. in ascending or descending order.
