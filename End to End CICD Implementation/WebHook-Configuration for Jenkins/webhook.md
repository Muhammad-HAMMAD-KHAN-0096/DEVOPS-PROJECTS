# WEBHOOK:
A webhook is a way for one system to automatically notify another system when a specific event or action occurs. It allows systems to communicate and share real-time information, often used in software development and automation to trigger actions or updates in response to events.

- For Jenkins to automatically create a build if it detects changes to a GitHub repository.
- Steps:
- Plugin installation

1. Login to Jenkins and navigate to Manage Jenkins > Manage Plugins

2. Install a Github Plugin.


## Create webhook in the Github repository

1. Go to your project repository.
2. Go to settings in the right corner.
3. Click on Webhooks
4. Click Add webhooks
5. Write the Payload URL as 'http://JENKINS_URL/github-webhook/'
6. Click on Add webhook
   
   <img width="700" alt="web-hook" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/a5acf4f9-2bf2-4e21-a95e-e37d9e2fbede">

   <img width="700" alt="Screenshot 2023-09-07 080958" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/ab5dda7a-1a4d-4a9d-89bf-6683f9eb3244">

## Configure webhook in the Jenkins 

- Jenkins pipeline and select 'GitHub hook trigger for GITScm polling' in Build Triggers Section

  <img width="800" alt="hoook-final " src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/40b41afa-cc51-4e05-b2fe-4ce883664550">


