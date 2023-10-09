---
sidebar_position: 4
description: Database Integration
---

# Database Integration

## Class DatabaseManager

**Purpose**
Manages connections, retrievals, and updates to the database.

**Data Fields**
- `dbConnection`
    - Type: Connection
    - Purpose: Holds a reference to the active database connection.

**Methods**
- `ConnectToDatabase()`
    - Purpose: Establish a connection to the database.
    - Pre-conditions: Database details like URL, username, and password must be provided.
    - Post-conditions: A connection to the database is established.
    - Parameters and Data Types: None
    - Return Value and Output Variables:
        - Type: Boolean
        - Output: Status of connection, true if connected, false otherwise.
    - Exceptions Thrown: ConnectionFailedException

- `RetrieveData()`
    - Purpose: Retrieve data from the database.
    - Pre-conditions: `dbConnection` must be active.
    - Post-conditions: Requested data is fetched.
    - Parameters and Data Types: 
        - Param: query
        - Type: String
    - Return Value and Output Variables:
        - Type: Data
        - Output: An object representing the fetched data.
    - Exceptions Thrown: DataNotFoundException

- `UpdateData()`
    - Purpose: Update data in the database.
    - Pre-conditions: `dbConnection` must be active.
    - Post-conditions: Data is updated in the database.
    - Parameters and Data Types: 
        - Param: data
        - Type: Object
    - Return Value and Output Variables: 
        - Type: Boolean
        - Output: Status of update, true if successful, false otherwise.
    - Exceptions Thrown: UpdateFailedException

## Class UserDataRetriever

**Purpose**
Retrieves user and pet information from the database.

**Data Fields**
- `userManager`
    - Type: DatabaseManager
    - Purpose: Holds a reference to the DatabaseManager to fetch user and pet data.

**Methods**
- `GetUserInfo()`
    - Purpose: Fetch user information from the database.
    - Pre-conditions: `userManager` must have an active connection to the database.
    - Post-conditions: User information is fetched.
    - Parameters and Data Types: 
        - Param: userID
        - Type: Integer
    - Return Value and Output Variables:
        - Type: User
        - Output: An object representing user information.
    - Exceptions Thrown: UserNotFoundException

- `GetPetInfo()`
    - Purpose: Fetch pet information for a given user.
    - Pre-conditions: `userManager` must have an active connection to the database.
    - Post-conditions: Pet information is fetched.
    - Parameters and Data Types: 
        - Param: userID
        - Type: Integer
    - Return Value and Output Variables:
        - Type: Pet
        - Output: An object representing pet information.
    - Exceptions Thrown: PetNotFoundException

## Class SettingsManager

**Purpose**
Manages user settings and preferences and updates them in the database.

**Data Fields**
- `settingsDB`
    - Type: DatabaseManager
    - Purpose: Holds a reference to the DatabaseManager to fetch and update settings.

**Methods**
- `FetchSettings()`
    - Purpose: Retrieve user settings from the database.
    - Pre-conditions: `settingsDB` must have an active connection to the database.
    - Post-conditions: Settings data is fetched.
    - Parameters and Data Types: 
        - Param: userID
        - Type: Integer
    - Return Value and Output Variables:
        - Type: Settings
        - Output: An object representing user settings.
    - Exceptions Thrown: SettingsNotFoundException

- `UpdateSettings()`
    - Purpose: Update user settings in the database.
    - Pre-conditions: `settingsDB` must have an active connection to the database.
    - Post-conditions: Settings data is updated.
    - Parameters and Data Types:
        - Param: settingsData
        - Type: Settings
    - Return Value and Output Variables: 
        - Type: Boolean
        - Output: Status of update, true if successful, false otherwise.
    - Exceptions Thrown: UpdateFailedException
