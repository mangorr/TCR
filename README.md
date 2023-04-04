# auth0-testapp-javascript
## Overview
I have created one frontend and one backend. For now, the code is able to
- 1. log in, log out, sign up;
- 2. customize signup;
- 3. authentication for checking whether the current user is logged in and display corresponding content
- 4. 80% of the role based authentication. I am able to generate the correct jwt token. that means, the code in the frontend should be already set. Further modification needs to be taken in the backend code.
    <img width="800" alt="image" src="https://user-images.githubusercontent.com/90755784/210447217-773b747d-2d10-4463-95df-bfc2e85287f2.png">


## Next to do
- Currently, I only have one frontend and one backend. In the future, we want 3 website, therefore, we can just replicate all the code in the frontend repository and only change the port to any other port (eg: 3003 and 3004) to get the two other frontends. All these 3 frontends are linked to the 1 backend.
- Currently for the role based authentication. I am able to generate the correct jwt token but I am still receiving error "insufficient scope", that means, although we have the correct permissions in the jwt token, the authentication mechanism can not correctly recognize it. My hypothesis is that we need to modify the code below in the backend or anything related to it in the backend.

`const checkPermissions = jwtAuthz(["read:messages"], {
  customScopeKey: 'permissions'
})`


## Usage - frontend

### step 0: Set up auth0 configuration
- Go to auth0 website and register for an account (https://auth0.com/docs).
- Choose 'Single-Page App' under 'Start Building', and then choose 'React' underder 'Single-Page App'.
- Choose 'Integrate with an existing application' and select 'My App' under 'Select your Application'. We can keep the rest of the configuration as default and click 'save'.

### step 1: Add fields in sign up function in auth0
- Go to 'Universal Login' setting under 'Branding' in the navigation bar on the left.
- Click 'Advanced Options'.

<img width="800" alt="image" src="https://user-images.githubusercontent.com/90755784/196550965-4b06bd81-68f2-403b-835e-7043d2980581.png">.
- Click 'Log in'.

<img width="800" alt="image" src="https://user-images.githubusercontent.com/90755784/196551054-14a818f7-8166-428c-b20b-afba83c54b68.png">.
- Select 'Lock'.
<img width="800" alt="image" src="https://user-images.githubusercontent.com/90755784/196551109-10fcadc2-435e-4f9d-9c16-9aa0833821eb.png">.
- Add the following code in Line 64.

```js
additionalSignUpFields: [{
    name: "address",
    placeholder: "Enter your address",
    validator: function (address) {
        return {
            valid: address.length >= 10,
            hint: "Must have 10+ chars" // optional
        };
    }
},
{
    name: "full_name",
    placeholder: "Enter your full name",
},
{
    name: "ssn",
    placeholder: "Enter your SSN",
},
{
    name: "phone_n",
    placeholder: "Enter your phone number xxx-xxx-xxxx",
    validator: function (phone) {
        return {
            valid: phone.length >= 10,
            hint: "Please enter a valid number" // optional
        };
    }
}]
```

<img width="800" alt="image" src="https://user-images.githubusercontent.com/90755784/196551492-19be1fab-33df-4590-acaa-fec3265ce47e.png">
- Click 'Save Changes'.

### step 2: Create config.js file
- To use this application, you need to create a config.js file in the frontend/src directory and have an auth0 account.
- You will need to write your auth0 tokens in this config.js file. You can get the details needed from the Application Settings section in the Auth0 dashboard
- The content in config.js file should look like this
`
module.exports.port = 'http://localhost:3000';
`
`
module.exports.auth0token = <your client id>;
`
`
module.exports.domain = <your auth0 domain>;
`
`
module.exports.audience = 'http://quickstarts/api';
`

### step 3: Install dependencies
- In the main directory (under ~/frontend), to install all dependencies needed, you can run
`npm install`

### step 4: Launching the application
- In the main directory (under ~/frontend), to launch the application, you can run
`npm start`


## Usage - backend
### step 1: Create/modify auth_config.json file under backend/routes directory
- the content of auth_config is like this. (Mark: audience could be any url like http://quickstarts/api, but it has to be the same in your auth0 API config. Please see more details in Usage - Role Based Authentication step 1: Set up the corresponding APIs on auth0)

`
  "domain": <your domain>,
  "clientId": <your client id>,
  "audience": <audience>
`
### step 2: Install dependencies
- In the main directory (under ~/backend), to install all dependencies needed, you can run
`npm install`

### step 3: Launching the application
- In the main directory (under ~/backend), to launch the application, you can run
`npm start`

## Usage - Role Based Authentication

### step 1: Set up the corresponding APIs on auth0
- Go to Dashboard > Applications > APIs as follows and click "create API"
<img width="800" alt="image" src="https://user-images.githubusercontent.com/90755784/200663681-c3b296ce-793f-4f33-8b22-0a704e994cca.png">

- Fill in the form. The identifier should be the same audience in React SDK (if you haven't added audience in Auth0Provider as shown in the graph below, please add it now). Remember to select RS256 in signing algorithm.
<img width="1378" alt="image" src="https://user-images.githubusercontent.com/90755784/210439324-a88cc6be-bdcf-4b8a-a43d-3bf735577a40.png">
<img width="800" alt="image" src="https://user-images.githubusercontent.com/90755784/210439511-1afe5008-e2e3-4ba9-8911-e595d0d2c11c.png">


### step 2: Add permissions to the corresponding APIs
- Add permissions to the API as follows. Can add multiple permissions to one API as designed.
<img width="800" alt="image" src="https://user-images.githubusercontent.com/90755784/200665825-90c308ee-934b-4759-92f6-c92bde6360b2.png">


### step 3: Create roles
- Create roles (for example: admin, senior, junior, etc.) as designed
<img width="800" alt="image" src="https://user-images.githubusercontent.com/90755784/200666779-2b21627f-a4d8-4f60-8052-ec80b88e3491.png">

### step 4: Assign permissions to the corresponding roles

- click the role you just created
<img width="800" alt="image" src="https://user-images.githubusercontent.com/90755784/200667533-cafc1c04-0068-4773-a25d-ef2b537b87ab.png">

- select the corresponding API you want to set the permission for this particular role
<img width="800" alt="image" src="https://user-images.githubusercontent.com/90755784/200673450-02297531-d5d4-4afb-b234-67889cb7a198.png">

- We have added various permission for the particular API in step 2. Now we want to select the permisssion we want to assign to this particular role as follows.
<img width="800" alt="image" src="https://user-images.githubusercontent.com/90755784/200673741-a99f671a-f6cf-47e5-acf0-c83f15857c2d.png">


### step 5: Assign existing users to role
<img width="800" alt="image" src="https://user-images.githubusercontent.com/90755784/200674221-e434e88d-3b95-419c-98d6-3eadbaea3afc.png">


### step 6: add code to route/index.js in the backend to check whether the user has permission to access to certain API
example:
<img width="679" alt="image" src="https://user-images.githubusercontent.com/90755784/210439980-0219a5db-4a4c-442c-a1bc-ed3edd568c65.png">
 (step 6 might need further adjustment but everything above step 6 should be correct)
