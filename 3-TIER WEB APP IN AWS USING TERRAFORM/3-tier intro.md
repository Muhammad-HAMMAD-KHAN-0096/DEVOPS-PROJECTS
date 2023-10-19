# <ins>Three Tier Architecture</ins>
Three-tier architecture is a client-server software architecture pattern in which the user interface (presentation), functional process logic ("business rules"), computer data storage and data access are developed and maintained as independent modules, most often on separate platforms

![Overview_of_a_three-tier_application_vectorVersion svg](https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/8794e30b-3f94-417c-bc4e-12b64380802c)

## Presentation Tier
The presentation tier occupies the top level of the application. It sends content to browsers in the web development frameworks, such as CSS, HTML, or JavaScript, and displays information in the form of a graphical user interface (GUI), which allows users to can access directly. It communicates with other layers by putting out the results to the browser and other tiers through API calls. 
## Application Tier
The application tier is also called the business logic, logic tier, or middle tier. By processing the business logic for the application, it builds a bridge between the presentation layer and the data layer to make communication faster between the presentation and data layer.The application tier is usually coded in C#, Java, C++, Python, Ruby, etc.
## Data Tier
Data-tier is composed of persistent storage mechanism and the data access layer. It supports connecting with the database and to perform insert, update, delete, get data from the database based on our input data. 
## Benefits of Three-Tier Architecture
Three-tier architecture offers several advantages in the realm of software development and deployment:

- Scalability: The separation of concerns between tiers enables independent scaling, allowing organizations to adapt to changing loads and requirements more effectively.

- Maintainability: DevOps practices can be efficiently applied to each tier, making it easier to update, patch, and enhance specific components without affecting the entire application.

- Security: Isolating the data storage layer from the presentation and application layers enhances security by reducing direct access to sensitive information.

- Reliability: The modular structure of this architecture minimizes the impact of failures in one tier on the overall system, promoting high availability and fault tolerance.

- Efficiency: By streamlining the architecture into distinct layers, resource allocation and performance optimization can be finely tuned for each tier.
