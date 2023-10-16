Pet Behavior
=============================
**Purpose**

Based on user actions and other factors, the pet can exhibit a variety of behaviors on-screen. This component interprets user input, the visual feed, and other inputs and converts them into pet behaviors.

## BehaviorInterpreter

**Purpose**

Class BehaviorInterpreter will interprets user input, visual feed, and other inputs to determine pet behaviour.

**Data Fields**
- behaviour
    - Type: Behaviour
    - Purpose: Hold a reference of pet behaviour that determine pet behaviour. 
- Userinput
    - Type: Touch
    - Purpose: Hold a reference of user input that using to covert to pet behaviour.

**Medthods**
- InterpretUserInput
    - Purpose: This fucntion will get user input and covert it to pet behaviour.
    - Parameters: Touch
    - Return Value and Output Variables: Behaviour
    - Exceptions Thrown: Error Code.

- InterpretVisualFeed
    - Purpose: This fucntion will convert visual feed from user to behaviour.
    - Parameters: Behaviour
    - Return Value and Output Variables: Behaviour
    - Exceptions Thrown: Error Code.

- determinePetBehavior
    - Purpose: This class will determine typor of per behavior from user input.
    - Parameters: Touch
    - Return Value and Output Variables: Behaviour
    - Exceptions Thrown: Error Code.
    
## BehaviorManagerment

**Purpose**

This class will manages the different behaviors the pet can exhibit.

**Data Fields**
- behaviour
    - Type: Behaviour
    - Purpose: Hold a reference of pet behaviour that determine pet behaviour. 
**Medthods**

- ManageBehavior
    - Purpose: This fucntion will get user input and covert it to pet behaviour.
    - Parameters: Behaviour
    - Return Value and Output Variables: Behaviour
    - Exceptions Thrown: Error Code.

- TriggerBehavior
    - Purpose: This function set up the trigger for pet when receive user input.
    - Parameters: Behaviour
    - Return Value and Output Variables: None
    - Exceptions Thrown: Error Code.

- UpdateBehavior
    - Purpose: This function will update pet behavior to pet display.
    - Parameters: Behaviour
    - Return Value and Output Variables: None
    - Exceptions Thrown: Error Code.

## UserActionProcessor

**Purpose**

Class UserActionProcessor will processes user actions and converts them into corresponding pet behaviors.

**Data Fields**
- Userinput
    - Type: Touch
    - Purpose: Hold a reference of user input that using to covert to pet behaviour.

**Medthods**
- ProcessUserAction
    - Purpose: This function will process user action to behavior
    - Parameters: UserAction
    - Return Value and Output Variables: None
    - Exceptions Thrown: Error Code.

- ConvertActionToBehavior
    - Purpose: This fuction will convert action to behaviour type.
    - Parameters: UserAction
    - Return Value and Output Variables: Behaviour
    - Exceptions Thrown: Error Code.

- ManageActionData
    - Purpose: This function will manage the converted behaviour data. 
    - Parameters: Behaviour
    - Return Value and Output Variables: None
    - Exceptions Thrown: Error Code.

## HealthMetricCalculator

**Purpose**

Class HealthMetricCalcualtor will Calculates the health metrics of the pet based on user diet and exercise habits.

**Data Fields**
- behaviour
    - Type: Json
    - Purpose: Hold a reference of user healths.

**Medthods**

- CalculateHealthMetric
    - Purpose: This function will calcualte the health metric of pet and return to pet display 
    - Parameters: Float
    - Return Value and Output Variables: Float
    - Exceptions Thrown: Error Code.

- ProcessUserHabit
    - Purpose: This function will get user data from database to tracking user input foods.
    - Parameters: Float
    - Return Value and Output Variables: Float
    - Exceptions Thrown: Error Code.

- ManageHealthData
    - Purpose: This function will manage heathdata of user by using algorithm to calcualte user heath status.
    - Parameters: Data
    - Return Value and Output Variables: Json
    - Exceptions Thrown: Error Code.

