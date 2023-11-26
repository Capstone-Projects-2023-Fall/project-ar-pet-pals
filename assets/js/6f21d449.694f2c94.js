"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[2274],{3905:(n,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>u});var a=t(7294);function s(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){s(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,a,s=function(n,e){if(null==n)return{};var t,a,s={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(s[t]=n[t]);return s}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(s[t]=n[t])}return s}var d=a.createContext({}),c=function(n){var e=a.useContext(d),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},l=function(n){var e=c(n.components);return a.createElement(d.Provider,{value:e},n.children)},h="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},y=a.forwardRef((function(n,e){var t=n.components,s=n.mdxType,r=n.originalType,d=n.parentName,l=i(n,["components","mdxType","originalType","parentName"]),h=c(t),y=s,u=h["".concat(d,".").concat(y)]||h[y]||p[y]||r;return t?a.createElement(u,o(o({ref:e},l),{},{components:t})):a.createElement(u,o({ref:e},l))}));function u(n,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof n||s){var r=t.length,o=new Array(r);o[0]=y;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=n,i[h]="string"==typeof n?n:s,o[1]=i;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},5278:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(7462),s=(t(7294),t(3905));const r={},o=void 0,i={unversionedId:"test-procedures/api-server-unit-tests",id:"test-procedures/api-server-unit-tests",title:"api-server-unit-tests",description:"This are all unit tests that test each route on the api-server.",source:"@site/docs/test-procedures/api-server-unit-tests.md",sourceDirName:"test-procedures",slug:"/test-procedures/api-server-unit-tests",permalink:"/project-ar-pet-pals/docs/test-procedures/api-server-unit-tests",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-ar-pet-pals/edit/main/documentation/docs/test-procedures/api-server-unit-tests.md",tags:[],version:"current",lastUpdatedBy:"Youfei Li",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Acceptance Testing",permalink:"/project-ar-pet-pals/docs/test-procedures/acceptance-testing"}},d={},c=[],l={toc:c};function h(n){let{components:e,...t}=n;return(0,s.kt)("wrapper",(0,a.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This are all unit tests that test each route on the api-server."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'\nimport {\n  assertEquals,\n  assert,\n} from "https://deno.land/std@0.205.0/assert/mod.ts";\nimport { MongoClient } from "https://deno.land/x/mongo@v0.32.0/mod.ts";\n\n\nlet BASE_URL = "https://arpetpals.store/api";\n\n// ALL OF THESE ENV VARS ARE STORED IN .bashrc\nconst valid_token = Deno.env.get("valid_token");\n  if (!valid_token) throw new Error(\'valid_token environment variable not set.\');\nconst invalid_token = Deno.env.get("invalid_token");\n  if (!invalid_token) throw new Error(\'invalid_token environment variable not set.\');\nconst token_with_no_pet = Deno.env.get("token_with_no_pet");\n  if (!token_with_no_pet) throw new Error(\'token_with_no_pet environment variable not set.\');\n\n\n\n\nfunction getRandomChar() {\n  const characters =\n    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";\n  const randomIndex = Math.floor(Math.random() * characters.length);\n  return characters.charAt(randomIndex);\n}\n\nfunction generateRandomString(length: number) {\n  let result = "";\n  for (let i = 0; i < length; i++) {\n    result += getRandomChar();\n  }\n  return result;\n}\n\n// VERIFY DB CONNECTION\nDeno.test("test database connection", async () => {\n  const client = new MongoClient();\n\n  const dbString = Deno.env.get("DB_CRED");\n  if (!dbString) throw new Error(\'DB_CRED environment variable not set.\');\n  \n\n  try {\n    let c = await client.connect(dbString);\n  } catch (err) {\n    assert(false, err);\n  } finally {\n    client.close();\n  }\n});\n\n/* VERIFY TOKEN */\nDeno.test("verify true token", async () => {\n  const headers = {\n    "Content-Type": "application/json", // You can adjust the content type as needed\n  };\n\n  try {\n    let res = await fetch(BASE_URL + "/token/verify", {\n      method: "POST",\n      headers,\n      body: JSON.stringify({ token: valid_token }),\n    });\n    let json = await res.json();\n\n    assert(json.isValid, JSON.stringify(json));\n  } catch (err) {\n    assert(err == null, err);\n  }\n});\n\nDeno.test("verify false token", async () => {\n  const headers = {\n    "Content-Type": "application/json", // You can adjust the content type as needed\n  };\n\n  try {\n    let res = await fetch(BASE_URL + "/token/verify", {\n      method: "POST",\n      headers,\n      body: JSON.stringify({ token: invalid_token }),\n    });\n    let json = await res.json();\n\n    assert(json.isValid == false, JSON.stringify(json));\n  } catch (err) {\n    assert(true);\n  }\n});\n/*END VERIFY TOKEN */\n\n/* SIGNIN*/\nDeno.test("valid sign in", async () => {\n  let headers = {\n    "Content-Type": "application/json",\n  };\n\n  // this are valid credentials\n  let data = {\n    username: "alex",\n    password: "alex",\n  };\n\n  try {\n    let res = await fetch(BASE_URL + "/signin", {\n      headers,\n      method: "POST",\n\n      body: JSON.stringify(data),\n    });\n    let json = await res.json();\n\n    assert(json.token, JSON.stringify(json));\n  } catch (err) {\n    assert(err);\n  }\n});\n\nDeno.test("invalid (no password) sign in", async () => {\n  let headers = {\n    "Content-Type": "application/json",\n  };\n\n  // this are valid credentials\n  let data = {\n    username: "alex",\n  };\n\n  try {\n    let res = await fetch(BASE_URL + "/signin", {\n      headers,\n      method: "POST",\n      body: JSON.stringify(data),\n    });\n    let json = await res.json();\n\n    assert(json.token, JSON.stringify(json));\n  } catch (err) {\n    assert(err);\n  }\n});\n\nDeno.test("invalid (no username) sign in", async () => {\n  let headers = {\n    "Content-Type": "application/json",\n  };\n\n  // this are valid credentials\n  let data = {\n    password: "alex",\n  };\n  try {\n    let res = await fetch(BASE_URL + "/signin", {\n      headers,\n      method: "POST",\n\n      body: JSON.stringify(data),\n    });\n    let json = await res.json();\n\n    assert(json.token, JSON.stringify(json));\n  } catch (err) {\n    assert(err);\n  }\n});\n/* END SIGNIN*/\n\n/* SIGNUP*/\nDeno.test("valid sign up", async () => {\n  let headers = {\n    "Content-Type": "application/json",\n  };\n\n  // this are valid credentials\n  let data = {\n    username: generateRandomString(5),\n    password: generateRandomString(5),\n  };\n\n  try {\n    let res = await fetch(BASE_URL + "/signup", {\n      headers,\n      method: "POST",\n\n      body: JSON.stringify(data),\n    });\n    let json = await res.json();\n\n    assert(json.token, JSON.stringify(json));\n  } catch (err) {\n    assert(err);\n  }\n});\n\nDeno.test("invalid (no password) sign up", async () => {\n  let headers = {\n    "Content-Type": "application/json",\n  };\n\n  // this are valid credentials\n  let data = {\n    username: generateRandomString(5),\n  };\n\n  try {\n    let res = await fetch(BASE_URL + "/signup", {\n      headers,\n      method: "POST",\n\n      body: JSON.stringify(data),\n    });\n    let json = await res.json();\n\n    assert(!json.token);\n  } catch (err) {\n    assert(true);\n  }\n});\n\nDeno.test("invalid (no username) sign up", async () => {\n  let headers = {\n    "Content-Type": "application/json",\n  };\n\n  // this are valid credentials\n  let data = {\n    password: generateRandomString(5),\n  };\n\n  try {\n    let res = await fetch(BASE_URL + "/signup", {\n      headers,\n      method: "POST",\n\n      body: JSON.stringify(data),\n    });\n    let json = await res.json();\n\n    assert(!json.token);\n  } catch (err) {\n    assert(true);\n  }\n});\n/* END SIGNUP*/\n\n/* PET CREATE */\nDeno.test("valid create pet", async () => {\n  // this is a valid token\n  let headers = {\n    Authorization: `Bearer ${token_with_no_pet}`,\n  };\n\n  try {\n    let res = await fetch(BASE_URL + "/pet/create", {\n      headers,\n      method: "POST",\n    });\n    let json = await res.json();\n\n    assert(json.petInfo.id, JSON.stringify(json));\n  } catch (err) {\n    assert(false, err);\n  }\n});\n\nDeno.test("invalid token create pet", async () => {\n  // this is a invalid token\n  let headers = {\n    "Content-Type": "application/json",\n    Authorization: `Bearer ${invalid_token}`,\n  };\n\n  try {\n    let res = await fetch(BASE_URL + "/pet/create", {\n      headers,\n      method: "POST",\n    });\n    let json = await res.json();\n\n    assert(!json.petInfo);\n  } catch (err) {\n    assert(true);\n  }\n});\n/* END PET CREATE */\n\n/* PET NAME */\nDeno.test("get pet name", async () => {\n  // this is a valid token\n  let headers = {\n    Authorization: `Bearer ${valid_token}`,\n  };\n\n  try {\n    let res = await fetch(BASE_URL + "/pet/name", {\n      headers,\n      method: "GET",\n    });\n    let json = await res.json();\n\n    assert(json.name);\n  } catch (err) {\n    assert(false, err);\n  }\n});\nDeno.test("invalid( invalid token) get pet name", async () => {\n  // this is a valid token\n\n  let headers = {\n    Authorization: `Bearer ${invalid_token}`,\n  };\n\n  try {\n    let res = await fetch(BASE_URL + "/pet/name", {\n      headers,\n\n      method: "GET",\n    });\n    let json = await res.json();\n\n    assert(!json.name, JSON.stringify(json));\n  } catch (err) {\n    assert(true, err);\n  }\n});\nDeno.test("invalid( no pet created) get pet name", async () => {\n  // this is a valid token\n\n  let headers = {\n    Authorization: `Bearer ${token_with_no_pet}`,\n  };\n\n  try {\n    let res = await fetch(BASE_URL + "/pet/name", {\n      headers,\n      method: "GET",\n    });\n    let json = await res.json();\n\n    assert(!json.name, JSON.stringify(json));\n  } catch (err) {\n    assert(true, err);\n  }\n});\n\nDeno.test("set pet name", async () => {\n  let headers = {\n    Authorization: `Bearer ${valid_token}`,\n    "Content-Type": "application/json",\n  };\n\n  let data = {\n    name: "echo",\n  };\n\n  try {\n    let res = await fetch(BASE_URL + "/pet/name", {\n      headers,\n      method: "POST",\n\n      body: JSON.stringify(data),\n    });\n    let json = await res.json();\n\n    assert(\n      json.message == "pet name updated successfully",\n      JSON.stringify(json)\n    );\n  } catch (err) {\n    assert(false, err);\n  }\n});\nDeno.test("invalid ( invalid token) set pet name", async () => {\n  // this is a valid token\n\n  let headers = {\n    Authorization: `Bearer ${invalid_token}`,\n    "Content-Type": "application/json",\n  };\n\n  let data = {\n    name: "echo",\n  };\n\n  try {\n    let res = await fetch(BASE_URL + "/pet/name", {\n      headers,\n      method: "POST",\n\n      body: JSON.stringify(data),\n    });\n    let json = await res.json();\n\n    assert(\n      json.message != "pet name updated successfully",\n      JSON.stringify(json)\n    );\n  } catch (err) {\n    assert(true, err);\n  }\n});\nDeno.test("invalid ( no pet created) set pet name", async () => {\n  // this is a valid token\n\n  let headers = {\n    Authorization: `Bearer ${token_with_no_pet}`,\n    "Content-Type": "application/json",\n  };\n\n  let data = {\n    name: "echo",\n  };\n\n  try {\n    let res = await fetch(BASE_URL + "/pet/name", {\n      headers,\n      method: "POST",\n      body: JSON.stringify(data),\n    });\n    let json = await res.json();\n\n    assert(\n      json.message == "Could not find a pet for your user\'s id",\n      JSON.stringify(json)\n    );\n  } catch (err) {\n    assert(true, err);\n  }\n});\n/* END PET NAME */\n\n/* PET STATUS */\nDeno.test("get pet status", async () => {\n  // this is a valid token\n  let headers = {\n    method: "GET",\n    Authorization: `Bearer ${valid_token}`,\n  };\n\n  try {\n    let res = await fetch(BASE_URL + "/pet/name", {\n      headers,\n    });\n    let json = await res.json();\n\n    assert(json.name, JSON.stringify(json));\n  } catch (err) {\n    assert(false, err);\n  }\n});\nDeno.test("invalid( invalid token) get pet status", async () => {\n  // this is a valid token\n\n  let headers = {\n    method: "GET",\n    Authorization: `Bearer ${invalid_token}`,\n  };\n\n  try {\n    let res = await fetch(BASE_URL + "/pet/name", {\n      headers,\n    });\n    let json = await res.json();\n\n    assert(!json.name, JSON.stringify(json));\n  } catch (err) {\n    assert(true, err);\n  }\n});\nDeno.test("invalid( no pet created) get pet status", async () => {\n  // this is a valid token\n\n  let headers = {\n    method: "GET",\n    Authorization: `Bearer ${token_with_no_pet}`,\n  };\n\n  try {\n    let res = await fetch(BASE_URL + "/pet/name", {\n      headers,\n    });\n    let json = await res.json();\n\n    assert(!json.name, JSON.stringify(json));\n  } catch (err) {\n    assert(true, err);\n  }\n});\n\nDeno.test("set pet name", async () => {\n  // this is a valid token\n  let headers = {\n    Authorization: `Bearer ${valid_token}`,\n    "Content-Type": "application/json",\n  };\n\n  let data = {\n    name: "echo",\n  };\n\n  try {\n    let res = await fetch(BASE_URL + "/pet/name", {\n      headers,\n      method: "POST",\n\n      body: JSON.stringify(data),\n    });\n    let json = await res.json();\n\n    assert(\n      json.message == "pet name updated successfully",\n      JSON.stringify(json)\n    );\n  } catch (err) {\n    assert(false, err);\n  }\n});\nDeno.test("invalid ( invalid token) set pet name", async () => {\n  // this is a valid token\n\n  let headers = {\n    Authorization: `Bearer ${invalid_token}`,\n    "Content-Type": "application/json",\n  };\n\n  let data = {\n    name: "echo",\n  };\n\n  try {\n    let res = await fetch(BASE_URL + "/pet/name", {\n      headers,\n      method: "POST",\n\n      body: JSON.stringify(data),\n    });\n    let json = await res.json();\n\n    assert(\n      json.message != "pet name updated successfully",\n      JSON.stringify(json)\n    );\n  } catch (err) {\n    assert(true, err);\n  }\n});\nDeno.test("invalid ( no pet created) set pet name", async () => {\n  // this is a valid token\n\n  let headers = {\n    Authorization: `Bearer ${token_with_no_pet}`,\n    "Content-Type": "application/json",\n  };\n\n  let data = {\n    name: "echo",\n  };\n\n  try {\n    let res = await fetch(BASE_URL + "/pet/name", {\n      headers,\n      method: "POST",\n\n      body: JSON.stringify(data),\n    });\n    let json = await res.json();\n\n    assert(\n      json.message == "Could not find a pet for your user\'s id",\n      JSON.stringify(json)\n    );\n  } catch (err) {\n    assert(true, err);\n  }\n});\n/* END PET STATUS */\n\n/* PET CHOICE */\nDeno.test("get pet choice", async () => {\n  // this is a valid token\n\n  let headers = {\n    method: "GET",\n    Authorization: `Bearer ${valid_token}`,\n  };\n\n  try {\n    let res = await fetch(BASE_URL + "/pet/choice", {\n      headers,\n    });\n    let json = await res.json();\n\n    assert(json.choice, JSON.stringify(json));\n  } catch (err) {\n    assert(false, err);\n  }\n});\nDeno.test("invalid( invalid token) get pet choice", async () => {\n  // this is a valid token\n\n  let headers = {\n    method: "GET",\n    Authorization: `Bearer ${invalid_token}`,\n  };\n\n  try {\n    let res = await fetch(BASE_URL + "/pet/choice", {\n      headers,\n    });\n    let json = await res.json();\n\n    assert(!json.choice, JSON.stringify(json));\n  } catch (err) {\n    assert(true, err);\n  }\n});\nDeno.test("invalid( no pet created) get pet choice", async () => {\n  // this is a valid token\n\n  let headers = {\n    method: "GET",\n    Authorization: `Bearer ${token_with_no_pet}`,\n  };\n\n  try {\n    let res = await fetch(BASE_URL + "/pet/choice", {\n      headers,\n    });\n    let json = await res.json();\n\n    assert(!json.choice, JSON.stringify(json));\n  } catch (err) {\n    assert(true, err);\n  }\n});\n\nDeno.test("set pet choice", async () => {\n  // this is a valid token\n  let headers = {\n    Authorization: `Bearer ${valid_token}`,\n    "Content-Type": "application/json",\n  };\n\n  let data = {\n    choice: "Red Dragon",\n  };\n\n  try {\n    let res = await fetch(BASE_URL + "/pet/choice", {\n      headers,\n      method: "POST",\n\n      body: JSON.stringify(data),\n    });\n    let json = await res.json();\n\n    assert(\n      json.message == "pet choice updated successfuly",\n      JSON.stringify(json)\n    );\n  } catch (err) {\n    assert(false, err);\n  }\n});\nDeno.test("invalid ( invalid token) set pet choice", async () => {\n  // this is a valid token\n\n  let headers = {\n    Authorization: `Bearer ${invalid_token}`,\n    "Content-Type": "application/json",\n  };\n\n  let data = {\n    name: "echo",\n  };\n\n  try {\n    let res = await fetch(BASE_URL + "/pet/choice", {\n      headers,\n      method: "POST",\n\n      body: JSON.stringify(data),\n    });\n    let json = await res.json();\n\n    assert(\n      json.message != "pet choice updated successfuly",\n      JSON.stringify(json)\n    );\n  } catch (err) {\n    assert(true, err);\n  }\n});\nDeno.test("invalid ( no pet created) set pet choice", async () => {\n  let headers = {\n    Authorization: `Bearer ${token_with_no_pet}`,\n    "Content-Type": "application/json",\n  };\n\n  let data = {\n    name: "echo",\n  };\n\n  try {\n    let res = await fetch(BASE_URL + "/pet/choice", {\n      headers,\n      method: "POST",\n\n      body: JSON.stringify(data),\n    });\n    let json = await res.json();\n\n    assert(\n      json.message == "Could not find a pet for your user\'s id",\n      JSON.stringify(json)\n    );\n  } catch (err) {\n    assert(true, err);\n  }\n});\n/* END PET CHOICE */\n\n/* PET STATUS */\nDeno.test("get pet status", async () => {\n  // this is a valid token\n\n  let headers = {\n    Authorization: `Bearer ${valid_token}`,\n  };\n\n  try {\n    let res = await fetch(BASE_URL + "/pet/status", {\n      headers,\n      method: "GET",\n    });\n    let json = await res.json();\n\n    assert(json.health);\n  } catch (err) {\n    assert(false, err);\n  }\n});\nDeno.test("invalid( invalid token) get pet status", async () => {\n  // this is a valid token\n\n  let headers = {\n    method: "GET",\n    Authorization: `Bearer ${invalid_token}`,\n  };\n\n  try {\n    let res = await fetch(BASE_URL + "/pet/status", {\n      headers,\n    });\n    let json = await res.json();\n\n    assert(!json.health, JSON.stringify(json));\n  } catch (err) {\n    assert(true, err);\n  }\n});\nDeno.test("invalid( no pet created) get pet status", async () => {\n  // this is a valid token\n\n  let headers = {\n    method: "GET",\n    Authorization: `Bearer ${token_with_no_pet}`,\n  };\n\n  try {\n    let res = await fetch(BASE_URL + "/pet/status", {\n      headers,\n    });\n    let json = await res.json();\n\n    assert(!json.health, JSON.stringify(json));\n  } catch (err) {\n    assert(true, err);\n  }\n});\n\nDeno.test("set pet status", async () => {\n  // this is a valid token\n  let headers = {\n    Authorization: `Bearer ${valid_token}`,\n    "Content-Type": "application/json",\n  };\n\n  let data = {\n    health: 57,\n    mood: 57,\n  };\n\n  try {\n    let res = await fetch(BASE_URL + "/pet/status", {\n      headers,\n      method: "POST",\n\n      body: JSON.stringify(data),\n    });\n    let json = await res.json();\n\n    assert(\n      json.message == "pet status updated successfuly",\n      JSON.stringify(json)\n    );\n  } catch (err) {\n    assert(false, err);\n  }\n});\n\nDeno.test("invalid ( invalid token) set pet status", async () => {\n  // this is a valid token\n\n  let headers = {\n    Authorization: `Bearer ${invalid_token}`,\n    "Content-Type": "application/json",\n  };\n\n  let data = {\n    health: 57,\n    mood: 57,\n  };\n\n  try {\n    let res = await fetch(BASE_URL + "/pet/status", {\n      headers,\n      method: "POST",\n\n      body: JSON.stringify(data),\n    });\n    let json = await res.json();\n\n    assert(\n      json.message != "pet status updated successfuly",\n      JSON.stringify(json)\n    );\n  } catch (err) {\n    assert(true, err);\n  }\n});\nDeno.test("invalid ( no pet created) set pet status", async () => {\n  let headers = {\n    Authorization: `Bearer ${token_with_no_pet}`,\n    "Content-Type": "application/json",\n  };\n\n  let data = {\n    health: 57,\n    mood: 57,\n  };\n\n  try {\n    let res = await fetch(BASE_URL + "/pet/status", {\n      headers,\n      method: "POST",\n\n      body: JSON.stringify(data),\n    });\n    let json = await res.json();\n\n    assert(\n      json.message == "Could not find a pet for your user\'s id",\n      JSON.stringify(json)\n    );\n  } catch (err) {\n    assert(true, err);\n  }\n});\n/* END PET STATUS*/\n\n')))}h.isMDXComponent=!0}}]);