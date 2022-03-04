# UFOs
## Project Overview
The purpose of this project was to create a visually interesting website about UFO's.  Within this site, one can apply search filters individually or in combination in order to search for UFO sightings within the table included on the UFO webpage.  UFO sightings can be searched by date, city, state, country, and shape.

## Resources
- Data Source: data.js
- Image Source: nasa.jpg

## Results
Five search fields are included in the filter search for date, city, state, country, and shape. Once information for any of the desired fields is entered, click "Enter" to search.  Note that search criteria must be entered exactly as it is presented in the table or will not produce desired results.  Here are a few examples:

**Search by a Single Criterion**

 - Enter a date from January 1, 2010, to January 13, 2010, in M/D/YYYY format, then click "Enter" on your keyboard.
 - For example, if we enter 1/13/2010, then this will return three UFO sightings.

![Date filter search example](https://user-images.githubusercontent.com/95387273/156804458-5fa9a762-6bb6-4ccd-97a5-52c0cdb1aa0c.png)

**Search by Multiple Criteria**

 - In this example, if we enter 1/1/2010 for date, "ca" for the State of California, "us" for country, and "triangle" for shape of the UFO, then five results are returned.

![Multiple criteria search example](https://user-images.githubusercontent.com/95387273/156807815-807f1efc-4222-4f8c-baca-562970be9313.png)

**Additional Caveats**
 - **City:**  Spell city names with all lowercase letters.
 - **State:**  Use US state postal abbreviations presented in all lowercase letters or Canadian province abbreviations presented in all lowercase letters.
 - **Countries:**  Only the United States (us) and Canada (ca) are included for countries in this dataset.  Use lowercase abbreviations for both.
 - **Shape:**  Multiple shapes for UFO's are included within the table.  It is recommended to review the entire table to see the range of shape types before entering a shape into the search field.


## Summary
The UFO Sightings website is complete and includes a table with recorded UFO sightings from 1/1/2010 to 1/13/2010.  Search filters can be applied individually or in combination for date, city, state, country, and shape in order to search for UFO sightings based on these criteria.
### Limitations
- One drawback of this design is that information that is typed into the fields must match exactly to the values contained within the table. For example, if someone searches for the city of "bakersfield", then one entry is returned.  However, if "Bakersfield" is entered as the search criterion, then no results are returned.
- Only thirteen days of January 2010 are included in the table, making this a narrow data set for searches.
### Recommendations
- Update the code to enable the date search field to search by month or year only when more dates are included.  Most individuals will not remember a specific day, but will more likely remember a month or year of a sighting.
- Update the code to allow for loose equality in search criteria.  This would allow string and number values to be input and give the same results.
- Continue to update information included in the table to include multiple years.
