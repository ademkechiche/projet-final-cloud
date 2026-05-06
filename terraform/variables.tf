variable "region" {
  default = "eu-north-1"
}

variable "project_name" {
  default = "projet-cloud"
}

variable "repo_url" {
  default = "https://github.com/ademkechiche/projet-final-cloud.git"
}

variable "repo_branch" {
  default = "main"
}

variable "app_port" {
  default = 3000
}

variable "db_name" {
  default = "cloudapp"
}

variable "db_user" {
  default = "admin"
}

variable "db_password" {
  default   = "ChangeThisPassword123!"
  sensitive = true
}