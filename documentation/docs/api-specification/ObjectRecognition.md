Object Recognition
=============================
**Purpose**

Object recogntion will be used to:
- Identify Plane Surfaces like floors, desks,or tables where the pet can "stand" on.
- Identify objects so that it can interact with them through animations, like flying around a glass of water.
- Analyze whether an object is food or not, if it is food guess how healthy that food is.
- Have a human body recognition method so that the pet can follow its human.


**NOTE**

This is NOT AR Pet Pals' API. It is AR Foundation's API that is used in this project, and it is here to give an overview of the APIs used to make our augment reality work. Find out more: [AR Foundational API](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@6.0/manual/features/features.html)

## ARTrackedImageManager

**Purpose**

Performs 2D Image tracking used for tracking potential 2D images.

**Data Fields**

- currentMaxNumberOfMovingImages: 
    - Type: Integer
    - Purpose: maximum number of moving images to track in real time that is currently in use by the subsystem.

- gameObjectName
    - Type: String
    - Purpose: the name for the GameObject when a new Image is detected

- referenceLibrary
    - Type: IReferenceImageLibrary
    - Purpose: Get or set of images to search for in real-world

- trackedImagePrefab
    - Type: GameObject
    - Purpose: Instantiates Prefab for each image


**Methods**

- CreateRuntimeLibrary()
    - Purpose: To create the set of images to search
    - Pre-conditions: Create a XRReferenceImageLibrary
    - Post-conditions: NONE
    - Parameters: XRReferenceImageLibrary or null 
    - Returns: RuntimeReferenceImageLibrary
    - Exceptions: NotSupportedException
    
- GetPrefab()
    - Purpose: Get the Prefab for each tracked image
    - Pre-conditions: have an ARTrackedImage
    - Post-conditions: NONE
    - Parameters: NONE
    - Returns: GameObject
    - Exceptions: NONE

- OnTrackablesChanged()
    - Purpose: Called when images tracked change
    - Pre-conditions: Have a list of tracked images
    - Post-conditions: Set a callback to see what images change
    - Parameters: List ARTrackedImage added, List ARTrackedImage updated, List ARTrackedImage removed 
    - Returns: NONE
    - Exceptions: NONE

## ARHumanBodyManager

**Purpose**

The Manager used to track human bodies

**Data Fields**

- gameObjectName
    - Type: String
    - Purpose: The name for any generated GameObjects.

- humanBodyPrefab
    - Type: GameObject
    - Purpose: The Prefab object to instantiate at the location of the human body origin.

- pose2DEnabled
    - Type: Boolean
    - Purpose: Whether 2D human pose estimation is enabled

- pose3DEnabled
    - Type: Boolean
    - Purpose: Whether 3D human pose estimation is enabled

- pose3DScaleEstimationEnabled
    - Type: Boolean
    - Purpose: Whether 3D human body scale estimation is enabled.



**Methods**
- GetHumanBody
    - Purpose: get the body associated with trackableID
    - Pre-conditions: Have a trackable human body
    - Post-conditions: NONE
    - Parameters: TrackableID
    - Returns: ARHumanBody
    - Exceptions: NONE

- GetHumanBodyPose2DJoints
    - Purpose: Gets the human body pose 2D joints for the current frame.
    - Pre-conditions:  have a trackable human body
    - Post-conditions: Fills memory with joints
    - Parameters: Allocator ( Memory allocator where joints will be stored )
    - Returns: NativeArray XRHumanBodyPose2DJoint
    - Exceptions: NotSupportedExceptions

- GetPrefab
    - Purpose: gets prefab of human body
    - Pre-conditions:Have a trackable human body
    - Post-conditions: NONE
    - Parameters: NONE
    - Returns: GameObject
    - Exceptions: NONE

- OnTrackablesChanged
    - Purpose: Callback when the trackable deltas are being reported.
    - Pre-conditions: Have a trackable human body
    - Post-conditions: Set a callback for tracking changes
    - Parameters: List ARHumanBody added, List ARHumanBody updated, List ARHumanBody removed
    - Returns: NONE
    - Exceptions: NONE

## ARTrackedObjectManager

**Purpose**
Manager for tracking 3D Objects

**Data Fields**

- gameObjectName   
    - Type: String
    - Purpose: Name of the GameObject

- referenceLibrary   
    - Type: XRReferenceObjectLibrary	
    - Purpose: Set or Get library of 3d objects

- trackedObjectPrefab 
    - Type: GameObject
    - Purpose: instantiates this Prefab for each detected object.
    
**Methods**

- GetPrefab():
    - Purpose: Gets Prefab of 3D object
    - Pre-conditions: Have a 3D object
    - Post-conditions: NONE
    - Parameters: NONE
    - Returns: GameObject
    - Exceptions: NONE

- OnTrackablesChanged
    - Purpose: Callback when the trackable deltas are being reported.
    - Pre-conditions: Have a trackable 3d object
    - Post-conditions: Set a callback for tracking changes
    - Parameters: List ARTrackedObject added, List ARTrackedObject updated, List ARTrackedObject removed
    - Returns: NONE
    - Exceptions: NONE

## ARPlaneManager

**Purpose**

Manager that handles plane surface detection

**Data Fields**

- planePrefab
    - Type: GameObject
    - Purpose: Prefab of plane

- gameObjectName
    - Type: String
    - Purpose: get name of GameObject

- currentDirectionMode
    - Type: PlaneDetectionMode	
    - Purpose: get or set plane direction mode

**Methods**

- GetPlane():
    - Purpose: gets tracked plane with TrackableID
    - Pre-conditions: Have a trackable plane
    - Post-conditions: NONE
    - Parameters: TrackableID
    - Returns: ARPlane
    - Exceptions: NONE
    
- GetPrefab():
    - Purpose: gets prefab of plane
    - Pre-conditions: Have an existing plane
    - Post-conditions: NONE
    - Parameters: NONE
    - Returns: GameObject
    - Exceptions: NONE

- OnTrackablesChanged():
    - Purpose: set callback for when plane detection change
    - Pre-conditions: have list of ARPlanes 
    - Post-conditions: Sets callback
    - Parameters: List ARPlane added, List ARPlane updated, List ARPlane removed
    - Returns: NONE
    - Exceptions: NONE

