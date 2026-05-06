output "frontend_public_ip" {
  value = aws_instance.frontend.public_ip
}

output "backend_alb_dns" {
  value = aws_lb.backend_alb.dns_name
}

output "rds_endpoint" {
  value = aws_db_instance.main.address
}