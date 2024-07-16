
# **AWS – DevOps Task**

## **Problem Statement:**
We have a NodeJS Project that needs to be deployed on AWS ECS. Upon deployment, the application should be accessible from the Internet. Please do attach a ELB if required for the application. The instructions for building and executing the project are available in the README.md file of the repository. 

## **Considerations:**
**Dockerfile:**

  * You must add a Dockerfile to the project that allows you to build a Docker image. This image should run the NodeJS command to set up the application endpoint.
  
  * The Dockerfile should be efficient and follow best practices for containerization and you should follow the practice of keeping the minimum size of docker image.

**Terraform:**

  * Use Terraform to create an AWS ECS Service along with all necessary resources such as ECS Cluster, Task Definition, Service, IAM roles, Security Groups, Load Balancer (if needed), etc.
  * Ensure the Terraform code is modular and reusable so that it can be easily adapted for other services in the future.
  * The Terraform code should be well-documented to explain the purpose of each resource and module.

**CI/CD (Optional):**

  * While CI/CD is not a mandatory requirement, including a simple CI/CD  pipeline to automate the build, and deployment process would be a valuable addition if  time permits, preferably Jenkinsfile pipeline.

**Optimization (Optional):**

  * Implement any additional optimizations to ensure the AWS ECS Service is always running smoothly. This could include auto-scaling policies, health checks, and robust monitoring/alerting mechanisms.
  * Consider cost optimization strategies to ensure the infrastructure is cost-effective without compromising performance and reliability.


## **Evaluation:**
To evaluate the task, the following deliverable are required:

**Task Code Repository:**

  * Upload the Terraform code to a GitHub repository or any other Git hosting provider.
  * Share access to the repository for review.
  * Ensure the repository includes clear instructions on how to use the code preferably in a README.md file.

**Documentation or Screen Recording:**

  * Provide a detailed document (with screen shots) or a screen recording that explains the entire process.
  * The documentation/screen recording should cover the following aspects:
  * AWS Console walk through, showing the resources created.
  * Step-by-step explanation of the Terraform code and modules.
  * terraform plan and terraform apply outputs, demonstrating the execution and creation of resources.
  * Any additional steps taken, optimizations implemented, and rationale behind design choices.
    
### **Project Repository:** [Link to Repository Task For Adarsh Hiwrale](https://github.com/spikebottech/Adarsh_Hiwrale.git)

