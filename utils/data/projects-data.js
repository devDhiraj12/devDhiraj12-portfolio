import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Microservices deploy on EKS Clusters",
    description:"This involves building, packaging, and deploying microservices to a containerized environment running on Amazon's Elastic Kubernetes Service (EKS). Here's a breakdown of the tools and their descriptions. A popular IaC tool that allows you to define your EKS cluster infrastructure (nodes, security groups, etc.) in code. This ensures consistent and repeatable infrastructure provisioning. The container orchestration platform managing the lifecycle of your microservices running in containers. EKS is a managed Kubernetes service provided by AWS.",
    tools: [
      "Terrafom",
      "Docker Img",
      "Kubernetes",
      "AWS EKS",
      "AWS S3",
      "Amazon ECR",
      "AWS CodeBuild",
      "Grafana ",
      "PM2",
      "Nginx",
    ],
    role: "DevOps Engineer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "Aws CI-CD pipeline for Docker Images",
    description:"Upon code change detection, CodePipeline triggers a build in CodeBuild. CodeBuild uses a pre-defined build spec (a YAML file) that instructs it on how to build your Docker image. After successful build, CodeBuild pushes the newly built Docker image to your private ECR repository.  This pipeline automates the process of building and deploying your Docker images, reducing manual work and improving consistency.",
      tools: [
      "ALB",
      "Docker Img",
      "AWS",
      "AWS Codecommit",
      "AWS Codebuild",
      "AWS Codedeploy",
      "AWS Code pipeline",
      "Elastic Container Registry",
      "AWS S3",
      "Nginx",
    ],
    role: "DevOps Engineer",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "Terraform-Ansible-Deployment",
    description:"Terraform and Ansible are two popular tools used together in DevOps workflows to automate infrastructure provisioning and configuration management. Here's a breakdown of each tool and how they work together for deployments.  Terraform provisions the infrastructure based on your defined configuration, creating the necessary resources in the cloud or on-premises environment. Ansible playbooks are used to configure the provisioned servers with the required software, packages, and settings.",
    tools: [
      "Terraform",
      "ansible",
      "Aws",
      "Ubuntu",
      "Docker",
      "EKS",
      "Kubernetes",
     
    ],
    code: "",
    role: "DevOps Engineer",
    demo: "",
    image: realEstate,
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },

