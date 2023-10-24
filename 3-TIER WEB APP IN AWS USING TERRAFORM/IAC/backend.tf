terraform {
  backend "s3" {
    bucket = "tf3tapp1234567890987654433"
    key    = "backend/3tierapp.tfstate"
    region = "us-east-1"
    dynamodb_table = "remote-backend"
  }
}
