"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[461],{8206:e=>{e.exports=JSON.parse('{"url":"redocusaurus/using-single-yaml.yaml","themeId":"theme-redoc","isSpecFile":true,"spec":{"openapi":"3.0.2","info":{"title":"API docs","description":"AR PET Pals API"},"servers":[{"url":"https://arpetpals.store/"}],"tags":[{"name":"authentication","description":"API for logging in and logging out"},{"name":"pet-status","description":"API for pet status"},{"name":"pet-name","description":"API for pet name"},{"name":"pet-choice","description":"API for pet choice"},{"name":"user-info","description":"API for user info"},{"name":"user-name","description":"API for user name"},{"name":"front","externalDocs":{"description":"API for managing user interface, inputs, notifications, leaderboard, and exercise reminders"}}],"paths":{"/api/signin":{"post":{"summary":"signin","tags":["authentication"],"requestBody":{"description":"The username and password to sign in","required":true,"content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthSchema"}}}},"responses":{"200":{"description":"Authentication was successful","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthSuccess"}}}},"400":{"description":"Authentication failed","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Fail"}}}}}}},"/api/signup":{"post":{"summary":"signup","tags":["authentication"],"requestBody":{"description":"The username and password to sign up","required":true,"content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthSchema"}}}},"responses":{"200":{"description":"Authentication was successful","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthSuccess"}}}},"400":{"description":"Authentication failed","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Fail"}}}}}}},"/api/pet/name":{"post":{"security":[{"token":[]}],"tags":["pet-name"],"summary":"update pet name","requestBody":{"description":"The new pet\'s name","required":true,"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PetName"}}}},"responseBody":{"description":"status of update","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Status"}}}},"responses":{"200":{"description":"Updated pet name successfuly","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Status"}}}},"400":{"description":"Could not update pet name","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Fail"}}}}}},"get":{"security":[{"token":[]}],"tags":["pet-name"],"summary":"get pet name","responseBody":{"description":"the pet\'s name","content":{"application/json":{"schema":{"$ref":"#/components/schemas/PetName"}}}},"responses":{"200":{"description":"Got pet name","content":{"application/json":{"schema":{"$ref":"#/components/schemas/PetName"}}}},"400":{"description":"Couldn\'t get pet name","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Fail"}}}}}}},"/api/pet/status":{"post":{"security":[{"token":[]}],"tags":["pet-status"],"summary":"update pet status","requestBody":{"description":"The new pet\'s status","required":true,"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PetStatus"}}}},"responseBody":{"description":"status of update","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Status"}}}},"responses":{"200":{"description":"Updated pet status successfuly","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Status"}}}},"400":{"description":"Could not update pet status","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Fail"}}}}}},"get":{"security":[{"token":[]}],"tags":["pet-status"],"summary":"get pet status","responseBody":{"description":"the pet status","content":{"application/json":{"schema":{"$ref":"#/components/schemas/PetStatus"}}}},"responses":{"200":{"description":"Got pet status successfuly","content":{"application/json":{"schema":{"$ref":"#/components/schemas/PetStatus"}}}},"400":{"description":"Could not get pet status","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Fail"}}}}}}},"/api/pet/choice":{"post":{"security":[{"token":[]}],"tags":["pet-choice"],"summary":"update pet choice","requestBody":{"description":"The new pet\'s choice","required":true,"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PetChoice"}}}},"responseBody":{"description":"status of update","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Status"}}}},"responses":{"200":{"description":"Updated pet choice successfuly","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Status"}}}},"400":{"description":"Could not update pet choice","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Fail"}}}}}},"get":{"security":[{"token":[]}],"tags":["pet-choice"],"summary":"get pet choice","responseBody":{"description":"the pet choice","content":{"application/json":{"schema":{"$ref":"#/components/schemas/PetChoice"}}}},"responses":{"200":{"description":"Got pet choice successfuly","content":{"application/json":{"schema":{"$ref":"#/components/schemas/PetChoice"}}}},"400":{"description":"Could not get pet choice","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Fail"}}}}}}},"/api/token/verify":{"post":{"summary":"token validity","requestBody":{"description":"The token to test","required":true,"content":{"application/json":{"schema":{"$ref":"#/components/schemas/VerifyToken"}}}},"responseBody":{"description":"whether token is valid or not","content":{"application/json":{"schema":{"$ref":"#/components/schemas/TokenValid"}}}},"responses":{"200":{"description":"Token is valid","content":{"application/json":{"schema":{"$ref":"#/components/schemas/TokenValid"}}}},"400":{"description":"Token is not valid","content":{"application/json":{"schema":{"$ref":"#/components/schemas/TokenValid"}}}}}}},"/front/displayInterface":{"get":{"summary":"Retrieve the user interface layout.","operationId":"getDisplayInterface","tags":["front"],"responses":{"200":{"description":"Successfully retrieved UI layout.","content":{"application/json":{"schema":{"$ref":"#/components/schemas/UserInterfaceLayout"}}}}}}},"/front/userInput":{"post":{"summary":"Handle user interactions and inputs.","operationId":"handleUserInput","tags":["front"],"requestBody":{"description":"User input details.","required":true,"content":{"application/json":{"schema":{"$ref":"#/components/schemas/UserInputDetails"}}}},"responses":{"200":{"description":"User input processed successfully."}}}},"/front/sendNotification":{"post":{"summary":"Send notifications to the user.","operationId":"sendNotification","tags":["front"],"requestBody":{"description":"Notification details.","required":true,"content":{"application/json":{"schema":{"$ref":"#/components/schemas/NotificationDetails"}}}},"responses":{"200":{"description":"Notification sent successfully."}}}},"/front/leaderboard":{"get":{"summary":"Retrieve the public leaderboard.","operationId":"getLeaderboard","tags":["front"],"responses":{"200":{"description":"Successfully retrieved leaderboard.","content":{"application/json":{"schema":{"$ref":"#/components/schemas/LeaderboardDetails"}}}}}}},"/front/exerciseReminder":{"post":{"summary":"Send exercise reminders to the user.","operationId":"sendExerciseReminder","tags":["front"],"requestBody":{"description":"Details of the exercise reminder.","required":true,"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ExerciseReminderDetails"}}}},"responses":{"200":{"description":"Exercise reminder sent successfully."}}}}},"components":{"securitySchemes":{"token":{"type":"http","scheme":"bearer","bearerFormat":"JWT"}},"schemas":{"PetStatus":{"type":"object","properties":{"health":"int"}},"PetChoice":{"type":"object","properties":{"choice":"string"}},"PetName":{"type":"object","properties":{"name":{"type":"string"}}},"VerifyToken":{"type":"object","properties":{"token":{"type":"string"}}},"AuthSchema":{"type":"object","properties":{"username":{"type":"string","description":"the username to authenticate"},"password":{"type":"string","description":"the password to authenticate"}}},"TokenValid":{"type":"object","properties":{"isValid":{"type":"boolean"}}},"UserInfo":{"type":"object","properties":{"id":{"type":"string"},"name":{"type":"string"}}},"AuthSuccess":{"type":"object","properties":{"token":{"type":"string","description":"the auth token"},"userInfo":{"type":"object","$ref":"#/components/schemas/UserInfo"}}},"Fail":{"type":"object","properties":{"message":{"type":"string","description":"why it failed"}}},"Status":{"type":"object","properties":{"message":{"type":"string","description":"status"}}},"UserInterfaceLayout":{"type":"object","properties":{"layoutId":{"type":"string","description":"ID of the UI layout."},"components":{"type":"array","items":{"type":"string"},"description":"Components present in the UI layout."}}},"UserInputDetails":{"type":"object","properties":{"inputType":{"type":"string","description":"Type of user input."},"inputValue":{"type":"string","description":"Value of the user input."}}},"NotificationDetails":{"type":"object","properties":{"notificationType":{"type":"string","description":"Type of notification."},"message":{"type":"string","description":"Message content of the notification."}}},"LeaderboardDetails":{"type":"object","properties":{"rank":{"type":"array","items":{"$ref":"#/components/schemas/UserRank"},"description":"List of users and their rankings."}}},"UserRank":{"type":"object","properties":{"userId":{"type":"string","description":"ID of the user."},"score":{"type":"integer","description":"User\'s score on the leaderboard."}}},"ExerciseReminderDetails":{"type":"object","properties":{"reminderMessage":{"type":"string","description":"Message for the exercise reminder."}}}}}}}')}}]);