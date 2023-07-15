# API Response Conversion

This project aims to retrieve data from a hypothetical API and convert the response into another object format. The goal is to map the fields of the API response to corresponding fields in a local database object.

## Features

-   Retrieve data from an external API.
-   Convert API response into another object format (JSON or XML).
-   Map API fields to corresponding fields in the local database object.
-   Support for YAML configuration files to define the field mapping process.
-   Support for nested objects (child objects) in the API response.

## Installation

1.  Clone the repository:
        
    `git clone https://github.com/ddarwisheh/bugloos-assessment.git` 
    
2.  Install the dependencies:
    
    `cd bugloos-assessment && npm install` 
    

## Usage

1.  Define the field mapping process in the YAML configuration file. Example:
    
    `slug: id`    
    Nested Exmaple: 
    `location:
     api_key_name: location`
    
3.  Run the program:
    
    `npm run serve` 
    
4.  The converted API response will be stored in the local database object according to the field mappings defined in the YAML configuration file.
    

## Dependencies

-   Node.js
-   npm
-   Mongodb 

## References

-   [YAML Configuration Guide](https://yaml.org/spec/1.2/spec.html)