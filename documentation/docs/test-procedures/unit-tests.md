---
sidebar_position: 1
---

# Unit Tests

## Unit Testing Frameworks

Unity has its own embedded unit test runner and framework, NUnit.
For any Android-specific testing, JUnit will be used.

## What Will Be Tested

### Unity Components

- Game Objects: Ensure that objects are instantiated correctly and that their properties are properly set.
- Physics: Test that objects behave as expected under various conditions.
- User Inputs: The application should handle various user inputs like touch, swipe, etc.

### AR Components

- Initialization: Test that AR sessions start correctly and required resources are accessed.
- Tracking: Mock different tracking states and check how the application reacts.
- Plane Detection: Ensure that when planes are detected, they are properly represented in the app.
- Anchor Points: Test the creation, movement, and deletion of AR anchor points. Anchor points are points in the real world where virtual objects can be placed.

### Object Recognition

- Database Matching: Ensure that recognized objects correspond to objects listed in our database.
- Accuracy: Mock various object scenarios and see how recognition handles partial lighting, obscured views, etc.
- Performance: Check how quickly objects are recognized.

### Android-Specific Components

- Lifecycle Events: Test how the application functions under different Android lifecyle events such as onPause or onResume.
- Permissions: Check app's behavior when permissions (like camera access) are denied.