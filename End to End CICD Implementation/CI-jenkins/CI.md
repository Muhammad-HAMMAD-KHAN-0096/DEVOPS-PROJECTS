First step is to write a pipeline in a declerative way(Groovy Scripting)

- Dashboard > New-Item > Select pipe line from the menu here i have named as [ cicd-project ].After clicking ok this will take you to the configuration Page.
  <img width="850" alt="grvvvvvvvvvvvvvvvvvvvvvv" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/46da3637-bb27-47db-93dc-f16cb30f1d87">

### In Jenkins there are two ways of writing a declerative pipeline 
1. Script section on the configuration page.
2. From SCM such as git.
<img width="812" alt="pipeline from scm" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/e3b2681a-14fd-4bd6-b586-f72e6a30d4bd">

## FOR WEBHOOK CONFIGURATION SEE WEBHOOK FOLDER IN THIS REPO [WHEN DEVOLPER MAKE ANY CHANGE IT WILL TRIGGER THE PIPELINE]

### Select git in SCM field
### In script path field paste repo URL
- https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/
- Choose branch as main.
- for script path i have used _End to End CICD Implementation/Java-app/JenkinsFile_  [Path of Jenkinsfile]
- Save and Apply.
## Sunnary of steps.
Once jenkins have jenkins file from scm and source code it will trigger CI.
- build
- test
- deploy
# Docker is used as an agent to lessen the compute burdon.For this docker pipeline plugin will be installed in Jenkins from manage plugin section.
# Install sonar server on EC2 and also in jenkins
<img width="853" alt="sonar-sonar" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/3162e232-21fa-41f0-ae6a-baaf4e19ebf8">

# Configure a Sonar Server
```
apt install unzip
adduser sonarqube
wget https://binaries.sonarsource.com/Distribution/sonarqube/sonarqube-9.4.0.54424.zip
unzip *
chmod -R 755 /home/sonarqube/sonarqube-9.4.0.54424
chown -R sonarqube:sonarqube /home/sonarqube/sonarqube-9.4.0.54424
cd sonarqube-9.4.0.54424/bin/linux-x86-64/
./sonar.sh start
```

we can access the `SonarQube Server` on `http://<ip-address>:9000` 
- in sonar goto account > security > Generate a token (which will be used for jenkins)
- For jenkins to authenticate with sonar we will use manage credentials in jenkins.

<img width="1000" alt="manage-credentials-jenkins" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/f98b6c7d-f7bf-4f88-83e8-f8a34e55561f">

<img width="1226" alt="sonar0jenkins credsadded" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/67e7988a-7c58-45ae-8c96-394caf2cb168">

_Similarly docker and github [use git hub classic token] creds will be stored in jenkins for pushing image to the docker hub_

### The final resul from jenkins.

<img width="1271" alt="ci-jenkins" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/6dea0001-c20d-43cf-a800-2058ed70a2cb">

- Sonar will push report to the provided i.p as shown in the picture below from jenkins logs
  
<img width="1000" alt="mvn sonar sonar" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/0a5cee19-cb6c-4364-9461-1d0f858c8094">

### SONAR REPORT

<img width="794" alt="sonar-report" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/a9281f22-5466-4367-abe2-f3c422b9a829">

- After this the image will be pushed in docker hub as shown in picture below.

 <img width="822" alt="docker-hub" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/7e10ee20-2c7d-46e1-a631-def61a6a3984">
 
Setting uo argocd _see argo-cd setup_ folder in the repo
